import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BugReportPage } from './bug-report.page';

describe('BugReportPage', () => {
  let component: BugReportPage;
  let fixture: ComponentFixture<BugReportPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BugReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
