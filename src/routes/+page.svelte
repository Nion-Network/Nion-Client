<script lang="ts">
    import {ClientView} from "$lib/stores/SettingsStore";
    import type {SvelteComponent} from "svelte";
    import type {ChainBlock} from "$lib/stores/ChainStore"
    import Dashboard from "$lib/components/dashboard/Dashboard.svelte";
    import NavigationBar from "$lib/components/navigation/NavigationBar.svelte";
    import {settingsStore} from "$lib/stores/SettingsStore";
    import {chainStore} from "$lib/stores/ChainStore";

    const views: Map<ClientView, SvelteComponent> = new Map([
        [ClientView.Dashboard, Dashboard]
    ]);

    $: currentView = $settingsStore.currentView

    const socket = new WebSocket(`ws://${$settingsStore.connectionNode}`)
    socket.onopen = (event) => {
        console.log("New socket has been opened.")
    }
    socket.onmessage = (message) => {
        const data: ChainBlock = JSON.parse(message.data)
        chainStore.set(data)
    }

</script>
<div id="app-container">
    <div><NavigationBar></NavigationBar></div>
    <div class="current-view"><svelte:component this={views.get(currentView)}/></div>
</div>

<style>
    #app-container {
        display: grid;
        grid-template-columns: minmax(15%, 150px) 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        font-family: "Helvetica Neue", sans-serif;

        background: #060d13;  /* fallback for old browsers */
        color: white;
    }

    .current-view {
        padding: 1rem;
    }
</style>