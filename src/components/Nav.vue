<script setup>
import { ref,} from "vue";
import TodosService from "../services/todo-service";
import LogoutButton from './LogoutButton.vue';
import filters from '../services/filter-service';

const filters = new filters();

</script>

<template>
    <nav class="navbar bg-light">
        <form class="container-fluid justify-content-start">
        <button class="btn btn-outline-danger me-2" type="button" @click="depassees()">Tâches dépassées</button>
        <button class="btn btn-outline-primary me-2" type="button">Tâches sans limite</button>
        <button class="btn btn-outline-success me-2" type="button">Tâches encore dans les temps</button>
        <button class="btn btn-outline-secondary me-2" type="button">Tâches terminées dans les temps</button>
        <button class="btn btn-outline-secondary" type="button">Tâches terminées hors des temps</button>
        </form>
        <LogoutButton />
    </nav>
</template>

