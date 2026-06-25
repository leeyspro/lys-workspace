import Link from 'next/link';
import SiteHeader from '../SiteHeader';

const studyMetrics = [
  ['학습 트랙', '2개'],
  ['입문 자격증', '2개'],
  ['첫 추천', 'Cloud'],
  ['AI 입문', 'AIF-C01'],
  ['기본 비용', '100 USD'],
  ['기본 시간', '90분'],
];

const learningSteps = [
  { round: '1단계', apply: '교육자료 확인', exam: 'AIF · SAA · Educator', result: '일정·산출물 파악', status: '진행' },
  { round: '2단계', apply: 'Cloud 입문', exam: 'Cloud Practitioner', result: 'AWS 전체 지도 확보', status: '우선' },
  { round: '3단계', apply: 'AI 입문', exam: 'AI Practitioner', result: 'AI·ML·Bedrock 연결', status: '준비' },
  { round: '4단계', apply: '실무 확장', exam: 'SAA-C03', result: '아키텍처 설계로 확장', status: '예정' },
];

const dashboardCards = [
  {
    label: '교육과정',
    title: 'AWS 교육',
    href: '/aws/education',
    status: '자료 정리',
    focus: 'AIF, SAA, Educator Academy',
    description: '제공받은 AWS 교육자료를 사업 개요, 일정, 실습 도구, 커리큘럼 중심으로 정리합니다.',
    items: ['2일 AIF 교육', 'SAA-C03 과정', 'Skill Builder', 'CertiNavigator'],
  },
  {
    label: '개인학습',
    title: 'AWS 학습',
    href: '/aws/study',
    status: '자격증 준비',
    focus: '자격증 로드맵과 시험 준비',
    description: 'AWS 자격증 단계, 비용, 시험방법, 첫 추천 자격증과 학습 범위를 정리합니다.',
    items: ['자격증 단계 비교', 'Cloud Practitioner', 'AI Practitioner', '시험 응시 가이드'],
  },
];

const priorityFlow = [
  ['1', '교육자료 확인', '받은 자료의 일정, 대상, 산출물, 실습 도구를 먼저 확인합니다.'],
  ['2', '자격증 방향 선택', 'Cloud 기본인지 AI 입문인지 목적을 정합니다.'],
  ['3', '상세 학습 진입', 'Cloud 또는 AI Practitioner 상세 페이지에서 실제 공부 내용을 채웁니다.'],
];

export default function AwsHomePage() {
  return (
    <main className="site">
      <SiteHeader
        active="aws"
        subNav={[
          { label: 'Dashboard', href: '/aws#dashboard' },
          { label: 'AWS 교육', href: '/aws/education' },
          { label: 'AWS 학습', href: '/aws/study' },
        ]}
        subNavLabel="AWS 내부 메뉴"
      />

      <section className="subjectLayout">
        <aside className="subjectSidebar" aria-label="AWS 학습 메뉴">
          <strong>AWS 학습 메뉴</strong>
          <nav className="subjectNav">
            <div className="subjectNavGroup">
              <a className="subjectNavTitle currentSubject" href="#dashboard">
                <span>Dashboard</span>
                <strong>Dashboard</strong>
              </a>
              <div className="subjectNavItems">
                <a href="#roadmap">AWS 학습 단계</a>
                <a href="#weight">학습 비중</a>
                <a href="#plan">수준별 공부기간</a>
                <a href="#strategy">학습 전략</a>
              </div>
            </div>
            <div className="subjectNavGroup">
              <a className="subjectNavTitle" href="#contents">
                <span>Contents</span>
                <strong>AWS 콘텐츠</strong>
              </a>
              <div className="subjectNavItems">
                <a href="/aws/education">AWS 교육</a>
                <a href="/aws/study">AWS 학습</a>
                <a href="#priority">먼저 볼 순서</a>
                <a href="#split">교육 vs 학습</a>
              </div>
            </div>
          </nav>
        </aside>

        <div className="subjectContent adspPageContent">
          <section className="hero" id="dashboard">
            <div className="heroText">
              <p className="eyebrow">AWS Learning Hub</p>
              <h1>AWS Study Dashboard</h1>
              <p>AWS 교육과정 자료와 개인 자격증 학습 내용을 분리해서 한 화면에서 관리합니다.</p>
            </div>
          </section>

          <section className="section">
            <div className="metricGrid">
              {studyMetrics.map(([label, value]) => (
                <article className="metricCard" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className="section dashboardGrid">
            <article className="panel widePanel" id="roadmap">
              <div className="sectionTitle">
                <p className="eyebrow">Learning Roadmap</p>
                <h2>AWS 학습 단계</h2>
              </div>
              <div className="timeline">
                {learningSteps.map((item) => (
                  <div className="timelineItem" key={item.round}>
                    <span className={`badge ${item.status === '우선' ? 'activeBadge' : ''}`}>{item.status}</span>
                    <strong>{item.round}</strong>
                    <p>{item.apply}</p>
                    <p>{item.exam}</p>
                    <p>{item.result}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel chartPanel" id="weight">
              <div className="sectionTitle compact">
                <p className="eyebrow">Focus Weight</p>
                <h2>학습 비중</h2>
              </div>
              <div className="donut awsDonut" aria-label="Cloud 50%, AI 30%, SAA 20%">
                <span>Cloud<br />50%</span>
              </div>
              <div className="legend">
                <div><span>Cloud Practitioner</span><strong>50%</strong></div>
                <div><span>AI Practitioner</span><strong>30%</strong></div>
                <div><span>SAA-C03 확장</span><strong>20%</strong></div>
              </div>
            </article>
          </section>

          <section className="section splitGrid">
            <article className="panel" id="plan">
              <div className="sectionTitle compact">
                <p className="eyebrow">Study Plan</p>
                <h2>수준별 공부기간</h2>
              </div>
              <div className="planList">
                <div><strong>AWS 경험자</strong><span>1~2주</span></div>
                <div><strong>클라우드 입문자</strong><span>3~4주</span></div>
                <div><strong>AI 병행 학습</strong><span>4~6주</span></div>
              </div>
            </article>
            <article className="panel" id="strategy">
              <div className="sectionTitle compact">
                <p className="eyebrow">Strategy Flow</p>
                <h2>학습 전략</h2>
              </div>
              <ol className="flow">
                <li>교육자료와 산출물을 먼저 정리</li>
                <li>Cloud Practitioner로 AWS 전체 지도 잡기</li>
                <li>AI Practitioner로 AI·Bedrock 개념 연결</li>
                <li>SAA-C03로 실무 아키텍처 확장</li>
                <li>문제유형과 오답노트로 반복</li>
              </ol>
            </article>
          </section>

          <section className="section awsDashboardGrid" id="contents">
            {dashboardCards.map((card) => (
              <Link className="awsDashboardCard" href={card.href} key={card.title}>
                <span className="badge activeBadge">{card.label}</span>
                <h2>{card.title}</h2>
                <strong>{card.focus}</strong>
                <p>{card.description}</p>
                <ul>
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div>
                  <span>{card.status}</span>
                  <b>바로가기</b>
                </div>
              </Link>
            ))}
          </section>

          <section className="section awsDecisionGrid">
            <article className="learningBlock" id="priority">
              <div className="sectionTitle compact">
                <p className="eyebrow">Priority Flow</p>
                <h2>먼저 볼 순서</h2>
              </div>
              <div className="simpleList">
                {priorityFlow.map(([step, title, detail]) => (
                  <div key={step}>
                    <em>{step}</em>
                    <strong>{title}</strong>
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="learningBlock" id="split">
              <div className="sectionTitle compact">
                <p className="eyebrow">Learning Split</p>
                <h2>교육 vs 학습</h2>
              </div>
              <div className="comparisonTable compactComparison">
                <div className="comparisonHeader">
                  <span>구분</span>
                  <span>목적</span>
                  <span>결과물</span>
                </div>
                <div className="comparisonRow">
                  <strong>교육</strong>
                  <span>제공받은 과정 자료를 구조화</span>
                  <span>일정·커리큘럼·산출물 정리</span>
                </div>
                <div className="comparisonRow">
                  <strong>학습</strong>
                  <span>내 자격증 취득을 위한 공부</span>
                  <span>로드맵·상세노트·문제유형</span>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>
    </main>
  );
}
