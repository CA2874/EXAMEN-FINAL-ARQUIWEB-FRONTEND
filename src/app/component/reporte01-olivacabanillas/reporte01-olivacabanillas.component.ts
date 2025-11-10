import { Component } from '@angular/core';
import { Usercosto } from '../../model/usercosto';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';
import { Usermantenimiento } from '../../model/usermantenimiento';
@Component({
  selector: 'app-reporte01-olivacabanillas',
  templateUrl: './reporte01-olivacabanillas.component.html',
  styleUrl: './reporte01-olivacabanillas.component.css'
})
export class Reporte01OlivacabanillasComponent {

  lista: Usermantenimiento[] = [];



  displayedColumns = ['id', 'ckocuserName', 'ckocnumberMantenimientos','costoMAntenimientos'];
  dataSource = new MatTableDataSource<Usercosto>();

  constructor(private dataService: DataService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.dataService.getDataReport().subscribe({
      next: data => {
        this.dataSource.data = data;
        console.log(this.dataSource.data.length);
      }
    });

  }


}
