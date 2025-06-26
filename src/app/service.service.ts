import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  isUserLoggedIn(){
    let user = sessionStorage.getItem('authorize')
    return !(user === null)
  }
  
}
