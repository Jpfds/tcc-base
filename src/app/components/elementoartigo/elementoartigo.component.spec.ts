import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementoartigoComponent } from './elementoartigo.component';

describe('ElementoartigoComponent', () => {
  let component: ElementoartigoComponent;
  let fixture: ComponentFixture<ElementoartigoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElementoartigoComponent]
    });
    fixture = TestBed.createComponent(ElementoartigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
