import { Event } from "src/entities/event/event.entity";

export interface IEventService {
    create(event: Event): Promise<Event>;
    readOne(id: number): Promise<Event>;
}