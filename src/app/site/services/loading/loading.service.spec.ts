import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { LoadingService } from './loading.service';


describe('LoadingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot({}),
    ]
  }));

  it('should be created', () => {
    const service: LoadingService = TestBed.get(LoadingService);
    expect(service).toBeTruthy();
  });
});
