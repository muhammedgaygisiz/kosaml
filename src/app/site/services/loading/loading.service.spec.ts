import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading.service';


describe('LoadingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadingService = TestBed.get(LoadingService);
    expect(service).toBeTruthy();
  });
});
