import { describe, expect, it } from 'vitest';
import { membership, evidence } from '@/lib/site-config';
describe('Spot membership and evidence rules', () => {
  it('costs 59 USD', () => { expect(membership.priceUsd).toBe(59); });
  it('lasts three months', () => { expect(membership.durationMonths).toBe(3); });
  it('classifies BREVIS as research rather than achieved performance', () => { expect(evidence.find(e => e.token === 'BREVIS')?.kind).toBe('research'); });
  it('classifies SOLV and ARIA as research rather than spot returns', () => { expect(evidence.find(e => e.token === 'SOLV / ARIA')?.kind).toBe('research'); });
  it('does not invent a checkout destination', () => { expect(membership.destination).toBe(''); });
});