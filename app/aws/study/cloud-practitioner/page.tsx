import Link from 'next/link';
import AwsStudySidebar from '../AwsStudySidebar';

const examOverview = [
  ['자격증명', 'AWS Certified Cloud Practitioner'],
  ['시험 코드', 'CLF-C02'],
  ['레벨', 'Foundational · 입문'],
  ['대상', 'AWS Cloud, 주요 서비스, 보안, 요금, 지원 체계를 넓게 이해해야 하는 입문자'],
  ['비용', '100 USD'],
  ['시험시간', '90분'],
  ['문항 수', '65문항'],
  ['시험방식', 'Pearson VUE 시험센터 또는 온라인 감독 시험'],
  ['지원 언어', '한국어 포함'],
  ['유효기간', '3년'],
];

const domains = [
  {
    title: '클라우드 개념',
    weight: '기초',
    summary: '클라우드의 장점과 온디맨드, 탄력성, 확장성, 고가용성 같은 핵심 용어를 구분합니다.',
    points: ['온디맨드', '탄력성', '확장성', '고가용성', '글로벌 인프라'],
    services: ['AWS Regions', 'Availability Zones', 'Edge Locations'],
  },
  {
    title: '보안과 책임 공유',
    weight: '핵심',
    summary: 'AWS가 책임지는 영역과 고객이 책임지는 영역을 구분하고 기본 보안 서비스를 연결합니다.',
    points: ['책임 공유 모델', 'IAM', 'MFA', '암호화', '규정 준수'],
    services: ['AWS IAM', 'AWS KMS', 'AWS Artifact', 'AWS Shield'],
  },
  {
    title: '주요 서비스',
    weight: '암기',
    summary: '컴퓨팅, 스토리지, 데이터베이스, 네트워킹 서비스의 대표 용도를 익힙니다.',
    points: ['EC2', 'Lambda', 'S3', 'RDS', 'DynamoDB', 'VPC'],
    services: ['Amazon EC2', 'AWS Lambda', 'Amazon S3', 'Amazon RDS', 'Amazon VPC'],
  },
  {
    title: '비용과 지원',
    weight: '판단',
    summary: '요금 모델, 비용 관리 도구, Support Plan의 차이를 문제 단서로 판단합니다.',
    points: ['종량제', '예약', 'Savings Plans', 'Budgets', 'Support Plan'],
    services: ['AWS Cost Explorer', 'AWS Budgets', 'AWS Pricing Calculator'],
  },
];

const studyOrder = [
  ['1단계', '클라우드 장점 정리', '온디맨드, 탄력성, 확장성, 고가용성, 비용 최적화의 의미를 먼저 정리합니다.'],
  ['2단계', '글로벌 인프라 이해', '리전, 가용 영역, 엣지 로케이션, CloudFront의 역할을 연결합니다.'],
  ['3단계', '주요 서비스 매칭', 'EC2, Lambda, S3, RDS, DynamoDB, VPC의 용도를 문제 상황과 연결합니다.'],
  ['4단계', '보안과 요금 판단', '책임 공유 모델, IAM, KMS, Cost Explorer, Budgets, Support Plan을 암기합니다.'],
  ['5단계', '문제풀이 반복', '서비스 이름을 보고 용도를 말하고, 용도를 보고 서비스 이름을 고르는 연습을 반복합니다.'],
];

const questionTypes = [
  ['개념 구분형', '온디맨드, 탄력성, 확장성, 고가용성 같은 클라우드 장점을 묻습니다.'],
  ['서비스 매칭형', '정적 파일 저장은 S3, 가상 서버는 EC2, 서버리스 실행은 Lambda처럼 연결합니다.'],
  ['책임 공유형', '물리 보안은 AWS, 데이터와 권한 설정은 고객처럼 책임을 구분합니다.'],
  ['비용 판단형', 'Cost Explorer, Budgets, Pricing Calculator, Support Plan의 용도를 묻습니다.'],
];

export default function CloudPractitionerPage() {
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
        <p className="eyebrow">AWS Certified Cloud Practitioner</p>
        <h1>Cloud Practitioner 상세 학습</h1>
        <p>AWS Cloud의 기본 개념, 주요 서비스, 보안, 비용, 지원 체계를 넓게 검증하는 Foundational 레벨 자격증입니다.</p>
      </section>

      <section className="awsLayout">
        <AwsStudySidebar current="cloud-detail" />

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
              <Link href="/aws/study/cloud-practitioner/study-plan">
                <strong>실제 공부 내용 페이지로 이동</strong>
                <span>Cloud Practitioner를 처음 공부할 때 읽고 외울 내용을 순서대로 정리했습니다.</span>
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
