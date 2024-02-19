import { TarjetaService } from './../../services/tarjeta.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tarjeta-credito',
  templateUrl: './tarjeta-credito.component.html',
  styleUrls: ['./tarjeta-credito.component.css']
})
export class TarjetaCreditoComponent {

  listTarjetas:any[]=[];

  form: FormGroup;

  constructor(private fb:FormBuilder, private toastr: ToastrService,
    private _tarjetaService:TarjetaService){
    this.form = this.fb.group({
      titular:['', Validators.required],
      numeroTarjeta:['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]],
      fechaExpiracion:['', [Validators.required,Validators.minLength(5), Validators.maxLength(5)]],
      cvv:['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]]
    })
  }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

  obtenerTarjetas(){
    this._tarjetaService.getListTarjetas().subscribe(data => {
      console.log(data);
      this.listTarjetas = data;
    }, error => {
      console.log(error);
    } )
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
    this.toastr.success('La tarjeta fue registrada con éxito', 'Tarjeta registrada!');
    this.form.reset();
  }

  eliminarTarjeta(id:number){
    this._tarjetaService.deleteTarjeta(id).subscribe(data => {
      this.toastr.error('La tarjeta fue eliminada con éxito', 'Tarjeta eliminada!');
      this.obtenerTarjetas();
    }, error => {
      console.log(error);
    } )

  }

}
