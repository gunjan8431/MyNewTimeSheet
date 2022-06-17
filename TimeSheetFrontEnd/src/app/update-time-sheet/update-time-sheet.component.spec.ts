import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTimeSheetComponent } from './update-time-sheet.component';

describe('UpdateTimeSheetComponent', () => {
  let component: UpdateTimeSheetComponent;
  let fixture: ComponentFixture<UpdateTimeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTimeSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTimeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
