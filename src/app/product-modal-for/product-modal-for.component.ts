import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product.model';
import { DataService } from '../products/data.service';

@Component({
  selector: 'app-product-modal-for',
  templateUrl: './product-modal-for.component.html',
  styleUrls: ['./product-modal-for.component.css'],
})
export class ProductModalForComponent implements OnInit {
  constructor(public DataService: DataService, private route: ActivatedRoute) {}
  product: Product;

  ngOnInit(): void {
    this.DataService.getData().subscribe(
      (data) =>
        (this.product = data.find(
          (p) => p.id == this.route.snapshot.params['Id']
        ) as Product)
    );
  }
}
