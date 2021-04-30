import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  product_list = null;

  constructor(private service: DatabaseService) { }

  ngOnInit(): void {
     this.service.getAllProducts().subscribe(products => {
        this.product_list = products
        console.log(products)
     }
    )
  }



}
