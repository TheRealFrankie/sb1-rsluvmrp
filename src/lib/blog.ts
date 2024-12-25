export function formatSection(title: string, content: string) {
  return `
    <h2 class="text-3xl font-mono font-bold text-white mb-4">${title}</h2>
    ${content.trim()}
  `;
}