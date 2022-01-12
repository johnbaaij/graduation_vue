<template>
    <div class="header"><Header/></div>
    <transition appear="true" name="fade"> <div :key="this.$store.state.count" class="onboardingText"><OnboardingText/></div></transition>
    <div class="quickResponseArea"><QuickResponseArea/><TextInput v-if="showTextArea" > </TextInput> </div>
    <div class="fileInput"><FileInput/></div>
    <div class="progress"><ProgressBar/></div>
    <div class="btn-area"><ButtonArea/></div>

</template>

<script src="./App.ts" lang="ts"></script>

<style lang="scss">@import "/src/App.scss";
</style>
