import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamodbCreateComponent } from './dynamodb-create.component';

describe('DynamodbCreateComponent', () => {
  let component: DynamodbCreateComponent;
  let fixture: ComponentFixture<DynamodbCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamodbCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamodbCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
