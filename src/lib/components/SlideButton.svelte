<script lang="ts">
  let { label, missionIndex }: { label: string; missionIndex: number } = $props();
</script>

<button class="learn-more" type="button" data-mission={missionIndex} aria-label={label}>
  <span class="circle" aria-hidden="true">
    <span class="icon arrow"></span>
  </span>
  <span class="button-text">{label}</span>
</button>
