import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  templateUrl: './externo.component.html',
  styleUrls: ['./externo.component.css'],
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {
	public user:any;
	public userId:any;
	public fecha:any;
	public new_user: any;
	public usuario_guardado:any;

	constructor(private _peticionesService:PeticionesService){
		this.userId=1;
		this.fecha=new Date();
		this.new_user = {"name": "","job": ""}
	}

	ngOnInit() {
		this.cargarUser()
	}
	cargarUser(){
		this._peticionesService.getUser(this.userId).subscribe(
			result =>{
				this.user=result.data;
			},
				error=>{
  					console.log(<any>error);
			}
		);
		this.user=false;
	}
	onSubmit(form){
      this._peticionesService.addUser(this.new_user).subscribe(
        response => {
          this.usuario_guardado = response;
          form.reset();
          console.log(this.usuario_guardado);

        },
        error => {
          console.log(<any>error);
        }
      );
    }
}
