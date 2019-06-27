import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AKorisniciComponent } from './a-korisnici.component';

describe('AKorisniciComponent', () => {
  let component: AKorisniciComponent;
  let fixture: ComponentFixture<AKorisniciComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AKorisniciComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AKorisniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
