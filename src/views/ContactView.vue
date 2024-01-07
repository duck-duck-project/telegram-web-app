<template>
  <ContactContainer :contactId="contactId" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import ContactContainer from '../components/ContactContainer.vue'

const route = useRoute()
const contactId = Number.parseInt(route.params.contactId)
</script>