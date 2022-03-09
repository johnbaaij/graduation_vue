<template>
<div class="wrapper">
  <input @input="triggerSport" required type="radio" class="invisible-radio" id="sport" name="radio" value="sport">
  <label class="selectableArea" for="sport"><p>My awesome sport gear</p><div class="itemRow">
    <gloveSVG class="images" />
    <skateSVG class="images" />
    <skiShoeSVG class="images" />
    <skiSVG class="images" />
  </div></label></div>
  <div class="wrapper">
    <input @input="triggerGeneral" type="radio" class="invisible-radio" id="general" name="radio" value="general">
  <label class="selectableArea" for="general" ><p>Something else</p>
  <div class="itemRow">
    <img class="images" src="../../../src/assets/suitcase.svg" alt="">
    <img class="images" src="../../../src/assets/binoculars.svg" alt="">
    <img class="images" src="../../../src/assets/Group.svg" alt="">
  </div></label></div>

</template>

<script src="./Itemselector.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/itemSelector/Itemselector.scss";
</style>
