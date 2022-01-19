<template>
    <div class="header"><Header/></div>

    <Presence>
        <Motion 
        :key="current"
            :initial="{ opacity: 0, x: 100 }"
            :animate="{
            opacity: 1,
            x: 0,
          transition: { delay: 0.3 }
        }"        :exit="{ opacity: 0, x: -100 }"
>

    <div :key="this.$store.state.count" class="onboardingText"><OnboardingText /></div>
        </Motion>
    </Presence>
        <Presence><Motion
            :key="current"
            :initial="{ opacity: 0, x: 100 }"
            :animate="{
            opacity: 1,
            x: 0,
          transition: { delay: 0.3 }
        }"
        :exit="{ opacity: 0, x: -100 }"><form @submit.prevent="checkForm" id ="onboardingForm" class="quickResponseArea"><QuickResponseRadio/><TextInput class ="textInput" v-if="showTextArea" > </TextInput> </form> </Motion> </Presence>
        <div class="fileInput"><FileInput v-if="showFileInput" /></div>
        <div class="progress"><ProgressBar /></div>
        <div class="btn-area"><ButtonArea/></div>
</template>

<script src="./App.ts" lang="ts"></script>

<style lang="scss">@import "/src/App.scss";
</style>