import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentEditorFrameRoutingModule } from './content-editor-frame-routing.module';
import { ContextMenuComponent } from './context-menu/context-menu.component';


@NgModule({
  declarations: [
    ContextMenuComponent
  ],
  imports: [
    CommonModule,
    ContentEditorFrameRoutingModule
  ]
})
export class ContentEditorFrameModule { }
