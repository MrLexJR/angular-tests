import { Component } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styles: []
})
export class MedicoComponent {

  medicos: string[] = [];

  constructor(public _medicoService: MedicoService){

  }

  saludarMeido(nombre: string){
    return `Hola ${nombre}`
  }

  obtenerMedicos(){
    this._medicoService.getMedicos().subscribe((medicos) => this.medicos = medicos);
  }

}
