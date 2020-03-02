import { Injectable } from "@nestjs/common";
import { Event } from "../../entities/event/event.entity";
import { FormEntry } from "../../entities/form/formEntry.entity";
import { User } from "../../entities/user.entity";
import { EmailService } from "../email/email.service";
import { FormService } from "../form/form.service";

@Injectable()
export class EventService {
  constructor(
    private readonly mailService: EmailService,
    private readonly formService: FormService
  ) {}

  create(event: Event): Promise<Event> {
    return event.save();
  }

  readOne(id: number): Promise<Event> {
    return Event.findOne(id);
  }

  getEventByName(name: string): Promise<Event> {
    return Event.findOne({
      where: {
        title: name
      }
    });
  }

  async completeEventSignup(user: User, event: Event, formEntry: FormEntry) {
    const email = formEntry.email || formEntry.email;
    if (email && email.match('[^@]+@[^\.]+\..+')) {
      const form = this.formService.getAnswers(formEntry);
      // HOW TO USE: In de text kan je verwijzen naar data in het user object of event object. Om de data uit een user object te verkrijgen, doe je: {{user.DATA}} en voor de event data doe je: {{event.DATA}}
      await this.mailService.sendEventMail(
        `Inschrijving ${event.title} van Salve Mundi`,
        email,
        { user, event, form },
        event.extraMailInformation
      );
    }
    return;
  }
}
