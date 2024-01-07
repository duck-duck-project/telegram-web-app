<template>
  <div v-if="isContactUpdated" class="alert alert-success mt-4 alert-dismissible fade show" role="alert">
    Контакт успешно обновлен
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  <div v-if="isContactDeleted" class="alert alert-danger mt-4 alert-dismissible fade show" role="alert">
    Контакт успешно удален
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  </div>
  <ContactDetailPreviewRenderer v-for="contact in contacts" :contact="contact" :key="contact.id" class="mb-6" />
</template>

<script setup>
import ContactDetailPreviewRenderer from './ContactDetailPreviewRenderer.vue'

const props = defineProps({
  contacts: Array,
  isContactDeleted: Boolean,
  isContactUpdated: Boolean,
})
</script>