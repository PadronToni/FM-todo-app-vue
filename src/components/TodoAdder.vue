<template>
  <form action="submit" method="post">
    <label class="todo flex items-center gap-3">
			<!-- check icon -->
			<div class="w-5 h-5 rounded-full border border-neutral-light-200 dark:border-neutral-dark-400"></div>
			<!-- text input -->
      <input type="text" :placeholder="placeHolder" />
    </label>
  </form>
</template>

<script>
const DEF_PLACEHOLDER = "Create a new to do...";
</script>
<script setup>
const props = defineProps({
  placeHolder: {
    type: String,
    default: DEF_PLACEHOLDER,
  },
});
</script>
