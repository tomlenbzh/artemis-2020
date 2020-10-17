import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { menuList } from '../../constants/menu.contants';
import { Languages } from '../../models/language.model';
import { Config, MenuItem } from '../../models/menu.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnChanges {

  @Input() isSidenavOpen: boolean;
  @Input() menuList: MenuItem[] = menuList;
  @Output() sidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() lang: EventEmitter<Languages> = new EventEmitter();

  showSidenav = false;
  options: Config = { multi: false };

  ngOnChanges(): void {
    if (this.isSidenavOpen) {
      setTimeout(() => this.showSidenav = true, 100);
    }
  }

  /**
   * toggleSidenav()
   * Emits a signal to parent component to close the sidenav
   */
  closeSidenav(status: boolean): void {
    this.showSidenav = status;
    this.sidenav.emit(status);
    this.menuList.map(x => {
      if (x?.active) {
        x.active = false;
      }
    });
  }

  /**
   * changeLanguage()
   * @param lang: string
   * Emits the value of the new selected language
   */
  changeLanguage(language: Languages): void {
    this.lang.emit(language);
  }
}
