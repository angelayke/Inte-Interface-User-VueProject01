<script setup>
    import AuthService from '../services/auth-service';
    import { useRouter } from 'vue-router';

    const authService = new AuthService();
    const router = useRouter();

    const logout = async () => {
        authService.logout();
        router.push({name: "login"});
    };

    const routeNames = ["login", "register"];
</script>

<template>
    <!-- Avant <button v-if="$route.name !== 'login' || $route.name !== 'register'"> -->
    <button 
        v-if="routeNames.includes($route.name)" 
        class="btn btn-danger" 
        @click="logout" 
        type="button"
    >
        Sign out
    </button>
</template>