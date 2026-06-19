import Link from 'next/link';
import AwsStudySidebar from './AwsStudySidebar';

const certificationLevels = [
  {
    level: 'Foundational',
    count: '핵심 포인트',
    certs: ['AWS 용어와 서비스 이름 익히기', '책임 공유 모델과 IAM 기본 이해', 'Cloud와 AI 중 관심 방향 선택'],
    purpose: '서비스를 직접 깊게 구축하기 전, 문제에서 어떤 개념을 묻는지 알아보는 단계입니다.',
  },
  {
    level: 'Associate',
    count: '핵심 포인트',
    certs: ['요구사항에 맞는 서비스 조합 선택', '보안·비용·가용성 균형 판단', '직무별 실무 방향 결정'],
    purpose: '설계, 개발, 운영, 데이터, ML 중 실제 업무 방향을 구체화하는 단계입니다.',
  },
  {
    level: 'Professional',
    count: '핵심 포인트',
    certs: ['멀티 계정과 조직 단위 설계', '자동화·마이그레이션·DR 전략 비교', '긴 시나리오에서 제약 조건 찾기'],
    purpose: '복잡한 조직 환경에서 여러 요구사항을 동시에 만족시키는 판단력을 기르는 단계입니다.',
  },
  {
    level: 'Specialty',
    count: '핵심 포인트',
    certs: ['보안·네트워크·ML 중 전문 영역 선택', '로그와 설정값으로 원인 진단', '서비스 세부 옵션과 제약 암기'],
    purpose: '특정 기술 영역을 깊게 파고들어 실무 전문성을 증명하는 단계입니다.',
  },
];

const levelComparison = [
  {
    level: 'Foundational',
    korean: '입문',
    representative: 'Cloud Practitioner / AI Practitioner',
    examCode: 'CLF-C02 / AIF-C01',
    cost: '100 USD',
    duration: '90분',
    questions: '65문항',
    target: 'AWS와 AI 기본 개념을 처음 잡는 단계',
    next: 'Cloud 또는 AI 입문 후 Associate로 이동',
  },
  {
    level: 'Associate',
    korean: '초급~중급 실무',
    representative: 'Solutions Architect / Developer / Data Engineer / ML Engineer',
    examCode: 'SAA-C03 / DVA-C02 / DEA-C01 / MLA-C01',
    cost: '150 USD',
    duration: '약 130분',
    questions: '보통 65문항',
    target: '실무 설계, 개발, 운영, 데이터, ML 역량을 검증하는 단계',
    next: '직무 방향에 따라 Professional 또는 Specialty로 이동',
  },
  {
    level: 'Professional',
    korean: '고급/전문가',
    representative: 'Solutions Architect Professional / DevOps Engineer / Generative AI Developer',
    examCode: 'SAP-C02 / DOP-C02 / AIP-C01',
    cost: '300 USD',
    duration: '약 180분',
    questions: '보통 75문항',
    target: '복잡한 조직 환경의 고급 설계, 운영, 자동화, AI 앱 개발 단계',
    next: '전문 분야 심화 또는 실무 아키텍처 역량 강화',
  },
  {
    level: 'Specialty',
    korean: '특화/전문 분야',
    representative: 'Security / Advanced Networking / Machine Learning',
    examCode: 'SCS-C02 / ANS-C01 / MLS-C01',
    cost: '300 USD',
    duration: '약 170분',
    questions: '보통 65문항',
    target: '보안, 네트워킹, 머신러닝처럼 특정 영역을 깊게 검증하는 단계',
    next: '업무 전문성 증명 또는 고급 역할 확장',
  },
];

const firstCertDetails = [
  ['추천 첫 자격증', 'AWS Certified Cloud Practitioner'],
  ['추천 이유', 'AWS Cloud, 주요 서비스, 비용, 보안, 책임공유모델을 넓게 익히는 가장 기본 단계입니다.'],
  ['시험 비용', '100 USD'],
  ['시험 시간', '90분'],
  ['문항 수', '65문항'],
  ['시험 형식', '객관식 또는 복수응답'],
  ['시험 방식', 'Pearson VUE 시험센터 또는 온라인 감독 시험'],
  ['지원 언어', '한국어 포함'],
  ['유효기간', '3년'],
];

const nextCertDetails = [
  ['AI 입문 목적', 'AWS Certified AI Practitioner', 'AI, ML, 생성형 AI 개념과 AWS AI 서비스 사용 사례를 먼저 익힙니다. 비용 100 USD, 90분, 65문항입니다.', '/aws/study/ai-practitioner'],
  ['아키텍처 목적', 'AWS Certified Solutions Architect - Associate', 'AWS 설계 역량의 대표 Associate 자격증입니다. 비용 150 USD, 130분, 65문항입니다.', '#'],
  ['데이터 목적', 'AWS Certified Data Engineer - Associate', '데이터 수집, 변환, 파이프라인, 데이터 품질을 다룹니다.', '#'],
  ['ML 목적', 'AWS Certified Machine Learning Engineer - Associate', 'SageMaker 등 ML 워크로드 구현과 운영 역량을 다룹니다.', '#'],
];

const examSteps = [
  'AWS Certification Account에 로그인 또는 계정 생성',
  '응시할 시험 선택',
  '시험 언어와 시험 방식 선택: Pearson VUE 시험센터 또는 온라인 감독 시험',
  '날짜와 시간 선택',
  '응시료 결제 후 예약 완료',
  '시험 전 신분증, 시스템 체크, 시험 정책 확인',
];

const cloudPractitionerTopics = [
  ['클라우드 개념', '클라우드 가치, 온디맨드, 탄력성, 확장성, 고가용성, 글로벌 인프라'],
  ['보안과 규정 준수', '책임공유모델, IAM, 계정 보안, 암호화, 규정 준수 개념'],
  ['핵심 서비스', 'EC2, S3, RDS, Lambda, VPC, CloudFront, CloudWatch 등 주요 서비스의 역할'],
  ['비용과 결제', '요금 모델, 프리 티어, Cost Explorer, Budgets, Support Plan'],
  ['운영과 모니터링', 'CloudWatch, CloudTrail, Well-Architected Framework 기본 개념'],
];

const sidebarGroups = [
  {
    title: 'AWS 학습',
    links: [
      ['자격증 단계', '#roadmap'],
      ['첫 추천 자격증', '#first-cert'],
      ['목적별 다음 자격증', '#next-certs'],
      ['시험 접수 방법', '#registration'],
      ['공부 범위', '#study-scope'],
    ],
  },
  {
    title: '상세 학습 페이지',
    links: [
      ['AI Practitioner 상세 학습', '/aws/study/ai-practitioner'],
      ['AI Practitioner 실제 공부 내용', '/aws/study/ai-practitioner/study-plan'],
    ],
  },
];

export default function AwsStudyPage() {
  return (
    <main className="site">
      <header className="topbar">
        <Link className="brand" href="/">Data Lab</Link>
        <nav className="globalNav" aria-label="학습 트랙">
          <Link href="/adsp">ADsP</Link>
          <Link href="/#sql">SQL</Link>
          <Link className="activeTrack" href="/aws">AWS</Link>
          <Link href="/buc">부과대</Link>
        </nav>
        <button className="loginButton" type="button">로그인 준비중</button>
      </header>

      <nav className="trackNav" aria-label="AWS 세부 메뉴">
        <Link href="/aws/education">AWS 교육</Link>
        <Link href="/aws/study">AWS 학습</Link>
      </nav>

      <section className="subjectHero">
        <p className="eyebrow">AWS Study</p>
        <h1>AWS 학습</h1>
        <p>AWS 자격증 단계, 첫 추천 자격증, 시험 접수 방법, 공부 범위를 정리합니다.</p>
      </section>

      <section className="awsLayout">
        <AwsStudySidebar current="study" />

        <div className="awsContent">
          <div className="learningBlock" id="roadmap">
            <div className="sectionTitle compact">
              <p className="eyebrow">Certification Roadmap</p>
              <h2>AWS 자격증 단계 비교</h2>
            </div>
            <p className="blockLead">레벨, 대표 자격증, 시험 코드, 비용과 시험시간을 한눈에 비교합니다.</p>
            <div className="comparisonTable" aria-label="AWS certification level comparison">
              <div className="comparisonHeader">
                <span>레벨</span>
                <span>대표 자격증</span>
                <span>시험 코드</span>
                <span>비용/시간/문항</span>
                <span>학습 목적</span>
                <span>다음 방향</span>
              </div>
              {levelComparison.map((level) => (
                <Link className="comparisonRow" href={`/aws/study/${level.level.toLowerCase()}`} key={level.level}>
                  <strong>{level.level}<small>{level.korean}</small></strong>
                  <span>{level.representative}</span>
                  <span>{level.examCode}</span>
                  <span>{level.cost} · {level.duration} · {level.questions}</span>
                  <span>{level.target}</span>
                  <span>{level.next}</span>
                </Link>
              ))}
            </div>
            <div className="toolGrid">
              {certificationLevels.map((level) => (
                <article className="toolCard" key={level.level}>
                  <h3>{level.level}</h3>
                  <strong>{level.count}</strong>
                  <p>{level.purpose}</p>
                  <ul>
                    {level.certs.map((cert) => (
                      <li key={cert}>{cert}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className="learningBlock" id="next-certs">
            <div className="sectionTitle compact">
              <p className="eyebrow">Next Steps</p>
              <h2>목적별 다음 자격증</h2>
            </div>
            <div className="simpleList">
              {nextCertDetails.map(([goal, cert, detail, href]) => (
                <Link className="linkedListItem" href={href} key={goal}>
                  <strong>{goal}: {cert}</strong>
                  <span>{detail}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="learningBlock" id="registration">
            <div className="sectionTitle compact">
              <p className="eyebrow">Registration</p>
              <h2>시험 접수 방법</h2>
            </div>
            <ol className="flow">
              {examSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="learningBlock" id="study-scope">
            <div className="sectionTitle compact">
              <p className="eyebrow">Study Scope</p>
              <h2>Cloud Practitioner 공부 범위</h2>
            </div>
            <div className="toolGrid">
              {cloudPractitionerTopics.map(([title, content]) => (
                <article className="toolCard" key={title}>
                  <h3>{title}</h3>
                  <p>{content}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
