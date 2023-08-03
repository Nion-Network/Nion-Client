<script>
    import NavigationButton from "$lib/components/navigation/NavigationButton.svelte";
    import {ClientView, settingsStore} from "$lib/stores/SettingsStore";
    import {chainStore} from "$lib/stores/ChainStore";
    import {fade, fly, slide} from "svelte/transition";
    import {flip} from "svelte/animate";

    const buttons = [
        {icon: "node.svg", text: "Dashboard", view: ClientView.Dashboard},
        {icon: "box.svg", text: "Containers", view: ClientView.Containers},
        {icon: "wallet.svg", text: "Accounts", view: ClientView.Accounts},
        {icon: "shield-lock.svg", text: "Staking", view: ClientView.Staking},
        {icon: "gear.svg", text: "Settings", view: ClientView.Settings},
    ]
</script>

<div id="container">
    <div id="logo">
        <img alt="Nion Logo" src="logo.svg">
        <div id="title">Nion Network</div>
    </div>
    <div id="status-container">
        <div class="icon" style="mask-image: url('synced.svg')"></div>
        <div class="text">Synchronised @ {#key $chainStore} <span in:fade>{$chainStore?.slot?.toLocaleString() ?? 0}</span> {/key}</div>
    </div>
    <div id="buttons-container">
        {#each buttons as button}
            {@const isSelected = $settingsStore.currentView === button.view}
            <NavigationButton icon={button.icon} text={button.text} isSelected={isSelected} on:click={() => {
            settingsStore.update(settings => {
                settings.currentView = button.view
                return settings
            })
        }}/>
        {/each}
    </div>
</div>

<style>
    #container {
        display: flex;
        align-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #060d13;
        height: 100%;
        gap: 2rem;
        padding: 2rem 0;
        box-sizing: border-box;
        border-right: 1px solid rgba(111, 135, 255, 0.37);
    }

    #logo {
        width: 50%;
    }

    #title {
        font-size: 120%;
        font-weight: bold;
        text-align: center;
        font-family: Avenir, serif;

        background: #03001e;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #ec38bc, #9d1bfa, #6256ff);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #ec38bc, #9d1bfa, #6256ff); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    #status-container {
        display: flex;
        gap: 1rem;
        background: #FDFC47;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #24FE41, #FDFC47);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #24FE41, #FDFC47); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    #status-container .icon {
        padding: .5rem;
        mask-repeat: no-repeat;
        mask-size: 90%;
        mask-position: center;
        background: #FDFC47;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #24FE41, #FDFC47);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #24FE41, #FDFC47); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

 }

    #buttons-container {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        border-radius: 3px;
        overflow: hidden;
        width: 80%;
        margin: 0 auto;
        background-color: rgba(255, 255, 255, 0.025);
    }
</style>