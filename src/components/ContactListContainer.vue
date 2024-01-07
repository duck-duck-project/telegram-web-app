<template>
  <LoadingSpinner v-if="isFetching" />
  <ContactListRenderer v-else :contacts="contacts" :is-contact-deleted="isContactDeleted"
    :is-contact-updated="isContactUpdated" />
</template>

<script setup>
import { useFetch } from '@vueuse/core'
import ContactListRenderer from './ContactListRenderer.vue'
import LoadingSpinner from './LoadingSpinner.vue'

const props = defineProps({
  userId: {
    type: Number,
    required: true,
  },
  isContactDeleted: Boolean,
  isContactUpdated: Boolean,
})
const url = `${import.meta.env.VITE_API_BASE_URL}/users/${props.userId}/contacts/`

const { isFetching, data: contacts } = useFetch(url, { refetch: true }).json()
</script>