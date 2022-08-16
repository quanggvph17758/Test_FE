import { createComponent, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './User/create/create.component';
import { EditComponent } from './User/edit/edit.component';
import { ListComponent } from './User/list/list.component';

const routes: Routes = [
  {path:'list', component:ListComponent},
  {path:'create', component:CreateComponent},
  {path:'edit', component:EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
