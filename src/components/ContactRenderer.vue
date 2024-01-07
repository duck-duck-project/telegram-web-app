<template>
  <form class="my-4">
    <div class="my-2">
      <label form="form-private-name" class="form-label">Приватное имя</label>
      <input id="form-private-name" class="form-control" v-model.trim="privateName" maxlength="64" minlength="1">
    </div>
    <div class="my-2">
      <label form="form-public-name" class="form-label">Публичное имя</label>
      <input id="form-public-name" class="form-control" v-model.trim="publicName" maxlength="64" minlength="1">
    </div>
    <div class="my-2 form-check">
      <input class="form-check-input" type="checkbox" v-model="isHidden" id="form-is-hidden">
      <label class="form-check-label" for="form-is-hidden">Скрыть контакт</label>
    </div>
    <div class="d-flex column-gap-2 my-2">
      <RouterLink :to="{name: 'contacts-list'}" class="btn btn-secondary" type="button">
        <i class="bi bi-arrow-left-square"></i>
        Назад
      </RouterLink>
      <button @click="$emit('updateContact', contact.of_user.id, publicName, privateName, isHidden)" type="button"
        class="btn btn-success">
        <i class="bi bi-check-square"></i>
        Сохранить
      </button>
      <button @click="$emit('deleteContact', contact.of_user.id)" type="button" class="btn btn-outline-danger ml-3">
        <i class="bi bi-x-square"></i>
        Удалить
      </button>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  contact: Object,
})

const emit = defineEmits(['showContactsList', 'updateContact', 'deleteContact'])

const privateName = ref(props.contact.private_name)
const publicName = ref(props.contact.public_name)
const isHidden = ref(props.contact.is_hidden)
</script>