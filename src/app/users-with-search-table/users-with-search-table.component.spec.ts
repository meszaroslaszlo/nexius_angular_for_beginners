import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersWithSearchTableComponent } from './users-with-search-table.component';

describe('UsersWithSearchTableComponent', () => {
  let component: UsersWithSearchTableComponent;
  let fixture: ComponentFixture<UsersWithSearchTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersWithSearchTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersWithSearchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
