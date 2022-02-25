<template>
    <input @input="updateMessage" v-model="message" :value="{item: test.item}"
     v-bind="{ id: uid}" type="radio" name="radio" class="invisible-radio">
    <label class="selectableArea" v-bind="{ for: uid}">{{title.item}}</label>
</template>

<script src="./QuickResponseItem.ts" lang="ts" > </script>

<style lang="scss" scoped>
@import "/src/components/quickResponseRadio/quickResponseItem/QuickResponseItem.scss";
</style>
