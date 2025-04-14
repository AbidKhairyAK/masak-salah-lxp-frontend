<script setup lang="ts">
import useForm from '@/composables/useForm';
import { login } from '@/services/AuthService';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const { form, errors, submitForm, isLoading } = useForm({
    email: '',
    password: '',
})

const handleLogin = async () => {
    await login(form.email, form.password)
    router.push('/')
}

</script>
<template>
    <div
        class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div class="p-2 rounded-4xl">
                <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                    <div class="flex flex-col justify-center items-center">
                        <img src="/logo.png" alt="logo" class="h-14 w-auto" />
                        <p class="text-muted-color font-medium my-6">Sign in to continue</p>
                    </div>
                    <form @submit.prevent="submitForm(handleLogin)">
                        <IftaLabel>
                            <InputText
                                v-model="form.email"
                                :invalid="!!errors?.email"
                                class="w-[30rem]"
                            />
                            <IErrorMessage :value="errors?.email" />
                            <label>Email</label>
                        </IftaLabel>
                        <IftaLabel class="mt-8">
                            <Password id="password" v-model="form.password" :invalid="!!errors?.password" :toggleMask="true" class="mb-4 w-[30rem]" fluid
                                :feedback="false"></Password>
                            <IErrorMessage :value="errors?.password" />
                            <label>Password</label>
                        </IftaLabel>

                        <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                            <div class="flex items-center">
                                <!-- <Checkbox v-model="is_remember" id="rememberme" binary class="mr-2"></Checkbox>
                                <label for="rememberme">Remember me</label> -->
                            </div>
                            <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary"
                                @click="router.push('/auth/forgot-password')">Forgot password?</span>
                        </div>
                        <IButton type="submit" label="Login" size="large" class="w-full"
                            :loading="isLoading" />
                        <p class="text-center mt-4">Don't have an account? <span class="text-primary cursor-pointer"
                                @click="router.push('/auth/register')">Register</span></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>