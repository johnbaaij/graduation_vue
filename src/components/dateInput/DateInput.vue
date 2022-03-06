<template>
<input class="input" type="date" id="start" name="trip-start" :value="now.value" :min="now.value" :max="now.value">

       {{now}}
</template>

<script src="./DateInput.ts" lang="ts"> </script>

<style lang="scss" scoped>
@import "/src/components/dateInput/DateInput.scss";
</style>
