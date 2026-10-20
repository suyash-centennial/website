import { getCollection } from 'astro:content';

export async function publishedAssignments() {
  const all = await getCollection('assignments', ({ data }) => data.published);
  return all.sort((a, b) => (b.data.end ?? b.data.start ?? 0) - (a.data.end ?? a.data.start ?? 0));
}

export async function sortedPeople() {
  const all = await getCollection('people');
  return all.sort((a, b) => a.data.order - b.data.order);
}
