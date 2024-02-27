import { Injectable } from '@nestjs/common';

@Injectable()
export class PromptService {
  async sendToLLM(input: string): Promise<any> {
    console.log('Sending to IBM LLM service:', input);
    let llmResponse;
    if (input.includes('risk')) {
      llmResponse = { level: 'High', details: 'Details about risk' };
    } else if (input.includes('country')) {
      llmResponse = { name: 'CountryName', info: 'Information about country' };
    } else if (input.includes('route')) {
      llmResponse = { path: 'RoutePath', details: 'Details about route' };
    } else {
      llmResponse = { error: 'Unrecognized prompt' };
    }
    return llmResponse;
  }
}

// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class PromptService {}
