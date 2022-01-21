<template>
<select id='date-dropdown'>
<option v-for="item in items" :key="item">
    {{ item }}
</option>
</select>
  
</template>

<script src="./YearInput.ts" lang="ts"> </script>

<style lang="scss" scoped>
@import "/src/components/yearInput/YearInput.scss";
</style>
