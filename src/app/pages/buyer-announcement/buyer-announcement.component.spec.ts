import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyerAnnouncementComponent } from './buyer-announcement.component';

describe('BuyerAnnouncementComponent', () => {
  let component: BuyerAnnouncementComponent;
  let fixture: ComponentFixture<BuyerAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BuyerAnnouncementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BuyerAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
