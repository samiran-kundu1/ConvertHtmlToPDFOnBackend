import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlToStringComponent } from './html-to-string.component';

describe('HtmlToStringComponent', () => {
  let component: HtmlToStringComponent;
  let fixture: ComponentFixture<HtmlToStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtmlToStringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlToStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
