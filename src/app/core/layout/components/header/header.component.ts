import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Languages } from '../../models/language.model';
import { MenuItem } from '../../models/menu.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() isOnTop: boolean;
  @Input() currentLanguage: string;
  @Input() currentLanguageFlag: string;
  @Input() menuList: MenuItem[];
  @Output() language: EventEmitter<string> = new EventEmitter();
  @Output() sidenav: EventEmitter<boolean> = new EventEmitter();

  /**
   * isLastItem()
   * @param items: MenuItem[]
   * @param index: number
   * Returns true if the current menu item is the last in the list
   */
  isLastItem(items: MenuItem[], index: number): boolean {
    return index === items.length - 1 ? true : false;
  }

  /**
   * changeLanguage()
   * @param lang: string
   * Emits the value of the new selected language
   */
  changeLanguage(lang: Languages): void {
    console.log('HEADER CHANGE LANGUAGE:', lang);
    this.language.emit(lang);
  }

  /**
   * toggleSidenav()
   * Emits a signal to parent component to open the sidenav
   */
  openSidenav(): void {
    this.sidenav.emit(true);
  }
}
