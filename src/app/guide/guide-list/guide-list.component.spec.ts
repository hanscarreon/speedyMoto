import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuideListComponent } from './guide-list.component';

describe('GuideListComponent', () => {
  let component: GuideListComponent;
  let fixture: ComponentFixture<GuideListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuideListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
