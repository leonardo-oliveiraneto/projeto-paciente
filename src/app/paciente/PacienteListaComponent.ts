import { Prazo } from './prazo';


import { Component } from '@angular/core';
import { paciente } from './paciente.cadastros';
import { PacienteModel } from './paciente.model';

@Component({
  moduleId: module.id,
  // tslint:disable-next-line: component-selector
  selector: 'Paciente-lista',
  templateUrl: 'Paciente-lista.component.html'
})
export class PacienteListaComponent {
  Paciente: PacienteModel[] = paciente;
}
