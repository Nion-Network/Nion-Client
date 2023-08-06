<script lang="ts">
    export let title: string = "Title"
    export let borderColor: string = "var(--accent-color)"
    export let hasBorder: boolean = false

</script>
<div {...$$props}>
    <div class="container" style="border-color: {hasBorder ? borderColor : 'transparent'}; --border-color: {borderColor}">
        <div id="title" style="color: {borderColor}">{title}</div>
        <slot></slot>
    </div>
</div>

<style>
    .container {
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid;
        background-color: var(--lmenu-background-color);
        box-shadow: 0 0 2px 0 var(--primary-text-color);
    }

    #title {
         text-transform: uppercase;
         margin-bottom: .5rem;
    }
    #title::after {
        display: block;
        content: "";
        width: 100%;
        height: 1px;
        margin-top: .1rem;
        border-radius: 5px;
        background-color: var(--border-color);
        opacity: 0.3;
    }
</style>