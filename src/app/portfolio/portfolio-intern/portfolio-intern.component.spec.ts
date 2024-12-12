import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioInternComponent } from './portfolio-intern.component';

describe('PortfolioInternComponent', () => {
  let component: PortfolioInternComponent;
  let fixture: ComponentFixture<PortfolioInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PortfolioInternComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
