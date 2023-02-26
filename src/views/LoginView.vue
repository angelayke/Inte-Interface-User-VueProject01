<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import AuthService from '../services/auth-service';
import Login from '../services/singleton';
const authService = new AuthService();

const email = ref("");
const password = ref("");

const router = useRouter();

const login = async () => {
   const user = await authService.login(email.value, password.value);

   console.log(user);

   if (user.success) {
    router.push({name: "home"});
   }

   console.log(email.value, password.value);
}
</script>

<template>
    <div class="container-fluid">
        <form class="w-100">
            <div class="form-group">
                <label for="email">Adresse email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Entrez votre email" v-model="email" />
                <small id="emailHelp" class="form-text text-muted">Nous ne partagerons jamais votre email avec personne d'autre</small>
            </div>
            <div class="form-group">
                <label for="password">Mot de passe</label>
                <input type="password" class="form-control" id="password" placeholder="Mot de passe" v-model="password" />
            </div>
            <button @click="login" type="button" class="btn btn-primary mt-4 w-100">Login</button>
        </form>
    </div>
</template>