<template>
  <input 
    class="SaMuInput"
    :placeholder="placeholder"
    :type="!type || type === '' ? 'text' : type"
    v-bind:value="value"
    v-on:input="$emit('input', $event.target.value)"
    :name="name"
    :autocomplete="autocomplete"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
    props: [ 'placeholder', 'type', 'value', 'name', 'autocomplete' ],
})
export default class SaMuInput extends Vue {}
</script>
<style lang="scss">
.SaMuInput {
    border: none;
    border-bottom: 1px solid #828282;
    width: 100%;
    font-family: Poppins, sans-serif;
    padding: 10px;
    line-height: 21px;
    font-size: 14px;
    margin-top: 7px;
    margin-bottom: 8px;
    color: black;
}

.SaMuInput:disabled {
  color: #828282;
}
</style>