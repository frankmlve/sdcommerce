import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ProductsComponent } from "./components/products/products.component";
import { AdminRoutingModule } from "./general-routing.module";
import { GeneralComponent } from "./general.component";

@NgModule({
    declarations: [
      GeneralComponent,
      ProductsComponent
    ],
    imports: [
      CommonModule,
      AdminRoutingModule,
      SharedModule,
      FormsModule,
      ReactiveFormsModule
    ]
  })
  export class GeneralModule { }