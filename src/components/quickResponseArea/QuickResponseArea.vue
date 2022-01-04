<template>
<div id="wrapper">
    <QuickResponseSingle v-for="talent in talents" :key="talent.message" :title ="talent.message"></QuickResponseSingle>
</div>
</template>

<script src="./QuickResponseArea.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/quickResponseArea/QuickResponseArea.scss";
</style>
