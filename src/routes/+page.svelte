<script lang="ts">
    import {ClientView} from "$lib/stores/SettingsStore";
    import type {SvelteComponent} from "svelte";
    import Dashboard from "$lib/components/dashboard/Dashboard.svelte";
    import NavigationBar from "$lib/components/navigation/NavigationBar.svelte";
    import {settingsStore} from "$lib/stores/SettingsStore";

    const views: Map<ClientView, SvelteComponent> = new Map([
        [ClientView.Dashboard, Dashboard]
    ]);

    $: currentView = $settingsStore.currentView
</script>
<div id="app-container">
    <div><NavigationBar></NavigationBar></div>
    <div><svelte:component this={views.get(currentView)}/></div>
</div>

<style>
    #app-container {
        display: grid;
        grid-template-columns: minmax(10%, 200px) 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        font-family: "Helvetica Neue", sans-serif;
    }
</style>