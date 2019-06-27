import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APopustiComponent } from './a-popusti.component';

describe('APopustiComponent', () => {
  let component: APopustiComponent;
  let fixture: ComponentFixture<APopustiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APopustiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APopustiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
