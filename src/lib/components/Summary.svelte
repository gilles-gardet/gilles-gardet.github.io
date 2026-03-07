<script lang="ts">
  import Panel from './Panel.svelte';
  import { t } from '$lib/i18n/translations';

  const yearsOfExperience = new Date().getFullYear() - new Date(2013, 4).getFullYear();
</script>

<Panel id="summary" header={$t('cv.summary.panelTitle')}>
  <div class="summary">{@html $t('cv.summary.content', { value: yearsOfExperience })}</div>
</Panel>
