<script setup>
  import {
    ref
  } from 'vue';
  import AuthService from '../services/auth-service';
  import TodosService from '../services/todo-service';
  const authService = new AuthService();
  const todosService = new TodosService();

  const title = ref("");
  const content = ref("");
  const done = ref(false);
  const user = ref(authService.getUserId());
  const doneAt = ref(new Date());

  const createTodo = async () => {
    const todo = {
      title: title.value,
      content: content.value,
      done: done.value,
      user: user.value,
      doneAt: doneAt.value
    };

    const newTodo = await todosService.createTodo(todo);

    console.log(newTodo);
  }
</script>

<template>
  <div class="container-fluid">
    <form class="container w-100">
      <div class="form-control">
        <label for="title">Titre</label>
        <input type="text" id="title" v-model="title" placeholder="Titre" />
      </div>
      <div class="form-control">
        <label for="content">Description</label>
        <input class="w-100" type="text" id="content" v-model="content" placeholder="Description" />
      </div>

      <div>
        <input type="checkbox" id="done" v-model="done" name="done" value="true" unchecked-value="false" />
        Tâche terminée
        <div>État: <strong>{{ done }}</strong></div>
      </div>

      <div>
        <label for="doneAt">À terminer avant le :</label>
        <input type="date" id="doneAt" v-model="value" name="doneAt" />
        <p>Value: '{{ value }}'</p>
      </div>

      <button type="button" class="btn btn-primary mt-4 w-100" @click="createTodo">Créer tâche</button>
    </form>
  </div>
</template>