<template>
    <h4 class="text">Or add something yourself</h4>

  <input autocomplete="off" placeholder="Or filter your options" v-model="searchTerm" type="text" class="textField" name="fname">

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
