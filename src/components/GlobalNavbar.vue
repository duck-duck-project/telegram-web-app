<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary px-2">
    <div class="container">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink :to="{ name: 'contacts-list' }" class="nav-link" aria-current="page">Контакты</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>