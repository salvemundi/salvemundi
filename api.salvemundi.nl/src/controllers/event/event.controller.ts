import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post
} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { Me } from "../../decorators/me.decorator";
import { CreateEventDto } from "../../dto/event/create-event-dto";
import { EventDto } from "../../dto/event/event-dto";
import EventSignupDto from "../../dto/event/signup-event-dto";
import { FormDto } from "../../dto/form/form-dto";
import { Event } from "../../entities/event/event.entity";
import { Form } from "../../entities/form/form.entity";
import { FormEntry } from "../../entities/form/formEntry.entity";
import { User } from "../../entities/user.entity";
import { EventService } from "../../services/event/event.service";
import { FormService } from "../../services/form/form.service";

@Controller("/events")
@ApiTags("Event")
export class EventController {
  constructor(
    private readonly eventService: EventService,
    private readonly formService: FormService
  ) {}

  // @Post("create")
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
    let formEntry: FormEntry = await this.formService.createEntry(
      event.form,
      fields
    );

    let answers = this.formService.getAnswers(formEntry);
    let email = answers["email"];

    this.eventService.completeEventSignup(email, event, formEntry);
  }
}
