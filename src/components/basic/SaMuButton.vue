<template>
    <router-link v-if="to" :to="to">
        <button :class="['SaMuButton', size === '' ? 'default' : size, className]">{{text}}</button>
    </router-link>
    <button v-else :class="['SaMuButton', size === '' ? 'default' : size, className]">{{text}}</button>
</template>
<script>
import { Component, Vue } from "vue-property-decorator";

@Component({
    props: ['text', 'to', 'size', 'className']
})
export default class SaMuButton extends Vue {}
</script>
<style lang="scss">
.SaMuButton {
    border-radius: 2px;
    background-color: #663265;
    color: #fff;
    border: none;
    font-family: Poppins, sans-serif;
    font-weight: 700;
    box-shadow: 2px 2px 6px 0px #000;
    cursor: pointer;
    transform: translateY(20%);

    &.default {
        padding: 1em 1.5em;
    }

    &.small {
        padding: 1em;
    }

    &.large {
        padding: 1em 2em;
        font-size: 15px;
    }
}
</style>