<template>
<div class="wrapper">
  <input @input="triggerSport" required type="radio" class="invisible-radio" id="sport" name="radio" value="sport">
  <label class="selectableArea" for="sport" v-bind="sport"><p>Your awesome sport gear</p><div></div></label></div>
  <div class="wrapper">
  <input @input="triggerGeneral" type="radio" class="invisible-radio" id="general" name="radio" value="general">
  <label class="selectableArea" for="general" v-bind="general"><p>Other items</p><div></div></label></div>

</template>

<script src="./Itemselector.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/itemSelector/Itemselector.scss";
</style>
