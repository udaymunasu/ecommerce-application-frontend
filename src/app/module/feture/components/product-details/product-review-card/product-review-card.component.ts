import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-review-card',
  templateUrl: './product-review-card.component.html',
  styleUrls: ['./product-review-card.component.scss']
})
export class ProductReviewCardComponent implements OnInit {

  constructor() { }
  rating: number=4;

  ngOnInit(): void {
  }

}
