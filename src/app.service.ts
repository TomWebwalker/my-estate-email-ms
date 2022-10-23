import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly mailerService: MailerService) {}

  sendEmail(email: string): void {
    this.mailerService
      .sendMail({
        to: email,
        from: 'noreply@nestjs.com',
        subject: 'Testing Nest MailerModule ✔',
        template: './welcome',
        context: {
          username: 'john doe',
        },
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }
}
