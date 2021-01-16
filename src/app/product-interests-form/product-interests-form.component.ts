import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductInterest } from '../product-interest';
import { ProductInterestsService } from '../product-interests.service';

@Component({
  selector: 'app-product-interests-form',
  templateUrl: './product-interests-form.component.html',
  styleUrls: ['./product-interests-form.component.css']
})
export class ProductInterestsFormComponent implements OnInit {

  item: ProductInterest;
  errorFields: string[];

  @ViewChild("alert") alert;

  constructor(protected route: ActivatedRoute, protected router: Router, private service: ProductInterestsService) {
    this.item = new ProductInterest();
    this.errorFields = [];
  }

  ngOnInit(): void {
    let product_id: string = this.route.snapshot.paramMap.get('product_id');
    let id: string = this.route.snapshot.paramMap.get('id');

    if(product_id != null) {
      if(id != null) {
        this.service.getOne(parseInt(product_id), parseInt(id)).subscribe((data: any) => this.item = data);
      } else {
        this.item.product_id = parseInt(product_id);
      }
    }
  }

  save() {
    this.errorFields = [];

    if(this.item.id) {
      this.service.update(this.item).subscribe(
        (data: any) => this.callbackSuccess(),
        (error: any) => this.callbackError(error)
      );
    } else {
      this.service.insert(this.item).subscribe(
        (data: any) => this.callbackSuccess(),
        (error: any) => this.callbackError(error)
      );
    }
  }

  isInvalidField(field) {
    return (this.errorFields.indexOf(field) != -1);
  }

  private callbackSuccess() {
    this.router.navigate(['/produtos/' + this.item.product_id + '/interesses']);
  }

  private callbackError(error: any) {
    console.log(error);

    Object.keys(error.error).map(field => this.errorFields.push(field));


    this.alert.type = "danger";

    if(error.status == 422) {
      this.alert.message = "Não foi possível salvar o registro. Os campos destacados estão inválidos.";
    } else {
      this.alert.message = "Ocorreu um problema ao salvar o registro.";
    }
  }

}
