<script setup>
   import {
    ref,defineProps
  } from 'vue';
  import TodosService from '../services/todo-service'
  const todosService = new TodosService();

  const props = defineProps({ todo: Object });

  const title = ref(props.todo.title);
  const content = ref(props.todo.content);
  const done = ref(props.todo.done);
  const user = ref(props.todo.user);
  const doneAt = ref(props.todo.doneAt);

  const updateTodo = async () => {
    const todo = {
      title: title.value,
      content: content.value,
      done: done.value,
      user: user.value,
      doneAt: doneAt.value
    };

    const newTodo = await todosService.updateTodo(props.todo._id, todo);

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

      <button type="button" class="btn btn-primary mt-4 w-100" @click="updateTodo">Modifier</button>
    </form>
  </div>
</template>