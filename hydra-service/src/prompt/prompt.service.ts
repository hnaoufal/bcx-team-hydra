// import { Injectable } from '@nestjs/common';
// import { Configuration, OpenAI } from 'openai'; // Corrected import

// @Injectable()
// export class ChatService {
//   private openAiApi: OpenAI; // Corrected type

//   constructor() {
//     // Ensure your OPENAI_API_KEY is set in the environment variables
//     const apiKey = process.env.OPENAI_API_KEY;
//     if (!apiKey) {
//       throw new Error('OPENAI_API_KEY is not set in environment variables.');
//     }

//     const configuration = new Configuration({
//       apiKey: apiKey,
//     });

//     this.openAiApi = new OpenAI(configuration); // Correct instantiation
//   }

//   async generateJsonFromText(text: string): Promise<any> {
//     try {
//       // Use the ChatGPT model to generate a response based on the input text
//       const response = await this.openAiApi.createCompletion({
//         model: 'gpt-4', // Adjust the model as per your requirements.
//         prompt: text,
//         max_tokens: 1024, // Adjust based on the expected response length
//         temperature: 0.7, // Adjust for creativity. Lower values are more deterministic.
//         top_p: 1.0,
//         frequency_penalty: 0.0,
//         presence_penalty: 0.0,
//       });

//       const generatedText = response.data.choices[0].text.trim();

//       // Try to parse the generated text as JSON
//       return JSON.parse(generatedText);
//     } catch (err) {
//       console.error('Error in generateJsonFromText:', err);
//       // Optionally, handle specific errors or rethrow them
//       throw err;
//     }
//   }
// }

// import {Injectable} from '@nestjs/common';

// const {VertexAI} = require('@google-cloud/vertexai');
// const context = `Please generate a JSON according to the last sentence provided. Generate a JSON following this schema:
//         {
//             source: {
//                 lat: 34.0522, // lat of the source location
//                 lng: -118.2437, // lng of the source location
//             },
//             target: {
//                 lat: 37.7749, // lat of the target location
//                 lng: -122.4194, // lat of the target location
//             },
//             radar: {
//                 labels: ['Energy', 'Risk', 'Economic Stability', 'Social Responsibility', 'Regulatory & Comp.', 'Distance', 'Success'], // metrics used for the radar diagram
//                 datasets: [
//                     {
//                         label: 'Risk',
//                         data: [65, 59, 90, 81, 56, 55, 40], // provide data here for the specific target
//                     },
//                 ],
//             },
//             donut: {
//                 labels: ['Risk', 'Success'],
//                 datasets: [
//                     {
//                         label: 'Risk vs. Success',
//                         data: [12, 19], // provide data here for the specific target based on risk and success
//                         borderWidth: 1,
//                     },
//                 ],
//             },
//             newsFeed: [], // Return string of data her about the news feed (this is basically your reference)
//             riskData: {
//                 riskName: "Flood Risk", // provide risk name
//                 riskCategory: "Environment", // provide risk category
//                 description: "Potential flooding due to heavy rainfall.", // provide a description of the risk
//                 risks: [], // provide a list of risks DON'T FORGET TO ADD THE RISKS
//                 recommendations: "Evacuate flood-prone areas, secure belongings, and stay informed through local news.", // provide a recommendation
//                 actions: [] // provide some actions how to mitigate the risks DON'T FORGET TO ADD THE ACTIONS
//             }
//         }

//     Also please consider the comments. The user mostly wants to create a route with source and target. Make sure you don't leave any field empty. Please don't add '''json to indicate that the response is a JSON. Just return the JSON. Here is the last sentence: `;

// /**
//  * TODO(developer): Update these variables before running the sample.
//  */
// async function createStreamChat(
//   projectId = 'bosch-bcx-hack24ber-2311',
//   location = 'us-central1',
//   model = 'gemini-1.0-pro-001',
//   text: string,
// ) {
//   // Initialize Vertex with your Cloud project and location
//   const vertexAI = new VertexAI({project: projectId, location: location});
//   // Instantiate the model
//   const generativeModel = vertexAI.getGenerativeModel({
//     model: model,
//   });
//   const chat = generativeModel.startChat();
//   const chatInput1 = text;
//   const messages = [];
//   const result1 = await chat.sendMessageStream(chatInput1 + " output it as a JSON in the form { source: {lat, lng}, target: {lat, lng} }");
//   for await (const item of result1.stream) {
//     messages.push(item.candidates[0].content.parts[0].text);
//   }
//   return messages;
// }

// @Injectable()
// export class PromptService {
//   constructor() {}
//   async analyzeText(text: string): Promise<any> {
//     try {
// 		const b = await createStreamChat('bosch-bcx-hack24ber-2311', 'us-central1', 'gemini-1.0-pro-001', text);
// 		console.log(b);
// 		return b;
// 		} catch (err) {
// 		console.error('error:', err);
// 		throw new Error(
// 		  'Failed to analyze text with Watson Natural Language Understanding',
// 		);
//   }
// 	}
// }

// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class PromptService {
//   async sendToLLM(input: string): Promise<any> {
//     console.log('Sending to IBM LLM service:', input);
//     let llmResponse;
//     if (input.includes('risk')) {
//       llmResponse = { level: 'High', details: 'Details about risk' };
//     } else if (input.includes('country')) {
//       llmResponse = { name: 'CountryName', info: 'Information about country' };
//     } else if (input.includes('route')) {
//       llmResponse = { path: 'RoutePath', details: 'Details about route' };
//     } else {
//       llmResponse = { error: 'Unrecognized prompt' };
//     }
//     return llmResponse;
//   }
// }
