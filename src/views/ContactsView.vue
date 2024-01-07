<template>
  <ContactListContainer :user-id="userId" :isContactDeleted="isContactDeleted" :isContactUpdated="isContactUpdated" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import ContactListContainer from '../components/ContactListContainer.vue';
import { inject } from 'vue';

const route = useRoute()
const isContactDeleted = route.query.isDeleted === 'true'
const isContactUpdated = route.query.isUpdated === 'true'
const userId = inject('userId')
</script>