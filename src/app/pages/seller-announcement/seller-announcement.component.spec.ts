import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerAnnouncementComponent } from './seller-announcement.component';

describe('SellerAnnouncementComponent', () => {
  let component: SellerAnnouncementComponent;
  let fixture: ComponentFixture<SellerAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellerAnnouncementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellerAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
