import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTestComponentComponent } from './new-test-component.component';

describe('NewTestComponentComponent', () => {
  let component: NewTestComponentComponent;
  let fixture: ComponentFixture<NewTestComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTestComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
