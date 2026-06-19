import Link from 'next/link';
import AwsStudySidebar from '../AwsStudySidebar';

const compareItems = [
  {
    title: 'Cloud Practitioner',
    role: '입문: AWS 클라우드 기본',
    summary: 'AWS Cloud의 기본 구조, 주요 서비스, 보안, 비용, 지원 체계를 넓게 이해하는 자격증입니다.',
    mustKnow: ['Region·AZ', 'Shared Responsibility', 'EC2·S3·RDS·Lambda', 'IAM·KMS', 'Cost Tools'],
    link: '/aws/study/cloud-practitioner',
  },
  {
    title: 'AI Practitioner',
    role: '입문: AWS AI 기본',
    summary: 'AI, ML, 생성형 AI 개념과 AWS AI 서비스 사용 사례를 이해하는 자격증입니다.',
    mustKnow: ['AI·ML Difference', 'Generative AI', 'Foundation Model', 'Amazon Bedrock', 'Responsible AI'],
    link: '/aws/study/ai-practitioner',
  },
];

const commonEssentials = [
  ['레벨', 'Foundational · 입문'],
  ['대표 자격증', 'AWS Certified Cloud Practitioner / AWS Certified AI Practitioner'],
  ['시험 코드', 'CLF-C02 / AIF-C01'],
  ['대표 비용', '100 USD'],
  ['대표 시험시간', '90분'],
  ['대표 문항 수', '65문항'],
  ['Foundational = 입문 단계', 'AWS를 깊게 구축하기 전, 서비스 이름과 사용 사례를 빠르게 구분하는 단계입니다.'],
  ['Cloud = 클라우드 기본', '인프라, 보안, 비용, 주요 서비스의 전체 지도를 잡는 자격증입니다.'],
  ['AI = 인공지능 기본', 'AI/ML 개념, Bedrock, 생성형 AI 활용과 책임 있는 AI를 잡는 자격증입니다.'],
  ['중복 제거 기준', 'Cloud는 인프라·비용·보안, AI는 AI 개념·Bedrock·Responsible AI에 집중합니다.'],
];

const studyFlow = [
  ['1단계', 'Cloud Practitioner로 AWS 지도 잡기', 'Region, AZ, EC2, S3, RDS, Lambda, IAM, 비용 도구를 먼저 정리합니다.'],
  ['2단계', 'AI Practitioner로 AI 개념 연결', 'AI, ML, Generative AI, Foundation Model, Bedrock의 관계를 정리합니다.'],
  ['3단계', '겹치는 보안 영역만 묶기', 'IAM, 암호화, 개인정보, 거버넌스는 Cloud와 AI 모두에서 공통으로 봅니다.'],
  ['4단계', '상세 페이지에서 따로 학습', 'Cloud와 AI의 문제유형, 공부 순서, 실제 공부 내용은 각 상세 페이지에서 분리해 봅니다.'],
];

const decisionGuide = [
  ['AWS가 처음이면', 'Cloud Practitioner를 먼저 보고 AWS 전체 구조를 잡습니다.'],
  ['AI 교육이 목적이면', 'AI Practitioner를 같이 보되 Bedrock과 Responsible AI를 중심으로 봅니다.'],
  ['시간이 적으면', 'Cloud는 보안·비용, AI는 Bedrock·생성형 AI 키워드만 먼저 압축합니다.'],
  ['다음 단계로 가려면', 'Associate로 넘어가기 전 EC2, S3, IAM, VPC, Lambda 이름은 반드시 익힙니다.'],
];

export default function FoundationalPage() {
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
        <Link className="loginButton linkButton" href="/aws/study">AWS 학습</Link>
      </header>

      <nav className="trackNav" aria-label="AWS 내부 메뉴">
        <Link href="/aws/education">AWS 교육</Link>
        <Link href="/aws/study">AWS 학습</Link>
      </nav>

      <section className="subjectHero">
        <p className="eyebrow">Level 1 · 입문 단계</p>
        <h1>Foundational Overview</h1>
        <p>Cloud와 AI 입문 자격증을 영어 이름 기준으로 나눠 보고, 본문에서 한글 의미와 학습 방향을 함께 정리합니다.</p>
      </section>

      <section className="awsLayout">
        <AwsStudySidebar current="foundational" />

        <div className="awsContent">
          <section className="learningBlock" id="overview">
            <div className="sectionTitle compact">
              <p className="eyebrow">Overview</p>
              <h2>Foundational = 입문 단계</h2>
            </div>
            <div className="infoTable">
              {commonEssentials.map(([label, value]) => (
                <div key={label}>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="learningBlock" id="certifications">
            <div className="sectionTitle compact">
              <p className="eyebrow">Two Paths</p>
              <h2>Cloud와 AI 구분</h2>
            </div>
            <div className="summaryGrid">
              {compareItems.map((item) => (
                <Link className="summaryCard linkedCard" href={item.link} key={item.title}>
                  <span className="subjectOrder">{item.role}</span>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <strong className="cardAction">Must Know</strong>
                  <ul>
                    {item.mustKnow.map((keyword) => (
                      <li key={keyword}>{keyword}</li>
                    ))}
                  </ul>
                </Link>
              ))}
            </div>
          </section>

          <section className="learningBlock" id="order">
            <div className="sectionTitle compact">
              <p className="eyebrow">Study Flow</p>
              <h2>중복 없는 공부 순서</h2>
            </div>
            <div className="simpleList">
              {studyFlow.map(([step, title, content]) => (
                <div key={step}>
                  <strong>{step}: {title}</strong>
                  <span>{content}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="learningBlock" id="question-types">
            <div className="sectionTitle compact">
              <p className="eyebrow">Decision Guide</p>
              <h2>무엇부터 볼지 판단</h2>
            </div>
            <div className="typeGrid">
              {decisionGuide.map(([title, content]) => (
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
