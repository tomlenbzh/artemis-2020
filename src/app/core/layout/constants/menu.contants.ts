import { Languages } from '../models/language.model';
import { MenuItem } from '../models/menu.model';

export const homeMenuItem: MenuItem = {
  active: false,
  title: 'MENU.HOME',
  route: 'home'
};

export const artemisMenuItem: MenuItem = {
  title: 'MENU.ARTEMIS.ARTEMIS',
  active: false,
  children: [
    { title: 'MENU.ARTEMIS.ABOUT_US', route: 'features/about-us' },
    { title: 'MENU.ARTEMIS.APPROACH', route: 'features/about-us' },
    { title: 'MENU.ARTEMIS.PRINCIPLES', route: 'features/about-us' },
    { title: 'MENU.ARTEMIS.VALUES', route: 'features/about-us' },
    { title: 'MENU.ARTEMIS.ETHICS', route: 'features/about-us' }
  ]
};

export const coachingMenuItem: MenuItem = {
  title: 'MENU.COACHING.COACHING',
  active: false,
  children: [
    { title: 'MENU.COACHING.INDIVIDUAL_COACHING', route: 'features/about-us' },
    { title: `MENU.COACHING.TEAM_COACHING`, route: 'features/about-us' },
    { title: 'MENU.COACHING.TEAM_COACHING', route: 'features/about-us' },
    { title: `MENU.COACHING.TEAM_COACHING`, route: 'features/about-us' }
  ]
};

export const consultingMenuItem: MenuItem = {
  title: 'MENU.CONSULTING.CONSULTING',
  active: false,
  children: [
    { title: 'MENU.CONSULTING.CHANGE_MANAGEMENT', route: 'features/about-us' },
    { title: `MENU.CONSULTING.TEAM_BUILDING`, route: 'features/about-us' }
  ]
};

export const contactMenuItem: MenuItem = {
  title: `MENU.CONTACT`,
  route: 'features/contact'
};

export const languagesMenuItem: MenuItem = {
  active: false,
  children: [
    {
      flag: `assets/images/flags/${Languages.FR}.png`,
      language: Languages.FR,
      languageLabel: 'LANGUAGES.FRENCH'
    },
    {
      flag: `assets/images/flags/${Languages.EN}.png`,
      language: Languages.EN,
      languageLabel: 'LANGUAGES.ENGLISH'
    },
  ]
};

export const menuList: MenuItem[] = [
  homeMenuItem,
  artemisMenuItem,
  coachingMenuItem,
  consultingMenuItem,
  contactMenuItem,
  languagesMenuItem
];
