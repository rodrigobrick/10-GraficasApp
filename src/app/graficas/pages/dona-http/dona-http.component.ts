import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor( private graficasService: GraficasService) { }

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [ ];

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: ['#289BF8','#23B7D9','#32F0E1','#23D996','#28F871']
    }
  ]

  ngOnInit(): void {

    this.graficasService.getUsuariosRRSS()
        .subscribe( data => {
          const labels = Object.keys( data )
          const values = Object.values( data )

          this.doughnutChartLabels = labels
          this.doughnutChartData.push(values)
        })
  }

}
