<template>

    <div class="header"><Header/></div>

    
          <transition name="slide-fade">
        <div :key="this.$store.state.count" class="onboardingText"><OnboardingText /></div>
          </transition>

          <YearInput/>
       <form @submit.prevent="checkForm" id ="onboardingForm" class="quickResponseArea"><QuickResponseRadio/><TextInput class ="textInput" v-if="showTextArea" > </TextInput> </form>
        <div class="fileInput"><FileInput v-if="showFileInput" /></div>
        <div class="progress"><ProgressBar /></div>
        <div class="btn-area"><ButtonArea/></div>

</template>

<script src="./App.ts" lang="ts"></script>

<style lang="scss">@import "/src/App.scss";
</style>