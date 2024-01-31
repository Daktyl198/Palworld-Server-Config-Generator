<script>
    import {data} from '../stores.js';

    export let category;
    export let index;

    function fixValues(e) {
        const value = Number(e.value);
        const min = Number(e.min);
        const max = Number(e.max);


        if (value < min) {
            e.value = min;
        }
        
        if (value > max) {
            e.value = max;
        }
    }

    let datum = $data[category][index];

    let tclass;
    if (index % 2) {
        tclass = 'altsetting';
    }
    else {
        tclass = 'setting';
    }
</script>

<div class={tclass}>
    <label for="{datum.name}"><span id="information" title="{datum.description}">ⓘ</span> {datum.label}:</label>
    {#if datum.type == 'number'}
        <input type="number" id="{datum.name}" step=0.1 min={datum.min} max={datum.max} bind:value="{$data[category][index].default}" on:change={(e) => fixValues(e.target)} />
    {:else if datum.type == "select"}
        <select id="{datum.name}" bind:value="{$data[category][index].default}">
            {#each datum.options as option}
                <option value="{option}" selected={option}>{option}</option>
            {/each}
        </select>
    {:else if datum.type == 'string'}
        <input type="text" id="{datum.name}" bind:value="{$data[category][index].default}" />
    {/if}
</div>

<style>
    .setting, .altsetting {
        display: grid;
        grid-template-columns: 50% 50%;
        align-items: center;
        justify-content: center;
        min-height: 1.5rem;
        max-height: 3rem;
        padding: 1rem;
    }

    .altsetting {
        background-color: grey;
    }

    #information {
        cursor: help;
    }

    input {
        height: 1.3rem;
        line-height: 1.3rem;
    }
</style>