import { Test, TestingModule } from '@nestjs/testing';
import { SusController } from './sus.controller';

describe('SusController', () => {
  let controller: SusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SusController],
    }).compile();

    controller = module.get<SusController>(SusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
