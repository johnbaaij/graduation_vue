<template>
    <div class="header"><Header/></div>
          <transition name="slide-fade">
        <div :key="this.$store.state.count" class="onboardingText"><OnboardingText /></div>
          </transition>
        <form @submit.prevent="checkForm" id ="onboardingForm" class="quickResponseArea">
            <transition name="slide-fade"><QuickResponseRadio v-if="showQuickResponseSingle"></QuickResponseRadio></transition>
            <transition name="slide-fade"><TextInput :key="this.$store.state.count" class ="textInput" v-if="showTextArea" > </TextInput></transition>
            <ItemSelector v-if="showItemSelector" > </ItemSelector>
            <TextInputMulti v-if="showTextInputMulti"> </TextInputMulti>
            <transition name="slide-fade"><DateInput v-if="showDateInput"> </DateInput></transition>
        </form>
        <div class="fileInput"><FileInput v-if="showFileInput" /></div>
        <div class="progress"><ProgressBar /></div>
        <div class="btn-area"><ButtonArea/></div>
</template>

<script src="./App.ts" lang="ts"></script>

<style lang="scss">@import "/src/App.scss";
</style>
