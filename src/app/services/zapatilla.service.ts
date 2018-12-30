import { Injectable } from '@angular/core';
import { Zapatilla } from '../models/zapatilla';

@Injectable()
export class ZapatillaService{
	public zapatillas: Array<Zapatilla>;

	constructor(){
		this.zapatillas = [
			new Zapatilla("Deportiva","Nike","Rojas",49,true),
			new Zapatilla("Casual","Puma","Negras",50,true),
			new Zapatilla("Semi Casual","Adidas","Verde",20,false),
			new Zapatilla("Chancleta","Jordan","Azul",80,false),
			new Zapatilla("Sandalia","Nike","Gris",180,true),
			new Zapatilla("Cueros","Blues","Orange",280,false)
		];
	}

	getTexto(){
		return "Hola Mundo desde un servicio";
	}

	getZapatillas(): Array<Zapatilla>{
		return this.zapatillas;
	}
}