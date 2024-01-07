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

const userId = window.Telegram.WebApp.initDataUnsafe.user.id

provide('userId', userId)
</script>
