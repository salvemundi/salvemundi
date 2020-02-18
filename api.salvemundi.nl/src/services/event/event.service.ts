import { Injectable } from "@nestjs/common";
import CustomFormFieldDto from "src/dto/event/form/custom-form-field-dto";
import { Event } from "src/entities/event/event.entity";
import { Form } from "src/entities/form/form.entity";
import { FormField } from "src/entities/form/formField.entity";
import { FormEntry } from "src/entities/form/formEntry.entity";
import { IEventService } from "./ievent.service";
import { User } from "src/entities/user.entity";

@Injectable()
export class EventService implements IEventService {
  create(event: Event): Promise<Event> {
    return event.save();
  }

  readOne(id: number): Promise<Event> {
    return Event.findOne(id);
  }

  createForm(fields: CustomFormFieldDto[]): Form {
    const form = new Form();

    for (let index = 0; index < fields.length; index++) {
      const field = fields[index];
      const formField = new FormField();
      formField.name = field.name;
      formField.autocomplete = field.autocomplete;
      formField.description = field.description;
      formField.label = field.label;
      formField.pattern = field.pattern;
      formField.type = field.type;
      formField.required = field.required;
      formField.placeholder = field.placeholder;

      form.fields.push(formField);
    }
    return form;
  }

  async createEntry(
    user: User,
    form: Form,
    fields: any[][]
  ): Promise<FormEntry> {
    const formEntry: FormEntry = new FormEntry();
    formEntry.form = form;
    if (user) {
      formEntry.user = user;
    }
    formEntry.cancelled = false;
    formEntry.fields

    return formEntry.save();
  }
}
