import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-reporte02-olivacabanillas',
  templateUrl: './reporte02-olivacabanillas.component.html',
  styleUrl: './reporte02-olivacabanillas.component.css'
})
export class Reporte02OlivacabanillasComponent implements OnInit {
  data: any[] = [];
  view: [number, number] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'X Axis';
  showYAxisLabel = true;
  yAxisLabel = 'Y Axis';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  colorSchemePC = "vivid";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe((response: any[]) => {
      this.data = response.map(item => {
        return {
          name: item.ckocuserName,
          value: item.ckoccostoMantenimientos
        };
      });
    });
  }

  onSelect(event: any) {
    console.log(event);
  }
}