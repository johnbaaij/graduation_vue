<template>
    <h4 class="text">Choose a suggestion</h4>
    <div class="wrapper">
        <QuickResponseItem  v-for="item in items" :key="item" :title ="item"></QuickResponseItem>
    </div>
</template>

<script src="./QuickResponseRadio.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/quickResponseRadio/QuickResponseRadio.scss";
</style>
