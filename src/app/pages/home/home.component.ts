import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from '../../services/home.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  frmOrdenTrabajo !: FormGroup;

  constructor(private modal: NgbModal, private formBuilder: FormBuilder, private home: HomeService) {

  }

  ngOnInit() {
    //Formulario guardar un empleado
    this.frmOrdenTrabajo = this.formBuilder.group({
      fechaAviso: ['', Validators.required],
      jobIdColina: ['', Validators.required],
    });
  }


  //GUARDAR NUEVA OT
  guardaraOT() {
    this.home.guardarOT(this.frmOrdenTrabajo.value).subscribe({
      next: (resp: any) => {
        console.log(resp);
        this.frmOrdenTrabajo.reset();
        this.modal.dismissAll();
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Orden de trabajo creada con éxito.'
        })

      }, error: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No fue posible crear la orden de trabajo, intente nuevamente.',
        })
      }
    })
  }


  modalOT(modal: any) {
    this.modal.open(modal, { size: "ml" })
  }

  closeModalNuevo() {
    this.modal.dismissAll();
    this.frmOrdenTrabajo.reset();
  }

}

