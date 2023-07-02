import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTestComponentComponent } from './new-test-component/new-test-component.component';
import { NewTestService } from './new-test.service';
import { NewTest1Service } from './Services/new-test1.service';



@NgModule({
  declarations: [
    NewTestComponentComponent
  ],
  providers:[
    NewTestService,NewTest1Service
  ],
  imports: [
    CommonModule
  ]
})
export class NewTestModule { }
