<script>
  import Category from './lib/category.svelte';
  import { categories } from './data/settingslist.mjs';
  import { data } from './stores.js';

  function submit() {
    let tempdata = [];

    function addData(e) {
      const temp = {
        name: e.name,
        value: e.default
      }
      tempdata.push(temp);
    }

    //there's better ways, but I'm lazy and it's 5am

    $data['core'].forEach(e => {
      addData(e);
    });
    $data['world'].forEach(e => {
      addData(e);
    });
    $data['players'].forEach(e => {
      addData(e);
    });
    $data['pals'].forEach(e => {
      addData(e);
    });
    $data['unsure'].forEach(e => {
      addData(e);
    });

    let output = '[/Script/Pal.PalGameWorldSettings]\nOptionSettings=(';

    tempdata.forEach((e) => {
      let value;
      if (typeof(e.value) != 'string' || e.value == 'True' || e.value == 'False') {
        value = e.value;

      }
      else {
        value = '"'+e.value+'"';
      }

      output += e.name+'='+value+',';
    });

    output = output.slice(0, -1);
    output += ')';

    const blob = new Blob([output], { type: "text/plain" });
    let link = document.createElement('a');
    link.download = 'PalWorldSettings.ini';
    link.href = window.URL.createObjectURL(blob);

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
</script>

<main>
  <div id="logo">
    PalWorld Server Settings Generator
  </div>
  <div id="content">
    <Category title="Core Settings" description = {categories.core} category="core" length={$data['core'].length} />
    <Category title="World Settings" description = {categories.world} category="world" length={$data['world'].length} />
    <Category title="Players" description = {categories.players} category="players" length={$data['players'].length} />
    <Category title="Pals" description = {categories.pals} category="pals" length={$data['pals'].length} />
    <Category title="Unsure" description = {categories.unsure} category="unsure" length={$data['unsure'].length} />
  </div>
  
  <div id="submit">
    <hr>
    <button on:click={() => (submit())}>
      Download Config
    </button>
    <hr>
    Run the Palworld server at least once before copying config to the correct folder. After downloading the config, place it inside the <span class="terminal">&lbrace;Palworld server main folder&rbrace;/Pal/Saved/Config/LinuxServer</span> folder. Windows folder TBA.
  </div>
</main>

<style >
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  hr {
    width: 75vw;
  }

  button {
    height: 3rem;
    width: 14rem;
    font-size: 14pt;
    font-weight: bold;
  }

  #logo {
    font-size: 30pt;
    text-align: center;
    width: 100%;
    font-weight: bold;
    text-decoration: underline;
  }

  #content {
    width: 45vw;
  }

  #submit {
    text-align: center;
    padding: 3rem;
  }

  .terminal {
    background-color: lightgrey;
    font-family: monospace;
    color: black;
  }
</style>
