import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-3">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/">
            <a>Sign in</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-3 pb-3">
      <HeroOneButton
        title={
          <>
            {'Skills evaluation platform built for\n'}
            <span>Software Engineers</span>
          </>
        }
        description="Evaluate your skills quickly and reliably"
      />
    </Section>
  </Background>
);

export { Hero };
