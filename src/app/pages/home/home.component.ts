import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  frmOrdenTrabajo !: FormGroup;

  constructor(private modal: NgbModal, private formBuilder : FormBuilder) {
    
  }

  ngOnInit() {
    //Formulario guardar un empleado
    this.frmOrdenTrabajo = this.formBuilder.group({
      fechaAviso: ['', Validators.required],
      jobIdColina: ['', Validators.required],
    });
  }

  guardaraOT(){

  }


  modalOT(modal : any){
    this.modal.open(modal, { size : "ml"})
  }

  closeModalNuevo() {
    this.modal.dismissAll();
    this.frmOrdenTrabajo.reset();
  }

}

