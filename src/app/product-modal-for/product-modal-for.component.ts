import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { DataService } from '../products/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-modal-for',
  templateUrl: './product-modal-for.component.html',
  styleUrls: ['./product-modal-for.component.css'],
})
export class ProductModalForComponent implements OnInit {
  @Input() product: Product;
  constructor(public DataService: DataService, public route: ActivatedRoute) {}
  products: Product[];

  ngOnInit(): void {
    this.products = this.DataService.products;
    // const routeParams = this.route.snapshot.paramMap;
    // const productIdFromRoute = Number(routeParams.get('productId'));

    // // Find the product that correspond with the id provided in route.
    // this.products = product.find(
    //   (product) => product.id === productIdFromRoute
    // );
  }
}
