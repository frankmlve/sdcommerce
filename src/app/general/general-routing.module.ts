import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsComponent } from "./components/products/products.component";
import { GeneralComponent } from "./general.component";

const routes: Routes = [
    {
      path: '',
      component: GeneralComponent,
      children: [
        { path: 'products', component: ProductsComponent}
      ]
    },
  ];
  
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
  })
  export class AdminRoutingModule { }