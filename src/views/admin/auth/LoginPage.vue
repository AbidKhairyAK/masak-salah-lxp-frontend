<script setup>
import { login } from '@/services/AuthService';
import { ref } from 'vue';



const email = ref('');
const password = ref('');
const is_remember = ref(false);
const is_loading = ref(false);

const handleLogin = async () => {
    try{
        loading.value = true
        await login(email.value, password.value)
        router.push('')
    }catch (error){
        console.warn(error)
    }finally {
        loading.value = false
    }
	
}

</script>
<template>
	 <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div class="p-2 rounded-4xl">
                <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                    <div class="flex flex-col justify-center items-center">
						<img src="/logo.png" alt="logo" class="h-14 w-auto"/>                        
                        <p class="text-muted-color font-medium my-6">Sign in to continue</p>           
					</div>
                    <div>
						<FloatLabel variant="in" class="mb-8">
							<InputText id="email" type="text" class="w-full md:w-[30rem]" v-model="email" />
							<label for="email">Email</label>
						</FloatLabel>
						<FloatLabel variant="in" class="mb-8">
							<Password id="password" v-model="password" :toggleMask="true" class="mb-4" fluid :feedback="false"></Password>
							<label for="password">Password</label>
						</FloatLabel>

                        <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                            <div class="flex items-center">
                                <Checkbox v-model="is_remember" id="rememberme" binary class="mr-2"></Checkbox>
                                <label for="rememberme">Remember me</label>
                            </div>
                            <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Forgot password?</span>
                        </div>
                        <Button label="Sign In" class="w-full" @click="handleLogin"></Button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>