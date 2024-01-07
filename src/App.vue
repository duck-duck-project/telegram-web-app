<template>
    <GlobalNavbar />
    <main class="container">
        <RouterView />
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import { provide } from 'vue';
import GlobalNavbar from './components/GlobalNavbar.vue'

// const userId = window.Telegram.WebApp
const userId = 896678539

provide('userId', userId)
</script>
