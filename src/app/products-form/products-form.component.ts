import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-form',
  templateUrl: './products-form.component.html',
  styleUrls: ['./products-form.component.css']
})
export class ProductsFormComponent implements OnInit {

  item: Product;

  constructor(protected route: ActivatedRoute, protected router: Router, private service: ProductsService) {
    this.item = new Product;
    this.item.active = true;
  }

  ngOnInit(): void {
    let id: string = this.route.snapshot.paramMap.get("id");

    if(id != null) {
      this.service.getOne(parseInt(id)).subscribe((data: any) => this.item = data);
    }
  }

  save() {
    if(this.item.id) {
      this.service.update(this.item).subscribe(
        (data: any) => this.callBackSuccess(),
        (error: any) => this.callBackError(error)
      );
    } else {
      this.service.insert(this.item).subscribe(
        (data: any) => this.callBackSuccess(),
        (error: any) => this.callBackError(error)
      );
    }
  }

  private callBackSuccess() {
    this.router.navigate(['/produtos']);
  }

  private callBackError(error: any) {
    alert("ocorreu um erro ao salvar");
    console.log(error);
  }

}
