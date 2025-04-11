import axios, { AxiosError } from "axios";
import { reactive, ref } from "vue";


interface ValidationError {
	message: string,
	errors: Record<string, string[]>
}


function useForm <T extends Object> ( initial_values:T )
{
	const form 			= reactive <T> (initial_values)

	const errorMessage	= ref <string> () 
	const errors 		= ref <T> ()

	const isLoading 	= ref(false)
	const isError 		= ref(false)

	async function submitForm ( callback:Function ) {
		try {
			isLoading.value = true
			resetError()
			await callback()
		}
		catch ( err: any | Error | AxiosError<ValidationError> ) {
			isError.value = true
			if ( axios.isAxiosError(err) ) {
				processError(err?.response?.data)
			} else {
				errorMessage.value 	= err?.message 
			}
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
		submitForm
	}
}

export default useForm