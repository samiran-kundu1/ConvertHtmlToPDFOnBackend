import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';
import { Test1Component } from './test1/test1.component';



@NgModule({
  declarations: [
    TestComponentComponent,
    Test1Component
  ],
  imports: [
    CommonModule
  ]
})
export class TestModuleModule { }
