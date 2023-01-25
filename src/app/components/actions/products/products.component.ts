import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  @Input() data: any;
  @Input() cid: any;
  @ViewChild('slides') slides: IonicSlides;
  selectedPage = '';
  productImageSearch = '';

  public getAllProductData: any;
  public items = [
    { name: 'Ipohon11' },
    { name: 'Ipohon12' },
    { name: 'Samsung Galaxy10' },
  ];
  public itemsValue: any;
  public arrowKeyLocation = -1;
  public arrowKeyLocationValue = -1;
  public selectedProduct = '';
  public manageSelectedProduct = '';
  public listOfValue = [];
  public description = '';
  public productData: any;
  public id: any;
  public valueSearch = '';
  public name = '';
  public flgBtn = '';
  public arrowKeyLocationVariant = -1;
  public listOfVariants = [];
  public listOfBanners: any = [];
  public productSku = '';
  public listOfTags = [];
  public arrowKeyLocationTag = -1;
  public offset = 0;
  public limit = 10;
  variantSearch = '';
  public slideOpts = {
    effect: 'flip',
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 5,
    zoom: true,
    scrollbar: true,
    direction: 'horizontal',
  };
  constructor() {}

  ngOnInit() {}
  setItems() {}
  async getAllProducts() {}
  getProductDetail(name) {
    this.manageSelectedProduct = name;
  }
  async searchProductDetail(name) {}
  async filterItems(ev: any) {}
  next() {
    this.slides.slideNext();
  }
  setValues() {}
  prev() {
    this.slides.slidePrev();
  }
  async filterValues(ev: any) {}
  keyDownValues(event: KeyboardEvent) {}
  setVariants() {}
  async filterVariant(ev: any) {}
  setProductImage() {}
  keyDownVariant(event: KeyboardEvent) {}
  async updateProduct() {}
  async deleteProductParameterForProduct(item) {}
  async deleteProductVariant(item) {}
  async openModal(item, flagModal) {}
  async handleModalDismiss(d) {}
  async showButton(name) {
    if (name == 'description') {
      this.flgBtn = 'description';
    } else if (name == 'name') {
      this.flgBtn = 'name';
    } else if (name == 'productSku') {
      this.flgBtn = 'productSku';
    }
  }
  setTags() {}
  async filterTag(ev: any) {}
  async validateControls() {}
  async deleteProductImage(row) {}
  async deleteProductTag(item) {}
  async reset() {}
  filterProductImage(event: any) {}
}
