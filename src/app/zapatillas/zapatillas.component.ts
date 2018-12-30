import { Component, OnInit } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';
import { ZapatillaService } from '../services/zapatilla.service';


@Component({
  selector: 'app-zapatillas',
  templateUrl: './zapatillas.component.html',
  styleUrls: ['./zapatillas.component.css'],
  providers: [ZapatillaService]
})
export class ZapatillasComponent implements OnInit{
	public zapatillas: Array<Zapatilla>;
	public marcas:string[];
	public color:string="orange";
	public nueva_marca:string;
	constructor(private _zapatillaService: ZapatillaService)
	{ 
		this.marcas=new Array();
		this.nueva_marca="Nuevo";
	}
	ngOnInit(){
		this.zapatillas = this._zapatillaService.getZapatillas();
		console.log(this.zapatillas);
		this.getMarcas();
	}

	getMarcas(){
		this.zapatillas.forEach((zapatilla,index)=>{
			if( this.marcas.indexOf(zapatilla.marca) < 0 ){
				this.marcas.push(zapatilla.marca);
			}
		});
		console.log(this.marcas);
	}
	addMarcas(){
		this.marcas.push(this.nueva_marca);
	}
	borrarMarcas(indice){
		this.marcas.splice(indice,1);
	}
	onBlur(){
		console.log("Saliste del input");
	}
	onKey(){
		console.log("Presionaste la tecla");
	}
}
