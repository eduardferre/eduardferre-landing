import type { APIRoute } from 'astro';
import { projects } from '../data/projects.js';

/**
 * `/llms.txt` — plain-text index of the hub for assistants, generated from
 * the same projects array the page renders so it never drifts.
 */
export const GET: APIRoute = () => {
  const body = [
    '# Eduard Ferré — Developer Hub',
    '',
    '> AI / Data Engineer in Barcelona (Carver Advanced Systems). LLMs, GraphRAG, Knowledge Graphs and AI-driven Mainframe (COBOL/JCL) code analysis.',
    '',
    'Full profile, experience and publications: https://portfolio.eduardferre.dev/ (plain text: https://portfolio.eduardferre.dev/llms-full.txt)',
    '',
    '## Projects',
    '',
    ...projects.map((p) => `- [${p.title}](${p.url}): ${p.description} (${p.tech.join(', ')})`),
    '',
    '## Profiles',
    '',
    '- [GitHub](https://github.com/eduardferre)',
    '- [LinkedIn](https://www.linkedin.com/in/eduardferre)',
    '- [ORCID](https://orcid.org/0009-0003-3993-8186)',
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
