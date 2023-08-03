<script>
    import NavigationButton from "$lib/components/navigation/NavigationButton.svelte";
    import {ClientView, settingsStore} from "$lib/stores/SettingsStore";

    const buttons = [
        {icon: "speedometer.svg", text: "Dashboard", view: ClientView.Dashboard},
        {icon: "box.svg", text: "Containers", view: ClientView.Containers},
        {icon: "wallet.svg", text: "Accounts", view: ClientView.Accounts},
        {icon: "shield-lock.svg", text: "Staking", view: ClientView.Staking},
        {icon: "gear.svg", text: "Settings", view: ClientView.Settings},
    ]
</script>

<div id="container">
    <img alt="Nion Logo" id="logo" src="logo.svg">
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

<style>
    #container {
        display: flex;
        align-content: center;
        flex-direction: column;
        background-color: #060d13;
        height: 100%;
    }

    #logo {
        width: 50%;
        margin: 1rem auto;
    }
</style>