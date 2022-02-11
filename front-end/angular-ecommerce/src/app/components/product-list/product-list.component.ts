import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list-table',
 // templateUrl: './product-list.component.html',
  templateUrl: './product-list-table.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] ;
  
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.listProducts();
  }

  listProducts() {
    this.productService.getProductList().subscribe(
      data => {
        this.products = data;
      }
    )
  }

}





// import { Component, OnInit } from '@angular/core';
// import { Product } from 'src/app/common/product';
// import { ProductService } from 'src/app/services/product.service';

// @Component({
//   selector: 'app-product-list',
//   templateUrl: './product-list.component.html',
//   styleUrls: ['./product-list.component.css']
// })


// export class ProductListComponent implements OnInit {

//   products: Product[];
//   constructor( private productService: ProductService  ) { }



//   ngOnInit(): void {

//     this.listProducts();

//   }


//   listProducts(){
//     this.productService.getProductList().subscribe( data => {
//         this.products = data; }

// )
//   }

// }
