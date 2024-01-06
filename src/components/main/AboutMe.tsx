import React from 'react';
import Container from '../core/Container';
import { FadeIn, FadeInStagger } from '../motion/FadeIn';
import { Border } from '../core/Border';
import {
  AWSLogoGrayScale,
  BitbucketLogo,
  CSSLogo,
  CloudFlareLogo,
  DockerLogo,
  FigmaLogo,
  FirebaseLogo,
  GitLogo,
  GithubLogo,
  HTMLLogo,
  JavascriptLogo,
  JiraLogo,
  MUILogo,
  NextJSLogo,
  ReactLogo,
  ReactQueryLogo,
  ReduxToolkitLogo,
  StyledComponentsLogo,
  TailwindCSSLogo,
  TrelloLogo,
  TypescriptLogo,
  VercelLogo,
  ZeplinLogoGrayScale,
} from '../svgLogo';

const TOOL_CATEGORY_DATA = {
  Frontend: [
    {
      title: 'HTML5',
      icon: HTMLLogo,
    },
    {
      title: 'CSS3',
      icon: CSSLogo,
    },
    {
      title: 'Javascript',
      icon: JavascriptLogo,
    },
    {
      title: 'Typescript',
      icon: TypescriptLogo,
    },
    {
      title: 'TailwindCSS',
      icon: TailwindCSSLogo,
    },
    {
      title: 'Styled Components',
      icon: StyledComponentsLogo,
    },
    {
      title: 'MUI',
      icon: MUILogo,
    },
    {
      title: 'React',
      icon: ReactLogo,
    },
    {
      title: 'NextJS',
      icon: NextJSLogo,
    },
    {
      title: 'redux-toolkit',
      icon: ReduxToolkitLogo,
    },
    {
      title: 'react-query',
      icon: ReactQueryLogo,
    },
    {
      title: 'zustand',
      icon: ReactLogo,
    },
  ],
  Deployment: [
    {
      title: 'AWS',
      icon: AWSLogoGrayScale,
    },
    {
      title: 'CloudFlare',
      icon: CloudFlareLogo,
    },
    {
      title: 'Vercel',
      icon: VercelLogo,
    },
    {
      title: 'Firebase',
      icon: FirebaseLogo,
    },
    {
      title: 'Docker',
      icon: DockerLogo,
    },
  ],
  'Version Control': [
    {
      title: 'Git',
      icon: GitLogo,
    },
    {
      title: 'Github',
      icon: GithubLogo,
    },
    {
      title: 'Bitbucket',
      icon: BitbucketLogo,
    },
  ],
  Communication: [
    {
      title: 'Jira',
      icon: JiraLogo,
    },
    {
      title: 'Trello',
      icon: TrelloLogo,
    },
    {
      title: 'Figma',
      icon: FigmaLogo,
    },
    {
      title: 'Zeplin',
      icon: ZeplinLogoGrayScale,
    },
  ],
};

export default function AboutMe() {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="text-2xl font-semibold text-neutral-950">About Me</h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        <FadeIn>
          <article>
            <Border className="pt-16">
              <div className="space-y-6 text-base text-neutral-600">
                <p>
                  다시 인사드립니다. 안녕하세요! 웹 개발자로 활동 중인
                  PONOMOLY입니다. 저는 동국대학교 경영학과를 졸업한 뒤,
                  2019년부터 노매드커넥션이라는 회사에서 개발자로 활동을
                  시작하였습니다. 그 후 2020년 8월부터 2023년 12월까지 Gowid라는
                  기업에서 스타트업의 성장을 도울 수 있도록 웹 서비스 내 주요
                  기능들을 개발 및 유지보수하였으며 그 과정에서 라이브 서비스에
                  대한 다양한 경험을 축적하였습니다. 다년간 실무에 사용한 기술과
                  경험을 기반으로 함께 성장할 수 있는 동력이 되고자 합니다.
                </p>
                <p>
                  꾸준하게 관련 기술을 학습하는 습관을 유지하고 있으며 좋은
                  기술과 방법이 있다면 동료에게 공유하고 함께 성장하고자 하는
                  태도가 제가 생각하는 저의 장점입니다. 개발에 시간을 쓰지 않을
                  때에는 운동, 작곡 등으로 스트레스를 푸는 것을 즐깁니다. 또한
                  다양한 좋은 책을 읽으려고 노력하고 있으니 혹시 괜찮은 책이
                  있다면 적극적으로 추천 부탁드립니다.
                </p>
                {/* <p>
                  저를 더욱 자세하게 알고 싶다면 아래의 이력서를 확인해주세요.
                </p> */}
              </div>
            </Border>
          </article>
        </FadeIn>
      </div>
      <FadeIn>
        <h2 className="mt-20 text-2xl font-semibold text-neutral-950">
          My Tools
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        <FadeIn>
          <article>
            <Border className="sm:h-142 md:h-116 w-full pt-16 lg:h-60">
              <FadeInStagger className="flex h-full flex-col flex-wrap content-around">
                <FadeIn className="mb-8">
                  <article className="relative flex flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <h3 className="text-xl font-semibold">Frontend</h3>
                    <Border className="mt-4 flex flex-col gap-2">
                      {TOOL_CATEGORY_DATA.Frontend.map((item) => {
                        return (
                          <div
                            key={item.title}
                            className="flex items-center gap-4 first:mt-4"
                          >
                            <item.icon className="h-16 w-16 flex-none" />
                            <p className="text-base text-neutral-600">
                              {item.title}
                            </p>
                          </div>
                        );
                      })}
                    </Border>
                  </article>
                </FadeIn>
                <FadeIn className="mb-8">
                  <article className="relative flex flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <h3 className="text-xl font-semibold">Version Control</h3>
                    <Border className="mt-4 flex flex-col gap-2">
                      {TOOL_CATEGORY_DATA['Version Control'].map((item) => {
                        return (
                          <div
                            key={item.title}
                            className="flex items-center gap-4 first:mt-4"
                          >
                            <item.icon className="h-16 w-16 flex-none" />
                            <p className="text-base text-neutral-600">
                              {item.title}
                            </p>
                          </div>
                        );
                      })}
                    </Border>
                  </article>
                </FadeIn>
                <FadeIn className="mb-8">
                  <article className="relative flex flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <h3 className="text-xl font-semibold">Deployment</h3>
                    <Border className="mt-4 flex flex-col gap-2">
                      {TOOL_CATEGORY_DATA.Deployment.map((item) => {
                        return (
                          <div
                            key={item.title}
                            className="flex items-center gap-4 first:mt-4"
                          >
                            <item.icon className="h-16 w-16 flex-none" />
                            <p className="text-base text-neutral-600">
                              {item.title}
                            </p>
                          </div>
                        );
                      })}
                    </Border>
                  </article>
                </FadeIn>
                <FadeIn className="mb-8">
                  <article className="relative flex flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <h3 className="text-xl font-semibold">Communication</h3>
                    <Border className="mt-4 flex flex-col gap-2">
                      {TOOL_CATEGORY_DATA.Communication.map((item) => {
                        return (
                          <div
                            key={item.title}
                            className="flex items-center gap-4 first:mt-4"
                          >
                            <item.icon className="h-16 w-16 flex-none" />
                            <p className="text-base text-neutral-600">
                              {item.title}
                            </p>
                          </div>
                        );
                      })}
                    </Border>
                  </article>
                </FadeIn>
              </FadeInStagger>
            </Border>
          </article>
        </FadeIn>
      </div>
    </Container>
  );
}
