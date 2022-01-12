<template>
    <input v-bind="{ id: uid}" type="checkbox" name="checkbox" class="invisible-checkbox">
    <label class="selectableArea" v-bind="{ for: uid}">{{title}}</label>
</template>

<script src="./QuickResponseMultiple.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/quickResponseArea/quickResponseMultiple/QuickResponseMultiple.scss";
</style>
