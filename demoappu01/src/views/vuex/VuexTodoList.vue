<template>
  <div class="container">
    <h1>Todo list using Vuex for State Management</h1> <br>
    <TodoFormState />
    <TodoListState />
  </div>
</template>
<script>
import TodoFormState from '@/components/todolist/TodoFormState.vue';
import TodoListState from '@/components/todolist/TodoListState.vue';

export default {
  components: {
    TodoFormState,
    TodoListState,
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
