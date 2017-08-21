/*
* Here you can add, remove, or change the menu items for the Drawer and Overflow Actions.
* Add the "label" strings to i18n files.
* The allowed font icons are MaterialCommunity and FontAwesome.
*/
import { ICONS } from './constants'

export const drawer = [
    { label: 'drawer-item-1', routeIndex: 1, icon: ICONS.drawer.box, library: 'FontAwesome' },
    { label: 'drawer-item-2', routeIndex: 2, icon: ICONS.drawer.meds, library: 'FontAwesome' },
    { label: 'drawer-item-3', routeIndex: 3, icon: ICONS.drawer.measurements, library: 'FontAwesome' },
    { label: 'drawer-item-4', routeIndex: 4, icon: ICONS.drawer.diary, library: 'FontAwesome' },
    { label: 'drawer-item-5', routeIndex: 5, icon: ICONS.drawer.appointments, library: 'FontAwesome' },
    { label: 'drawer-item-6', routeIndex: 6, icon: ICONS.drawer.doctors, library: 'FontAwesome' },
];

export const actions = [
  { label: 'actions-menu-item-1', routeIndex: 8, show: 'never' },
  { label: 'actions-menu-item-2', routeIndex: 9, show: 'never' },
]
