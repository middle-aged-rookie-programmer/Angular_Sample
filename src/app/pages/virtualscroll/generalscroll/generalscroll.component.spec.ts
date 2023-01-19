import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralScrollComponent } from './generalscroll.component';

describe('GeneralScrollComponent', () => {
  let component: GeneralScrollComponent;
  let fixture: ComponentFixture<GeneralScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
