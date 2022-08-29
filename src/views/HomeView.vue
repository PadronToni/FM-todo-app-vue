<script setup>
import { reactive } from "vue";
import TodoAdder from "../components/TodoAdder.vue";
const todos = reactive([]);

function todoHandler(todo) {
  todos.push(todo);
}
</script>

<template>
  <main class="grid gap3 p-4 mx-auto container">
    <TodoAdder class="shadow-2xl" @new-todo="todoHandler"></TodoAdder>

    <div class="grid divide-y my-3">
      <div v-for="todo in todos" class="todo shadow-md">{{todo}}</div>
    </div>
  </main>
</template>

<style></style>
