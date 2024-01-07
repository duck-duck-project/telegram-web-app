<template>
  <ContactListContainer :user-id="Number.parseInt(route.params.userId)" :isContactDeleted="route.query.isDeleted"
    :isContactUpdated="route.query.isUpdated" />
</template>

<script setup>
import { useRoute } from 'vue-router';
import ContactListContainer from '../components/ContactListContainer.vue';

const route = useRoute()
</script>