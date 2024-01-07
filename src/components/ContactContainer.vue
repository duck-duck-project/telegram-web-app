<template>
  <LoadingSpinner v-if="isFetching" />
  <ContactRenderer @show-contacts-list="onShowContactList" @update-contact="onUpdateContact"
    @delete-contact="onDeleteContact" v-else :contact="contact" />
</template>

<script setup>
import { useFetch } from '@vueuse/core';
import ContactRenderer from './ContactRenderer.vue';
import LoadingSpinner from './LoadingSpinner.vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  contactId: {
    type: Number,
    required: true,
  },
})

const url = `${import.meta.env.VITE_API_BASE_URL}/contacts/${props.contactId}/`
const router = useRouter()

const { isFetching, data: contact } = useFetch(url).json()


const onUpdateContact = (userId, publicName, privateName, isHidden) => {
  router.push({ name: 'contacts-list', params: { userId }, query: { isUpdated: true } })
  useFetch(url).put({
    private_name: privateName,
    public_name: publicName,
    is_hidden: isHidden,
  })
}

const onDeleteContact = userId => {
  useFetch(url).delete()
  router.push({ name: 'contacts-list', params: { userId }, query: { isDeleted: true } })
}

const onShowContactList = userId => {
  router.push({ name: 'contacts-list', params: { userId } })
}
</script>