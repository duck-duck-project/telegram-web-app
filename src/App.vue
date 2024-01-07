<template>
    <RouterView />
</template>

<script setup>
import { RouterView, useRouter } from 'vue-router';

const router = useRouter()

const userId = window.Telegram.WebApp
router.push({ name: 'contacts-list', params: { userId: `${userId}` } })
</script>
