<script setup>
import useForm from '@/composables/useForm';
import { register } from '@/services/AuthService';
import { useRouter } from 'vue-router';

const router = useRouter();

const { form, errors, submitForm, isLoading } = useForm({
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
});

const handleRegister = async () => {
    await register(form.name, form.email, form.password, form.passwordConfirmation);
    router.push('/auth/login');
};
</script>

<template>
    <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
        <div class="flex flex-col items-center justify-center">
            <div class="p-2 rounded-4xl">
                <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                    <div class="flex flex-col justify-center items-center">
                        <img src="/logo.png" alt="logo" class="h-14 w-auto" />
                        <p class="text-muted-color font-medium my-6">Create an account</p>
                    </div>
                    <form @submit.prevent="submitForm(handleRegister)">
                        <IftaLabel>
                            <InputText
                                v-model="form.name"
                                :invalid="!!errors?.name"
                                class="w-[30rem]"
                            />
                            <IErrorMessage :value="errors?.name" />
                            <label>Name</label>
                        </IftaLabel>
                        <IftaLabel class="mt-8">
                            <InputText
                                v-model="form.email"
                                :invalid="!!errors?.email"
                                class="w-[30rem]"
                            />
                            <IErrorMessage :value="errors?.email" />
                            <label>Email</label>
                        </IftaLabel>
                        <IftaLabel class="mt-8">
                            <Password
                                v-model="form.password"
                                :invalid="!!errors?.password"
                                :toggleMask="true"
                                class="mb-4 w-[30rem]"
                                fluid
                                :feedback="false"
                            />
                            <IErrorMessage :value="errors?.password" />
                            <label>Password</label>
                        </IftaLabel>
                        <IftaLabel class="mt-8">
                            <Password
                                v-model="form.passwordConfirmation"
                                :invalid="!!errors?.passwordConfirmation"
                                :toggleMask="true"
                                class="mb-4 w-[30rem]"
                                fluid
                                :feedback="false"
                            />
                            <IErrorMessage :value="errors?.passwordConfirmation" />
                            <label>Confirm Password</label>
                        </IftaLabel>
                        <IButton
                            type="submit"
                            label="Register"
                            size="large"
                            class="w-full"
                            :loading="isLoading"
                        />
                        <p class="text-center mt-4">
                            Already have an account? 
                            <span class="text-primary cursor-pointer" @click="router.push('/auth/login')">Login</span>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>