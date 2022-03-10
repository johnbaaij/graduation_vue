<template>
<div id="textArea">
    <h1 class="heading">{{ $t(titleText) }} </h1>
    <p class="text">{{$t(subtitleText, { talent: talent, category: gear }) }}</p>
</div>
</template>

<script src="./OnboardingText.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/onboardingText/OnboardingText.scss";
</style>
