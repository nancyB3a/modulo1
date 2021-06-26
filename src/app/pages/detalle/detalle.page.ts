import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  miTitulo = 'Pág. Detalle';
  personaje=null;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.queryParams.subscribe(params => {
        this.personaje = JSON.parse(params.personaje);
    });
  }

  ngOnInit() {
      //Esto nos sirve para escribir en la consola y ver si efectivamente llegó el objeto
    console.log(this.personaje);
    this.miTitulo = this.personaje.name;
  }

}
