<script setup>
    import {
        ref,
        onMounted,
        onUpdated
    } from "vue";
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
<!--boutons-->
<button class="btn btn-secondary" @click="onToggleCreateModal">Ajouter une tâche</button>
    <Modal :isOpen="isCreateModalOpen" :toggleModal="onToggleCreateModal">
        <NewTask />
    </Modal>

<!--contenu de la page-->
    <div @click="onTodoClick(todo)" v-for="todo of todos" class="todos">

        <div>
            <div class="card text-bg-light mb-3" style="max-width: 18rem;">
                <div class="card-header">{{ todo.user }}</div>
                <div class="card-body">
                    <h5 class="card-title">{{ todo.title }}</h5>
                    <p class="card-text">{{ todo.content }}</p>
                </div>
            </div>
        </div>

    </div>
    <Modal :toggleModal="onModalClose" :isOpen="!!todo">
        <div>
            <div class="card text-bg-light mb-3" style="max-width: 100%;">
                <div class="card-body">
                    <h5 class="card-title">{{ todo.title }}</h5>
                    <p class="card-text">{{ todo.content }}</p>
                </div>
            </div>
        </div>
    </Modal>
    
</template>