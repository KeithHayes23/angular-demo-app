import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsCommonComponent } from './aws-common.component';

describe('AwsCommonComponent', () => {
  let component: AwsCommonComponent;
  let fixture: ComponentFixture<AwsCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
