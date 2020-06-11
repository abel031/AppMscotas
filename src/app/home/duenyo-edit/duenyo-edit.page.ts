import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
import { NewDuenyo } from 'src/app/models/duenyo';
import { Router, ActivatedRoute } from '@angular/router';
import { DuenyosService } from 'src/app/servicios/duenyos.service';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-duenyo-edit',
  templateUrl: './duenyo-edit.page.html',
  styleUrls: ['./duenyo-edit.page.scss'],
})
export class DuenyoEditPage implements OnInit {

  duenyoForm: FormGroup
  _id;
  idDuenyo='';
  nombre='';
  edad='';
  isLoadingResults = false;
  matcher = new MyErrorStateMatcher();
  editing: boolean = false;
  public duenyo: NewDuenyo = new NewDuenyo(0,'',0);
  errorMessage='';
  checked = false;
  indeterminate = false;

  constructor(private router:Router, private rutaActiva:ActivatedRoute, private api:DuenyosService) { }

  ngOnInit() {
    this._id = this.rutaActiva.snapshot.paramMap.get('id');
    if(this._id){
      this.editing=true;
      this.api.getDuenyo(this._id).subscribe({
        next: e => {
          this.duenyo = e;
        },
        error: err=> this.errorMessage = err
      });
    }
  }

  onFormSubmit(){
    if(this.editing){
      this.api.updateDuenyo(this.duenyo).subscribe((data)=>{
        this.isLoadingResults = false;
        this.router.navigate(['/home','R']);
      }, (error)=>{

      });
    }
  }

}
