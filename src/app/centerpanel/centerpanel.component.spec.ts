import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterpanelComponent } from './centerpanel.component';

describe('CenterpanelComponent', () => {
  let component: CenterpanelComponent;
  let fixture: ComponentFixture<CenterpanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterpanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CenterpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
