import Container from '@/components/core/Container';
import { FadeIn } from '@/components/motion/FadeIn';
import Link from 'next/link';

export default function NotFound() {
  return (
    <Container className="item-center flex h-full pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="flex max-w-xl flex-col items-center text-center">
        <p className="text-4xl font-semibold text-neutral-950 sm:text-5xl">
          404
        </p>
        <h1 className="mt-4 text-2xl font-semibold text-neutral-800">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
          죄송합니다, 요청하신 페이지를 찾을 수 없습니다.
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          메인 홈으로 돌아가기
        </Link>
      </FadeIn>
    </Container>
  );
}
