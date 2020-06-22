import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from '../duenyo-edit/duenyo-edit.page';
import { Router } from '@angular/router';
import { DuenyosService } from 'src/app/servicios/duenyos.service';

@Component({
  selector: 'app-duenyo-add',
  templateUrl: './duenyo-add.page.html',
  styleUrls: ['./duenyo-add.page.scss'],
})
export class DuenyoAddPage implements OnInit {

  duenyosForm: FormGroup;
  nombre = '';
  edad = '';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();

  constructor(private router:Router, private api:DuenyosService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.duenyosForm = this.formBuilder.group({
      'nombre' : [null, Validators.required],
      'edad' : [null, Validators.required]
    });
  }

  onFormSubmit(){
    this.isLoadingResults=true;
    this.api.save(this.duenyosForm.value)
    .subscribe((res: any) => {
      this.isLoadingResults=false;
      this.duenyosForm.reset();
      this.router.navigate(['home','R']);
    }, (err: any) => {
      this.isLoadingResults=false;
    })
  }

}
