<script setup>
import { useAuthStore } from '@/stores/auth-store';
import { UserIcon } from 'lucide-vue-next';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import AppProfile from './AppProfile.vue';

const router = useRouter();
const authStore = useAuthStore()
const user = computed(() => authStore.currentUser)

const navigateTo = (routeName) => {
  console.warn('ahri')
  router.push({ name: routeName});
};
</script>

<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-20 py-4">
        <!-- Left side: Logo and Explore -->
        <div class="flex items-center">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center cursor-pointer" @click="navigateTo('/')">
            <img class="h-8 w-auto" src="/logo.png" alt="Udemy" />
          </div>

          <!-- Explore navigation item -->
          <div class="ml-6 h-full">
            <div class="flex space-x-4 h-full">
              <Button label="Explore" severity="primary" variant="text" class="custom-button" />
            </div>
          </div>
        </div>

        <!-- Right side: Menu items and user avatar -->
        <div class="flex items-center">
          <div class="flex space-x-1 h-full">
            <!-- Check if user is logged in -->
            <template v-if="user">
              <!-- My Learning -->
              <Button label="My Learning" severity="primary" variant="text" class="custom-button " />
              <!-- User Avatar -->
              <div class="relative">
                <Button label="Profile" severity="primary" variant="text" class="!px-4 h-full"
                  v-styleclass="{
                    selector: '@next',
                    enterFromClass: 'hidden',
                    enterActiveClass: 'animate-scalein',
                    leaveToClass: 'hidden',
                    leaveActiveClass: 'animate-fadeout',
                    hideOnOutsideClick: true
                  }">
                  <div
                    class="h-10 w-10 rounded-full bg-primary flex items-center justify-center border border-gray-300 cursor-pointer">
                    <span class="text-lg font-medium text-white">{{ user?.name?.charAt(0)?.toUpperCase() }}</span>
                  </div>
                </Button>
                <AppProfile class="mt-3" />
              </div>
            </template>
            <template v-else>
              <!-- Login and Sign Up buttons -->
              <Button label="Login" severity="primary" variant="outlined"  v-on:click="navigateTo('auth.login')"  />
              <Button label="Sign Up"  @click="navigateTo('auth.register')" />
            </template>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.custom-button:hover {
  color: var(--primary-color) !important;
}

.custom-button {
  color: var(--color-gray-900);
}
</style>