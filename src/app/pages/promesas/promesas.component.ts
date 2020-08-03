import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { resolve } from 'dns';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: []
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    this.getUsuarios().then( usuarios => {
      console.log( usuarios );
    });

   /* const promesa = new Promise( ( resolve, reject)  => {

      if(true){
        resolve('Inicio de promesa');
      }else{
        reject('Existe un error');
      }
      

    });

    promesa.then( (mensaje) => {
      console.log(mensaje);
    })
    .catch( error => console.log( 'Devuelvo el error', error));
    
    console.log('"Fin de la promesa"');
  }*/
 }

  getUsuarios() {

    return new Promise( resolve =>{ 
      fetch('https://reqres.in/api/users')
        .then( resp => resp.json())
        .then( body => resolve( body.data));
  });

  }

}
