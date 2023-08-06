<script lang="ts">
    export let title: string
    let clazz: string
    export {clazz as class}
</script>

<div class="card {clazz}">
    {#if title}
        <div id="title">{title}</div>
    {/if}
    <slot></slot>
</div>

<style>
    .card {
        padding: 1rem;
        border-radius: var(--border-radius1);
        border: 1px solid color-mix(in srgb, var(--primary-text-color) 20%, transparent);
        box-shadow: 0 0 5px 0 color-mix(in srgb, var(--primary-text-color) 5%, transparent);
    }

    #title {
        display: block;
        width: 100%;
        font-size: .8rem;
        font-weight: bold;
    }
</style>