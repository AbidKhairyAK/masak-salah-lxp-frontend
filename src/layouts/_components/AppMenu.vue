<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';
import { Circle, CircleAlert, CircleX, Globe, Home, Lock, LogIn, Pen, Sun, User, UserCheck } from 'lucide-vue-next';

const model = ref([
    {
        label: 'Home',
        items: [
            { label: 'Dashboard', icon: Home, to: '/admin' },        
        ]
    },
    {
        label: 'Pages',
        items: [
            {
                label: 'Landing',
                icon: Globe,
                to: ''
            },
            {
                label: 'Auth',
                icon: User,
                items: [
                    {
                        label: 'Login',
                        icon: LogIn,
                        to: ''
                    },
                    {
                        label: 'Error',
                        icon: CircleX,
                        to: ''
                    },
                    {
                        label: 'Access Denied',
                        icon: Lock,
                        to: ''
                    }
                ]
            },
            {
                label: 'Crud',
                icon: Pen,
                to: ''
            },
            {
                label: 'Not Found',
                icon: CircleAlert,
                to: ''
            },
            {
                label: 'Empty',
                icon: Circle,
                to: ''
            }
        ]
    },
    
]);
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
