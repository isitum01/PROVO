import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ANarudzbeComponent } from './a-narudzbe.component';

describe('ANarudzbeComponent', () => {
  let component: ANarudzbeComponent;
  let fixture: ComponentFixture<ANarudzbeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ANarudzbeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ANarudzbeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
