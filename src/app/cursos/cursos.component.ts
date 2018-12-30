import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, DoCheck, OnDestroy {
	
	public nombre:string;
	public horas:number;
  public mostrar:boolean=true;
  public costo:number;

  constructor(private _route: ActivatedRoute,private _router: Router) {
  	this.nombre="Angular";
  	this.horas=100;
    
    
    //console.log("Se ha cargado el componente cursos.component.ts");
  }
  ngOnInit() {
  	//console.log("ngOnInit ejecutado");
    this._route.params.subscribe((params:Params)=>{
      this.nombre=params.nombre;
      this.costo=params.costo;
    });
  }
  ngDoCheck(){
  	//console.log("ngDoCheck ejecutado");
  }
  ngOnDestroy(){
  	//console.log("OnDestroy ejecutado");
  }
  cambiarNombre(){
    if(this.nombre=="Angular"){
  	  this.nombre="MEAN stack";
    }else{
      this.nombre="Angular";
    }
  }
  ocultar(value){
    this.mostrar=value;
  }
  redirigirNombre(){
    this._router.navigate(['/cursos/anderson']);
  }
  redirigirCosto(){
    this._router.navigate(['/cursos/sara/200']);
  }
}
