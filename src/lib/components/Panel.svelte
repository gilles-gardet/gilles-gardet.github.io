<script lang="ts">
  import type { Snippet } from 'svelte';

  let { id, header, children }: { id?: string; header: string; children: Snippet } = $props();
</script>

<div class="panel" {id}>
  <div class="panel__header">
    <span class="panel__header__title">{header}</span>
  </div>
  <div class="panel__content">
    {@render children()}
  </div>
</div>
