import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";
import * as hbs from "nodemailer-express-handlebars";
import { Confirmation } from "../../entities/confirmation.entity";
import { User } from "../../entities/user.entity";

@Injectable()
export class EmailService {
  private fromEmailAddress = "noreply@salvemundi.nl";
  private sgOptions = {
    service: "SendGrid",
    auth: {
      user: process.env.SENDGRID_USER,
      pass: process.env.SENDGRID_PASS
    }
  };

  private hbsOptions = {
    viewEngine: {
      extname: ".hbs",
      layoutsDir: __dirname + "/templates",
      defaultLayout: "template",
      partialsDir: __dirname + "/partials"
    },
    viewPath: __dirname + "/templates",
    extName: ".hbs"
  };

  public sendEmailConfirmationEmail(
    user: User,
    confirmation: Confirmation
  ): Promise<nodemailer.SentMessageInfo> {
    const mail = {
      from: this.fromEmailAddress,
      to: user.email,
      subject: "Bevestig je email adres",
      template: "email-confirmation",
      context: {
        firstName: user.firstName,
        lastName: user.lastName,
        baseUrl: process.env.REDIRECT_URL,
        token: confirmation.token
      }
    };

    return this.sendEmail(mail);
  }

  public sendRegistrationConfirmationEmail(
    user: User
  ): Promise<nodemailer.SentMessageInfo> {
    const mail = {
      from: this.fromEmailAddress,
      to: user.email,
      subject: "Welkom!",
      template: "new-member-confirmation",
      context: {
        firstName: user.firstName,
        lastName: user.lastName
      }
    };

    return this.sendEmail(mail);
  }

  public sendLaunchEmail(
    user: User,
    confirmation: Confirmation
  ): Promise<nodemailer.SentMessageInfo> {
    const mail = {
      from: this.fromEmailAddress,
      to: user.email,
      subject: "Het is zover!",
      template: "launch-website",
      context: {
        firstName: user.firstName,
        baseUrl: process.env.REDIRECT_URL,
        token: confirmation.token
      }
    };

    return this.sendEmail(mail);
  }

  public sendEventMail(
    subject: string,
    email: string,
    context: any,
    information: string
  ): Promise<nodemailer.SentMessageInfo> {
    context.information = information;
    const mail = {
      from: this.fromEmailAddress,
      to: email,
      subject,
      template: "event-signup",
      context
    };

    console.log(mail);

    return this.sendEmail(mail);
  }

  private sendEmail(
    email: nodemailer.SendMailOptions
  ): Promise<nodemailer.SentMessageInfo> {
    return new Promise((resolve, reject) => {
      const mailer = nodemailer.createTransport(this.sgOptions);
      mailer.use("compile", hbs(this.hbsOptions));

      mailer.sendMail(email, (err, response) => {
        if (err) {
          reject(err);
        } else {
          resolve(response);
        }
      });
    });
  }
}
