import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
      items =[];

//Agregar producto a carrito
      addToCart(product){
        this.items.push(product);
      }
//obtener elementos del carrito
      getItems(){
        return this.items;
      }
//limpiar carrito de compras
      clearCart(){
        this.items=[];
        return this.items;
      }

  constructor() {

  }

}