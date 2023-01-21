<script setup>
    import {
        ref,
        onMounted,
        onUpdated
    } from "vue";
    import TodosService from "../services/todo-service";
    import Modal from './Modal.vue';
    import NewTask from "./NewTask.vue";
    import UpdateTask from "./UpdateTask.vue";
    import FicheTask from "./FicheTask.vue";

    const todosService = new TodosService();

    const todo = ref(null);
    const todos = ref([]); //ref([ {items: [{ id: 1}]}, {items: [{ id: 2}]} ])
    const isCreateModalOpen = ref(false);
    const isUpdateModalOpen = ref(false);
    const isDeleteModalOpen = ref(false);

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

    const onToggleUpdateModal = () => {
        isUpdateModalOpen.value = !isUpdateModalOpen.value;
    }

    const onToggleDeleteModal = () => {
        isDeleteModalOpen.value = !isDeleteModalOpen.value;
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
<div class="flex-card">
    <div @click="onTodoClick(todo)" v-for="todo of todos" class="todos">

        <div>
            <div class="card text-bg-light mb-3 me-2" style="max-width: 18.5rem; height: 15rem; overflow: auto;">
                <div class="card-header">
                    <h5 class="card-title">{{ todo.title }}</h5>
                    <em>Créée le : {{ todo.createdAt }}</em>    
                </div>
                <div class="card-body">    
                    <p class="card-text">{{ todo.content }}</p>
                    <p><em>À terminer avant le : <br> {{ todo.timeLimit }}</em> </p>
                </div>
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
            <div>
                <button class="btn btn-secondary" @click="onToggleUpdateModal">Modifier cette tâche</button>
                    <Modal :isOpen="isUpdateModalOpen" :toggleModal="onToggleUpdateModal">
                        <UpdateTask />
                    </Modal>
           
                <button class="btn btn-danger" @click="onToggleDeleteModal">Supprimer cette tâche</button>
                    <Modal :isOpen="isDeleteModalOpen" :toggleModal="onToggleDeleteModal">
                        <!--<FicheTask />-->
                    </Modal>
            </div>
        </div>
    </Modal>
    
</template>