import { NgModule } from '@angular/core';


import {
  MatButtonModule, 
  MatInputModule,
  MatPaginatorModule,    
  MatCardModule,
  MatFormFieldModule, 
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatSliderModule,
  MatMenuModule,
  MatIconModule,MatListModule,
  MatSidenavModule,
  MatTabsModule,
  MatCheckboxModule
} from '@angular/material';


const  MaterialComponents=[
    MatButtonModule,   
    MatInputModule,
    MatPaginatorModule,    
    MatCardModule,
    MatFormFieldModule,  
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatSliderModule,
    MatMenuModule,MatIconModule,MatListModule,
    MatSidenavModule,
    MatTabsModule,
    MatCheckboxModule
   
];

@NgModule({
  exports: [MaterialComponents],
  imports: [MaterialComponents]
})
export class MaterialModule { }