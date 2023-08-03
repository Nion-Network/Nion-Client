<script lang="ts">
    export let icon: string
    export let text: string
    export let isSelected: boolean = false

    const selectedColor = "rgb(12,109,246)"
    const defaultColor = "rgba(255,255,255, 0.1)"
    $: opacity = isSelected ? 1.0 : 0.4
</script>

<div class="container" on:click
     style="background-color: {isSelected ? selectedColor : defaultColor }; opacity: {opacity}">
    <div class="icon" style="-webkit-mask: url({icon}) no-repeat; mask: url({icon}) no-repeat"></div>
    <div class="text">{text}</div>
</div>

<style>
    .container {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: .5rem 1rem;
        margin: .25rem 1rem;
        border-radius: 5px;
        color: white;
        user-select: none;
        transition: all 0.1s ease-in-out;
        font-size: 1rem;
    }

    .container .icon {
        width: 1rem;
        height: 1rem;
        background-color: white;
    }

    .container:hover {
        opacity: 1 !important;
    }

</style>