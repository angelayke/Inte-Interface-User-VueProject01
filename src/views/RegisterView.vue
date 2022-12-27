<script setup>
import { ref } from 'vue';
import { useRouter } from "vue-router";
import AuthService from '../services/auth-service';
const authService = new AuthService();

const email = ref("");
const password = ref("");
const passwordRetype = ref ("");

const router = useRouter();

const register = async () => {
   if (password.value !== passwordRetype.value) return;

   const user = await authService.register(email.value, password.value);

   if (user.success) {
    router.push({name: "home"});
   }

   //console.log(email.value, password.value);
}
</script>

<template>
    <div class="container">
        <form class="w-100">
            <div class="form-group">
                <label for="email">Adresse email</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Entrez votre email" v-model="email" />
                <small id="emailHelp" class="form-text text-muted">Nous ne partagerons jamais votre email avec personne d'autre</small>
            </div>
            <div class="form-group">
                <label for="password">Ressaisir le mot de passe</label>
                <input type="password" class="form-control" id="password" placeholder="Mot de passe" v-model="password" />
            </div>
            <div class="form-group">
                <label for="password">Mot de passe</label>
                <input type="password" class="form-control" id="password-retype" placeholder="Mot de passe" v-model="passwordRetype" />
            </div>
            <button @click="register" type="button" class="btn btn-primary mt-4 w-100">Register</button>
        </form>
    </div>
</template>