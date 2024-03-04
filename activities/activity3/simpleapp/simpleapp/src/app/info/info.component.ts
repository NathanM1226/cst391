import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {

  @Input() name: string | undefined;
  quantity = 0;
  products: string[] = [];
  selectedProduct = "Star Wars";

  ngOnInit() {
    this.quantity = 0;
    this.products = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];
    this.selectedProduct = "Star Wars";
  }

  newInfo(){
    this.quantity = 0;
    this.products = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];
    this.selectedProduct = "Star Wars";
    console.log("In newInfo() and resetting info");
  }

  onSubmit(){
    console.log("In onSubmit with a quantity of " + this.quantity + " and Movie selected is " + this.selectedProduct);
  }
}
