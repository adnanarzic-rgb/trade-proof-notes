import { describe, expect, it } from 'vitest';
import { membership, evidence, packages, socialLinks, featuredExamples } from '@/lib/site-config';
describe('Spot membership and evidence rules', () => {
  it('costs 59 USD', () => { expect(membership.priceUsd).toBe(59); });
  it('lasts three months', () => { expect(membership.durationMonths).toBe(3); });
  it('classifies BREVIS as research rather than achieved performance', () => { expect(evidence.find(e => e.token === 'BREVIS')?.kind).toBe('research'); });
  it('classifies SOLV and ARIA as research rather than spot returns', () => { expect(evidence.find(e => e.token === 'SOLV / ARIA')?.kind).toBe('research'); });
  it('uses the supplied Standard checkout', () => { expect(packages[0]?.destination).toBe('https://whop.com/checkout/plan_UC2VDuvqRdpL6'); });
  it('prices Premium at 120 USD', () => { expect(packages[1]?.priceUsd).toBe(120); });
  it('gives Premium six months', () => { expect(packages[1]?.durationMonths).toBe(6); });
  it('uses the supplied Premium checkout', () => { expect(packages[1]?.destination).toBe('https://whop.com/checkout/plan_DatQoCJ6zz7B0'); });
  it('prices VIP at 200 USD', () => { expect(packages[2]?.priceUsd).toBe(200); });
  it('gives VIP twelve months', () => { expect(packages[2]?.durationMonths).toBe(12); });
  it('uses the supplied VIP checkout', () => { expect(packages[2]?.destination).toBe('https://whop.com/checkout/plan_z5YjBZk72W3Nu'); });
  it('uses the supplied Telegram invitation', () => { expect(socialLinks.telegram).toBe('https://t.me/+usoj-qtkLU81MmQ0'); });
  it('reserves new examples without invented returns', () => { expect(featuredExamples).toEqual([]); });
});