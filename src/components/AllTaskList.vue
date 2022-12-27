<script setup>
import { ref, onMounted, onUpdated } from "vue";
import TodosService from "../services/todo-service";
import Modal from './Modal.vue';
import NewTask from "./NewTask.vue";

const todosService = new TodosService();

const todo = ref(null);
const todos = ref([]); //ref([ {items: [{ id: 1}]}, {items: [{ id: 2}]} ])
const isCreateModalOpen = ref(false);

const getTodos = async () => (todos.value = await todosService.getTodos());

const onTodoClick = (t) => {
    todo.value = t;
};

const onModalClose = () => {
    todo.value = null;
};

const onToggleCreateModal = () => {
    isCreateModalOpen.value = !isCreateModalOpen.value;
}

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
<button class="btn btn-warning" @click="onToggleCreateModal">Créer</button>
<Modal :isOpen="isCreateModalOpen" :toggleModal="onToggleCreateModal">
    <NewTask />
</Modal>
</template>