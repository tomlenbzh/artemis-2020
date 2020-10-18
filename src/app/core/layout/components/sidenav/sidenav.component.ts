import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Languages } from '../../models/language.model';
import { Config, MenuItem } from '../../models/menu.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('true', style({ transform: 'translate3d(0,0,0)' })),
      state('false', style({ transform: 'translate3d(-100%, 0, 0)' })),
      transition('true <=> false', animate('400ms ease-in-out')),
    ]),
  ]
})
export class SidenavComponent implements OnChanges {

  @Input() isSidenavOpen: boolean;
  @Input() menuList: MenuItem[];
  @Input() currentLanguageFlag: string;
  @Output() sidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() language: EventEmitter<Languages> = new EventEmitter();

  options: Config = { multi: false };
  showSidenav = false;

  ngOnChanges(): void {
    if (this.isSidenavOpen) {
      setTimeout(() => this.showSidenav = true, 100);
    }
  }

  /**
   * toggleSidenav()
   * Emits a signal to parent component to close the sidenav
   */
  closeSidenav(isSubItem: boolean): void {
    if (this.isSidenavOpen === true) {
      if (!isSubItem) {
        this.showSidenav = false;
        setTimeout(() => {
          this.closeAll();
        }, 500);
      } else {
        setTimeout(() => {
          this.showSidenav = false;
          setTimeout(() => {
            this.closeAll();
          }, 400);
        }, 400);
      }
    }
  }

  /**
   * changeLanguage()
   * @param lang: string
   * Emits the value of the new selected language
   */
  changeLanguage(language: Languages): void {
    this.language.emit(language);
  }

  /**
   * Emits to parent component to close sidenav component
   */
  private closeAll(): void {
    this.sidenav.emit(this.showSidenav);
    this.closeAllSubMenus();
  }

  /**
   * closeAllSubMenus()
   * Loops through all menus and closes them
   */
  private closeAllSubMenus(): void {
    this.menuList.map(x => {
      if (x?.active) {
        x.active = false;
      }
    });
  }
}
