import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HomeService } from '../../services/home.service';
import Swal from 'sweetalert2';
import { stringify } from 'querystring';
import { Cliente } from '../../interfaces/cliente';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  frmOrdenTrabajo !: FormGroup;
  jobIDColinaInput: any;
  clientes : Cliente[] = [];

  constructor(private modal: NgbModal, private formBuilder: FormBuilder, private home: HomeService) {
  }

  ngOnInit() {
    //Formulario guardar un empleado
    this.frmOrdenTrabajo = this.formBuilder.group({
      fechaAviso: ['', Validators.required],
      jobIdColina: ['', Validators.required],
      cliente: ['', Validators.required],
    });
    this.home.obtieneClientes().subscribe({
      next: (resp: any) => {
        console.log(resp)
        this.clientes = resp;
      }
    })
  }

  //GUARDAR NUEVA OT
  guardaraOT() {
    this.home.guardarOT(this.frmOrdenTrabajo.value).subscribe({
      next: (resp: any) => {
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
    //Obtiene JOB ID
    this.home.obtieneJobId().subscribe({
      next: (resp: any) => {
        const number = parseInt(resp[0].item) + 1;
        this.jobIDColinaInput = 'ACL' + number
      }
    })
    this.modal.open(modal, { size: "ml" })
  }

  closeModalNuevo() {
    this.modal.dismissAll();
    this.frmOrdenTrabajo.reset();
  }

}

