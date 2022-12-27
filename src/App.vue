<script setup>
import { onMounted } from 'vue';
import { RouterView, useRouter } from 'vue-router'
import { ref } from "vue";
import AuthService from './services/auth-service';
import LogoutButton from './components/LogoutButton.vue';

const authService = new AuthService();
const router = useRouter();

const tryAuth = async () =>{
  const user = await authService.authenticate();
  if (!user) {
    router.push({name: "login"});
  } else {
    router.push({ name: "home"})
  }
}

onMounted(tryAuth);
</script>

<template>
<!--
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>-->
<LogoutButton/>
<RouterView />
 
</template>

<style scoped>
</style>
