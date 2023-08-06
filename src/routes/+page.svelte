<script lang="ts">
    import {ClientView, settingsStore} from "$lib/stores/SettingsStore";
    import type {SvelteComponent} from "svelte";
    import type {ChainBlock} from "$lib/stores/ChainStore"
    import {chainStore} from "$lib/stores/ChainStore";
    import Dashboard from "$lib/components/dashboard/Dashboard.svelte";
    import NavigationBar from "$lib/components/navigation/NavigationBar.svelte";

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
<div class:collapsed={$settingsStore.collapsedNavigation} id="app-container" theme="{$settingsStore.chosenTheme.toLowerCase()}">
    <div>
        <NavigationBar></NavigationBar>
    </div>
    <div class="current-view">
        <svelte:component this={views.get(currentView)}/>
    </div>
</div>

<style>
    #app-container {
        display: grid;
        padding: .5rem;
        gap: 1rem;
        grid-template-columns: max(10%, 260px) 1fr;
        grid-template-rows: 1fr;
        height: 100vh;
        font-family: Inter, sans-serif;
        box-sizing: border-box;
        background: var(--background-color);
        color: var(--primary-text-color);
        overflow: auto;
    }

    #app-container.collapsed{
        grid-template-columns: 50px 1fr;
    }

    .current-view {

    }
</style>