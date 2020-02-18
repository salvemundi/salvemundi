import { Body, Controller, Post, Param } from "@nestjs/common";
import { Event } from "src/entities/event/event.entity";
import { Me } from "../../decorators/me.decorator";
import { CreateEventDto } from "../../dto/event/create-event-dto";
import { User } from "../../entities/user.entity";
import { EventService } from "../../services/event/event.service";
import EventSignupDto from "src/dto/event/signup-event-dto";
import { FormEntry } from "src/entities/form/formEntry.entity";

@Controller("/events")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @Post("create")
  async createEvent(
    @Me() user: User,
    @Body() eventDto: CreateEventDto
  ): Promise<Event> {
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

  @Post("/:id/signup")
  async signup(
    @Me() user: User,
    @Body() eventSignupDto: EventSignupDto,
    @Param("id") eventId: number
  ) {
    let fields = eventSignupDto.fields;
    const event: Event = await this.eventService.readOne(eventId);
    if (!event.form) {
      // no form found
    }

    let formEntry: FormEntry = await this.eventService.createEntry(
      user,
      event.form,
      fields
    );
  }
}
