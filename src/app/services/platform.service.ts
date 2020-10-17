import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  constructor(@Inject(PLATFORM_ID) private platformId: any) { }

  public isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
