import { Injectable } from "@nestjs/common";
import CustomFormFieldDto from "src/dto/form/custom-form-field-dto";
import { Form } from "src/entities/form/form.entity";
import { FormField } from "src/entities/form/formField.entity";
import { User } from "src/entities/user.entity";
import { FormEntry } from "src/entities/form/formEntry.entity";
import { FormEntryField } from "src/entities/form/formEntryField.entity";
import { CreateFormDto } from "src/dto/form/create-form.dto";
import { EmailService } from "../email/email.service";
import { MailTemplate } from "src/entities/mail/mailTemplate.entity";

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

    const errorFields = [];
    formEntry.fields = await Promise.all(
      fields.map(async field => {
        const formField: FormField = await this.getFormField(form, field[0]);
        const value = field[1];
        const entryField = new FormEntryField();
        entryField.entry = formEntry;
        entryField.field = formField;
        if (this.validateField(formField, value)) {
          entryField.value = value;
        } else {
          errorFields.push(field[0]);
        }
        return entryField.save();
      })
    );

    if (errorFields.length !== 0) {
      throw new Error(`INVALID FIELDS: ${errorFields.join(", ")}`);
    }

    return formEntry;
  }

  public async completeEntry(formEntry: FormEntry) {
    await formEntry.save();
    let mailTemplate = await this.getConfirmationMail(formEntry.form);
    const mailVariables: string[] = mailTemplate.variables.map(
      mailVariable => mailVariable.name
    );
    const formFields = formEntry.fields;
    let variables: any[] = [];

    formFields.forEach(formEntryField => {
      if (mailVariables.includes(formEntryField.field.name)) {
        variables.push({
          name: formEntryField.field.name,
          replacement: formEntryField.value
        });
      }
    });

    if (formEntry.user) {
      // send mail
    }
  }

  public async getConfirmationMail(form: Form): Promise<MailTemplate> {
    return null;
  }

  public validateField(formField: FormField, value: string): boolean {
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

  public async getFormEntries(form: Form): Promise<FormEntry[]> {
    return FormEntry.find({
      where: {
        form
      }
    });
  }

  public async mailEntries(mailTemplate: MailTemplate, formField: FormField) {}

  /*
  create payment links
  create custom mail
  */
}
