import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCateComponent } from './Category/create-cate/create-cate.component';
import { EditCateComponent } from './Category/edit-cate/edit-cate.component';
import { ListCateComponent } from './Category/list-cate/list-cate.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './Login/login.component';
import { CheckoutOderComponent } from './Oder/checkout-oder/checkout-oder.component';
import { DetailOderComponent } from './Oder/detail-oder/detail-oder.component';
import { ListOderComponent } from './Oder/list-oder/list-oder.component';
import { CreateProComponent } from './Product/create-pro/create-pro.component';
import { EditProComponent } from './Product/edit-pro/edit-pro.component';
import { ListProComponent } from './Product/list-pro/list-pro.component';
import { RegisterComponent } from './register/register.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CreateComponent } from './User/create/create.component';
import { EditComponent } from './User/edit/edit.component';
import { ListComponent } from './User/list/list.component';

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
  {path:'list-order', component:ListOderComponent},
  {path:'check-out', component:CheckoutOderComponent},
  {path:'detail-order', component:DetailOderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
