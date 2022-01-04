<template>
<div class="header"><Header/></div>
<transition appear="true" name="fade"> <div :key="this.$store.state.count" class="onboardingText"><OnboardingText/></div></transition>
<div v-if="this.$store.state.showQuickSelect" class="quickResponseArea"><QuickResponseArea/></div>
<div><ProgressBar/></div>
<div class="btn-area"><ButtonArea id="btn-area"/></div>

</template>

<script src="./App.ts" lang="ts">
</script>

<style lang="scss">
@import "/src/App.scss";

</style>
