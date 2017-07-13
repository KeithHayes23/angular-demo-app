import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamoDBListComponent } from './dynamo-db-list.component';

describe('DynamoDBListComponent', () => {
  let component: DynamoDBListComponent;
  let fixture: ComponentFixture<DynamoDBListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamoDBListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamoDBListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
