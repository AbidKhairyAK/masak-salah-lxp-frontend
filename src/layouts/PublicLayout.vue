<script setup>
import { RouterView } from 'vue-router';
import Navbar from './_components/Navbar.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <main class="flex-grow">
        <RouterView></RouterView>
      </main>
    </div>
  </template>
