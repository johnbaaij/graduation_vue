<template>
  <input   placeholder="Type here..." v-model="searchTerm" type="text" class="textField" name="fname">

  <ul>
  <li
    v-for="country in searchCountries"
    :key="country">
  </li>
</ul>
</template>

<script src="./TextInput.ts" lang="ts"> </script>

<style lang="scss" scoped>
@import "/src/components/textInput/TextInput.scss";
</style>
