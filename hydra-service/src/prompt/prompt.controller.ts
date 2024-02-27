import { Body, Controller, Post } from '@nestjs/common';
import { CreateMessageDto } from './create-message.dto';
import { PromptService } from './prompt.service';

@Controller('prompt')
export class PromptController {
  constructor(private readonly promptService: PromptService) {}

  @Post()
  async receiveStringAndProcess(@Body() body: CreateMessageDto): Promise<any> {
    console.log('Received string from frontend:', body.message);
    const llmResponse = await this.promptService.sendToLLM(body.message);
    return llmResponse;
  }
}

// import { Controller, Post, Body } from '@nestjs/common';
// import { CreateMessageDto } from './create-message.dto';

// @Controller('prompt')
// export class PromptController {
//   @Post()
//   createMessage(@Body() createMessageDto: CreateMessageDto): CreateMessageDto {
//     console.log(createMessageDto);
//     return createMessageDto; // Echo the message back to the client
//   }
// }
