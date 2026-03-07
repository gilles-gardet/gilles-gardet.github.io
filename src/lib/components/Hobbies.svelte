<script lang="ts">
  import Panel from './Panel.svelte';
  import { t } from '$lib/i18n/translations';

  const tags = ['dev', 'homelab', 'movie', 'basket', 'running'] as const;
</script>

<Panel id="hobbies" header={$t('cv.hobbies.panelTitle')}>
  <div class="hobby">
    {#each tags as tag}
      <div class="hobby__tag">{$t(`cv.hobbies.content.${tag}`)}</div>
    {/each}
  </div>
</Panel>
