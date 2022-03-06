<template>
<div :class="{ 'LongButtonArea': longBtnIsActive, 'ButtonArea': !longBtnIsActive }">
    <button :class="{ 'longButton': longBtnIsActive, 'btn': !longBtnIsActive }"  type='button' @click="back" id="back">
        {{$t("button.back")}}
    </button>
    <button :class="{ 'longButton': longBtnIsActive, 'btn': !longBtnIsActive }"
   @click="clicked" form="onboardingForm" type='submit' id="next">
        {{$t("button.next")}}
</button>

</div>
</template>

<script src="./ButtonArea.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/ButtonArea/ButtonArea.scss"
</style>
