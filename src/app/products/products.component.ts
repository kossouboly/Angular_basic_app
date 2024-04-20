import {Component, OnInit, signal} from '@angular/core';

@Component ({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


  public products = [
    {id: 1, name: "computer", price: 2000},
    {id: 2, name: "ram", price: 700},
    {id: 3, name: "Sdd", price: 100}
  ]
  public keyword: string = ""


  constructor () {

  }

  ngOnInit (): void {
  }

  deleteProduct (p: any) {
    let index = this.products.indexOf (p)
    this.products.splice (index, 1)

  }

  search () {
    console.log (this.keyword)
    let result=[]
    for(let p of this.products){
      if (p.name.includes(this.keyword)){
        result.push(p)
      }
    }

    this.products=[]
  }
}
