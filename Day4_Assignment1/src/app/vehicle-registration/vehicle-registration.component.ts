import { Component } from '@angular/core';

@Component({
  selector: 'app-vehicle-registration',
  templateUrl: './vehicle-registration.component.html',
  styleUrls: ['./vehicle-registration.component.css']
})
export class VehicleRegistrationComponent {
  public OwnerName1: string = '';
  public contactNumber1:string = '';
  public email1:string = '';
  public regiNumber1:string = '';
  public address1: string = '';
  

  public clickForm(){
    alert("Form submitted...", );
  }

}
