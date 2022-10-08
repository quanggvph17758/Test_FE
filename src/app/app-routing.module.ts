import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCateComponent } from './Category/create-cate/create-cate.component';
import { EditCateComponent } from './Category/edit-cate/edit-cate.component';
import { ListCateComponent } from './Category/list-cate/list-cate.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/login.component';
import { DetailOderComponent } from './Oder/detail-oder/detail-oder.component';
import { ListOderComponent } from './Oder/list-oder/list-oder.component';
import { CreateProComponent } from './Product/create-pro/create-pro.component';
import { EditProComponent } from './Product/edit-pro/edit-pro.component';
import { ListProComponent } from './Product/list-pro/list-pro.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './Oder/shopping-cart/shopping-cart.component';
import { CreateComponent } from './User/create/create.component';
import { EditComponent } from './User/edit/edit.component';
import { ListComponent } from './User/list/list.component';
import { YourOderComponent } from './Oder/your-oder/your-oder.component';
import { YourOderDetailComponent } from './Oder/your-oder-detail/your-oder-detail.component';
import { ListFavouriteComponent } from './Favourite/list-favourite/list-favourite.component';
import { UpdateComponent } from './YourProfile/update/update.component';
import { ChangePasswordComponent } from './YourProfile/change-password/change-password.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'list', component:ListComponent},
  {path:'create', component:CreateComponent},
  {path:'edit', component:EditComponent},
  {path:'login', component:LoginComponent},
  {path:'list-cate', component:ListCateComponent},
  {path:'create-cate', component:CreateCateComponent},
  {path:'edit-cate', component:EditCateComponent},
  {path:'list-pro', component:ListProComponent},
  {path:'create-pro', component:CreateProComponent},
  {path:'edit-pro', component:EditProComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'cart', component:ShoppingCartComponent},
  {path:'detail-order', component:DetailOderComponent},
  {path:'list-order', component:ListOderComponent},
  {path:'your-order', component:YourOderComponent},
  {path:'your-orderDetail', component:YourOderDetailComponent},
  {path:'favourite', component:ListFavouriteComponent},
  {path:'yourProfile', component:UpdateComponent},
  {path:'changePass', component:ChangePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
