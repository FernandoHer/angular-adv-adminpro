import { Component} from '@angular/core';


@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component{
  public title1: string = 'Equipo';
  public labels1: string[] = ['Partidos Jugados', 'Partidos Ganados', 'Partidos Perdidos'];
  public data1 = [
    [350, 450, 100]
  ];
  public title2: string = 'Super Ventas';
  public labels2: string[] = ['Sales', 'In-Store ', 'Mail-Order'];
  public data2 = [
    [120, 50, 100]
  ];
  public title3: string = 'Almacen';
  public labels3: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public data3 = [
    [30, 40, 100]
  ];
}