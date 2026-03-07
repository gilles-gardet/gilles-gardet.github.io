import type { PageLoad } from './$types';
import { marked } from 'marked';
import type { Language } from '$lib/utils';
import { missionTimelapse } from '$lib/utils';
import missionsData from '$lib/data/missions.json';
import skillsData from '$lib/data/skills.json';

const lightFiles = import.meta.glob<string>('/src/assets/resume/missions/**/*_light.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const fullFiles = import.meta.glob<string>('/src/assets/resume/missions/**/*_full.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

export function entries() {
  return [{ lang: 'fr' }, { lang: 'en' }];
}

export const load: PageLoad = async ({ params }) => {
  const lang = params.lang as Language;
  const missions = await Promise.all(
    missionsData.map(async (mission, index) => {
      const date = new Date(mission.startDate);
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const dateKey = `${date.getFullYear()}${month}`;
      const lightKey = `/src/assets/resume/missions/${lang}/${dateKey}/${dateKey}_light.md`;
      const fullKey = `/src/assets/resume/missions/${lang}/${dateKey}/${dateKey}_full.md`;
      return {
        id: (mission as { id?: string }).id ?? String(index),
        client: mission.client,
        startDate: mission.startDate,
        endDate: mission.endDate ?? null,
        timelapse: missionTimelapse(lang, mission.startDate, mission.endDate),
        lightHtml: await marked.parse(lightFiles[lightKey] ?? ''),
        fullHtml: await marked.parse(fullFiles[fullKey] ?? ''),
        index,
      };
    }),
  );
  return { lang, missions, skills: skillsData };
};
