<template>
  <div>
    <div v-if="!userStore.getters.isLoggedIn" class="d-grid gap-2 col-6 mx-auto">
      <LoginForm></LoginForm>
    </div>
    <div v-else class="text-center">
      <h2>Welcome, {{ userStore.state.name }}</h2>
      <CounterOpt></CounterOpt>
      <button class="btn btn-secondary" @click="userStore.logout()">
        Logout
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import userStore from '@/stores/user'
import LoginForm from '@/components/LoginForm.vue'
import CounterOpt from '@/components/CounterOpt.vue'
export default defineComponent({
  name: 'App',
  components: {
    LoginForm,
    CounterOpt
  },
  setup() {
    return { userStore }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
