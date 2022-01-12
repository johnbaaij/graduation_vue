<template>

    <div v-if=" type === 'talent' " class="wrapper">
        <QuickResponseSingle v-for="talent in talents" :key="talent.message" :title ="talent.message"></QuickResponseSingle>
    </div>

    <div v-if=" type === 'gear' " class="wrapper">
        <QuickResponseMultiple v-for="gear in gears" :key="gear.message" :title ="gear.message"></QuickResponseMultiple>
    </div>

</template>

<script src="./QuickResponseArea.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/quickResponseArea/QuickResponseArea.scss";
</style>
