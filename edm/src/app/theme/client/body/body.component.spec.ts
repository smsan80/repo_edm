import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientBodyComponent } from './body.component';

describe('ClientBodyComponent', () => {
  let component: ClientBodyComponent;
  let fixture: ComponentFixture<ClientBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
