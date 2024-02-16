import { Component } from '@angular/core';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent {

  listTarjetas:any[]=[
    { titular:'Juan Perez', numeroTarjeta:'123456',fechaExpiracion:'11/24', cvv:'123'},
    { titular:'Miguel Gonzalez', numeroTarjeta:'654321',fechaExpiracion:'12/24', cvv:'321'}
  ];
}
