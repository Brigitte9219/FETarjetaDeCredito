import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  form: FormGroup;

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      titular:['', Validators.required],
      numeroTarjeta:['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion:['', [Validators.required,Validators.minLength(5), Validators.maxLength(5)]],
      cvv:['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    })
  }

  agregarTarjeta(){
    console.log(this.form);

    const tarjeta:any = {
      titular: this.form.get('titular')?.value,
        numeroTarjeta: this.form.get('numeroTarjeta')?.value,
        fechaExpiracion: this.form.get('fechaExpiracion')?.value,
        cvv: this.form.get('cvv')?.value,
    }

    this.listTarjetas.push(tarjeta);
    this.form.reset();
  }


}
