import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductInterestsFormComponent } from './product-interests-form/product-interests-form.component';
import { ProductInterestsListComponent } from './product-interests-list/product-interests-list.component';
import { ProductsFormComponent } from './products-form/products-form.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProductsListComponent },
  { path: 'produtos/novo', component: ProductsFormComponent },
  { path: 'produtos/:id', component: ProductsFormComponent },
  { path: 'produtos/:product_id/interesses', component: ProductInterestsListComponent },
  { path: 'produtos/:product_id/interesses/novo', component: ProductInterestsFormComponent },
  { path: 'produtos/:product_id/interesses/:id', component: ProductInterestsFormComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
