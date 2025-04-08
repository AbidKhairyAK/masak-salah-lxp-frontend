<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { register } from '@/services/AuthService';

const router = useRouter();

const name = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');
const is_loading = ref(false);

const handleRegister = async () => {
    try {
        is_loading.value = true;
        await register(name.value, email.value, password.value, passwordConfirmation.value);
        router.push('/auth/login');
    } catch (error) {
        console.warn(error);
    } finally {
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
                        <p class="text-muted-color font-medium my-6">Create an account</p>
                    </div>
                    <div>
                        <FloatLabel variant="in" class="mb-8">
                            <InputText id="name" type="text" class="w-full md:w-[30rem]" v-model="name" />
                            <label for="name">Name</label>
                        </FloatLabel>
                        <FloatLabel variant="in" class="mb-8">
                            <InputText id="email" type="text" class="w-full md:w-[30rem]" v-model="email" />
                            <label for="email">Email</label>
                        </FloatLabel>
                        <FloatLabel variant="in" class="mb-8">
                            <Password id="password" v-model="password" :toggleMask="true" class="mb-4" fluid :feedback="false"></Password>
                            <label for="password">Password</label>
                        </FloatLabel>
                        <FloatLabel variant="in" class="mb-8">
                            <Password id="passwordConfirmation" v-model="passwordConfirmation" :toggleMask="true" class="mb-4" fluid :feedback="false"></Password>
                            <label for="passwordConfirmation">Confirm Password</label>
                        </FloatLabel>
                        <Button label="Register" class="w-full" @click="handleRegister"></Button>
                        <p class="text-center mt-4">Already have an account? <span class="text-primary cursor-pointer" @click="router.push('/auth/login')">Login</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 