<script lang="ts">
  import { onMount } from 'svelte';
  import Panel from './Panel.svelte';
  import ProgressBar from './ProgressBar.svelte';
  import { t } from '$lib/i18n/translations';

  let { skills }: { skills: { name: string; rate: number }[] } = $props();

  onMount(() => {
    const panel = document.getElementById('skills');
    const bars = document.querySelectorAll<HTMLElement>('#skills .progress-bar');
    if (!panel || bars.length === 0) return;

    const animate = (): void => {
      bars.forEach((bar) => {
        const fill = bar.querySelector<HTMLElement>('.progress-bar__value');
        if (fill) fill.style.width = `${bar.dataset.target ?? '0'}%`;
      });
    };

    const reset = (): void => {
      bars.forEach((bar) => {
        const fill = bar.querySelector<HTMLElement>('.progress-bar__value');
        if (fill) fill.style.width = '0%';
      });
    };

    const rect = panel.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) animate();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { entry.isIntersecting ? animate() : reset(); });
    }, { threshold: 0 });

    observer.observe(panel);
    return () => observer.disconnect();
  });
</script>

<Panel id="skills" header={$t('cv.skills.panelTitle')}>
  <div class="skills">
    {#each skills as skill}
      <div class="skills__languages">
        <span>{skill.name}</span>
        <ProgressBar value={skill.rate} name={skill.name} />
      </div>
    {/each}
  </div>
</Panel>
