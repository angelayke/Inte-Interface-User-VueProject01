<script setup>
import { ref, onMounted, onUpdated } from "vue";
import TodosService from "../services/todo-service";

const todosService = new TodosService();

const todos = ref([]);
const getTodos = async () => (todos.value = await todosService.getTodos());

onMounted(getTodos);

</script>

<template>

<div class="todos">
    <b-list-group>
        <b-list-group-item>{{todos}}</b-list-group-item>
    </b-list-group>
</div>

</template>