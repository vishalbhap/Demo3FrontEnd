import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersListUserComponent } from './orders-list-user.component';

describe('OrdersListUserComponent', () => {
  let component: OrdersListUserComponent;
  let fixture: ComponentFixture<OrdersListUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersListUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersListUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
