import React from 'react';
import Container from '../core/Container';
import { FadeIn } from '../motion/FadeIn';
import { Border } from '../core/Border';

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
                <p>
                  저를 더욱 자세하게 알고 싶다면 아래의 이력서를 확인해주세요.
                </p>
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
            <Border className="pt-16">
              <div>My Tools</div>
            </Border>
          </article>
        </FadeIn>
      </div>
    </Container>
  );
}
