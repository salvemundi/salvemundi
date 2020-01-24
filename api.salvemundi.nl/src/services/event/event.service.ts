import { Injectable } from "@nestjs/common";
import { IEventService } from "./ievent.service";
import { Event } from "src/entities/event/event.entity";
import { EventForm } from "src/entities/event/eventSignupForm.entity";
import CustomFormFieldDto from "src/dto/event/form/custom-form-field-dto";
import { EventFormField } from "src/entities/event/eventFormField.entity";
import { eventNames } from "cluster";

@Injectable()
export class EventService implements IEventService {

    create(event: Event): Promise<Event> {
        return event.save();
    }

    readOne(id: number): Promise<Event> {
        return Event.findOne(id);
    }


    createForm(fields: CustomFormFieldDto[]): EventForm {
        let form = new EventForm();

        for (let index = 0; index < fields.length; index++) {
            const field = fields[index];
            let formField = new EventFormField();
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


}