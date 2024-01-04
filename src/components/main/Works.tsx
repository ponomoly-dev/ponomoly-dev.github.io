import { Border } from '../core/Border';
import { Button } from '../core/Button';
import Container from '../core/Container';
import { FadeIn } from '../motion/FadeIn';

function GowidLogo(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 50 50" preserveAspectRatio="xMidYMid meet" {...props}>
      <g
        transform="translate(0.000000,50.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none"
      >
        <path
          d="M185 486 c-65 -28 -105 -107 -91 -177 13 -67 88 -129 156 -129 43 0
   104 33 132 72 35 50 33 132 -6 182 -46 61 -123 82 -191 52z m117 -93 c27 -24
   24 -87 -4 -107 -52 -37 -118 -5 -118 56 0 17 7 40 17 50 20 23 80 24 105 1z"
        />
        <path
          d="M94 128 c7 -39 31 -74 70 -102 39 -29 133 -29 172 0 39 28 63 63 70
   102 6 32 6 32 -34 32 -35 0 -43 -4 -54 -27 -7 -15 -26 -34 -41 -41 -35 -17
   -76 1 -95 41 -11 23 -19 27 -54 27 -40 0 -40 0 -34 -32z"
        />
      </g>
    </svg>
  );
}

export const Works = () => {
  return (
    <Container className="mt-40">
      <FadeIn>
        <h2 className="font-display text-2xl font-semibold text-neutral-950">
          Works
        </h2>
      </FadeIn>
      <div className="mt-10 space-y-20 sm:space-y-24 lg:space-y-32">
        <FadeIn>
          <article>
            <Border className="grid grid-cols-3 gap-x-8 gap-y-8 pt-16">
              <div className="col-span-full sm:flex sm:items-center sm:justify-between sm:gap-x-8 lg:col-span-1 lg:block">
                <div className="sm:flex sm:items-center sm:gap-x-6 lg:block">
                  <GowidLogo className="h-16 w-16 flex-none" />
                  <h3 className="mt-6 text-sm font-semibold text-neutral-950 sm:mt-0 lg:mt-8">
                    Gowid
                  </h3>
                </div>
                <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                  <p className="text-sm tracking-tight text-neutral-950 after:ml-4 after:font-semibold after:text-neutral-300 after:content-['/'] lg:mt-2 lg:after:hidden">
                    Web Frontend Development
                  </p>
                  <p className="text-sm text-neutral-950 lg:mt-2">
                    2020.08 ~ 2023.12
                  </p>
                </div>
                <div className="flex items-center lg:mt-8">
                  <Button href="https://www.gowid.com">Go</Button>
                </div>
              </div>
              <div className="col-span-full lg:col-span-2 lg:max-w-2xl">
                <article className="mt-9 first:mt-0">
                  <p className="text-2xl font-medium text-neutral-950">
                    고위드 롯데 법인카드 발급 프로세스 신규개발
                  </p>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      2020.09 ~ 2020.12
                    </p>
                  </div>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <p>
                      초기 서비스 시점에는 고위드 법인카드 발급업체로 신한카드만
                      존재하였습니다. 하지만 고객에게 더욱 다양한 선택지와
                      혜택을 제공하기 위해 신규 발급업체를 추가하였습니다. 이에
                      맞춰 고객에게 노출될 프로세스 개발에 참여 및
                      기여하였습니다.
                    </p>
                    <div>
                      <h4 className="text-semi-bold mb-2 text-lg text-neutral-800">
                        업무 내용
                      </h4>
                      <ul>
                        <li>
                          - 발급 진행상황에 맞춘 Page 노출을 위한 라우팅 설계
                        </li>
                        <li>- 발급 프로세스 내부에서 사용될 신규 UI/UX 개발</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-semi-bold mb-2 text-lg text-neutral-800">
                        성과
                      </h4>
                      <ul>
                        <li>- 법인카드 발급처의 신규 추가</li>
                        <li>
                          - 법인카드 발급 카드사간 혜택 경쟁 유도 및 더 많은
                          신규 고객 유치 기대
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="mt-9 first:mt-0">
                  <p className="text-2xl font-medium text-neutral-950">
                    창업진흥원 사업비카드 발급 프로세스 신규개발
                  </p>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      2021.02 ~ 2021.04
                    </p>
                  </div>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <p>
                      창업진흥원과 신한카드가 함께 연계하여 진행하고 있던
                      사업비카드 발급을 고위드가 대행하기로 결정되었습니다. 이를
                      위한 신규 기능 개발 전반적인 작업에 참여했습니다.
                    </p>
                    <div>
                      <h4 className="text-semi-bold mb-2 text-lg text-neutral-800">
                        업무 내용
                      </h4>
                      <ul>
                        <li>
                          - 발급 진행상황에 맞춘 Page 노출을 위한 라우팅 설계
                        </li>
                        <li>- 발급 프로세스 내부에서 사용될 신규 UI/UX 개발</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-semi-bold mb-2 text-lg text-neutral-800">
                        성과
                      </h4>
                      <ul>
                        <li>
                          - 창업진흥원 사업비카드 발급 기능 제공을 통한 잠재고객
                          확보, 서비스 릴리즈 후 약 30%의 신규 법인카드 발급
                          고객 증대
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="mt-9 first:mt-0">
                  <p className="text-2xl font-medium text-neutral-950">
                    고위드 법인카드 발급 프로세스 리뉴얼
                  </p>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      2021.07 ~ 2021.10
                    </p>
                  </div>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <p>
                      전체적인 웹 서비스의 리뉴얼이 계획되었고 이에 맞춰
                      legacy로 존재했던 기존 법인카드 발급 프로세스 또한 함께
                      개선하는 기간을 가졌습니다. 리뉴얼 범위가 큰 만큼 구성원이
                      세부 프로젝트 단위로 나눠 리뉴얼을 진행했고 저는 카드발급
                      관련 기능을 주로 담당했습니다.
                    </p>
                    <div>
                      <h4 className="text-semi-bold mb-2 text-lg text-neutral-800">
                        업무 내용
                      </h4>
                      <ul>
                        <li>
                          - javascript로 개발되어 있던 기존 코드를 typescript
                          기반 코드로 리팩터링
                        </li>
                        <li>
                          - 재활용이 가능한 공용 컴포넌트 신규 개발 및
                          storybook을 통한 테스트
                        </li>
                        <li>
                          - 기존 카드발급 프로세스가 리뉴얼된 UI/UX에 호환되도록
                          수정
                        </li>
                        <li>
                          - 기능, 프로젝트에 맞는 폴더 구조 설계로 유지보수
                          용이하도록 변경
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-semi-bold mb-2 text-lg text-neutral-800">
                        성과
                      </h4>
                      <ul>
                        <li>
                          - UI/UX 리뉴얼을 통한 사용자 편의성 개선, 서비스 이탈
                          방지 기대
                        </li>
                        <li>- 신규 개발/유지보수 진행시 효율적인 개발 기대</li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="mt-9 first:mt-0">
                  <p className="text-2xl font-medium text-neutral-950">
                    분리되어 있던 서비스 프로젝트 통합
                  </p>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      2022.08 ~ 2022.10
                    </p>
                  </div>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <p>
                      고객에게 제공하는 웹 서비스 전체 중 기획, 구현상의
                      과정에서 세부 기술스택과 도메인이 다른 프로젝트가
                      존재했습니다. 해당 프로젝트에 대한 검토 결과 개발 주체의
                      변경, 메인 프로젝트와 지나치게 차이나는 기술스택으로 인한
                      어려움 등을 이유로 하나의 프로젝트로 통합하기로
                      하였습니다. 프로젝트 migration을 위한 전반적인 업무에
                      팀원과 함께 기여했습니다.
                    </p>
                    <div>
                      <h4 className="text-semi-bold mb-2 text-lg text-neutral-800">
                        업무 내용
                      </h4>
                      <ul>
                        <li>
                          - GraphQL + MobX로 개발되어 있던 서비스 프로젝트를
                          RestAPI + Redux 기반의 프로젝트로 단계적 병합
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-semi-bold mb-2 text-lg text-neutral-800">
                        성과
                      </h4>
                      <ul>
                        <li>
                          - 분리된 기술스택으로 인해 발생하는 개발부채 제거
                        </li>
                        <li>
                          - 다른 도메인으로 나눠져 있던 프로젝트를 하나로
                          합치면서 기존에 존재했던 사용자 경험 저해요소 제거
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
                <article className="mt-9 first:mt-0">
                  <p className="text-2xl font-medium text-neutral-950">
                    한도 상향 자동화 프로세스 신규개발
                  </p>
                  <div className="mt-1 flex gap-x-4 sm:mt-0 lg:block">
                    <p className="text-sm text-neutral-950 lg:mt-2">
                      2023.06 ~ 2023.08
                    </p>
                  </div>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    <p>
                      기존에는 법인카드 한도 상향에 대한 요청이 있을 경우 모든
                      과정을 전부 서면으로 처리하였습니다. 이로 인해 고객과
                      고위드 모두 불편함을 겪고 있던 상황에서 웹서비스 내
                      프로세스로 이를 녹여내는 신규개발을 진행했고 관련된 웹
                      프론트엔드 개발 전반에 기여했습니다.
                    </p>
                    <div>
                      <h4 className="text-semi-bold mb-2 text-lg text-neutral-800">
                        업무 내용
                      </h4>
                      <ul>
                        <li>
                          - 공통, 카드사별 기능에 맞춘 프로젝트 폴더 구조 구성
                        </li>
                        <li>
                          - 한도상향 프로세스에 맞춘 Page, Routing 구상 및 적용
                        </li>
                        <li>
                          - 한도 상향 기능 개발로 추가되는 신규 UI 컴포넌트 개발
                        </li>
                        <li>
                          - 배포 시점에 맞춰서 리뉴얼되는 공용 컴포넌트 개발
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-semi-bold mb-2 text-lg text-neutral-800">
                        성과
                      </h4>
                      <ul>
                        <li>
                          - 한도 상향 신청시 평균 2주 이상 소요되던 일정을 1주
                          이내로 축소
                        </li>
                      </ul>
                    </div>
                  </div>
                </article>
              </div>
              {/* {caseStudy.testimonial && (
                    <Blockquote
                      author={caseStudy.testimonial.author}
                      className="mt-12"
                    >
                      {caseStudy.testimonial.content}
                    </Blockquote>
                  )} */}
            </Border>
          </article>
        </FadeIn>
      </div>
    </Container>
  );
};
