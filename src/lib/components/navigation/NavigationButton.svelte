<script lang="ts">

    export let icon: string
    export let text: string
    export let isSelected: boolean = false

    export let isCollapsed: boolean = false

    const selectedColor = "var(--selection-color)"
    const defaultColor = "transparent"
    $: opacity = isSelected ? 1.0 : 0.5
</script>

<div class="container"
     class:collapsed={isCollapsed}
     class:selected={isSelected}
     on:click style="--selectedColor: {selectedColor}; --defaultColor: {defaultColor}; opacity: {opacity}">
    <div class="icon" style="mask-image: url({icon})"></div>
    {#if !isCollapsed}
        <div class="text">{text}</div>
    {/if}
</div>

<style>
    * {
        transition: all 0.1s ease-in-out;
    }

    .container {
        display: flex;
        align-items: center;
        font-family: "Inter", sans-serif;
        gap: .5rem;
        padding: .5rem 1rem;
        color: var(--primary-text-color);
        user-select: none;
        background: var(--defaultColor);
        border-radius: 5px;
        border: 1px solid transparent;
    }

    .container.selected {
        background: var(--selectedColor);
        border: 1px solid var(--selection-color);
        color: var(--accent-color);
    }

    .container.selected .icon {
        background-color: var(--accent-color);
    }

    .container .icon {
        padding: .5rem;
        mask-repeat: no-repeat;
        mask-size: 95%;
        mask-position: center;
        background-color: var(--primary-text-color);
    }

    .container:not(.collapsed):hover .icon {
        margin-left: 0.75rem;
    }

    .container:hover {
        opacity: 1 !important;
    }

    .container.collapsed {
        padding: .5rem;
        justify-content: center;
    }


</style>