<script setup>
import { Home, LogOut, User } from 'lucide-vue-next';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth-store';
import { logout } from '@/services/AuthService';

const router = useRouter();
const authStore = useAuthStore();

const menuItems = ref([
    { 
        label: 'Profile', 
        icon: User, 
        command: () => router.push('/profile/dummy@mail.com')
    },
    { 
        label: 'Dashboard', 
        icon: Home, 
        command: () => router.push('/admin')
    },
    { 
        label: 'Logout', 
        icon: LogOut, 
        command: () => handleLogout()
    }
]);

const handleLogout = async () => {
      try {
        await logout()
		router.push('auth/login')
      } catch (error) {
        console.error("Logout error:", error);
      }
    }
</script>

<template>
	<div
        class="config-panel hidden absolute top-[3.25rem] right-0 w-64 p-4 bg-surface-0 dark:bg-surface-900 border border-surface rounded-border origin-top shadow-[0px_3px_5px_rgba(0,0,0,0.02),0px_0px_2px_rgba(0,0,0,0.05),0px_1px_4px_rgba(0,0,0,0.08)]"
    >
        <div class="flex flex-col gap-4">
			<ul class="layout-menu">
				<li v-for="(item, index) in menuItems" :key="index">
					<button 
						class="flex items-center w-full p-2 text-left hover:bg-surface-100 dark:hover:bg-surface-800 rounded-lg transition-colors"
						@click="item.command"
					>
						<component :is="item.icon" class="w-5 h-5 mr-2" />
						<span>{{ item.label }}</span>
					</button>
				</li>
			</ul>
        </div>
    </div>
</template>