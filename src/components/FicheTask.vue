<script setup>
   import {
    ref
  } from 'vue';
  import AuthService from '../services/auth-service';
  import TodosService from '../services/todo-service';
  const authService = new AuthService();
  const todosService = new TodosService();

  const title = ref(todosService.getTodo(id));
  const content = ref("");
  const done = ref(false);
  const user = ref(authService.getUserId());
  const doneAt = ref();

  const updateTodo = async () => {
    const todo = {
      title: title.value,
      content: content.value,
      done: done.value,
      user: user.value,
      doneAt: doneAt.value
    };

    const newTodo = await todosService.deleteTodo(todo);

    console.log(newTodo);
  }
</script>

<template>
    <div class="container-fluid">
    <form class="container w-100">
      <div class="form-control">
        <label for="title">{{todo.title}}</label>
        <input type="text" id="title" v-model="title" placeholder="Nouveau Titre" />
      </div>
      <div class="form-control">
        <label for="content">{{todo.content}}</label>
        <input class="w-100" type="text" id="content" v-model="content" placeholder="Description" />
      </div>

      <div>
        <input type="checkbox" id="done" v-model="done" name="done" value="true" unchecked-value="false" />
        Tâche terminée
        <div>État: <strong>{{ done }}</strong></div>
      </div>

      <div>
        <label for="doneAt">À terminer avant le : </label>
        <input type="date" id="doneAt" v-model="value" name="doneAt" />
        <p>Value: '{{ todo.timeLimit }}'</p>
      </div>

      <button type="button" class="btn btn-danger mt-4 w-100" @click="deleteTodo">Supprimer</button>
    </form>
  </div>
</template>