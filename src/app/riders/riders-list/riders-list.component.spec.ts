import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RidersListComponent } from './riders-list.component';

describe('RidersListComponent', () => {
  let component: RidersListComponent;
  let fixture: ComponentFixture<RidersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RidersListComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RidersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
