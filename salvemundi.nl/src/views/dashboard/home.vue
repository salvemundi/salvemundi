<template scoped>
    <div class="dashboard-home">
        <b-container>
            <b-row>
                <b-col style="text-align: center">
                    <h2>{{$t('welcome_message').toString() + name}}</h2>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <apexchart width="100%" type="line" :options="chartOptions" :series="series"></apexchart>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { User } from '../../openapi/model/user';
import openApiContainer from '../../openApiContainer';
import { AuthorizationService } from '../../openapi/api/authorization.service';
import { UserService } from '../../openapi/api/user.service';
import HttpResponse from '../../openapi/HttpResponse';
import { StatisticService } from '../../openapi/api/statistic.service';
import { PageView } from '../../openapi/model/pageView';

@Component({
  components: {},
})
export default class HomeDashboard extends Vue {
    private name = '';

    // Chart stuff
    private chartOptions = {
        chart: {
            id: 'vuechart-example',
            type: 'line',
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        xaxis: {
            type: 'datetime',
        },
    };
    private series: Array<{name: string, data: Array<{x: number, y: number}> }> = [];

    public mounted() {
        openApiContainer.get<StatisticService>('StatisticService').pageViewGetAll('response').subscribe((res: HttpResponse<PageView[]>) => {
            const data = res.response.map((view) => ({y: view.count, x: new Date(view.date).getTime() }));
            this.series = [ { name: this.$t('page_views_title').toString(), data } ];
        });

        openApiContainer.get<UserService>('UserService').userReadMe('response').subscribe((res: HttpResponse<User>) => {
            const me = res.response;
            this.name = me.firstName + ' ' + me.lastName;
        });

        this.chartOptions = {
            ...this.chartOptions,
            ...{
                title: {
                    align: 'left',
                    text: this.$t('page_views_title').toString(),
                },
            },
        };
    }
}
</script>
<style lang="scss" scoped>

</style>

<i18n src="@/lang/dashboard/home.json"></i18n>