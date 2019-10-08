<template>
    <a v-if="to" :href="to" class="SaMuLink">
        <button :class="['SaMuButton', size === '' || !size ? 'default' : size]" :type="type" v-on="!click ? null : {click}"><slot></slot></button>
    </a>
    <button v-else :class="['SaMuButton', size === '' || !size ? 'default' : size]" :type="type" v-on="!click ? null : {click}"><slot></slot></button>
</template>
<script>
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props: ['to', 'size',  'type', 'click'],
})
export default class SaMuButton extends Vue {}
</script>
<style lang="scss">
.SaMuLink {
    display: inline-block;
}
.SaMuButton {
    border-radius: 2px;
    background-color: #663265;
    color: #fff;
    border: none;
    font-weight: 700;
    box-shadow: 2px 2px 6px 0px #000;
    cursor: pointer;

    &.default {
        padding: 1em 1.5em;
    }

    &.small {
        padding: 0.5em 1em;
    }

    &.large {
        padding: 1em 2em;
        font-size: 15px;
    }
}
</style>