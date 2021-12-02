import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { EditorInputFieldDirective } from './directives/editor-input-field.directive';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    EditorInputFieldDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
