import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealestatetransactionComponent } from './realestatetransaction.component';

describe('RealestatetransactionComponent', () => {
  let component: RealestatetransactionComponent;
  let fixture: ComponentFixture<RealestatetransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealestatetransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealestatetransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
