<script setup>
import { RouterView } from 'vue-router';
import Navbar from './_components/Navbar.vue';
import FooterWidget from './_components/FooterWidget.vue';
</script>

<template>
    <div class="min-h-screen flex flex-col">
      <Navbar />
      <main class="flex-grow">
        <RouterView></RouterView>
      </main>
      <FooterWidget />
    </div>
  </template>
