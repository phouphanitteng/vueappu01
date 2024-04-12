<template>
  <div id="app" class="container">
    <h1>To-Do Application using Vue.js</h1>
    <MyTodoForm />
    <MyTodoList />
  </div>
</template>
<script>
import MyTodoForm from "@/components/todolist/TodoFrom.vue";
import MyTodoList from "@/components/todolist/TodoList.vue";

export default {
  components: {
    MyTodoList,
    MyTodoForm,
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
