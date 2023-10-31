<script lang="ts">
    import NavigationButton from "$lib/components/navigation/NavigationButton.svelte";
    import {ClientView, settingsStore, toggleNavigationCollapse} from "$lib/stores/SettingsStore";
    import {chainStore} from "$lib/stores/ChainStore";
    import {fade} from "svelte/transition";
    import ThemePicker from "$lib/components/navigation/ThemePicker.svelte";
    import Spacer from "$lib/components/Spacer.svelte";

    const buttons = [
        {icon: "node.svg", text: "Dashboard", view: ClientView.Dashboard},
        {icon: "containers.svg", text: "Containers", view: ClientView.Containers},
        {icon: "wallet-filled.svg", text: "Accounts", view: ClientView.Accounts},
        {icon: "shield.svg", text: "Staking", view: ClientView.Staking},
        {icon: "settings.svg", text: "Settings", view: ClientView.Settings},
    ]

    $: isCollapsed = $settingsStore.collapsedNavigation
</script>

<div class:collapsed={isCollapsed} id="container">
    <div class="collapse-container">
        <div class="collapse" class:rotated={isCollapsed} on:click={toggleNavigationCollapse}>
            <div class="icon"></div>
        </div>
    </div>
    <div id="logo-container">
        <img alt="Nion Logo" src="logo.svg">
        {#if !isCollapsed}
            <div id="title">NION NETWORK</div>
        {/if}
    </div>
    <div id="status-container">
        <div id="status">
            <div class="icon" style="-webkit-mask-image: url('check-circle.svg')"></div>
            {#if !isCollapsed}
                <div class="text">Synchronized</div>
            {/if}
        </div>

    </div>
    <div id="buttons-container">
        {#each buttons as button}
            {@const isSelected = $settingsStore.currentView === button.view}
            <NavigationButton icon={button.icon} text={button.text} isSelected={isSelected} isCollapsed={isCollapsed}
                              on:click={() => {
            settingsStore.update(settings => {
                settings.currentView = button.view
                return settings
            })
        }}/>
        {/each}
    </div>
    <Spacer/>
    <ThemePicker/>
</div>

<style>
    #container {
        position: relative;
        display: flex;
        align-content: center;
        align-items: center;
        flex-direction: column;
        font-size: .9rem;
        height: 100%;
        gap: 1rem;
        padding: 1rem 0;
        box-sizing: border-box;
        background-color: color-mix(in srgb, var(--lmenu-background-color) 100%, transparent);
        border: 1px solid color-mix(in srgb, var(--primary-text-color) 10%, transparent);
        border-radius: 5px;
        overflow: hidden;
    }

    #logo-container {
        width: 100%;
        display: block;
        text-align: center;
    }

    #logo-container img {
        width: 50%;
    }

    #logo-container #title {
        font-size: 110%;
        text-align: center;
        margin-top: 1rem;
        font-weight: bold;
        font-family: Inter, sans-serif;

        background: var(--secondary-text-color);

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    #status-container {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: .5rem;
        color: var(--darker-green-color);
        padding: 1rem;
        border-radius: 5px;
        width: 90%;
        box-sizing: border-box;
    }

    #status {
        display: flex;
        align-items: center;
        gap: .5rem;
        font-size: .8rem;
        text-transform: uppercase;
    }

    #status .icon {
        padding: .5rem;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-size: 90%;
        -webkit-mask-position: center;
        background-color: var(--darker-green-color);
    }

    #status-container #block-number {
        font-size: .8rem;
        font-family: Monospaced, monospace;
    }

    #buttons-container {
        display: flex;
        position: relative;
        flex-direction: column;
        gap: .5rem;
        border-radius: 3px;
        overflow: hidden;
        width: 90%;
        margin: 0 auto;
    }

    .collapse-container {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 0 1rem;
        box-sizing: border-box;
    }

    .collapse {
        padding: .25rem;
        background-color: var(--lightened-color);
        border-radius: var(--border-radius1);
        border: 1px solid var(--darkened-color);
    }

    .collapse .icon {
        padding: .5rem;
        -webkit-mask-repeat: no-repeat;
        -webkit-mask-size: 95%;
        -webkit-mask-position: center;
        background-color: var(--accent-color);
        -webkit-mask-image: url("collapse-navigation.svg");
        transition: all .25s ease-in-out;
    }

    .collapse:hover {
        opacity: 1;
    }

    .collapse.rotated .icon {
        transform: rotate(180deg);
    }

    #container.collapsed .collapse-container {
        justify-content: center;
        padding: 0;
    }

</style>