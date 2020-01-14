<template>
  <div class="event-item">
    <div class="event-item__date-container">
      <h4>
        <span>{{event.date}}</span>
        <span>{{event.day}}</span>
      </h4>
    </div>
    <div class="event-item__text-container"></div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class EventItem extends Vue {
  private event: object = {
    day: 'JUN',
    date: 11,
  };
}
</script>
<style lang="scss">
.event-item {
  height: 75px;
  width: 100%;
  background: url("../../../assets/images/background.jpg");
  border-radius: 2px;
  display: inline-block;

  &__date-container {
    width: 104px;
    height: 75px;

    border-radius: 2px 0px 0px 2px;
    position: relative;

    h4 {
      background: rgba(255, 255, 255, 0.6);
      overflow: hidden;

      display: block;
      height: 100%;
      padding: 5px;

      color: transparent;
      font-size: 28px;
      font-family: arial;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;

      span {
        background: url("../../../assets/images/background.jpg") -20px -20px
          repeat;
        -webkit-text-fill-color: transparent;
        -webkit-background-clip: text;
        display: block;
      }
    }
  }

  &__text-container {
  }
}
</style>