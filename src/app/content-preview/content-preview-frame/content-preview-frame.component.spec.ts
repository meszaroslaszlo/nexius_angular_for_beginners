import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPreviewFrameComponent } from './content-preview-frame.component';

describe('ContentPreviewFrameComponent', () => {
  let component: ContentPreviewFrameComponent;
  let fixture: ComponentFixture<ContentPreviewFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentPreviewFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPreviewFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
