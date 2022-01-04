<template>
<div class="progress">
<progress id="file" v-bind="{ value: this.$store.state.count *10}" max="100"> 32% </progress>
</div>
</template>

<script src="./ProgressBar.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/progressBar/Progressbar.scss"
</style>
