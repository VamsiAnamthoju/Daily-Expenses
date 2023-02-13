import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindDataToUsermodelComponent } from './bind-data-to-usermodel.component';

describe('BindDataToUsermodelComponent', () => {
  let component: BindDataToUsermodelComponent;
  let fixture: ComponentFixture<BindDataToUsermodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindDataToUsermodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindDataToUsermodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
