<template>
  <div id="app">
    <DocumentComponent></DocumentComponent>
  </div>
</template>

<script>
import DocumentComponent from "./components/document";


export default {
  name: "App",
  components: {
    DocumentComponent
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
body {
  background-color: whitesmoke;
}
</style>
