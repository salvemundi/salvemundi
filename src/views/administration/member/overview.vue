<template scoped>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import EventItem from '@/components/layout/events/EventItem.vue';
import CommitteeIcon from '@/components/layout/committees/CommitteeIcon.vue';
import SaMuButton from '@/components/basic/SaMuButton.vue';

@Component({
  components: {
    EventItem,
    CommitteeIcon,
    SaMuButton,
  },
})
export default class MemberOverview extends Vue {}
</script>
<style lang="scss" scoped>

</style>