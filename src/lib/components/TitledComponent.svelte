<script lang="ts">
    export let title: string = "Title"
    export let borderColor: string = "darkcyan"
</script>
<div {...$$props}>
    <div class="container" style="border-color: {borderColor}">
        <div id="title" style="color: {borderColor}">{title}</div>
        <slot></slot>
    </div>
</div>

<style>
    .container {
        position: relative;
        padding: 1rem;
        border-radius: 3px;
        border: 1px solid;
        margin-top: 1rem;
    }

     #title {
         position: absolute;
         font-size: .8rem;
         top: -.5rem;
         left: .5rem;
         background-color: #060d13;
         border-radius: 100%;
         padding: 0 1rem;
         text-transform: uppercase;
    }
</style>