import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../duenyo-edit/duenyo-edit.page';
import { Router } from '@angular/router';
import { MascotasService } from 'src/app/servicios/mascotas.service';

@Component({
  selector: 'app-mascotas-add',
  templateUrl: './mascotas-add.page.html',
  styleUrls: ['./mascotas-add.page.scss'],
})
export class MascotasAddPage implements OnInit {

  MascotasForm: FormGroup;
  nombre = '';
  animal = '';
  foto = '';
  duenyo = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router:Router, private api:MascotasService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.MascotasForm = this.formBuilder.group({
      'idDuenyo' : [null, Validators.required],
      'animal' : [null, Validators.required],
      'nombre' : [null, Validators.required],
      'foto' : [null, Validators.required]      
    });
  }

  onFormSubmit(){
    this.isLoadingResults=true;
    this.api.save(this.MascotasForm.value)
    .subscribe((res: any) => {
      this.isLoadingResults=false;
      this.MascotasForm.reset();
      this.router.navigate(['home','R']);
    }, (err: any) => {
      this.isLoadingResults=false;
    })
  }

}
