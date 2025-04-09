<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { sendPasswordResetEmail } from '@/services/AuthService';

const router = useRouter();

const email = ref('');
const is_loading = ref(false);
const message = ref('');

const handleForgotPassword = async () => {
    try {
        is_loading.value = true;
        await sendPasswordResetEmail(email.value);
        message.value = 'If an account with that email exists, a password reset link has been sent.';
        setTimeout(() => {
            is_loading.value = false;
        }, 30000); // Wait for 30 seconds
    } catch (error) {
        console.warn(error);
        message.value = 'An error occurred. Please try again later.';
        is_loading.value = false;
    }
};
</script>

<template>
    <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div class="p-2 rounded-4xl">
                <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                    <div class="flex flex-col justify-center items-center">
                        <img src="/logo.png" alt="logo" class="h-14 w-auto"/>
                        <p class="text-muted-color font-medium my-6">Forgot Password</p>
                        <p class="text-center mb-6">Enter your email address and we'll send you a link to reset your password.</p>
                    </div>
                    <div>
                        <FloatLabel variant="in" class="mb-8">
                            <InputText id="email" type="text" class="w-full" v-model="email" />
                            <label for="email">Email</label>
                        </FloatLabel>
                        <Button label="Send Reset Link" class="w-full" @click="handleForgotPassword" :disabled="is_loading"></Button>
                        <p class="text-center mt-4 text-muted-color">{{ message }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>