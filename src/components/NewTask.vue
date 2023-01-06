<script setup>
  import { ref } from 'vue';
  import AuthService from '../services/auth-service';
  import TodosService  from '../services/todo-service';
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
  <!--
  <b-container fluid>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="3">
        <label :for="`type-${type}`">Type <code>{{ type }}</code>:</label>
      </b-col>
      <b-col sm="9">
        <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
      </b-col>
    </b-row>
  </b-container>
  -->

  <div class="container-fluid">
    <form class="container w-100">
      <div class="form-control">
        <label for="title">Titre</label>
        <input type="text" id="title" v-model="title" placeholder="Titre" />
      </div>
      <div class="form-control">
        <label for="content">Description</label>
        <input type="text" id="content" v-model="content" placeholder="Description" />
      </div>

      <div>
    <input
      type="checkbox"
      id="done"
      v-model="done"
      name="done"
      value="true"
      unchecked-value="false"
    />
      Tâche terminée
    <div>État: <strong>{{ done }}</strong></div>
  </div>

      <button type="button" class="btn btn-primary mt-4 w-100" @click="createTodo">Créer tâche</button>
    </form>
  </div>
</template>

