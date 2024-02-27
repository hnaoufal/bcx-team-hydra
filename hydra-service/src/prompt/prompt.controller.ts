import {Body, Controller, Post} from '@nestjs/common';
import {CreateMessageDto} from './create-message.dto';
import {PromptService} from './prompt.service';

@Controller('prompt')
export class PromptController {
    constructor(private readonly promptService: PromptService) {
    }

    @Post()
    async receiveStringAndProcess(@Body() body: CreateMessageDto): Promise<any> {
        console.log('Received string from frontend:', body.message);
        const a = await this.promptService.analyzeText(body.message);
        console.log(a);
        return a;
    }
}
