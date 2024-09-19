import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  // @ViewChild('audioElements', { static: false }) audioElements!: ElementRef;

  constructor() {}

  ngOnInit(): void {
    // this.checkTime();
  }
  // checkTime() {
  //   const currentTime = new Date();
  //   const currentHour = currentTime.getHours();
  //   const currentMinutes = currentTime.getMinutes();

  //   // Hora de inicio: 21:00
  //   const startHour = 21;
  //   const startMinutes = 0;

  //   // Hora de fin: 01:30 (del día siguiente)
  //   const endHour = 1;
  //   const endMinutes = 30;

  //   // Comprobar si la hora actual está en el rango permitido
  //   if (
  //     (currentHour >= startHour || currentHour < endHour) ||
  //     (currentHour === endHour && currentMinutes <= endMinutes)
  //   ) {
  //     this.audioElements.nativeElement.controls = true; // Habilitar controles
  //   } else {
  //     this.audioElements.nativeElement.controls = false; // Deshabilitar controles
  //   }
  // }

}
