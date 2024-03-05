import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedAreaComponent } from './reserved-area.component';

describe('ReservedAreaComponent', () => {
  let component: ReservedAreaComponent;
  let fixture: ComponentFixture<ReservedAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReservedAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
