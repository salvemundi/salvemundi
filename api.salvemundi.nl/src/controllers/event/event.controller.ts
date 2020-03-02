import {
  Body,
  Controller,
  Post,
  Param,
  NotFoundException,
  Get
} from "@nestjs/common";
import { Me } from "../../decorators/me.decorator";
import { CreateEventDto } from "../../dto/event/create-event-dto";
import { User } from "../../entities/user.entity";
import { EventService } from "../../services/event/event.service";
import EventSignupDto from "../../dto/event/signup-event-dto";
import { FormEntry } from "../../entities/form/formEntry.entity";
import { FormService } from "../../services/form/form.service";
import { Event } from "../../entities/event/event.entity";
import { ApiTags } from "@nestjs/swagger";
import { EventDto } from "../../dto/event/event-dto";
import { FormDto } from "../../dto/form/form-dto";
import { Form } from "../../entities/form/form.entity";

@Controller("/events")
@ApiTags("Event")
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

  @Get("/:id")
  async getEvent(@Param("id") eventId: number): Promise<EventDto> {
    const event: Event = await this.eventService.readOne(eventId);

    const eventDto = new EventDto();
    eventDto.title = event.title;
    eventDto.description = event.description;
    eventDto.hasSignupForm = !!event.form;
    eventDto.formId = event.form.id;

    return eventDto;
  }

  @Get("/:id/form")
  async getForm(@Param("id") formId: number): Promise<FormDto> {
    let form: Form = await this.formService.readOne(formId);

    let dto: FormDto = new FormDto();
    dto.fields = this.formService.serializeFields(form.fields);
    return dto;
  }

  @Post("/:id/signup")
  async signup(
    @Body() eventSignupDto: EventSignupDto,
    @Param("id") eventId: number
  ) {
    const fields = eventSignupDto.fields;
    const event: Event = await this.eventService.readOne(eventId);
    if (!event) {
      throw new NotFoundException("Event not found...");
    }

    if (!event.form) {
      // no form found
    }

    // try catch for form validation errors
    const formEntry: FormEntry = await this.formService.createEntry(
      null, // TODO
      event.form,
      fields
    );
    await this.formService.save(formEntry);
    this.eventService.completeEventSignup(null, event, formEntry);
  }
}
