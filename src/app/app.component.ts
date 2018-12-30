import { Component } from '@angular/core';
import { Configuracion } from './models/configuracion';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string;
  public descripcion:string;
  public config;
  public mostrarCurso:boolean=true;

  constructor(){
  	this.title=Configuracion.titulo;
  	this.descripcion=Configuracion.descripcion;
  	this.config=Configuracion;
  }
  ocultarCurso(value){
  	this.mostrarCurso=value;
  }
}
