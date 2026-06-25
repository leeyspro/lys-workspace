import Link from 'next/link';
import AwsStudySidebar from '../../AwsStudySidebar';

const studySteps = [
  {
    id: 'step-1',
    step: '1단계',
    title: '클라우드 기본 개념',
    goal: 'AWS 공식 시험가이드의 Domain 1 Cloud Concepts 중 “AWS Cloud의 가치와 경제성”을 먼저 잡습니다.',
    sourceBasis: [
      'AWS Cloud의 가치 제안 설명',
      '규모의 경제와 비용 절감 이해',
      '글로벌 인프라의 이점 이해',
      '고가용성, 탄력성, 민첩성의 장점 이해',
      '고정 비용과 변동 비용, 온프레미스 비용, Rightsizing, 자동화의 이점 이해',
    ],
    coreContent: [
      {
        title: '왜 클라우드를 쓰는가',
        summary: 'Cloud Practitioner 1단계의 핵심은 “클라우드는 서버를 빌리는 기술”이 아니라 “비즈니스가 더 빠르고 유연하게 움직이게 하는 운영 방식”이라는 점입니다.',
        points: [
          '서버를 미리 구매하지 않고 필요할 때 바로 사용합니다.',
          '사용량이 적으면 적게 내고, 많으면 많이 내는 구조라 초기 투자 부담이 줄어듭니다.',
          '서비스 출시나 테스트를 위해 장비 구매·설치·승인 과정을 기다리지 않아도 됩니다.',
        ],
      },
      {
        title: '온프레미스와 클라우드의 차이',
        summary: '시험에서는 직접 장비를 소유하는 방식과 AWS에서 필요한 자원을 빌려 쓰는 방식을 비교하게 합니다.',
        points: [
          '온프레미스는 서버실, 전력, 냉각, 장비 교체, 물리 보안까지 직접 책임집니다.',
          'AWS Cloud는 물리 인프라와 글로벌 데이터센터를 AWS가 운영합니다.',
          '사용자는 필요한 서비스 선택, 권한, 데이터, 애플리케이션 운영에 집중합니다.',
        ],
      },
      {
        title: '비용 구조의 변화',
        summary: 'Cloud Concepts에서 자주 나오는 경제성 포인트는 CapEx를 OpEx로 바꾸고, 고정 비용을 변동 비용으로 바꾸는 것입니다.',
        points: [
          'CapEx는 서버와 장비를 미리 사는 자본 비용입니다.',
          'OpEx는 운영하면서 사용한 만큼 지불하는 운영 비용입니다.',
          'Rightsizing은 과하게 잡은 서버 크기나 자원을 실제 사용량에 맞게 조정해 낭비를 줄이는 것입니다.',
        ],
      },
      {
        title: '글로벌 인프라의 이점',
        summary: 'AWS의 글로벌 인프라는 빠른 배포, 전 세계 사용자 접근, 지연 시간 감소, 재해 복구 전략과 연결됩니다.',
        points: [
          '가까운 리전에 서비스를 배포하면 사용자 지연 시간을 줄일 수 있습니다.',
          '여러 가용 영역을 사용하면 한 곳에 장애가 나도 서비스를 유지하기 쉽습니다.',
          '여러 리전을 고려하면 재해 복구, 비즈니스 연속성, 데이터 주권 요구에 대응할 수 있습니다.',
        ],
      },
      {
        title: '자동화와 관리형 서비스의 의미',
        summary: 'AWS는 단순히 서버만 제공하지 않고, 반복 운영을 자동화하고 관리 부담을 줄이는 서비스들을 제공합니다.',
        points: [
          'CloudFormation 같은 도구는 인프라 생성을 반복 가능하게 자동화합니다.',
          'RDS, DynamoDB 같은 관리형 서비스는 운영 부담을 AWS가 일부 대신 처리합니다.',
          '시험에서는 “운영 부담 감소”, “반복 배포”, “관리형 서비스”라는 단서를 서비스 선택과 연결합니다.',
        ],
      },
    ],
    learn: [
      '클라우드의 가치는 비용 절감, 빠른 배포, 글로벌 확장, 고가용성, 운영 부담 감소로 정리합니다.',
      '온프레미스와 AWS Cloud를 비교할 때는 “소유/구매/고정비”와 “사용/임대/변동비”를 구분합니다.',
      '탄력성은 실제 수요에 맞춰 자원을 자동으로 늘리고 줄여 낭비를 줄이는 능력입니다.',
      '고가용성은 장애가 발생해도 서비스를 계속 제공할 수 있도록 여러 가용 영역에 나누어 구성하는 능력입니다.',
      '관리형 서비스와 자동화는 운영자가 직접 관리해야 하는 반복 작업을 줄이고 더 중요한 업무에 집중하게 합니다.',
    ],
    memorize: ['AWS Cloud value', 'Economies of scale', 'Global infrastructure', 'High availability', 'Elasticity', 'Agility', 'CapEx → OpEx', 'Fixed cost → Variable cost', 'Rightsizing', 'Managed service', 'Automation'],
    keywordGroups: [
      ['비용', '초기 투자 비용 절감, 사용한 만큼 지불, 종량제, CapEx에서 OpEx로 전환'],
      ['운영', '서버 구매·설치·교체 부담 감소, AWS가 글로벌 인프라와 물리 장비 운영'],
      ['속도', '몇 분 만에 리소스 생성, 빠른 실험, 빠른 배포, 민첩성'],
      ['성능·확장', '트래픽 증가 대응, Auto Scaling, 필요한 만큼 확장'],
      ['안정성', '여러 가용 영역 구성, 장애 발생 시 서비스 지속, 고가용성'],
    ],
    examPatterns: [
      ['초기 투자 비용을 줄이고 싶다', '클라우드의 종량제, 온디맨드, CapEx에서 OpEx 전환을 떠올립니다.'],
      ['트래픽이 갑자기 늘어난다', '탄력성 또는 확장성을 떠올립니다. 자동으로 늘리고 줄이는 맥락이면 탄력성에 가깝습니다.'],
      ['장애가 나도 서비스가 계속되어야 한다', '고가용성과 여러 AZ 구성을 떠올립니다.'],
      ['새 서비스를 빠르게 실험하고 싶다', '민첩성, 빠른 프로비저닝, 몇 분 안에 리소스 생성이 핵심입니다.'],
    ],
    practice: '1단계 문제는 “정의 암기”보다 “상황 판단”입니다. 비용을 줄이고 싶으면 규모의 경제·종량제·OpEx, 빠르게 출시하고 싶으면 민첩성, 전 세계 사용자를 지원하려면 글로벌 인프라, 장애에도 유지하려면 고가용성, 수요가 오르내리면 탄력성으로 연결합니다.',
  },
  {
    id: 'step-2',
    step: '2단계',
    title: '글로벌 인프라',
    goal: '리전, 가용 영역, 엣지 로케이션의 역할을 구분합니다.',
    learn: [
      '리전은 지리적으로 분리된 AWS 데이터센터 묶음입니다.',
      '가용 영역은 하나의 리전 안에 있는 독립적인 데이터센터 또는 데이터센터 그룹입니다.',
      '엣지 로케이션은 사용자에게 가까운 위치에서 콘텐츠를 빠르게 전달하는 데 사용됩니다.',
      'CloudFront는 엣지 로케이션을 활용하는 CDN 서비스입니다.',
    ],
    memorize: ['Region', 'Availability Zone', 'Edge Location', 'CloudFront', '지연 시간', '재해 복구'],
    practice: '서비스를 어느 국가/지역에 배치할지, 장애를 줄이려면 몇 개 AZ를 쓸지, 콘텐츠 전송은 무엇을 쓸지 구분합니다.',
  },
  {
    id: 'step-3',
    step: '3단계',
    title: '주요 서비스 매칭',
    goal: '서비스 이름과 대표 용도를 빠르게 연결합니다.',
    learn: [
      'EC2는 가상 서버를 실행하는 컴퓨팅 서비스입니다.',
      'Lambda는 서버를 관리하지 않고 코드를 실행하는 서버리스 컴퓨팅 서비스입니다.',
      'S3는 객체 스토리지로 정적 파일, 백업, 데이터 저장에 자주 쓰입니다.',
      'RDS는 관리형 관계형 데이터베이스입니다.',
      'DynamoDB는 관리형 NoSQL 데이터베이스입니다.',
      'VPC는 AWS 안에서 논리적으로 분리된 네트워크 공간입니다.',
    ],
    memorize: ['EC2=가상 서버', 'Lambda=서버리스', 'S3=객체 저장소', 'RDS=관계형 DB', 'DynamoDB=NoSQL', 'VPC=네트워크'],
    practice: '문제 설명에서 “정적 웹사이트”, “관계형 데이터”, “이벤트 기반 코드 실행”, “가상 네트워크”를 찾아 서비스로 바꿉니다.',
  },
  {
    id: 'step-4',
    step: '4단계',
    title: '보안과 책임 공유 모델',
    goal: 'AWS 책임과 고객 책임을 분리하고 기본 보안 서비스를 연결합니다.',
    learn: [
      'AWS는 클라우드 자체의 보안을 책임지고, 고객은 클라우드 안에서 구성한 데이터와 권한을 책임집니다.',
      'IAM은 사용자, 그룹, 역할, 정책을 통해 접근 권한을 관리합니다.',
      'MFA는 계정 보호를 강화하는 다중 인증 방식입니다.',
      'KMS는 암호화 키를 관리하는 서비스입니다.',
      'CloudTrail은 계정 활동과 API 호출 기록을 추적합니다.',
    ],
    memorize: ['책임 공유 모델', 'IAM', 'MFA', '최소 권한', 'KMS', 'CloudTrail'],
    practice: '문제에서 “누가 책임지는가”, “권한을 어떻게 제한하는가”, “감사 로그가 필요한가”를 먼저 판단합니다.',
  },
  {
    id: 'step-5',
    step: '5단계',
    title: '비용, 결제, 지원',
    goal: '비용 관리 도구와 Support Plan의 용도를 구분합니다.',
    learn: [
      'AWS Pricing Calculator는 사용 전 예상 비용을 계산할 때 씁니다.',
      'Cost Explorer는 실제 사용 비용을 분석할 때 씁니다.',
      'AWS Budgets는 예산 기준을 넘을 때 알림을 설정합니다.',
      'Savings Plans와 Reserved Instances는 장기 사용 비용을 절감하는 방식입니다.',
      'Support Plan은 지원 수준과 응답 시간을 결정합니다.',
    ],
    memorize: ['Pricing Calculator=예상', 'Cost Explorer=분석', 'Budgets=알림', 'Savings Plans=절감', 'Support Plan=지원 수준'],
    practice: '문제에서 “예상 비용”, “사용 비용 분석”, “예산 초과 알림”, “기술 지원” 중 무엇을 묻는지 표시합니다.',
  },
];

const reviewChecklist = [
  '클라우드 장점 5가지를 설명할 수 있다.',
  '리전, 가용 영역, 엣지 로케이션을 구분할 수 있다.',
  'EC2, Lambda, S3, RDS, DynamoDB, VPC의 대표 용도를 고를 수 있다.',
  '책임 공유 모델에서 AWS와 고객의 책임을 나눌 수 있다.',
  'Pricing Calculator, Cost Explorer, Budgets, Support Plan의 차이를 설명할 수 있다.',
];

export default function CloudPractitionerStudyPlanPage() {
  return (
    <main className="site">
      <header className="topbar">
        <Link className="brand" href="/">Data Lab</Link>
        <nav className="globalNav" aria-label="학습 트랙">
          <Link href="/adsp#dashboard">ADsP</Link>
          <Link href="/sqld#dashboard">SQLD</Link>
          <Link className="activeTrack" href="/aws#dashboard">AWS</Link>
        </nav>
        <Link className="loginButton linkButton" href="/aws/study">AWS 학습</Link>
      </header>

      <nav className="trackNav" aria-label="AWS 내부 메뉴">
        <Link href="/aws#dashboard">Dashboard</Link>
        <Link href="/aws/education">AWS 교육</Link>
        <Link href="/aws/study">AWS 학습</Link>
      </nav>

      <section className="subjectHero">
        <p className="eyebrow">Cloud Practitioner Study Plan</p>
        <h1>Cloud Practitioner 실제 학습</h1>
        <p>AWS 입문자가 Cloud Practitioner를 준비할 때 먼저 읽고 외울 내용을 순서대로 정리했습니다.</p>
      </section>

      <section className="awsLayout">
        <AwsStudySidebar current="cloud-plan" />

        <div className="awsContent" id="study-content">
          <section className="learningBlock" id="study-method">
            <div className="sectionTitle compact">
              <p className="eyebrow">How To Use</p>
              <h2>공부 방식</h2>
            </div>
            <p className="blockLead">
              Cloud Practitioner는 깊은 실습보다 용어, 서비스 용도, 책임 공유, 비용 도구를 빠르게 구분하는 것이 중요합니다.
              각 단계의 암기 키워드를 먼저 외운 뒤 문제에서 단서를 찾는 방식으로 공부합니다.
            </p>
          </section>

          {studySteps.map((step) => (
            <section className="learningBlock" id={step.id} key={step.id}>
              <div className="learningHeader">
                <span>{step.step}</span>
                <h2>{step.title}</h2>
                <p>{step.goal}</p>
              </div>
              {step.sourceBasis ? (
                <div className="examFocus">
                  <strong>공식 시험가이드 기준</strong>
                  <ul className="compactList">
                    {step.sourceBasis.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {step.coreContent ? (
                <div className="studyCoreGrid">
                  {step.coreContent.map((content) => (
                    <article key={content.title}>
                      <strong>{content.title}</strong>
                      <p>{content.summary}</p>
                      <ul>
                        {content.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              ) : null}
              <div className="learningGrid">
                <section>
                  <h3>핵심 정리</h3>
                  <ul>
                    {step.learn.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3>암기 키워드</h3>
                  <ul>
                    {step.memorize.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </div>
              {step.keywordGroups ? (
                <div className="simpleList">
                  {step.keywordGroups.map(([label, value]) => (
                    <div key={label}>
                      <em>{label}</em>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              ) : null}
              {step.examPatterns ? (
                <div className="learningGrid">
                  <section>
                    <h3>문제 단서 읽는 법</h3>
                    <ul>
                      {step.examPatterns.map(([clue, action]) => (
                        <li key={clue}>
                          <b>{clue}</b> → {action}
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section>
                    <h3>오늘 외울 한 줄</h3>
                    <ul>
                      <li>클라우드는 필요한 IT 자원을 인터넷으로 빌려 쓰는 방식입니다.</li>
                      <li>비용 문제는 온디맨드, 종량제, CapEx에서 OpEx 전환으로 연결합니다.</li>
                      <li>트래픽 변화는 탄력성·확장성, 장애 대응은 고가용성으로 구분합니다.</li>
                    </ul>
                  </section>
                </div>
              ) : null}
              <div className="examFocus">
                <strong>문제풀이 관점</strong>
                <p>{step.practice}</p>
              </div>
            </section>
          ))}

          <section className="learningBlock">
            <div className="sectionTitle compact">
              <p className="eyebrow">Review Checklist</p>
              <h2>최종 점검</h2>
            </div>
            <div className="simpleList">
              {reviewChecklist.map((item, index) => (
                <div key={item}>
                  <strong>{index + 1}. 점검 항목</strong>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
