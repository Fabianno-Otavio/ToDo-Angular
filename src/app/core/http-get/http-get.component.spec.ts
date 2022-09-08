import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpGetComponent } from './http-get.component';

describe('HtmlGetComponent', () => {
  let component: HttpGetComponent;
  let fixture: ComponentFixture<HttpGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HttpGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
