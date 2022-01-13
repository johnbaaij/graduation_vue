<template>
    <input v-bind="{ id: uid}" type="checkbox" name="checkbox" class="invisible-checkbox">
    <label class="selectableArea" v-bind="{ for: uid}">{{title}}</label>
</template>

<script src="./QuickResponseItem.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/quickResponseCheckbox/quickResponseItem/QuickResponseItem.scss";
</style>
