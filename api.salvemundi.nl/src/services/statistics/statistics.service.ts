import { PageView } from '../entities/statistic/page.views.entity';
import { BaseEntity } from 'typeorm';

export class StatisticService {
    public getPageViewToday(): Promise<PageView> {
        const date = new Date();
        date.setHours(0, 0, 0, 0);

        return PageView.findOne({where: {date}});
    }

    public getPageViews(): Promise<PageView[]> {
        return PageView.find({ order: {date: 'ASC'}});
    }

    public save<T extends BaseEntity>(entity: T): Promise<T> {
        return entity.save();
    }
}
