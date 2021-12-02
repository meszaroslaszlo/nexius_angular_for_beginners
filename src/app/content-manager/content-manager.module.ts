import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentManagerRoutingModule } from './content-manager-routing.module';
import { ContentManagerFrameComponent } from './content-manager-frame/content-manager-frame.component';


@NgModule({
  declarations: [
    ContentManagerFrameComponent
  ],
  imports: [
    CommonModule,
    ContentManagerRoutingModule
  ]
})
export class ContentManagerModule { }
