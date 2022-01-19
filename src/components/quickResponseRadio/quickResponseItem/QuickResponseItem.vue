<template>
    <input @input="updateMessage" v-model="message" :value="title" v-bind="{ id: uid}" type="radio" name="radio" class="invisible-radio">
    <label class="selectableArea" v-bind="{ for: uid}">{{title}}</label>
</template>

<script src="./QuickResponseItem.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/quickResponseRadio/quickResponseItem/QuickResponseItem.scss";
</style>
