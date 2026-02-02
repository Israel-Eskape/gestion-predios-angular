import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

import { PrediosService } from '../../../../core/services/predios.service';
import { Predio } from '../../models/predio.model';

@Component({
  standalone: true,
  selector: 'app-predio-form',
  templateUrl: './predio-form.html',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class PredioFormComponent {

  form: FormGroup;

  tiposPredio = ['URBANO', 'RURAL'];

  constructor(
    private fb: FormBuilder,
    private prediosService: PrediosService,
    private dialogRef: MatDialogRef<PredioFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Predio | null
  ) {
    this.form = this.fb.group({
      claveCatastral: ['', Validators.required],
      propietario: ['', Validators.required],
      superficieTerreno: [null, [Validators.required, Validators.min(1)]],
      tipoPredio: ['URBANO', Validators.required]
    });

    if (data) {
      this.form.patchValue(data);
    }
  }

  guardar() {
    if (this.form.invalid) return;

    const predio = this.form.value as Predio;

    const request$ = this.data
      ? this.prediosService.update(this.data.id, predio)
      : this.prediosService.create(predio);

    request$.subscribe({
      next:()=>{
        this.prediosService.triggerRefreshSignal(),
        this.dialogRef.close(true);
      },
      error:() => alert('Error al guardar el predio')
    });
  }

  cancelar() {
    this.dialogRef.close(false);
  }
}
