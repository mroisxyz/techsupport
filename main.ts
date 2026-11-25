// Entry program for the make.fun tech-support comedy bounty.
// thinking: one job only — emit the single joke line to entry.txt.
// Required comment words: hello batch orders slot.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// thinking_revised: a burned-out helpdesk voice reuses the tired reboot advice;
// it already flipped the password to "off", so "on" never came; write it as-is.
const line = "Have you tried turning it off and on again? I ask because I already did, and now your password is 'off'.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line, 'utf8');
console.log(Buffer.byteLength(line, 'utf8'));
