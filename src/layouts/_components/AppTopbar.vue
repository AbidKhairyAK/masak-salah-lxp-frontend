<script setup>
import { useLayout } from '@/layouts/_composables/layout';
import { MenuIcon, Sun, Moon, PaletteIcon, UserIcon } from 'lucide-vue-next';
import { computed } from 'vue';
import AppConfigurator from './AppConfigurator.vue';

const { toggleMenu, toggleDarkMode, isDarkTheme } = useLayout();
const darkModeIcon = computed(() => isDarkTheme.value ? Moon : Sun);
</script>

<template>
    <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" @click="toggleMenu">
                <MenuIcon class="w-8 h-8" />
            </button>
            <router-link to="/" class="layout-topbar-logo">
                <img src="/logo.png" alt="logo" class="h-9 w-auto" />
            </router-link>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" @click="toggleDarkMode">
                    <component :is="darkModeIcon" class="w-6 h-6" />
                </button>
                <div class="relative">
                    <button
                        v-styleclass="{ selector: '@next', enterFromClass: 'hidden', enterActiveClass: 'animate-scalein', leaveToClass: 'hidden', leaveActiveClass: 'animate-fadeout', hideOnOutsideClick: true }"
                        type="button"
                        class="layout-topbar-action layout-topbar-action-highlight"
                    >
                        <PaletteIcon class="w-6 h-6"/>
                    </button>
                    <AppConfigurator />
                </div>
            </div>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <button type="button" class="layout-topbar-action">
                        <UserIcon class="w-6 h-6"/>
                        <span>Profile</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
