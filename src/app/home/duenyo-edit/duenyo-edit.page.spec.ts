import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DuenyoEditPage } from './duenyo-edit.page';

describe('DuenyoEditPage', () => {
  let component: DuenyoEditPage;
  let fixture: ComponentFixture<DuenyoEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuenyoEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DuenyoEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
