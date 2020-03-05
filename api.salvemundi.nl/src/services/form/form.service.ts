import { Injectable } from "@nestjs/common";
import { CreateFormDto } from "../../dto/form/create-form.dto";
import { Form } from "../../entities/form/form.entity";
import { FormEntry } from "../../entities/form/formEntry.entity";
import { FormEntryField } from "../../entities/form/formEntryField.entity";
import { FormField } from "../../entities/form/formField.entity";
import { EmailService } from "../email/email.service";

@Injectable()
export class FormService {
  constructor(private readonly mailService: EmailService) {}

  createForm(createFormDto: CreateFormDto): Form {
    const form = new Form();
    for (const field of createFormDto.fields) {
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

  async createEntry(form: Form, fields: any): Promise<FormEntry> {
    let formEntry: FormEntry = new FormEntry();
    formEntry.form = form;
    formEntry.fields = [];
    formEntry = await formEntry.save();

    await fields.forEach(async field => {
      const formField: FormField = await this.getFormField(form, field.name);

      const value = field.value;
      const entryField = new FormEntryField();

      entryField.entry = formEntry;
      entryField.field = formField;
      entryField.value = value;

      if (this.validateField(formField, value)) {
        formEntry.fields.push(entryField);
        entryField.save();
      } else {
        throw new Error("RIP");
      }
    });

    return formEntry.save();
  }

  public validateField(formField: FormField, value: string): boolean {
    if (!formField.pattern) {
      return true;
    }
    if (formField.pattern.match(value)) {
      return true;
    }
    return false;
  }

  public async getFormField(form: Form, name: string): Promise<FormField> {
    return await FormField.findOne({
      where: {
        form,
        name
      }
    });
  }

  public async getFormEntry(id: number): Promise<FormEntry> {
    return FormEntry.findOne({
      where: {
        id
      }
    });
  }

  public async getFormEntries(form: Form): Promise<FormEntry[]> {
    return FormEntry.find({
      where: {
        form
      }
    });
  }

  public save(form: Form): Promise<Form> {
    return form.save();
  }

  public async readOne(id: number): Promise<Form> {
    return Form.findOne({
      where: {
        id
      }
    });
  }
  /*
  create payment links
  create custom mail
  */

  public serializeFields(fields: FormField[]): any {
    const result = [];
    fields.forEach(formField => {
      result.push({
        name: formField.name,
        description: formField.description,
        autocomplete: formField.autocomplete,
        label: formField.label,
        pattern: formField.pattern,
        placeholder: formField.placeholder,
        required: formField.required,
        type: formField.type
      });
    });
    return result;
  }

  public getAnswers(formEntry: FormEntry): any {
    const result = {};
    formEntry.fields.forEach(field => {
      result[field.field.name] = field.value;
    });
    return result;
  }
}
