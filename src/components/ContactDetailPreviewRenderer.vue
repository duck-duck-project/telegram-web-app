<template>
  <RouterLink :to="{ name: 'contact-detail', params: { contactId: contact.id, userId: contact.of_user.id } }" class="d-flex flex-row text-decoration-none mx-1 card my-4">
    <img class="rounded-start w-25" v-if="contact.to_user.profile_photo_url"
      :src="contact.to_user.profile_photo_url">
    <div class="card-body py-4">
      <p class="card-title">Контакт: {{ contact.private_name }}</p>
      <p v-if="contact.private_name != contact.public_name" class="card-subtitle">Публичное имя: {{ contact.public_name }}</p>
    </div>
  </RouterLink>
</template>
<script setup>
import { RouterLink } from 'vue-router';

const props = defineProps({
  contact: Object,
})
</script>