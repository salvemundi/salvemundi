<template>
  <div class="main">
      <div class="center">
        <div class="brand">
            <img src="@/assets/images/logoWit.png" alt="logo" />
        </div>
        <div class="title">{{$t('title')}}</div>
        <div class="text">{{$t('message')}}</div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Forbidden extends Vue {}
</script>
<style lang="scss">
.main {
    width: 100vw;
    height: 100vh;
    background: #663265;

    .center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);

      .brand {
          text-align: center;
          width: 100%;

          img{
            width: 200px;
          }
      }

      .title {
          text-align: center;
          width: 100%;
          margin-top: 20px;
          color: white;
          font-size: 3.125em;
          font-weight: 700;
      }

      .text {
          text-align: center;
          width: 100%;
          margin-top: 20px;
          color: white;
          font-size: 1.25em;
      }
    }
}
</style>

<i18n src="@/lang/error/forbidden.json"></i18n>