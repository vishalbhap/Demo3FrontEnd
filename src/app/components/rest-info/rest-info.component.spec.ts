import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestInfoComponent } from './rest-info.component';

describe('RestInfoComponent', () => {
  let component: RestInfoComponent;
  let fixture: ComponentFixture<RestInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
