import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MascotasEditPage } from './mascotas-edit.page';

describe('MascotasEditPage', () => {
  let component: MascotasEditPage;
  let fixture: ComponentFixture<MascotasEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasEditPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MascotasEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
