import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DuenyoAddPage } from './duenyo-add.page';

describe('DuenyoAddPage', () => {
  let component: DuenyoAddPage;
  let fixture: ComponentFixture<DuenyoAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuenyoAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DuenyoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
