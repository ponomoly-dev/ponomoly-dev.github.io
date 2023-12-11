'use client';
import Container from '@/components/core/Container';
import StyledComponentsRegistry from '@/lib/registry';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

function RootLayoutInner({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();
  return (
    <MotionConfig transition={shouldReduceMotion ? { duration: 0 } : undefined}>
      <motion.div
        style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        className="relative flex flex-auto overflow-hidden bg-white pt-9"
      >
        <motion.div className="relative flex w-full flex-col pt-9">
          <Container>
            <main className="w-full flex-auto">{children}</main>
          </Container>
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
