import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from 'src/app/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
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

  goBack() {
    this.location.back();
  }

  deleteProduct() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.productService.deleteProduct(id)
      .subscribe(() => this.goBack());
  }
}