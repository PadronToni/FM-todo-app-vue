<script setup lang="ts">
import { reactive, ref } from "vue";
import TodoAdder from "../components/TodoAdder.vue";

// Data
/** list of todos */
const todos = ref<any>([]);

// Functions
function todoHandler(todo: any) {
  todos.value.push(todo);
}
</script>

<template>
  <main class="grid gap3 p-4 mx-auto container">
    <TodoAdder class="shadow-2xl" @new-todo="todoHandler"></TodoAdder>

    <div class="grid divide-y my-3">
      <div v-for="todo in todos" class="todo shadow-md">
        <label class="checkbox">
          <input type="checkbox" />
          {{ todo }}
        </label>
      </div>
    </div>

    <div class="">
      <div class=""></div>
    </div>
  </main>
</template>

<style></style>
