import { getCollection, type CollectionEntry } from 'astro:content';
import fs from 'node:fs';

type A = CollectionEntry<'assignments'>;

const sortKey = (a: A) => (a.data.ongoing ? 9999 : (a.data.end ?? a.data.start ?? 0));

export async function publishedAssignments() {
  const all = await getCollection('assignments', ({ data }) => data.published);
  return all.sort((a, b) => sortKey(b) - sortKey(a) || a.data.title.localeCompare(b.data.title));
}

export async function sortedPeople() {
  const all = await getCollection('people');
  return all.sort((a, b) => a.data.order - b.data.order);
}

/** An assignment gets its own page only when it has a written description. */
export const hasPage = (a: A) => (a.body ?? '').trim().length > 0;

export function years(a: A) {
  const { start, end, ongoing } = a.data;
  if (ongoing) return start ? `${start}–ongoing` : 'Ongoing';
  if (start && end && start !== end) return `${start}–${end}`;
  return String(end ?? start ?? '');
}

/** Headshot if one has been added at public/images/people/<id>.jpg */
export function photoFor(id: string) {
  return fs.existsSync(`public/images/people/${id}.jpg`) ? `/images/people/${id}.jpg` : null;
}

export const initials = (name: string) => {
  const w = name.split(/\s+/);
  return (w[0][0] + (w.length > 1 ? w[w.length - 1][0] : '')).toUpperCase();
};
