<script lang="ts">
  import type { PageData } from './$types';
  import General from '$lib/components/General.svelte';
  import Resume from '$lib/components/Resume.svelte';
  import ScrollTop from '$lib/components/ScrollTop.svelte';

  let { data }: { data: PageData } = $props();
</script>

<svelte:head>
  <title>Gilles Gardet – CV</title>
</svelte:head>

<div id="container">
  <aside>
    <General />
  </aside>
  <main>
    <Resume missions={data.missions} skills={data.skills} />
  </main>
</div>
<ScrollTop />
