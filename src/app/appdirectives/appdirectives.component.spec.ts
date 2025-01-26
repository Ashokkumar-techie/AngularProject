import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppdirectivesComponent } from './appdirectives.component';

describe('AppdirectivesComponent', () => {
  let component: AppdirectivesComponent;
  let fixture: ComponentFixture<AppdirectivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppdirectivesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppdirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
