import { ContactSection } from '@/components/ContactSection';
import Container from '@/components/core/Container';
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

// function Services() {
//   return (
//     <>
//       <SectionIntro
//         eyebrow="Services"
//         title="We help you identify, explore and respond to new opportunities."
//         className="mt-24 sm:mt-32 lg:mt-40"
//       >
//         <p>
//           As long as those opportunities involve giving us money to re-purpose
//           old projects — we can come up with an endless number of those.
//         </p>
//       </SectionIntro>
//       <Container className="mt-16">
//         <div className="lg:flex lg:items-center lg:justify-end">
//           <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
//             <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
//               <StylizedImage
//                 src={imageLaptop}
//                 sizes="(min-width: 1024px) 41rem, 31rem"
//                 className="justify-center lg:justify-end"
//               />
//             </FadeIn>
//           </div>
//           <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
//             <ListItem title="Web development">
//               We specialise in crafting beautiful, high quality marketing pages.
//               The rest of the website will be a shell that uses lorem ipsum
//               everywhere.
//             </ListItem>
//             <ListItem title="Application development">
//               We have a team of skilled developers who are experts in the latest
//               app frameworks, like Angular 1 and Google Web Toolkit.
//             </ListItem>
//             <ListItem title="E-commerce">
//               We are at the forefront of modern e-commerce development. Which
//               mainly means adding your logo to the Shopify store template we’ve
//               used for the past six years.
//             </ListItem>
//             <ListItem title="Custom content management">
//               At Studio we understand the importance of having a robust and
//               customised CMS. That’s why we run all of our client projects out
//               of a single, enormous Joomla instance.
//             </ListItem>
//           </List>
//         </div>
//       </Container>
//     </>
//   )
// }

const AboutMe = () => {
  return <>About Me 자기 소개서 + 내가 가진 기술 스택 이력서 다운로드 +</>;
};

const Contact = () => {
  return <>Contact</>;
};

export default function Home() {
  return (
    <>
      <div id="top" />
      <Main />
      {/* About Me */}
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
