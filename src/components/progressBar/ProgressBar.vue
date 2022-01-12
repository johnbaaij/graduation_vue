<template>
<div class="progress">
<div id="bar">
    <div v-bind:style="{width: width + '%'}" id="prog"></div>
</div>
</div>
</template>

<script src="./ProgressBar.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/progressBar/Progressbar.scss"
</style>
