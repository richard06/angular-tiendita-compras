import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;

  constructor(
    //inyeccion de dependencias
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) { 
    this.items=this.cartService.getItems();
    this.checkoutForm= this.formBuilder.group({
      name: '',
      address: ''
    })
  }

  ngOnInit() {
    this.items=this.cartService.getItems();//obtener todos los productos seleccionados para comprar
  }

//Metodo para que los usuarios puedan enviar sus datos a trvaez del formulario, despues de ello, el formulario debe reiniciarse y el carrito borarse
  onSubmit(customerData){
    //Proceso de datos de pago aqui
    console.warn('SU pedido ha sido enviado', customerData);

    this.items= this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}