import { AfterViewInit, Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { PlatformService } from '../../../../services/platform.service';
import { ScrollService } from '../../../../services/scroll.service';
import { Languages } from '../../models/language.model';
import { MenuItem } from '../../models/menu.model';
import { languagesMenuItem, menuList } from '../../constants/menu.contants';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit, AfterViewInit {

  isOnTop = true;
  isSidenavOpen = false;
  currentLanguage: string;
  currentLanguageFlag: string;
  menuList: MenuItem[] = menuList;

  constructor(
    private platformService: PlatformService,
    private scrollService: ScrollService,
    private translate: TranslateService
  ) {
    this.changeLanguage(Languages.FR);
  }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.scrollService.setEventListener('scroll', this.onScroll.bind(this), true);
  }

  /**
   * toggleSidenav()
   * @param status: boolean
   * Changes de display status of the sidenav
   */
  toggleSidenav(status: boolean): void {
    this.isSidenavOpen = status;
  }

  /**
   * changeLanguage()
   * @param lang: string
   * Changes the language of the application
   */
  changeLanguage(lang: Languages): void {
    this.translate.setDefaultLang(lang);
    this.currentLanguage = lang;
    this.currentLanguageFlag = this.getCurrentLanguageFlag();
  }

  /**
   * getCurrentLanguageFlag()
   * Returns the flag image of the current language
   */
  private getCurrentLanguageFlag(): string {
    return languagesMenuItem.children.filter(lang => lang.language === this.currentLanguage)[0].flag;
  }

  /**
   * onScroll()
   * Bound to a scroll listener
   * Set isOnTop variable to false if scroll distance is 50px or more from the top
   */
  private onScroll(): void {
    if (this.platformService.isPlatformBrowser()) {
      this.isOnTop = window.scrollY > 50 ? false : true;
    }
  }
}
