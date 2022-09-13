import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFoodsComponent } from './show-foods.component';

describe('ShowFoodsComponent', () => {
  let component: ShowFoodsComponent;
  let fixture: ComponentFixture<ShowFoodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowFoodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowFoodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
