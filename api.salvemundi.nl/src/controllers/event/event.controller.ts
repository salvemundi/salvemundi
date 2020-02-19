import { Body, Controller, Post, Param } from "@nestjs/common";
import { Event } from "src/entities/event/event.entity";
import { Me } from "../../decorators/me.decorator";
import { CreateEventDto } from "../../dto/event/create-event-dto";
import { User } from "../../entities/user.entity";
import { EventService } from "../../services/event/event.service";
import EventSignupDto from "src/dto/event/signup-event-dto";
import { FormEntry } from "src/entities/form/formEntry.entity";
import { FormService } from "src/services/form/form.service";

@Controller("/events")
export class EventController {
  constructor(
    private readonly eventService: EventService,
    private readonly formService: FormService
  ) {}

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
    event.form = this.formService.createForm(eventDto.form);

    return this.eventService.create(event);
  }

  @Post("/:id/signup")
  async signup(
    @Me() user: User,
    @Body() eventSignupDto: EventSignupDto,
    @Param("id") eventId: number
  ) {
    const fields = eventSignupDto.fields;
    const event: Event = await this.eventService.readOne(eventId);
    if (!event.form) {
      // no form found
    }

    //try catch for form validation errors
    let formEntry: FormEntry = await this.formService.createEntry(
      user,
      event.form,
      fields
    );

    this.formService.saveEntry(formEntry);
  }
}
