import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { PrediosListComponent } from '../../components/predios-list/predios-list';
import { PredioFormComponent } from '../../components/predio-form/predio-form';
import { PrediosService } from '../../../../core/services/predios.service';
import { Predio } from '../../models/predio.model';

@Component({
  standalone: true,
  selector: 'app-predios-page',
  templateUrl: './predios-page.html',
  imports: [
    CommonModule,
    MatDialogModule,
    PrediosListComponent
  ]
})
export class PrediosPage {
  constructor(
    private dialog: MatDialog,
    private prediosService: PrediosService
  ) {}

  openForm(predio?: Predio) {
    const ref = this.dialog.open(PredioFormComponent, {
      width: '500px',
      data: predio ?? null
    });

    ref.afterClosed().subscribe(ok => {
      if (ok) window.location.reload();
    });
  }

  eliminar(id: number) {
    this.prediosService.delete(id).subscribe(() => {
      window.location.reload();
    });
  }
}
