import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HierarchyViewerComponent } from './hierarchy-viewer.component';

describe('HierarchyViewerComponent', () => {
  let component: HierarchyViewerComponent;
  let fixture: ComponentFixture<HierarchyViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HierarchyViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HierarchyViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
