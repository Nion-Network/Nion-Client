<script lang="ts">
    import {settingsStore, Theme, updateSettings} from "$lib/stores/SettingsStore";

    $: chosenTheme = $settingsStore.chosenTheme

    $: console.log(chosenTheme);

    function setTheme(theme: Theme) {
        updateSettings(settings => settings.chosenTheme = theme)
    }
</script>

<ul id="container">
    {#each Object.keys(Theme) as theme}
        {@const id = theme.toLowerCase()}
        {@const isSelected = chosenTheme.toLowerCase() === id}
        <li class:selected={isSelected} on:click={() => setTheme(theme)}>
            <div id="{id}"></div>
        </li>
    {/each}
</ul>

<style>
    #container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        padding: 0;
        margin: 0;
        list-style: none;
        gap: .5rem;
        background-color: var(--lmenu-background-color);
        border: 1px solid var(--lmenu-background-color);
        border-radius: 5px;
    }

    #container li {
        padding: .5rem;
        margin: 0;
        border-radius: var(--border-radius1);
    }

    #container li div {
        -webkit-mask-repeat: no-repeat;
        background-repeat: no-repeat;
        background-position: center;
        -webkit-mask-position: center;
        padding: .5rem;
        -webkit-mask-size: 95%;
    }

    .selected {
        background-color: var(--tp-selection-color);
    }

    #light {
        -webkit-mask-image: url("sun.svg");
        background-color: var(--accent-color);
    }

    #dark {
        -webkit-mask-image: url("moon.svg");
        background-color: var(--accent-color);
    }

    #nion {
        background-image: url("logo.svg");
    }
</style>