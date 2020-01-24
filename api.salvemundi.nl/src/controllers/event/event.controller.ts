import { Controller, Post, Body, Get, Put } from "@nestjs/common";
import { EventService } from "../../services/event/event.service";
import { Me } from "../../decorators/me.decorator";
import { User } from "../../entities/user.entity";
import { CreateEventDto } from "../../dto/event/create-event-dto";
import UpdateEventDto from "../../dto/event/update-event-dto";
import { Event } from "src/entities/event/event.entity";
import { EventForm } from "src/entities/event/eventForm.entity";

@Controller("/events")
export class EventController {

    constructor(private readonly eventService: EventService) { }

    @Post("create")
    async createEvent(@Me() user: User, @Body() eventDto: CreateEventDto): Promise<Event> {
        const event: Event = new Event();
        event.createdBy = user;
        event.title = eventDto.title;
        event.description = eventDto.description;
        event.signupBefore = eventDto.signupBefore;
        event.startDate = eventDto.startDate;
        event.endDate = eventDto.endDate;
        event.memberOnly = eventDto.memberOnly;
        event.memberPrice = eventDto.memberPrice;
        event.notMemberPrice = eventDto.notMemberPrice;
        event.active = eventDto.active;
        event.form = this.eventService.createForm(eventDto.fields);

        return this.eventService.create(event);
    }
}