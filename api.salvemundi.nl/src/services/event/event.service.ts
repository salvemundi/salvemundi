import { Injectable } from "@nestjs/common";
import { Event } from "../../entities/event/event.entity";
import { FormEntry } from "../../entities/form/formEntry.entity";
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

  async completeEventSignup(email: string, event: Event, formEntry: FormEntry) {
    if ((email && email.match("[^@]+@[^.]+..+")) || true) {
      const formValues = this.formService.getAnswers(formEntry);
      // HOW TO USE: In de text kan je verwijzen naar data in het user object of event object. Om de data uit een user object te verkrijgen, doe je: {{user.DATA}} en voor de event data doe je: {{event.DATA}}
      const result = await this.mailService.sendEventMail(
        `Inschrijving ${event.title} van Salve Mundi`,
        email,
        { email, event, form: formValues },
        event.extraMailInformation
      );

      console.log(result);
    }
    return;
  }
}
