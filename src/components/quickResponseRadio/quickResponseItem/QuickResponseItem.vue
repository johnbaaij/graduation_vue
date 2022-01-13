<template>
    <input v-bind="{ id: uid}" type="radio" name="radios" class="invisible-radio">
    <label class="selectableArea" v-bind="{ for: uid}">{{title}}</label>
</template>

<script src="./QuickResponseSingle.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/quickResponseArea/quickResponseSingle/QuickResponseSingle.scss";
</style>
