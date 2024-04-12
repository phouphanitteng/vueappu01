<template>
  <div>
    <form class="myForm" @submit="addTodo">
      <input name="taskTodo" class="formInput" v-model="taskTodo" placeholder="Add a new todo..." required />
      <button class="formBtn" type="submit">Add</button>
    </form>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        taskTodo: '',
      };
    },
    methods: {
      addTodo: function (e) {
        e.preventDefault();
        this.$store.commit('addTodo', this.taskTodo);
        this.taskTodo = '';
      },
    },
  };
  </script>
  
  <style scoped>
  .myForm {
    margin-bottom: 30px;
  }
  
  .formInput {
    width: 20em;
    padding: 10px;
    margin-right: 8px;
    border: 2px solid #1393d4;
    border-radius: 1em;
    font-size: 15px;
  }
  
  .formBtn {
    width: 5em;
    padding: 10px;
    margin-right: 8px;
    border: 2px solid #1393d4;
    border-radius: 1em;
    color: white;
    background-color: rgb(44, 122, 223);
    cursor: pointer;
    font-size: 15px;
  }
  </style>