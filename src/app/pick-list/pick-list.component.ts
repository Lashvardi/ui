import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductService } from '../carousel/product.service';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrl: './pick-list.component.css'
})
export class PickListComponent {
  sourceProducts!: any;

  targetProducts!: any;

  constructor(
    private carService: ProductService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
      this.carService.getProductsSmall().then(products => {
          this.sourceProducts = products;
          this.cdr.markForCheck();
      });
      this.targetProducts = [];
  }
}
