import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('forgot_passsword_email_send')
  forgotPassswordEmailSend(@Payload() data: { email: string }): void {
    this.appService.sendEmail(data.email);
  }
}
