import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
@ViewChild('input1') input1!:ElementRef;
@ViewChild('input2') input2!:ElementRef;
@ViewChild('input3') input3!:ElementRef;
@ViewChild('input4') input4!:ElementRef;

@ViewChild('p1') p1!:ElementRef;
@ViewChild('p2') p2!:ElementRef;
@ViewChild('p3') p3!:ElementRef;
@ViewChild('p4') p4!:ElementRef;





showinput1(){
this.p1.nativeElement.classList.remove('d-none')
}
showinput2(){
  this.p2.nativeElement.classList.remove('d-none')
  }
  showinput3(){
    this.p3.nativeElement.classList.remove('d-none')
    }
    showinput4(){
      this.p4.nativeElement.classList.remove('d-none')
      }
       


}
