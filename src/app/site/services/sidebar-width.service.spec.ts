import { TestBed } from '@angular/core/testing';

import { SidebarWidthService } from './sidebar-width.service';

describe('SidebarWidthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidebarWidthService = TestBed.get(SidebarWidthService);
    expect(service).toBeTruthy();
  });
});
