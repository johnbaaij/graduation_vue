<template>
    <div class="wrapper">
        <QuickResponseItem  v-for="item in items.data" :key="item" :title ="item "></QuickResponseItem>
    </div>
</template>

<script src="./QuickResponseRadio.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/quickResponseRadio/QuickResponseRadio.scss";
</style>
