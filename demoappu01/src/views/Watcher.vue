<template>
    <div id="watched">
      <p>
        Ask a yes/no question:
        <input v-model="question" />
      </p>
      <p>{{ answer }}</p>
    </div>
  </template>
  <script>
  import axios from "axios";
  import _ from "lodash"; // Import lodash library
  
  export default {
    data() {
      return {
        question: "",
        answer: "I cannot give you an answer until you ask a question!",
      };
    },
    watch: {
      // whenever question changes, this function will run
      question: function (newQuestion, oldQuestion) {
        this.answer = "Waiting for you to stop typing...";
        this.debouncedGetAnswer(); // Debounced function call
      },
    },
    created: function () {
      // Create a debounced version of getAnswer and assign it to debouncedGetAnswer
      this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
    methods: {
      getAnswer: function () {
        if (this.question.indexOf("?") === -1) {
          this.answer = "Questions usually contain a question mark. ;-)";
          return;
        }
        this.answer = "Thinking...";
        axios
          .get("https://yesno.wtf/api")
          .then((response) => {
            this.answer = _.capitalize(response.data.answer);
          })
          .catch((error) => {
            this.answer = "Error! Could not reach the API. " + error;
          });
      },
    },
  };
  </script>
  <style lang=""></style>
  