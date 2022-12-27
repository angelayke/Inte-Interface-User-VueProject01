<script setup>
import { ref, onMounted, onUpdated } from "vue";
import TodosService from "../services/todo-service";
import Modal from './Modal.vue';

const todosService = new TodosService();

const todo = ref(null);
const todos = ref([ {items: [{ id: 1}]}, {items: [{ id: 2}]} ]);
const getTodos = async () => (todos.value = await todosService.getTodos());

const onTodoClick = () => {
    console.log("clicked");
}

onMounted(getTodos);
</script>

<template>

<div @click="onTodoClick" v-for="todo of todos" class="todos">
    <!--<p v-for="item in todo.items">
        {{item.id}}
    </p>-->
</div>
<Modal></Modal>
</template>