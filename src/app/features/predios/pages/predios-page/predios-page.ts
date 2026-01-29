import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { PredioFormComponent } from '../../components/predio-form/predio-form';
import { PrediosListComponent } from '../../components/predios-list/predios-list';
import { PrediosService } from '../../../../core/services/predios.service';
import { Predio } from '../../models/predio.model';

@Component({
  standalone: true,
  selector: 'app-predios-page',
  templateUrl: './predios-page.html',
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    PrediosListComponent
  ]
})
export class PrediosPage {

  @ViewChild(PrediosListComponent)
  lista!: PrediosListComponent;

  constructor(
    private dialog: MatDialog,
    private prediosService: PrediosService
  ) {}

  openForm(predio?: Predio) {
    const dialogRef = this.dialog.open(PredioFormComponent, {
      width: '500px',
      data: predio ?? null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.lista.recargar();
      }
    });
  }

  eliminar(id: number) {
    this.prediosService.delete(id).subscribe({
      next: () => this.lista.recargar(),
      error: () => alert('Error al eliminar predio')
    });
  }
}
