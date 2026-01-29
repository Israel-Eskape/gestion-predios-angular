import {
  Component,
  EventEmitter,
  Output,
  ViewChild,
  OnInit,
  AfterViewInit
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { PrediosService } from '../../../../core/services/predios.service';
import { Predio } from '../../models/predio.model';

@Component({
  standalone: true,
  selector: 'app-predios-list',
  templateUrl: './predios-list.html',
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class PrediosListComponent
  implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'claveCatastral',
    'propietario',
    'tipoPredio',
    'superficieTerreno',
    'acciones'
  ];

  dataSource = new MatTableDataSource<Predio>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Output() edit = new EventEmitter<Predio>();
  @Output() remove = new EventEmitter<number>();

  constructor(private prediosService: PrediosService) {}

  ngOnInit() {
    this.cargarPredios();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }


  cargarPredios() {
    this.prediosService.getAll().subscribe({
      next: data => {
        this.dataSource.data = data;
      },
      error: () => alert('Error al cargar predios')
    });
  }

  selectedRow: any = null;

  selectRow(row: any) {
    this.selectedRow = row;
  }

  recargar() {
    this.cargarPredios();
  }

  editar(predio: Predio) {
    this.edit.emit(predio);
  }

  eliminar(id: number) {
    if (confirm('¿Seguro que deseas eliminar este predio?')) {
      this.remove.emit(id);
    }
  }
}
