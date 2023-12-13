'use client';
import Container from '@/components/core/Container';
import GridPattern from '@/components/motion/GridPattern';
import StyledComponentsRegistry from '@/lib/registry';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { createContext, useContext, useId, useRef, useState } from 'react';
import Footer from './Footer';
import Icon from '../core/Icon';
import clsx from 'clsx';
import Link from 'next/link';
import { Logomark, Logo } from './Logo';

const RootLayoutContext = createContext<{
  logoHovered: boolean;
  setLogoHovered: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

function Header({
  panelId,
  invert = false,
  onToggle,
  expanded,
  toggleRef,
  icon: Icon,
}: {
  panelId: string;
  invert?: boolean;
  onToggle: () => void;
  expanded: boolean;
  toggleRef: React.RefObject<HTMLButtonElement>;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const { logoHovered, setLogoHovered } = useContext(RootLayoutContext)!;

  return (
    <Container>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          aria-label="Home"
          onMouseOver={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logomark
            // className="h-8 sm:hidden"
            className="h-8"
            invert={invert}
            filled={logoHovered}
          />
          {/* <Logo
            className="hidden h-8 sm:block"
            invert={invert}
            filled={logoHovered}
          /> */}
        </Link>
        <div className="flex items-center gap-x-8">
          {/* <button>Contact</button> */}
          <button
            ref={toggleRef}
            type="button"
            onClick={onToggle}
            className={clsx(
              'group -m-2.5 rounded-full p-2.5 transition',
              invert ? 'hover:bg-white/10' : 'hover:bg-neutral-950/10',
            )}
            aria-expanded={expanded ? 'true' : 'false'}
            aria-controls={panelId}
            aria-label="Toggle Navigation"
          >
            <Icon
              className={clsx(
                'h-6 w-6',
                invert
                  ? 'fill-white group-hover:fill-neutral-200'
                  : 'fill-neutral-950 group-hover:fill-neutral-700',
              )}
            />
          </button>
        </div>
      </div>
    </Container>
  );
}

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  const panelId = useId();
  const openRef = useRef<React.ElementRef<'button'>>(null);
  const closeRef = useRef<React.ElementRef<'button'>>(null);
  const navRef = useRef<React.ElementRef<'div'>>(null);
  const [expanded, setExpanded] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <header>
        <div
          className="absolute left-0 right-0 top-2 z-40 pt-14"
          aria-hidden={expanded ? true : undefined}
          // @ts-ignore : inert 미자원 문제
          inert={expanded ? '' : undefined}
        >
          <Header
            panelId={panelId}
            onToggle={() => {
              setExpanded((expanded) => !expanded);
              window.setTimeout(
                () => closeRef.current?.focus({ preventScroll: true }),
              );
            }}
            expanded={expanded}
            toggleRef={openRef}
            icon={Icon.Menu}
          />
        </div>
        <motion.div
          layout
          id={panelId}
          style={{ height: expanded ? 'auto' : '0.5rem' }}
          className="relative z-50 overflow-hidden bg-neutral-950 pt-2"
          aria-hidden={expanded ? undefined : true}
          // @ts-ignore : inert 미자원 문제
          inert={expanded ? undefined : ''}
        >
          <motion.div layout className="bg-neutral-800">
            <div ref={navRef} className="bg-neutral-950 pb-16 pt-14">
              <Header
                invert
                panelId={panelId}
                onToggle={() => {
                  setExpanded((expanded) => !expanded);
                  window.setTimeout(
                    () => openRef.current?.focus({ preventScroll: true }),
                  );
                }}
                expanded={expanded}
                toggleRef={closeRef}
                icon={Icon.X}
              />
            </div>
          </motion.div>
        </motion.div>
      </header>
      <motion.div
        layout
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div
          layout
          className="relative isolate flex w-full flex-col pt-9"
        >
          <GridPattern
            className="absolute inset-x-0 -top-14 -z-10 h-[1000px] w-full fill-neutral-50 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
            yOffset={-96}
            interactive
          />
          <main className="w-full flex-auto">{children}</main>
          <Footer />
        </motion.div>
      </motion.div>
    </MotionConfig>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [logoHovered, setLogoHovered] = useState(false);
  return (
    <StyledComponentsRegistry>
      <RootLayoutContext.Provider value={{ logoHovered, setLogoHovered }}>
        <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
      </RootLayoutContext.Provider>
    </StyledComponentsRegistry>
  );
}
