<script lang="ts">
  import { onMount } from 'svelte';
  import Avatar from './Avatar.svelte';
  import { otherLang } from '$lib/utils';
  import { t, locale } from '$lib/i18n/translations';
  import { theme } from '$lib/stores/theme';

  let menuOpen = $state(false);
  let triggerEl: HTMLButtonElement | undefined = $state();
  let menuEl: HTMLElement | undefined = $state();

  function openMenu(): void {
    if (!triggerEl || !menuEl) return;
    const rect = triggerEl.getBoundingClientRect();
    menuEl.style.top = `${rect.bottom + window.scrollY + 4}px`;
    menuEl.style.left = `${rect.left + window.scrollX}px`;
    menuOpen = true;
  }

  function closeMenu(): void {
    menuOpen = false;
  }

  function toggleMenu(e: MouseEvent): void {
    e.stopPropagation();
    menuOpen ? closeMenu() : openMenu();
  }

  function downloadCV(): void {
    const anchor = document.createElement('a');
    anchor.href = '/assets/pdf/CV_GARDET_Gilles.pdf';
    anchor.download = 'gardet_gilles.pdf';
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }

  onMount(() => {
    const onDocClick = (e: MouseEvent): void => {
      if (menuEl && !menuEl.contains(e.target as Node)) closeMenu();
    };
    const onScroll = (): void => closeMenu();
    const onKeydown = (e: KeyboardEvent): void => { if (e.key === 'Escape') closeMenu(); };

    document.addEventListener('click', onDocClick);
    window.addEventListener('scroll', onScroll);
    document.addEventListener('keydown', onKeydown);

    return () => {
      document.removeEventListener('click', onDocClick);
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('keydown', onKeydown);
    };
  });
</script>

<div class="general-container">
  <button
    type="button"
    class="general__menu-button"
    id="menu-trigger"
    aria-haspopup="true"
    aria-expanded={menuOpen}
    aria-controls="cv-menu"
    aria-label="Menu"
    bind:this={triggerEl}
    onclick={toggleMenu}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3226 3.6129H0.677419C0.497757 3.6129 0.325452 3.54152 0.198411 3.41448C0.0713707 3.28744 0 3.11514 0 2.93548C0 2.75581 0.0713707 2.58351 0.198411 2.45647C0.325452 2.32943 0.497757 2.25806 0.677419 2.25806H13.3226C13.5022 2.25806 13.6745 2.32943 13.8016 2.45647C13.9286 2.58351 14 2.75581 14 2.93548C14 3.11514 13.9286 3.28744 13.8016 3.41448C13.6745 3.54152 13.5022 3.6129 13.3226 3.6129ZM13.3226 7.67741H0.677419C0.497757 7.67741 0.325452 7.60604 0.198411 7.479C0.0713707 7.35196 0 7.17965 0 6.99999C0 6.82033 0.0713707 6.64802 0.198411 6.52098C0.325452 6.39394 0.497757 6.32257 0.677419 6.32257H13.3226C13.5022 6.32257 13.6745 6.39394 13.8016 6.52098C13.9286 6.64802 14 6.82033 14 6.99999C14 7.17965 13.9286 7.35196 13.8016 7.479C13.6745 7.60604 13.5022 7.67741 13.3226 7.67741ZM0.677419 11.7419H13.3226C13.5022 11.7419 13.6745 11.6706 13.8016 11.5435C13.9286 11.4165 14 11.2442 14 11.0645C14 10.8848 13.9286 10.7125 13.8016 10.5855C13.6745 10.4585 13.5022 10.3871 13.3226 10.3871H0.677419C0.497757 10.3871 0.325452 10.4585 0.198411 10.5855C0.0713707 10.7125 0 10.8848 0 11.0645C0 11.2442 0.0713707 11.4165 0.198411 11.5435C0.325452 11.6706 0.497757 11.7419 0.677419 11.7419Z" fill="currentColor" />
    </svg>
  </button>

  <div
    id="cv-menu"
    class="cv-menu cv-menu-popup"
    class:is-visible={menuOpen}
    role="navigation"
    aria-hidden={!menuOpen}
    bind:this={menuEl}
  >
    <div class="cv-menu-group">
      <span class="cv-menu-group-label">Menu</span>
      <ul class="cv-menu-list">
        <li class="cv-menu-item" role="none">
          <button
            type="button"
            class="cv-menu-item-link"
            role="menuitem"
            title={$t('cv.contact.menu.items.mode.title')}
            onclick={() => theme.toggle()}
          >
            <span class="icon {$theme ? 'icon-sun' : 'icon-moon'} cv-menu-item-icon" aria-hidden="true"></span>
            <span class="cv-menu-item-text">{$theme ? $t('cv.contact.menu.items.mode.light') : $t('cv.contact.menu.items.mode.dark')}</span>
          </button>
        </li>
        <li class="cv-menu-item" role="none">
          <a
            href={`/${otherLang($locale as 'fr' | 'en')}/`}
            class="cv-menu-item-link"
            role="menuitem"
            title={$t('cv.contact.menu.items.language.title')}
          >
            <span class="icon icon-globe cv-menu-item-icon" aria-hidden="true"></span>
            <span class="cv-menu-item-text">{$t('cv.contact.menu.items.language.label')}</span>
          </a>
        </li>
        <li class="cv-menu-item" role="none">
          <button
            type="button"
            class="cv-menu-item-link"
            role="menuitem"
            title={$t('cv.contact.menu.items.download.title')}
            onclick={downloadCV}
          >
            <span class="icon icon-download cv-menu-item-icon" aria-hidden="true"></span>
            <span class="cv-menu-item-text">{$t('cv.contact.menu.items.download.label')}</span>
          </button>
        </li>
      </ul>
    </div>
  </div>

  <div class="general">
    <Avatar src="/assets/pictures/me.jpg" alt="Gilles Gardet" />
    <span class="general__name">Gilles Gardet</span>
    <span class="general__presentation">{$t('cv.contact.presentation')}</span>
    <a class="chip" href="mailto:gilles.gardet@gmail.com" aria-label="Send email">
      <svg class="chip__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <g id="envelope">
          <path d="M19,4.25H5A1.76,1.76,0,0,0,3.25,6V18A1.76,1.76,0,0,0,5,19.75H19A1.76,1.76,0,0,0,20.75,18V6A1.76,1.76,0,0,0,19,4.25ZM5,5.75H19a.25.25,0,0,1,.25.25V7.54L12,11.16,4.75,7.54V6A.25.25,0,0,1,5,5.75Zm14,12.5H5A.25.25,0,0,1,4.75,18V9.21l6.91,3.46a.76.76,0,0,0,.68,0l6.91-3.46V18A.25.25,0,0,1,19,18.25Z" />
        </g>
      </svg>
      <span class="chip__label">gilles.gardet@gmail.com</span>
    </a>
  </div>
</div>
