import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
    showPassword: boolean = true;
    statusDisabled: boolean = true;

name: string = "";
copiedName: string = "";
aBoolean: boolean = true;
locale: string = "fr";

copyName(): void
{
  this.copiedName = this.name;
}

    
    // einstien: boolean = true;

    // toggleImage(): void
    // {
    //   if(this.einstien)
    //   {
    //     this.image = "assests/images/speed-gonzalez.png";
    //     this.einstien = !this.einstien;
    //   }
    //   else
    //   {
    //     this.image = "assets/images.einstien.png";
    //   }
    // }
}
