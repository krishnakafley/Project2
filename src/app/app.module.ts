import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostComponent } from './component/post/post.component';
import { RepliesComponent } from './component/replies/replies.component';
import { ThreadComponent } from './component/thread/thread.component';
import { GridComponent } from './component/grid/grid.component';
import { CreateReplyComponent } from './component/create-reply/create-reply.component';
import { MakeThreadComponent } from './component/make-thread/make-thread.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { UserlistComponent } from './component/userlist/userlist.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    RepliesComponent,
    ThreadComponent,
    GridComponent,
    CreateReplyComponent,
    MakeThreadComponent,
    RegisterComponent,
    LoginComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
