import Container from '@/components/core/Container';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Developer in South Korea',
};

export default function Home() {
  return (
    <Container className="pt-24 sm:pt-32 lg:pt-40">
      이 홈페이지는 현재 공사 중 입니다.
    </Container>
  );
}
