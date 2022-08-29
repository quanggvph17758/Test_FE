import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCateComponent } from './Category/create-cate/create-cate.component';
import { EditCateComponent } from './Category/edit-cate/edit-cate.component';
import { ListCateComponent } from './Category/list-cate/list-cate.component';
import { LoginComponent } from './Login/login.component';
import { CreateProComponent } from './Product/create-pro/create-pro.component';
import { EditProComponent } from './Product/edit-pro/edit-pro.component';
import { ListProComponent } from './Product/list-pro/list-pro.component';
import { CreateComponent } from './User/create/create.component';
import { EditComponent } from './User/edit/edit.component';
import { ListComponent } from './User/list/list.component';

const routes: Routes = [
  {path:'', component:ListComponent},
  {path:'list', component:ListComponent},
  {path:'create', component:CreateComponent},
  {path:'edit', component:EditComponent},
  {path:'login', component:LoginComponent},
  {path:'list-cate', component:ListCateComponent},
  {path:'create-cate', component:CreateCateComponent},
  {path:'edit-cate', component:EditCateComponent},
  {path:'list-pro', component:ListProComponent},
  {path:'create-pro', component:CreateProComponent},
  {path:'edit-pro', component:EditProComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
