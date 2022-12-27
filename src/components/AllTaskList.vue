<script setup>
import { ref, onMounted, onUpdated } from "vue";
import TodosService from "../services/todo-service";
import Modal from './Modal.vue';

const todosService = new TodosService();

const todo = ref(null);
const todos = ref([ {items: [{ id: 1}]}, {items: [{ id: 2}]} ]);
const getTodos = async () => (todos.value = await todosService.getTodos());

const onTodoClick = (t) => {
    todo.value = t;
};

const onModalClose = () => {
    todo.value = null;
};

onMounted(getTodos);
</script>

<template>

<div @click="onTodoClick(todo)" v-for="todo of todos" class="todos">
    <!--<p v-for="item in todo.items">
        {{item.id}}
    </p>-->
    {{ todo.title }}
</div>
<Modal :toggleModal="onModalClose" :isOpen="!!todo">
    {{ todo.title }}
</Modal>
</template>