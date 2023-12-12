import React from 'react';
import Container from '../core/Container';
import { FadeIn } from '../motion/FadeIn';
import Link from 'next/link';

const navigation = [
  // {
  //   title: 'Work',
  //   links: [
  //     // { title: 'Gowid', href: '/work/gowid' },
  //     // {
  //     //   title: (
  //     //     <>
  //     //       See all <span aria-hidden="true">&rarr;</span>
  //     //     </>
  //     //   ),
  //     //   href: '/work',
  //     // },
  //   ],
  // },
  {
    title: 'Info',
    links: [
      { title: 'About me', href: '/about' },
      // { title: 'Blog', href: '/blog' },
      // { title: 'Contact', href: '/contact' },
    ],
  },
  // {
  //   title: 'Connect',
  //   links: socialMediaProfiles,
  // },
];

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="gap-8 text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// TODO : Additional Content With Navigation + Logo Component
export default function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        {/* <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
        </div> */}
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <p className="text-sm text-neutral-700">
            © PONOMOLY. {new Date().getFullYear()}
          </p>
        </div>
      </FadeIn>
    </Container>
  );
}
