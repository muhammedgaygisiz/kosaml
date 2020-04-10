import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { SidebarWidthService } from './sidebar-width.service';


describe('SidebarWidthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [StoreModule.forRoot({})]
  }));

  it('should be created', () => {
    const service: SidebarWidthService = TestBed.get(SidebarWidthService);
    expect(service).toBeTruthy();
  });
});
