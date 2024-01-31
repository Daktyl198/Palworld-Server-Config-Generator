<script>
    export let title;
    export let description;
    export let category;
    export let length;

    import Setting from './setting.svelte';
</script>

<div class="category">
    <p class="ctitle">{title}</p>
    <p class="cdescription">{description}</p>
    {#each Array(length) as datum, i}
        <Setting {category} index={i} />
    {/each}
</div>

<style>
    .ctitle, .cdescription {
        text-align: center;
    }
</style>