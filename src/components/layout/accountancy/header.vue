<template>
  <div>
      <b-nav>
        <b-nav-item href="/dashboard/accountancy">{{$t('link_names.balance')}}</b-nav-item>
        <b-nav-item href="/dashboard/accountancy/incomeStatement">{{$t('link_names.income_statements')}}</b-nav-item>
        <b-nav-item href="/dashboard/accountancy/import">{{$t('link_names.import')}}</b-nav-item>
    </b-nav>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({
  components: { },
})
export default class AccountancyHeader extends Vue {}
</script>
<style lang="scss">
.nav {
    justify-content: center;
}
</style>

<i18n src="@/lang/components/accountancy/header.json"></i18n>