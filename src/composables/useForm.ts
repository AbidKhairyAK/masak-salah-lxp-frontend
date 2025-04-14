import axios, { AxiosError } from "axios";
import { reactive, ref } from "vue";
import { useToast } from "primevue/usetoast";


function useForm <T extends Object> ( initial_values:T )
{
	const form 			= reactive <T> (initial_values)
	
	const errorMessage	= ref <string> () 
	const errors 		= ref <T | Record<string, string>> ()
	
	const isLoading 	= ref(false)
	const isError 		= ref(false)
	
	const toast = useToast();
	
	interface ValidationError {
		message: string,
		errors: Record<string, string[]>
	}

	async function submitForm ( callback:Function ) {
		try {
			isLoading.value = true
			resetError()
			await callback()
			toast.add({ severity: 'success', summary: 'Success', detail: "Form submitted successfully!", life: 3000 });
		}
		catch ( err: any | Error | AxiosError<ValidationError> ) {
			isError.value = true
			if ( axios.isAxiosError(err) ) {
				processError(err?.response?.data)
			} else {
				errorMessage.value 	= err?.message 
			}
			toast.add({ severity: 'error', summary: 'Error', detail: errorMessage.value, life: 3000 });
		}
		finally {
			isLoading.value = false
		}
	}

	function processError ( err:ValidationError ) {
		errorMessage.value = err.message
		
		const errorsObject : Record<string, string> = {}
		for (const errKey in err.errors) {
			errorsObject[errKey] = err.errors[errKey][0]
		}

		errors.value = errorsObject
	}

	function resetError () {
		isError.value 		= false
		errors.value 		= {}
		errorMessage.value	= ''
	}

	return {
		form,
		errorMessage,
		errors,
		submitForm,
		isLoading,
		isError
	}
}

export default useForm