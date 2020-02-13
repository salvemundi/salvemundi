import { Event } from "../../entities/events/event.entity";

export interface IEventService {
    create(event: Event): Promise<Event>;
    readOne(id: number): Promise<Event>;
}
