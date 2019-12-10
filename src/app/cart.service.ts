import { Injectable } from '@angular/core';
import { HttpClient } from'@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
      items =[];
    
  constructor(
    private http: HttpClient  //injeccion de HttpClient
  ) {

  }
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

      //metodo para recupear los datos de envio de precios( tipos y precios)
      getShippingPrices(){
        return this.http.get('./assets/shipping.json');
      }
}