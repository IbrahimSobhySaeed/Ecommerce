import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { SelectComponent } from './component/select/select.component';
import { FormsModule } from '@angular/forms';
import { TrancketPipe } from './pipe/trancket.pipe';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    NotFoundComponent,
    SelectComponent,
    TrancketPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,


  ],
  exports:[
    HeaderComponent,
    SelectComponent,
    TrancketPipe,
    FormsModule

  ]
})
export class SharedModule { }
