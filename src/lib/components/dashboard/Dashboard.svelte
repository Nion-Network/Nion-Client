<script lang="ts">
    import type {ChainBlock} from "$lib/stores/ChainStore";
    import {chainStore} from "$lib/stores/ChainStore";
    import CardComponent from "$lib/components/CardComponent.svelte";

    let lastBlock: ChainBlock | undefined

    $: lastBlock = $chainStore

    $: containersOnline = lastBlock?.dockerStatistics?.reduce((total, stats) => total + stats.containers.length, 0) ?? 0

</script>
<div class="container">
    <div class="title">Network</div>
    {#if lastBlock}
        <CardComponent class="summary">
            <CardComponent title="Chain">
                <div class="numeric-value">Jungle Boogie</div>
            </CardComponent>
            <CardComponent title="Block">
                <div class="numeric-value">{lastBlock?.slot.toLocaleString()} ({lastBlock.votes})</div>
            </CardComponent>
            <CardComponent title="Containers">
                <div class="numeric-value">{(19920).toLocaleString()}</div>
            </CardComponent>
            <CardComponent title="Nodes">
                <div class="numeric-value">{lastBlock?.dockerStatistics?.length}</div>
            </CardComponent>
            <CardComponent title="Difficulty">
                <div class="numeric-value">{lastBlock?.difficulty.toLocaleString()}</div>
            </CardComponent>
        </CardComponent>
    {/if}

    <div class="title containers">Containers</div>
    {#if lastBlock}

    {/if}
</div>

<style>
    .container {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(8, 1fr);
        padding: 2rem;
        box-sizing: border-box;
    }

    .title {
        grid-column: 1/-1;
        font-weight: bold;
        font-size: 1.2rem;
        font-family: "Lato", sans-serif;
        color: var(--secondary-text-color);
    }

    .title.containers {
        grid-column: span 3;
    }

    .container :global(.summary) {
        display: grid;
        font-family: "Lato", sans-serif;
        grid-template-columns: repeat(5, 1fr);
        padding: 0;
        grid-column: 1/-1;
        border-radius: var(--border-radius3);
        overflow: hidden;
        border: 1px solid var(--datacnt-background-border);
        background-color: var(--datacnt-background-color);
    }

    .container :global(.summary > .card) {
        border: none;
        border-radius: 0;
        box-shadow: none;
    }

    .container :global(.summary > .card:not(:last-child)) {
        border-right: 1px solid var(--datacnt-background-border);
    }

    .container :global(.summary .numeric-value) {
        font-size: 1.25rem;
        margin-top: .5rem;
        font-weight: 500;
        color: var(--secondary-text-color);
    }

</style>

<!--
<div class="container">
    <h2 id="title">Dashboard</h2>
    <div id="containers-information">
        <TitledComponent title="Containers" hasBorder={false}>
            <div class="containers-information">
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0 2rem;">
                    <div class="titled-information">
                        <div class="title">Online</div>
                        <div class="content">{containersOnline}</div>
                    </div>
                    <div class="titled-information">
                        <div class="title">Nodes hosting containers</div>
                        <div class="content">{containersOnline}</div>
                    </div>
                    <div class="titled-information">
                        <div class="title">Number of migrations</div>
                        <div class="content">{containersOnline}</div>
                    </div>
                    <div class="titled-information">
                        <div class="title">Last migration</div>
                        <div class="content">10s ago</div>
                    </div>
                </div>
                <div class="titled-information">
                    <div class="title">Average resources usage</div>
                    <div class="content">
                        <table>
                            <tr>
                                <td>CPU</td>
                                <td>38%</td>
                            </tr>
                            <tr>
                                <td>RAM</td>
                                <td>17%</td>
                            </tr>
                            <tr>
                                <td>Disk space</td>
                                <td>12.8MB</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </TitledComponent>
    </div>
    {#if lastBlock}
        <TitledComponent title="Last Block" borderColor="var(--accent-pink-color)" hasBorder={true}>
            <div class="block-information">
                <div class="titled-information" style="width: 100%">
                    <div class="content">
                        <table>
                            <tr>
                                <td>Producer</td>
                                <td>{lastBlock.blockProducer.substring(10, 20)}</td>
                            </tr>
                            <tr>
                                <td>Slot</td>
                                <td>{lastBlock.slot.toLocaleString()}</td>
                            </tr>
                            <tr>
                                <td>Votes</td>
                                <td>{lastBlock.votes}</td>
                            </tr>
                            <tr>
                                <td>Docker Statistics</td>
                                <td>{lastBlock.dockerStatistics.length}</td>
                            </tr>
                            <tr>
                                <td>Migrations</td>
                                <td>{lastBlock.migrations?.size ?? 0}</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </TitledComponent>
    {/if}
</div>
<style>
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        gap: 1rem;
        color: var(--primary-text-color);
    }

    #title {
        grid-column: 1/-1;
        font-family: "Roboto Light", sans-serif;
        color: var(--accent-color);
        background-color: var(--lmenu-background-color);
        margin: 0;
        padding: 1rem;
        border-radius: var(--border-radius);
    }



    #containers-information {
        grid-column: span 2;
    }

    .containers-information {
        display: flex;
        gap: 1rem;
    }

    .titled-information .title {
        text-transform: uppercase;
        font-size: .8rem;
        color: var(--tertiary-text-color);
    }

    .titled-information .content {
        color: var(--accent-color);
    }

    .titled-information .content table {
        margin: 1rem 0;
        opacity: 1;
        font-size: 0.8rem;
        width: 100%;
        border: 1px solid var(--success-color);
        color: var(--success-color);
        background-color: var(--darkened-color);
        border-radius: var(--border-radius);
        padding: .5rem;
    }

    .block-information .titled-information .content table {
        border: none;
        padding: 0;
        margin: 0;
        color: var(--secondary-text-color);
    }
    table td:nth-child(2n){
        text-align: right;
    }

</style>
-->