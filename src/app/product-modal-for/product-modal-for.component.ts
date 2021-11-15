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
  @Input() product: Product;
  constructor(
    public DataService: DataService,
    public ActivatedRouter: ActivatedRoute
  ) {}
  products: Product[];
  public idList: any;
  ngOnInit(): void {
    this.DataService.getData().subscribe((data) => (this.products = data));

  }
}
