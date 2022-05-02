import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GuardasService implements CanActivate {
  canActivate() {
    console.log("AlwaysAuthGuard");
    return false;
  }
  constructor() { }
}
