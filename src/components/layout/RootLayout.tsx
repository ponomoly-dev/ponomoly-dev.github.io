'use client';
import Container from '@/components/core/Container';
import GridPattern from '@/components/motion/GridPattern';
import StyledComponentsRegistry from '@/lib/registry';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import Footer from './Footer';

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <motion.div
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-14"
      >
        <motion.div className="relative isolate flex w-full flex-col pt-9">
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
      <RootLayoutInner key={pathname}>{children}</RootLayoutInner>
    </StyledComponentsRegistry>
  );
}
