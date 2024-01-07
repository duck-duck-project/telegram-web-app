<template>
  <ContactContainer :contactId="Number.parseInt(route.params.contactId)" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import ContactContainer from '../components/ContactContainer.vue'

const route = useRoute()
</script>