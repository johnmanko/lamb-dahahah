import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogreadComponent } from './logread.component';

describe('LogreadComponent', () => {
  let component: LogreadComponent;
  let fixture: ComponentFixture<LogreadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogreadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
