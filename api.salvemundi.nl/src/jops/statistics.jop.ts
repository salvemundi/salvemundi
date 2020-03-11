import { Injectable } from '@nestjs/common';
import { Cron } from 'nest-schedule';
import { StatisticService } from '../services/statistics/statistics.service';
import { PageView } from '../entities/statistic/page.views.entity';

@Injectable()
export class StatisticsJob {
    constructor(
        private readonly statisticRepository: StatisticService,
    ) {}

    @Cron('0 0 0 * * *')
    addEmptyPageView() {
        if (!this.statisticRepository.getPageViewToday()) {
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const pageview = new PageView();
            pageview.count = 0;
            pageview.date = today;
            this.statisticRepository.save(pageview);
        }
    }
}
