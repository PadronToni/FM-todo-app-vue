<template>
  <form action="" method="post" ref="formRef" @submit="onSubmit">
    <label class="todo flex items-center gap-3">
      <!-- check icon -->
      <div
        class="w-5 h-5 rounded-full border border-neutral-light-200 dark:border-neutral-dark-400"
      ></div>
      <!-- text input -->
      <input type="text" name="todoAdder" :placeholder="placeHolder" />
    </label>
  </form>
</template>

<script>
const DEF_PLACEHOLDER = "Create a new to do...";
</script>
<script setup>
import { ref } from "vue";

const props = defineProps({
  placeHolder: {
    type: String,
    default: DEF_PLACEHOLDER,
  },
});

const emit = defineEmits(["newTodo"]);

const formRef = ref(null);

function onSubmit(evt) {
  // prevent normal submit flow ;)
  evt.preventDefault();

  // gets data form form and emit an event
  const data = new FormData(formRef.value);
  for (const [name, value] of data) {
    value && emit("newTodo", value);
  }

  // resets the form
  formRef.value.reset();
}
</script>
