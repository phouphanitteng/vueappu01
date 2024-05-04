<template>
    <div id="fetchApp">
      {{ datas }}
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        datas: null,
      };
    },
    mounted() {
      const vm = this; // Store reference to the Vue component
      fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then(function(response) {
          if (response.status !== 200) {
            console.log('Looks like there was a problem. Status Code: ' + response.status);
            return;
          }
  
          // Examine the text in the response
          response.json().then(function(data) {
            console.log(data);
            vm.datas = data; // Use the reference to set vm.datas
          });
        })
        .catch(function(err) {
          console.log('Fetch Error :-S', err);
        });
    },
  };
  </script>
  
  <style lang=""></style>
  