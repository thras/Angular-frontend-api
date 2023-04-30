import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductsAPIList, Product } from '../products.interfaces';
import { Subscription } from 'rxjs';
import { orderBy } from 'lodash-es';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy{
  constructor(private productsService: ProductsService){}


  loading = false;
  productsList: Product[] = []
  subscription: Subscription | undefined;

  productProductsSort: 'asc' | 'desc' = 'asc';
  costProducsSort: 'asc' | 'desc' = 'asc';


  ngOnInit(): void {
    console.log("Starting findall API call...")
    this.loading = true;
    this.subscription = this.productsService.findAll().subscribe({
      next: (apiData: ProductsAPIList) => {
        const {status, data} = apiData;
        this.productsList = data;
        console.log(status, data);
      },
      error: (error) => {
        this.loading = false;
        console.log(error)
      },
      complete: () => {
        this.loading = false;
        console.log("API call findall completed...");
      }
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  toggleSort(key: string){
    switch (key){
      case 'product':
        this.productProductsSort = this.productProductsSort === 'asc'?'desc': 'asc';
        this.productsList = orderBy(this.productsList, [key])
        break;
      case 'cost':
        this.costProducsSort = this.costProducsSort === 'asc'?'desc': 'asc';
        this.productsList = orderBy(this.productsList, [key])
        break;
      default:
        break;  
    }
  }

}
