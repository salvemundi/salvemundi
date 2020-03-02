import { Injectable } from '@nestjs/common';
import { Event } from '../../entities/event/event.entity';
import { FormEntry } from '../../entities/form/formEntry.entity';
import { EmailService } from '../email/email.service';
import { User } from '../../entities/user.entity';

@Injectable()
export class EventService {
  constructor(private readonly mailService: EmailService) {}

  create(event: Event): Promise<Event> {
    return event.save();
  }

  readOne(id: number): Promise<Event> {
    return Event.findOne(id);
  }

  async completeEventSignup(user: User, event: Event, formEntry: FormEntry): Promise<void> {
    const email = formEntry.email || formEntry.email;
    // Only send email if email address is valid and exists
    if (email && email.match('regex for email')) {
      // HOW TO USE: In de text kan je verwijzen naar data in het user object of event object. Om de data uit een user object te verkrijgen, doe je: {{user.DATA}} en voor de event data doe je: {{event.DATA}}
      await this.mailService.sendEventMail(
        `Inschrijving ${event.title} van Salve Mundi`,
        email,
        {user, event},
        event.extraMailInformation
      );
    }
  }
}
