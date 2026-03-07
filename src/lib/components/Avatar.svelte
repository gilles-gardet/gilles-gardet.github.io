<script lang="ts">
  let { src, alt = 'Profile picture' }: { src: string; alt?: string } = $props();
</script>

<div class="avatar">
  <img {src} {alt} width="64" height="64" />
</div>
