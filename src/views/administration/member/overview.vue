<template scoped>
    <div class="member-overview">
        Test
    </div>
</template>

<script lang="ts" scoped>
import { Component, Vue } from 'vue-property-decorator';
import SaMuButton from '@/components/basic/SaMuButton.vue';

@Component({
  components: {
    SaMuButton,
  },
})
export default class MemberOverview extends Vue {}
</script>
<style lang="scss" scoped>
.member-overview {
    height: calc(100vh - 177px);
}
</style>

<i18n src="@/lang/administration/member/overview.json"></i18n>