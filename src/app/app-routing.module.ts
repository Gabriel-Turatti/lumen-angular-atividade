import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProductsListComponent },
  { path: 'produtos/novo', component: ProductsFormComponent },
  { path: 'produtos/:id', component: ProductsFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
