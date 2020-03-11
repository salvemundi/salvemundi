import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Controller, Post, HttpCode, Get } from '@nestjs/common';
import { StatisticService } from '../../services/statistics/statistics.service';
import { PageView } from '../../entities/statistic/page.views.entity';
import { Auth } from '../../decorators/auth.decorator';

@Controller('statistic')
@ApiTags('statistic')
export class StatisticsController {
    constructor(
        private readonly statisticRepository: StatisticService
    ) {}

    @Get('pageview')
    @HttpCode(200)
    @Auth('Statistics:Read')
    @ApiOperation({
        operationId: 'pageViewGetAll',
        summary: 'GetAll',
        description: 'This call can be used to get all the pageview statistics',
    })
    @ApiResponse({ status: 200, description: 'Got all pageviews', type: PageView, isArray: true })
    @ApiResponse({ status: 500, description: 'Internal server error...' })
    public async getPageViews(): Promise<PageView[]> {
        return this.statisticRepository.getPageViews();
    }

    @Post('pageview')
    @HttpCode(202)
    @ApiOperation({
        operationId: 'pageViewNew',
        summary: 'create',
        description: 'This call can be used to add the pageview',
    })
    @ApiResponse({ status: 202, description: 'Added pageview' })
    @ApiResponse({ status: 500, description: 'Internal server error...' })
    public async newPageView(): Promise<void> {
        let pageView = await this.statisticRepository.getPageViewToday();
        if (!pageView) {
            const date = new Date();
            date.setHours(0, 0, 0, 0);

            pageView = new PageView();
            pageView.count = 1;
            pageView.date = date;

        } else {
            pageView.count++;
        }

        await this.statisticRepository.save(pageView);
    }
}
