import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Languages } from '../../models/language.model';
import { Config, MenuItem } from '../../models/menu.model';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  animations: [
    trigger('rotateIcon', [
      state('false', style({ transform: 'rotate(0deg)' })),
      state('true', style({ transform: 'rotate(90deg)' })),
      transition('false <=> true', animate('0.2s')),
    ])
  ]
})
export class AccordionComponent implements OnInit {

  @Input() menuList: MenuItem[];
  @Input() options: Config;
  @Output() sidenav: EventEmitter<boolean> = new EventEmitter();
  @Output() lang: EventEmitter<Languages> = new EventEmitter();
  private config: Config;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.config = this.mergeConfig(this.options);
  }

  /**
   * changeLanguage()
   * @param lang: string
   * Emits the value of the new selected language
   */
  changeLanguage(lang: Languages): void {
    this.lang.emit(lang);
  }

  /**
   * manageAction()
   * @param item: MenuItem
   * @param index: number
   * Decides to redirect on route, change language or to toggle an accordion item
   */
  manageAction(item: MenuItem, index: number): void {
    if (item.children) {
      if (!this.config.multi) {
        this.menuList
          .filter((menu, i) => i !== index && menu.active)
          .map(menu => menu.active = !menu.active);
      }
      this.toggleAccordionItem(index);
    } else {
      this.toggleAccordionItem(index);
      this.navigateTo(item.route);
      this.closeSidenav(false);
    }
  }

  /**
   * toggleAccordionItem()
   * @param index: number
   * Reverts the status of an accordion item
   */
  private toggleAccordionItem(index: number): void {
    this.menuList[index].active = !this.menuList[index].active;
  }

  /**
   * navigateTo()
   * @param route: string
   * Navigates to the specified route
   */
  private navigateTo(route: string): void {
    this.router.navigateByUrl(route);
  }

  /**
   * mergeConfig()
   * @param options: Config
   * Edits the accordion's configuration according to new options
   */
  private mergeConfig(options: Config): Config {
    return { multi: true, ...options };
  }

  /**
   * closeSidenav()
   * @param status: boolean
   * Emits a signal to parent component to close the sidenav
   */
  private closeSidenav(status: boolean): void {
    this.sidenav.emit(status);
  }
}
