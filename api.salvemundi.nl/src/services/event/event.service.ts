import { Injectable } from "@nestjs/common";
import { Event } from "src/entities/event/event.entity";

@Injectable()
export class EventService  {
  create(event: Event): Promise<Event> {
    return event.save();
  }

  readOne(id: number): Promise<Event> {
    return Event.findOne(id);
  }
}
