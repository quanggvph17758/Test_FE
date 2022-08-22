import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './User/list/list.component';
import { CreateComponent } from './User/create/create.component';
import { EditComponent } from './User/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { UserServiceService } from './Service/user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './Login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListCateComponent } from './Category/list-cate/list-cate.component';
import { CreateCateComponent } from './Category/create-cate/create-cate.component';
import { EditCateComponent } from './Category/edit-cate/edit-cate.component';
import { ListProComponent } from './Product/list-pro/list-pro.component';
import { CreateProComponent } from './Product/create-pro/create-pro.component';
import { EditproComponent } from './Product/editpro/editpro.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent,
    LoginComponent,
    ListCateComponent,
    CreateCateComponent,
    EditCateComponent,
    ListProComponent,
    CreateProComponent,
    EditproComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
