import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogreadStatsComponent } from './logread-stats.component';

describe('LogreadStatsComponent', () => {
  let component: LogreadStatsComponent;
  let fixture: ComponentFixture<LogreadStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogreadStatsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogreadStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
