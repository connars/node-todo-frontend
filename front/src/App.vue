

<script setup>
import { useFetch } from './fetch.js';
import { RouterLink, RouterView } from "vue-router";
import Form from "./components/Form.vue";

// debugger


const { data, error } = useFetch('http://localhost:3031', { mode:'cors' } );

const test = 'test-01';
</script>

<template>
  <header>
    {{test}}
    {{data}}
    <div class="wrapper">
      <Form />

      <nav>
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
      </nav>
    </div>
  </header>

  <!-- <RouterView /> -->
</template>

<style scoped>

</style>
