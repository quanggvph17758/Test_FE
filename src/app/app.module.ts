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
import { EditProComponent } from './Product/edit-pro/edit-pro.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ShoppingCartComponent } from './Oder/shopping-cart/shopping-cart.component';
import { ListOderComponent } from './Oder/list-oder/list-oder.component';
import { DetailOderComponent } from './Oder/detail-oder/detail-oder.component';
import { NgToastModule } from 'ng-angular-popup';
import { YourOderComponent } from './Oder/your-oder/your-oder.component';
import { YourOderDetailComponent } from './Oder/your-oder-detail/your-oder-detail.component';
import { UpdateComponent } from './YourProfile/update/update.component';
import { ChangePasswordComponent } from './YourProfile/change-password/change-password.component';
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
    EditProComponent,
    RegisterComponent,
    HomeComponent,
    ShoppingCartComponent,
    ListOderComponent,
    DetailOderComponent,
    YourOderComponent,
    YourOderDetailComponent,
    UpdateComponent,
    ChangePasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    NgToastModule,
  ],
  providers: [UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
