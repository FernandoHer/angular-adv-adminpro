import { Component, Input, Output, EventEmitter} from '@angular/core';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  @Input() labels: string[] = ['Ventas', 'Sueldos', 'Comisión'];
  @Input() data: number[] = [];
  @Input() title: string = 'Sin titulo';
  // @Output() title: EventEmitter<number> = new EventEmitter();



  public label: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data1 = [
    [350, 450, 100],
  ];
  public colors: Color[] = [
    {backgroundColor: ['blue', 'red', 'FFB414']}
  ];

}
