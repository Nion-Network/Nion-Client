import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

export const settingsStore: Writable<Settings> = writable({
    currentView: ClientView.Dashboard,
    connectionNode: "88.200.63.133:2517",
    collapsedNavigation: false,
    chosenTheme: Theme.Dark
})

export function updateSettings(block: (settings: Settings) => void) {
    settingsStore.update(storeSettings => {
        block(storeSettings);
        return storeSettings
    })
}

export function toggleNavigationCollapse() {
    settingsStore.update(settings => {
        settings.collapsedNavigation = !settings.collapsedNavigation
        return settings;
    })
}

export type Settings = {
    currentView: ClientView,
    connectionNode: String,
    collapsedNavigation: boolean,
    chosenTheme: Theme
}

export enum Theme {
    Light = "light",
    Dark = "dark",
    Nion = "nion"
}

export enum ClientView {
    Dashboard = "Dashboard",
    Containers = "Containers",
    Accounts = "Accounts",
    Staking = "Staking",
    Settings = "Settings"
}