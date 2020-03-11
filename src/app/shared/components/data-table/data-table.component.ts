import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface Row {
  name: string;
  position: number;
  rating: number;
}

const ELEMENT_DATA: Row[] = [
  { position: 1, name: 'node', rating: 2 },
  { position: 2, name: 'Angular', rating: 1 },
  { position: 3, name: 'Datenmodellierung', rating: 3 },
  { position: 4, name: 'Klassenmodellierung', rating: 4 },
  { position: 5, name: 'UML', rating: 1 },
  { position: 6, name: 'Objektorientierte Analyse', rating: 1 },
  { position: 7, name: 'Objektorientiertes Design', rating: 4 },
  { position: 8, name: 'Agil', rating: 3 },
  { position: 9, name: 'Jenkins', rating: 2 },
  { position: 10, name: 'Jira', rating: 2 },
  { position: 11, name: 'TypeScript', rating: 4 },
];

@Component({
  selector: 'kosaml-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'rating' ];
  dataSource = new MatTableDataSource<Row>(ELEMENT_DATA);

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
