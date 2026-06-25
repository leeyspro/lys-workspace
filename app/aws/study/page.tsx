import Link from 'next/link';
import AwsStudySidebar from './AwsStudySidebar';

const certificationLevels = [
  {
    level: 'Foundational',
    count: '핵심 포인트',
    certs: ['AWS 용어와 서비스 이름 익히기', '책임 공유 모델과 IAM 기본 이해', 'Cloud와 AI 중 관심 방향 선택'],
    badges: [
      { name: 'Cloud Practitioner', korean: '클라우드 입문', code: 'CLF-C02', level: 'FOUNDATIONAL', href: '/aws/study/cloud-practitioner' },
      { name: 'AI Practitioner', korean: 'AI 입문', code: 'AIF-C01', level: 'FOUNDATIONAL', href: '/aws/study/ai-practitioner' },
    ],
    purpose: '서비스를 직접 깊게 구축하기 전, 문제에서 어떤 개념을 묻는지 알아보는 단계입니다.',
    recommendation: 'AWS가 처음이면 Cloud Practitioner, AI 교육 목적이면 AI Practitioner를 봅니다.',
    next: 'Cloud 또는 AI 입문 후 Associate 단계로 넘어갑니다.',
  },
  {
    level: 'Associate',
    count: '핵심 포인트',
    certs: ['요구사항에 맞는 서비스 조합 선택', '보안·비용·가용성 균형 판단', '직무별 실무 방향 결정'],
    badges: [
      { name: 'Solutions Architect', korean: '솔루션스 아키텍트', code: 'SAA-C03', level: 'ASSOCIATE', href: '/aws/study/associate#solutions-architect' },
      { name: 'Developer', korean: '개발자', code: 'DVA-C02', level: 'ASSOCIATE', href: '/aws/study/associate#developer' },
      { name: 'CloudOps Engineer', korean: '클라우드 운영 엔지니어', code: 'SOA-C02', level: 'ASSOCIATE', href: '/aws/study/associate#cloudops-engineer' },
      { name: 'Data Engineer', korean: '데이터 엔지니어', code: 'DEA-C01', level: 'ASSOCIATE', href: '/aws/study/associate#data-engineer' },
      { name: 'Machine Learning Engineer', korean: '머신러닝 엔지니어', code: 'MLA-C01', level: 'ASSOCIATE', href: '/aws/study/associate#machine-learning-engineer' },
    ],
    purpose: '설계, 개발, 운영, 데이터, ML 중 실제 업무 방향을 구체화하는 단계입니다.',
    recommendation: '아키텍처는 SAA-C03, 데이터는 DEA-C01, ML은 MLA-C01을 우선 봅니다.',
    next: '직무 방향에 따라 Professional 또는 Specialty로 이동합니다.',
  },
  {
    level: 'Professional',
    count: '핵심 포인트',
    certs: ['멀티 계정과 조직 단위 설계', '자동화·마이그레이션·DR 전략 비교', '긴 시나리오에서 제약 조건 찾기'],
    badges: [
      { name: 'Solutions Architect', korean: '고급 솔루션스 아키텍트', code: 'SAP-C02', level: 'PROFESSIONAL', href: '/aws/study/professional#solutions-architect-professional' },
      { name: 'DevOps Engineer', korean: '데브옵스 엔지니어', code: 'DOP-C02', level: 'PROFESSIONAL', href: '/aws/study/professional#devops-engineer' },
      { name: 'Generative AI Developer', korean: '생성형 AI 개발자', code: 'AIP-C01', level: 'PROFESSIONAL', href: '/aws/study/professional#generative-ai-developer' },
    ],
    purpose: '복잡한 조직 환경에서 여러 요구사항을 동시에 만족시키는 판단력을 기르는 단계입니다.',
    recommendation: '고급 설계는 SAP-C02, DevOps 자동화는 DOP-C02, 생성형 AI는 AIP-C01을 봅니다.',
    next: '전문 분야를 심화하거나 실무 아키텍처 역량을 강화합니다.',
  },
  {
    level: 'Specialty',
    count: '핵심 포인트',
    certs: ['보안·네트워크·ML 중 전문 영역 선택', '로그와 설정값으로 원인 진단', '서비스 세부 옵션과 제약 암기'],
    badges: [
      { name: 'Security', korean: '보안', code: 'SCS-C02', level: 'SPECIALTY', href: '/aws/study/specialty#security-specialty' },
      { name: 'Advanced Networking', korean: '고급 네트워킹', code: 'ANS-C01', level: 'SPECIALTY', href: '/aws/study/specialty#advanced-networking-specialty' },
    ],
    purpose: '특정 기술 영역을 깊게 파고들어 실무 전문성을 증명하는 단계입니다.',
    recommendation: '보안은 SCS-C02, 네트워크는 ANS-C01을 우선 봅니다.',
    next: '업무 전문성 증명 또는 고급 역할 확장에 활용합니다.',
  },
];

const levelComparison = [
  {
    level: 'Foundational',
    korean: '입문',
    representative: [
      ['Cloud Practitioner', '클라우드 입문', 'CLF-C02'],
      ['AI Practitioner', 'AI 입문', 'AIF-C01'],
    ],
    examCode: 'CLF-C02 / AIF-C01',
    cost: '100 USD',
    duration: '90분',
    questions: '65문항',
    target: 'AWS와 AI 기본 개념을 처음 잡는 단계',
  },
  {
    level: 'Associate',
    korean: '초급~중급 실무',
    representative: [
      ['Solutions Architect', '솔루션스 아키텍트', 'SAA-C03'],
      ['Developer', '개발자', 'DVA-C02'],
      ['Data Engineer', '데이터 엔지니어', 'DEA-C01'],
      ['ML Engineer', '머신러닝 엔지니어', 'MLA-C01'],
    ],
    examCode: 'SAA-C03 / DVA-C02 / DEA-C01 / MLA-C01',
    cost: '150 USD',
    duration: '약 130분',
    questions: '보통 65문항',
    target: '실무 설계, 개발, 운영, 데이터, ML 역량을 검증하는 단계',
  },
  {
    level: 'Professional',
    korean: '고급/전문가',
    representative: [
      ['Solutions Architect Professional', '고급 솔루션스 아키텍트', 'SAP-C02'],
      ['DevOps Engineer', '데브옵스 엔지니어', 'DOP-C02'],
      ['Generative AI Developer', '생성형 AI 개발자', 'AIP-C01'],
    ],
    examCode: 'SAP-C02 / DOP-C02 / AIP-C01',
    cost: '300 USD',
    duration: '약 180분',
    questions: '보통 75문항',
    target: '복잡한 조직 환경의 고급 설계, 운영, 자동화, AI 앱 개발 단계',
  },
  {
    level: 'Specialty',
    korean: '특화/전문 분야',
    representative: [
      ['Security', '보안', 'SCS-C02'],
      ['Advanced Networking', '고급 네트워킹', 'ANS-C01'],
      ['Machine Learning', '머신러닝', 'MLS-C01'],
    ],
    examCode: 'SCS-C02 / ANS-C01 / MLS-C01',
    cost: '300 USD',
    duration: '약 170분',
    questions: '보통 65문항',
    target: '보안, 네트워킹, 머신러닝처럼 특정 영역을 깊게 검증하는 단계',
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

const examSteps = [
  {
    step: '01',
    title: '계정 준비',
    detail: 'AWS Certification Account에 로그인하거나 새 계정을 만듭니다.',
    note: '이메일과 영문 이름을 신분증 정보와 맞춰둡니다.',
  },
  {
    step: '02',
    title: '시험 선택',
    detail: '응시할 자격증과 시험 코드를 확인합니다.',
    note: 'Cloud Practitioner는 CLF-C02, AI Practitioner는 AIF-C01입니다.',
  },
  {
    step: '03',
    title: '응시 방식 선택',
    detail: 'Pearson VUE 시험센터 또는 온라인 감독 시험 중 하나를 선택합니다.',
    note: '온라인 시험은 조용한 공간과 시스템 체크가 필요합니다.',
  },
  {
    step: '04',
    title: '일정 예약',
    detail: '시험 언어, 날짜, 시간을 선택합니다.',
    note: '한국어 지원 여부와 가능한 시간을 먼저 확인합니다.',
  },
  {
    step: '05',
    title: '결제 완료',
    detail: '응시료를 결제하고 예약 완료 메일을 확인합니다.',
    note: 'Foundational 기준 응시료는 보통 100 USD입니다.',
  },
  {
    step: '06',
    title: '시험 전 점검',
    detail: '신분증, 시험 정책, 온라인 응시 시스템 체크를 확인합니다.',
    note: '시험 당일 지각, 신분증 불일치, 환경 미준비가 가장 흔한 리스크입니다.',
  },
];

const sidebarGroups = [
  {
    title: 'AWS 학습',
    links: [
      ['자격증 단계', '#roadmap'],
      ['첫 추천 자격증', '#first-cert'],
      ['시험 응시 가이드', '#registration'],
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
          <Link href="/adsp#dashboard">ADsP</Link>
          <Link href="/sqld#dashboard">SQLD</Link>
          <Link className="activeTrack" href="/aws#dashboard">AWS</Link>
          <Link href="/smart-social#dashboard">AI DX</Link>
        </nav>
        <button className="loginButton" type="button">login</button>
      </header>

      <nav className="trackNav" aria-label="AWS 세부 메뉴">
        <Link href="/aws#dashboard">Dashboard</Link>
        <Link href="/aws/education">AWS 교육</Link>
        <Link href="/aws/study">AWS 학습</Link>
      </nav>

      <section className="subjectHero">
        <p className="eyebrow">AWS Study</p>
        <h1>AWS 학습</h1>
        <p>AWS 자격증 단계, 목적별 추천 경로, 시험 응시 흐름을 정리합니다.</p>
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
                <span>비용/시간/문항</span>
                <span>학습 목적</span>
              </div>
              {levelComparison.map((level) => (
                <Link className="comparisonRow" href={`/aws/study/${level.level.toLowerCase()}`} key={level.level}>
                  <strong>{level.level}<small>{level.korean}</small></strong>
                  <span className="representativeCertList">
                    {level.representative.map(([english, korean, code]) => (
                      <span key={english}>
                        <b>{english}</b>
                        <small>{korean}</small>
                        <em>{code}</em>
                      </span>
                    ))}
                  </span>
                  <span className="comparisonMeta">
                    <span>{level.cost}</span>
                    <span>{level.duration}</span>
                    <span>{level.questions}</span>
                  </span>
                  <span className="comparisonPurpose">{level.target}</span>
                </Link>
              ))}
            </div>
            <div className="toolGrid">
              {certificationLevels.map((level) => (
                <article className="toolCard" key={level.level}>
                  <h3>{level.level}</h3>
                  <strong>{level.count}</strong>
                  <div className="certBadgeGrid" aria-label={`${level.level} certification badges`}>
                    {level.badges.map((badge) => (
                      <Link className="certBadgeItem linkedCertBadge" href={badge.href} key={badge.name}>
                        <span className="certBadgeCode">{badge.code}</span>
                        <div className={`certBadge ${badge.name.includes(' ') ? 'certBadgeLong' : ''}`}>
                          <span className="certBadgeBrand">
                            <b>aws</b>
                            <i>certified</i>
                          </span>
                          <strong>{badge.name}</strong>
                          <em>{badge.level}</em>
                        </div>
                        <span className="certBadgeCaption">{badge.korean}</span>
                      </Link>
                    ))}
                  </div>
                  <p>{level.purpose}</p>
                  <ul>
                    {level.certs.map((cert) => (
                      <li key={cert}>{cert}</li>
                    ))}
                  </ul>
                  <strong className="cardAction">추천 목적</strong>
                  <p>{level.recommendation}</p>
                  <strong className="cardAction">다음 방향</strong>
                  <p>{level.next}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="learningBlock" id="registration">
            <div className="sectionTitle compact">
              <p className="eyebrow">Registration</p>
              <h2>시험 응시 가이드</h2>
            </div>
            <div className="registrationGrid">
              {examSteps.map((step) => (
                <article key={step.step}>
                  <span>{step.step}</span>
                  <strong>{step.title}</strong>
                  <p>{step.detail}</p>
                  <em>{step.note}</em>
                </article>
              ))}
            </div>
            <div className="examFocus">
              <strong>예약 전 확인</strong>
              <p>시험 코드, 응시 언어, 온라인/센터 응시 방식, 신분증 이름, 결제 수단을 먼저 확인하면 접수 중 헷갈리는 지점을 줄일 수 있습니다.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
