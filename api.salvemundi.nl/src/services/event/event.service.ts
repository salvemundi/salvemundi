import { Injectable } from "@nestjs/common";
import { Event } from "src/entities/event/event.entity";
import { FormEntry } from "src/entities/form/formEntry.entity";
import { EmailService } from "../email/email.service";

@Injectable()
export class EventService {
  constructor(private readonly mailService: EmailService) {}

  create(event: Event): Promise<Event> {
    return event.save();
  }

  readOne(id: number): Promise<Event> {
    return Event.findOne(id);
  }

  completeEventSignup(event: Event, formEntry: FormEntry) {
    const email = formEntry.email || formEntry.email;
    if (!email) {
      // error no mail
    } else {
      if (email.match("regex for email")) {
        this.mailService.sendEventMail(
          `Inschrijving ${event.title} van Salve Mundi`,
          email,
          {},
          event.extraMailInformation
        );
      }
    }
  }
}
