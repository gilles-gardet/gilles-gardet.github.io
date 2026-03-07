<script lang="ts">
  import { onMount } from 'svelte';
  import Summary from './Summary.svelte';
  import Skills from './Skills.svelte';
  import Missions from './Missions.svelte';
  import Hobbies from './Hobbies.svelte';

  interface Mission {
    id: string;
    client: string;
    startDate: string;
    endDate: string | null;
    timelapse: string;
    lightHtml: string;
    fullHtml: string;
    index: number;
  }

  let {
    missions,
    skills,
  }: { missions: Mission[]; skills: { name: string; rate: number }[] } = $props();

  let tracker: HTMLDivElement | undefined = $state();

  onMount(() => {
    const onScroll = (): void => {
      if (!tracker) return;
      const scrollDistance = document.documentElement.scrollTop || document.body.scrollTop;
      const totalHeight = document.body.scrollHeight - document.documentElement.clientHeight;
      tracker.style.width = totalHeight > 0 ? `${(scrollDistance / totalHeight) * 100}%` : '0%';
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  });
</script>

<div class="scroll-wrapper">
  <div id="scroll-tracker" bind:this={tracker}></div>
</div>
<div class="resume">
  <Summary />
  <Skills {skills} />
  <Missions {missions} />
  <Hobbies />
</div>
