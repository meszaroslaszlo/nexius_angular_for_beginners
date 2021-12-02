import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentPreviewRoutingModule } from './content-preview-routing.module';
import { ContentPreviewFrameComponent } from './content-preview-frame/content-preview-frame.component';
import { IssueDetailsComponent } from './content-preview-frame/issue-details/issue-details.component';
import { IssueCommentListComponent } from './content-preview-frame/issue-details/issue-comment-list/issue-comment-list.component';


@NgModule({
  declarations: [
    ContentPreviewFrameComponent,
    IssueDetailsComponent,
    IssueCommentListComponent
  ],
  imports: [
    CommonModule,
    ContentPreviewRoutingModule
  ]
})
export class ContentPreviewModule { }
