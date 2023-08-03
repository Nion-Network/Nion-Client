import type {Writable} from "svelte/store";
import {writable} from "svelte/store";

export const settingsStore: Writable<Settings> = writable({
    currentView: ClientView.Dashboard,
    connectionNode: "88.200.63.133:2517"
})

export type Settings = {
    currentView: ClientView,
    connectionNode: String
}

export enum ClientView {
    Dashboard = "Dashboard",
    Containers = "Containers",
    Accounts = "Accounts",
    Staking = "Staking",
    Settings = "Settings"
}