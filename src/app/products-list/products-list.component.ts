import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  items: Product[];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.service.getAll().subscribe((data: any) => this.items = data);    
  }

  delete(id: number) {
    this.service.delete(id).subscribe(
      (data: any) => this.callBackSuccess(),
      (error: any) => this.callBackError(error)
    );
  }

  private callBackSuccess() {
    alert('Registro excluído com sucesso');
    this.getAll();
  }

  private callBackError(error: any) {
      alert('Ocorreu um erro ao excluir');
      console.log(error);
  }
}
