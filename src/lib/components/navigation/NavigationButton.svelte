<script lang="ts">
    export let icon: string
    export let text: string
    export let isSelected: boolean = false

    const selectedColor = "linear-gradient(to left, #ec38bc, 20%, #9d1bfa, #6256ff)"
    const defaultColor = "transparent" //"rgba(255,255,255, 0.05)"
    $: opacity = isSelected ? 1.0 : 0.6
</script>

<div class="container" on:click style="background: {isSelected ? selectedColor : defaultColor }; opacity: {opacity}">
    <div class="icon" style="mask-image: url({icon})"></div>
    <div class="text">{text}</div>
</div>

<style>
    * {
        transition: all 0.1s ease-in-out;
    }
    .container {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: .5rem 1.5rem;
        color: white;
        user-select: none;
        border-radius: 3px;
    }

    .container .icon {
        padding: .5rem;
        mask-repeat: no-repeat;
        mask-size: 90%;
        mask-position: center;
        background-color: white;
    }

    .container:hover .icon {
        margin-left: 0.75rem;
    }

    .container:hover {
        opacity: 1 !important;
    }

</style>