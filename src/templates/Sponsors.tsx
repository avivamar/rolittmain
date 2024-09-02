import Image from 'next/image';

import { LogoCloud } from '@/features/landing/LogoCloud';
import { Section } from '@/features/landing/Section';

const Sponsors = () => (
  <Section>
    <LogoCloud text="Sponsored by">
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/images/logocloud/google-2015-logo-svgrepo-com.svg"
          alt="google"
          width="128"
          height="40"
        />
      </a>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/images/logocloud/microsoft-logo.svg"
          alt="microsoft"
          width="128"
          height="26"
        />
      </a>

      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/assets/images/logocloud/openai.svg"
          alt="openai"
          width="128"
          height="38"
        />
      </a>

      <a href="#" target="_blank" rel="noopener">
        <Image
          src="/assets/images/logocloud/opencv-svgrepo-com.svg"
          alt="opencv"
          width="64"
          height="64"
        />
      </a>
    </LogoCloud>
  </Section>
);

export { Sponsors };
