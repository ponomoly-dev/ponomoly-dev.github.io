import { ContactSection } from '@/components/ContactSection';
import Container from '@/components/core/Container';
import AboutMe from '@/components/main/AboutMe';
import { Works } from '@/components/main/Works';
import { FadeIn } from '@/components/motion/FadeIn';
import { Metadata } from 'next';

export const metadata: Metadata = {
  description: 'Developer in South Korea',
};

const Main = () => {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-56">
      <FadeIn className="max-w-3xl">
        <h1 className="text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          안녕하세요!
          <br />
          프론트엔드 개발자
          <br />
          PONOMOLY 입니다.
        </h1>
        <p className="texl-xl mt-6 text-neutral-600">
          웹 기술을 통해 함께 성장하는 것을 목표로 삼고 있습니다.
          <br />
          꾸준하게 관련 기술을 학습하며 유의미한 결과물을 전달할 수 있도록
          노력하고 있습니다.
        </p>
      </FadeIn>
    </Container>
  );
};

export default function Home() {
  return (
    <>
      <div id="top" />
      <Main />
      {/* About Me */}
      <div id="about-me" />
      <AboutMe />
      {/* <AboutMe /> */}
      {/* Works */}
      <div id="works" />
      <Works />
      {/* Projects 추후 몇개 만들고 추가 */}
      <div id="contact" />
      <ContactSection />
    </>
  );
}
