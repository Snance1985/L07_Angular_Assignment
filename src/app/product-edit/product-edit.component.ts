import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.getProduct(id)
      .subscribe(product => this.product = product);
  }

  updateProduct() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.updateProduct(id, this.product!)
      .subscribe(() => this.goBack());
  }

  goBack() {
    this.location.back();
  }
}