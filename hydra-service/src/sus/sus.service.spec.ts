import { Test, TestingModule } from '@nestjs/testing';
import { SusService } from './sus.service';

describe('SusService', () => {
  let service: SusService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SusService],
    }).compile();

    service = module.get<SusService>(SusService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
