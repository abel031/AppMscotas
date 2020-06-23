import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MascotasAddPage } from './mascotas-add.page';

describe('MascotasAddPage', () => {
  let component: MascotasAddPage;
  let fixture: ComponentFixture<MascotasAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MascotasAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MascotasAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
