import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogreadEventDetailComponent } from './logread-event-detail.component';

describe('LogreadEventDetailComponent', () => {
  let component: LogreadEventDetailComponent;
  let fixture: ComponentFixture<LogreadEventDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogreadEventDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogreadEventDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
