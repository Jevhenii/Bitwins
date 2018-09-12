import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotteryFooterComponent } from './lottery-footer.component';

describe('LotteryFooterComponent', () => {
  let component: LotteryFooterComponent;
  let fixture: ComponentFixture<LotteryFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotteryFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotteryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
