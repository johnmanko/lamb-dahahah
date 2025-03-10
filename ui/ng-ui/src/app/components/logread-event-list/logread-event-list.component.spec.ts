import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogreadEventListComponent } from './logread-event-list.component';

describe('LogreadEventListComponent', () => {
  let component: LogreadEventListComponent;
  let fixture: ComponentFixture<LogreadEventListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogreadEventListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogreadEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
