<!-- TODO: https://developer.mozilla.org/en-US/docs/Web/API/FileReader -->

<template>
    <div class="photoArea">
        <label v-if="displayPhoto" class="photoButton">
            <input type="file"
            accept="image/*" @change="onFileSelected" >
            <img id="photoImage" class="logo" src="../../../src/assets/Group.svg" alt="">
            Choose photo
        </label>

        <label v-else-if="displayFile" class="photoButton">
            <input type="file"
            accept="image/*, application/pdf ">
            <img id="photoImage" class="logo" src="../../../src/assets/white.svg" alt="">
            Choose file
        </label>
    </div>
</template>

<script src="./FileInput.ts" lang="ts" >

</script>

<style lang="scss" scoped>
@import "/src/components/fileInput/FileInput.scss";
</style>
