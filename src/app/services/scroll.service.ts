import { Injectable } from '@angular/core';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  constructor(private platformService: PlatformService) { }

  // Binds an event listener to a type and a function
  public setEventListener(type: string, listener: any, options: boolean): void {
    if (this.platformService.isPlatformBrowser()) {
      window.addEventListener(type, listener, options);
    }
  }

  // Removes an existing event listener
  public removeEventListener(type: string, listener: any, options: boolean): void {
    if (this.platformService.isPlatformBrowser()) {
      window.removeEventListener(type, listener, options);
    }
  }
}
