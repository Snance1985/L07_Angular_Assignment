import { Component } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  product: Product = {
    id: 0,
    productName: '',
    description: '',
    price: 0
  };

  constructor(private productService: ProductService) { }

  createProduct() {
    this.productService.createProduct(this.product)
      .subscribe(() => this.product = {
        id: 0,
        productName: '',
        description: '',
        price: 0
      });
  }
}