<template>
  <div class="main">
    <div class="center">
      <div class="brand">
        <img src="@/assets/images/logoWit.png" alt="logo" />
      </div>
      <div class="title">Niet gevonden</div>
      <div class="text">De opgevraagde pagina kon niet worden gevonden</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class NotFound extends Vue {}
</script>
<style lang="scss">
.main {
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

      img {
        width: 200px;
      }
    }

    .title {
      text-align: center;
      width: 100%;
      margin-top: 20px;
      color: white;
      font-size: 3.125em;
      font-family: Poppins, sans-serif;
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