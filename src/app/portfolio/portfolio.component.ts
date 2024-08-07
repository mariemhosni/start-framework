import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';


@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})



export class PortfolioComponent {
 
  imgs:string[] = ['./assets/poert1.png' ,'./assets/port2.png','./assets/port3.png']

@ViewChild('layerover1') layerover1!:ElementRef;
@ViewChild('layerover2') layerover2!:ElementRef;
@ViewChild('layerover3') layerover3!:ElementRef;
@ViewChild('layerover4') layerover4!:ElementRef;
@ViewChild('layerover5') layerover5!:ElementRef;
@ViewChild('layerover6') layerover6!:ElementRef;
@ViewChildren('ref2') closeLayer!:QueryList<ElementRef>;
   
  showImg1():void{
  this.layerover1.nativeElement.classList.replace('d-none' , 'd-flex')
    
}
showImg2():void{
  this.layerover2.nativeElement.classList.replace('d-none' , 'd-flex')
    
}
showImg3():void{
  this.layerover3.nativeElement.classList.replace('d-none' , 'd-flex')
    
}
showImg4():void{
  this.layerover4.nativeElement.classList.replace('d-none' , 'd-flex')
    
}
showImg5():void{
  this.layerover5.nativeElement.classList.replace('d-none' , 'd-flex')
    
}
showImg6():void{
  this.layerover6.nativeElement.classList.replace('d-none' , 'd-flex')
    
}
  
 close():void{
  
  this.closeLayer.forEach((element)=>{

    element.nativeElement.classList.replace('d-flex' , 'd-none')

  })

}
}

