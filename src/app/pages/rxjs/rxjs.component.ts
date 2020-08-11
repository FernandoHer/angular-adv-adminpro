import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy {

public intervalSubs: Subscription;

  constructor() {
    this.intervalSubs = this.recuperarCircuito()
      .subscribe (console.log);
   }

  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }


recuperarCircuito(): Observable<number> {
  return  interval(100)
            .pipe(
              map ( valor => (valor + 1)),
              filter( valor => (valor % 2 === 0) ? true : false ),
            take(1000),
            ); 
}
}