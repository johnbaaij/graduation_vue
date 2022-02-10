<template>
<div id="ButtonArea">
    <button type='button' @click="back" class="btn" id="back">{{$t("button.back")}}</button>
    <button @click="clicked" form="onboardingForm" type='submit' class="btn" id="next">{{$t("button.next")}} </button>

</div>
</template>

<script src="./ButtonArea.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/ButtonArea/ButtonArea.scss"
</style>
