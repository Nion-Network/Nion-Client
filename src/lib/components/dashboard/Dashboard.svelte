
<script lang="ts">
    import {settingsStore} from "$lib/stores/SettingsStore";
    import TitledComponent from "$lib/components/TitledComponent.svelte";
    import type {ChainBlock} from "$lib/stores/ChainStore";
    import {chainStore} from "$lib/stores/ChainStore";
    import Spacer from "$lib/components/Spacer.svelte";

    $: lastBlock = $chainStore

</script>
<div class="container">
    <TitledComponent style="width: 25%" title="Last Block">
        <table>
            <tr>
                <td>Block</td>
                <td>{lastBlock?.slot?.toLocaleString()}</td>
            </tr>
            <tr>
                <td>Producer</td>
                <td>{lastBlock?.blockProducer?.substring(20, 40)}</td>
            </tr>
            <tr>
                <td>Votes</td>
                <td>{lastBlock?.votes?.toLocaleString()}</td>
            </tr>
        </table>
    </TitledComponent>
    <TitledComponent borderColor="#ff00b8" style="width: 10%" title="Next Block">
        This is a titled component with 20% width
    </TitledComponent>
</div>

<style>
    .container {
        display: flex;
        gap: 2rem;
    }
</style>