import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentManagerFrameComponent } from './content-manager-frame.component';

describe('ContentManagerFrameComponent', () => {
  let component: ContentManagerFrameComponent;
  let fixture: ComponentFixture<ContentManagerFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentManagerFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentManagerFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
