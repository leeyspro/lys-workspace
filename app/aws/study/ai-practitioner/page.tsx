import Link from 'next/link';
import AwsStudySidebar from '../AwsStudySidebar';

const examOverview = [
  ['자격증명', 'AWS Certified AI Practitioner'],
  ['시험 코드', 'AIF-C01'],
  ['레벨', 'Foundational · 입문'],
  ['대상', 'AWS에서 AI/ML 기술을 사용하거나 이해해야 하지만 직접 솔루션을 깊게 구축하지는 않는 역할'],
  ['비용', '100 USD'],
  ['시험시간', '90분'],
  ['문항 수', '65문항'],
  ['시험방식', 'Pearson VUE 시험센터 또는 온라인 감독 시험'],
  ['지원 언어', '한국어 포함'],
  ['유효기간', '3년'],
];

const domains = [
  {
    title: 'AI·ML 기초',
    weight: '약 20%',
    summary: 'AI, ML, 딥러닝, 지도학습, 비지도학습, 강화학습의 차이를 이해합니다.',
    points: ['AI와 ML의 관계', '지도·비지도·강화학습 구분', '분류·회귀·군집 개념', '모델 학습, 추론, 평가 흐름'],
    services: ['Amazon SageMaker', 'Amazon Rekognition', 'Amazon Comprehend'],
  },
  {
    title: '생성형 AI 기초',
    weight: '약 24%',
    summary: '파운데이션 모델, 대규모 언어 모델, 프롬프트, 토큰, 임베딩, 추론 개념을 정리합니다.',
    points: ['Foundation Model과 LLM', '프롬프트와 컨텍스트', '토큰과 임베딩', '모델 선택 기준', '환각과 정확도'],
    services: ['Amazon Bedrock', 'Amazon Q', 'Amazon Titan'],
  },
  {
    title: '파운데이션 모델 활용',
    weight: '약 28%',
    summary: 'RAG, 파인튜닝, 에이전트, 벡터 데이터베이스 등 생성형 AI 활용 패턴을 이해합니다.',
    points: ['RAG 개념과 목적', '벡터 검색과 임베딩', '파인튜닝과 프롬프트 엔지니어링 차이', '에이전트와 도구 호출', '업무 자동화 사용 여부'],
    services: ['Amazon Bedrock Knowledge Bases', 'Agents for Amazon Bedrock', 'Amazon OpenSearch Service'],
  },
  {
    title: '책임 있는 AI',
    weight: '약 14%',
    summary: '공정성, 설명가능성, 투명성, 개인정보, 인간 검토 같은 Responsible AI 원칙을 정리합니다.',
    points: ['편향과 공정성', '설명가능성과 투명성', 'Human-in-the-loop', '안전한 출력 제어', '윤리적 AI 사용'],
    services: ['Amazon Bedrock Guardrails', 'SageMaker Clarify'],
  },
  {
    title: 'AI 보안·거버넌스',
    weight: '약 14%',
    summary: 'AI 솔루션의 보안, 규정 준수, 데이터 보호, 접근 제어, 모니터링을 이해합니다.',
    points: ['IAM 권한 관리', '데이터 암호화', '개인정보와 민감정보 보호', '모델/로그 모니터링', '규정 준수와 거버넌스'],
    services: ['AWS IAM', 'AWS KMS', 'Amazon CloudWatch', 'AWS CloudTrail'],
  },
];

const studyOrder = [
  ['1단계', 'AI·ML 기본 용어 정리', 'AI, ML, 딥러닝, 지도학습, 비지도학습, 생성형 AI를 먼저 구분합니다.'],
  ['2단계', 'Bedrock 중심 서비스 이해', 'Bedrock, Foundation Model, Guardrails, Knowledge Bases, Agents의 역할을 연결합니다.'],
  ['3단계', '활용 패턴 학습', 'RAG, 프롬프트 엔지니어링, 파인튜닝, 에이전트, 벡터 검색을 비교합니다.'],
  ['4단계', '책임 있는 AI와 보안', '편향, 설명가능성, 개인정보, IAM, 암호화, 로깅을 시험 키워드로 정리합니다.'],
  ['5단계', '문제풀이와 오답노트', '문제 유형별 키워드를 표시하고 헷갈리는 서비스 이름을 반복합니다.'],
];

const questionTypes = [
  ['개념 구분형', 'AI/ML/생성형 AI, 지도학습/비지도학습, RAG/파인튜닝 차이를 묻습니다.'],
  ['서비스 매칭형', '상황을 주고 Bedrock, SageMaker, Rekognition, Comprehend 등 적절한 서비스를 고릅니다.'],
  ['사용 여부 판단형', '마케팅 문안 생성, 문서 요약, 이미지 분석, 고객지원 자동화의 적용 여부를 묻습니다.'],
  ['책임 있는 AI형', '편향, 설명가능성, 인간 검토, 개인정보 보호, 안전장치 관련 판단을 묻습니다.'],
  ['보안·거버넌스형', 'IAM, 암호화, 로그, 접근 제어, 규정 준수와 관련된 기본 판단을 묻습니다.'],
];

const sidebarGroups = [
  {
    title: 'AI Practitioner',
    links: [
      ['자격증 소개', '#overview'],
      ['학습 핵심', '#domains'],
      ['학습 로드맵', '#order'],
      ['문제유형', '#questions'],
      ['실제 공부 내용', '/aws/study/ai-practitioner/study-plan'],
    ],
  },
  {
    title: 'AWS 학습',
    links: [
      ['AWS 학습 홈', '/aws/study'],
      ['AWS 교육', '/aws/education'],
    ],
  },
];

export default function AiPractitionerPage() {
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
        <p className="eyebrow">AWS Certified AI Practitioner</p>
        <h1>AI Practitioner 상세 학습</h1>
        <p>AI, ML, 생성형 AI 개념과 AWS AI 서비스 사용 사례를 검증하는 Foundational 레벨 자격증입니다.</p>
      </section>

      <section className="awsLayout">
        <AwsStudySidebar current="ai-detail" />

        <div className="awsContent">
          <section className="learningBlock" id="overview">
            <div className="sectionTitle compact">
              <p className="eyebrow">Overview</p>
              <h2>자격증 소개</h2>
            </div>
            <div className="infoTable">
              {examOverview.map(([label, value]) => (
                <div key={label}>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="learningBlock" id="domains">
            <div className="sectionTitle compact">
              <p className="eyebrow">Study Domains</p>
              <h2>학습 핵심내용</h2>
            </div>
            <div className="summaryGrid">
              {domains.map((domain) => (
                <article className="summaryCard" key={domain.title}>
                  <span className="subjectOrder">{domain.weight}</span>
                  <h3>{domain.title}</h3>
                  <p>{domain.summary}</p>
                  <ul>
                    {domain.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <strong className="cardAction">연결 서비스</strong>
                  <p>{domain.services.join(', ')}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="learningBlock" id="order">
            <div className="sectionTitle compact">
              <p className="eyebrow">Study Roadmap</p>
              <h2>학습 로드맵</h2>
            </div>
            <div className="simpleList">
              {studyOrder.map(([step, title, content]) => (
                <div key={step}>
                  <strong>{step}: {title}</strong>
                  <span>{content}</span>
                </div>
              ))}
              <Link href="/aws/study/ai-practitioner/study-plan">
                <strong>실제 공부 내용 페이지로 이동</strong>
                <span>학습 로드맵에 맞춰 읽고 정리할 세부 내용을 따로 작성했습니다.</span>
              </Link>
            </div>
          </section>

          <section className="learningBlock" id="questions">
            <div className="sectionTitle compact">
              <p className="eyebrow">Question Types</p>
              <h2>문제유형</h2>
            </div>
            <div className="typeGrid">
              {questionTypes.map(([title, content]) => (
                <article className="typeCard" key={title}>
                  <strong>{title}</strong>
                  <p>{content}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
