<script lang="ts">
  import { onMount } from 'svelte';
  import Panel from './Panel.svelte';
  import SlideButton from './SlideButton.svelte';
  import { t } from '$lib/i18n/translations';

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

  let { missions }: { missions: Mission[] } = $props();

  function closeDialog(index: number): void {
    document.getElementById(`dialog-${index}`)?.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  onMount(() => {
    /** Wire up "view details" slide buttons to open the corresponding dialog. */
    document.querySelectorAll<HTMLButtonElement>('button[data-mission]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const dialog = document.getElementById(`dialog-${btn.dataset.mission}`);
        dialog?.classList.add('is-open');
        document.body.style.overflow = 'hidden';
      });
    });

    /** Wire up backdrop click and Escape key to close open dialogs. */
    document.querySelectorAll<HTMLElement>('.cv-dialog-mask').forEach((mask) => {
      mask.addEventListener('click', (e) => {
        if (e.target === mask) closeDialog(Number(mask.id.replace('dialog-', '')));
      });
    });

    const onKeydown = (e: KeyboardEvent): void => {
      if (e.key !== 'Escape') return;
      document.querySelectorAll<HTMLElement>('.cv-dialog-mask.is-open').forEach((mask) => {
        closeDialog(Number(mask.id.replace('dialog-', '')));
      });
    };
    document.addEventListener('keydown', onKeydown);

    /** Animate mission cards with IntersectionObserver on scroll. */
    const events = document.querySelectorAll<HTMLElement>('.timeline__event');
    const screenWidth = window.innerWidth;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const content = entry.target.querySelector<HTMLElement>('.timeline__event-content');
        if (!content || !entry.isIntersecting) return;
        const eventIndex = parseInt((entry.target as HTMLElement).getAttribute('data-mission-index') ?? '0', 10);
        const isLeftAnimation = screenWidth > 960 && eventIndex % 2 !== 0;
        content.style.opacity = '0';
        content.style.transform = isLeftAnimation ? 'translateX(-40px)' : 'translateX(40px)';
        void content.offsetHeight;
        content.classList.add(isLeftAnimation ? 'mission__animation-left' : 'mission__animation-right');
        requestAnimationFrame(() => setTimeout(() => content.classList.add('mission__animation-visible'), 100));
        observer.unobserve(entry.target);
      });
    }, { threshold: 0 });

    events.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.removeEventListener('keydown', onKeydown);
    };
  });
</script>

<Panel id="experience" header={$t('cv.missions.panelTitle')}>
  <div class="timeline">
    {#each missions as mission, i}
      <div class="timeline__event" data-mission-index={i}>
        <div class="timeline__event-opposite"></div>
        <div class="timeline__event-separator">
          <div class="timeline__event-separator__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <g id="bookmark">
                <path d="M17.75,20.75a.83.83,0,0,1-.43-.13L12,16.91,6.68,20.62a.75.75,0,0,1-.78,0A.74.74,0,0,1,5.5,20V6A2.75,2.75,0,0,1,8.25,3.25h7.5A2.75,2.75,0,0,1,18.5,6V20a.74.74,0,0,1-.4.66A.73.73,0,0,1,17.75,20.75ZM12,15.25a.75.75,0,0,1,.43.13L17,18.56V6a1.25,1.25,0,0,0-1.25-1.25H8.25A1.25,1.25,0,0,0,7,6V18.56l4.57-3.18A.75.75,0,0,1,12,15.25Z" />
              </g>
            </svg>
          </div>
          {#if i < missions.length - 1}
            <div class="timeline__event-connector"></div>
          {/if}
        </div>
        <div class="timeline__event-content">
          <div class="mission">
            <div class="mission__header">
              <span class="mission__header__client">{mission.client}</span>
              <span class="mission__header__timelapse">{mission.timelapse}</span>
            </div>
            <div class="mission__body">
              <div class="markdown-content">{@html mission.lightHtml}</div>
              <div class="mission__body__button">
                <SlideButton label={$t('cv.shared.slideButton')} missionIndex={i} />
              </div>
            </div>
          </div>
        </div>
      </div>
    {/each}
  </div>
</Panel>

<!-- Pre-rendered mission dialogs — one per mission, shown on demand -->
{#each missions as mission, i}
  <div class="cv-dialog-mask" id={`dialog-${i}`} role="dialog" aria-modal="true" aria-labelledby={`dialog-title-${i}`}>
    <div class="cv-dialog" style="max-width: 960px">
      <div class="cv-dialog-header">
        <div class="mission__title">
          <h2 id={`dialog-title-${i}`} class="prose font-bold text-slate-600 dark:text-slate-100">{mission.client}</h2>
          <span class="mission__title__timelapse">{mission.timelapse}</span>
        </div>
        <div class="cv-dialog-header-actions">
          <button
            class="cv-dialog-close"
            type="button"
            aria-label={$t('cv.dialog.close')}
            onclick={() => closeDialog(i)}
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.707 7l3.647-3.646a.5.5 0 0 0-.708-.708L7 6.293 3.354 2.646a.5.5 0 0 0-.708.708L6.293 7l-3.647 3.646a.5.5 0 0 0 .708.708L7 7.707l3.646 3.647a.5.5 0 0 0 .708-.708L7.707 7Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
      <div class="cv-dialog-content">
        <div class="mission__content">
          <div class="mission__content__text">
            <div class="markdown-content">{@html mission.lightHtml}</div>
            <div class="markdown-content flex flex-col gap-3">{@html mission.fullHtml}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/each}
