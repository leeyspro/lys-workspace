import Link from 'next/link';

const primarySpaces = [
  {
    title: 'ADsP',
    label: '데이터분석 준전문가',
    href: '/adsp#dashboard',
    status: '운영중',
    summary: '시험 정보, 과목별 핵심 요약, 문제유형과 학습 흐름을 한곳에서 관리합니다.',
    points: ['과목 구조', '문제유형', '학습 관리'],
  },
  {
    title: 'SQLD',
    label: 'SQL 개발자',
    href: '/sqld#dashboard',
    status: '운영중',
    summary: '데이터 모델링과 SQL 기본·활용 범위를 자격증 학습용으로 정리합니다.',
    points: ['데이터 모델링', 'SQL 기본', '실전 정리'],
  },
  {
    title: 'AWS',
    label: 'Cloud·AI Certification',
    href: '/aws/study',
    status: '개편중',
    summary: '자격증 단계, 인증 배지, 시험코드, 레벨별 상세 핵심 포인트를 연결합니다.',
    points: ['Certification Map', 'Badge Guide', 'Study Roadmap'],
  },
];

const quickLinks = [
  ['AWS 자격증 단계 비교', '/aws/study#roadmap'],
  ['Foundational 상세', '/aws/study/foundational#overview'],
  ['AI Practitioner', '/aws/study/ai-practitioner#overview'],
  ['Cloud Practitioner', '/aws/study/cloud-practitioner#overview'],
  ['ADsP Dashboard', '/adsp#dashboard'],
  ['SQLD Dashboard', '/sqld#dashboard'],
];

const recentUpdates = [
  'AWS Study Map에 실제 인증 배지형 UI와 시험코드 연결',
  '레벨 상세 페이지에 자격증별 배지, 코드, 핵심 범위 카드 추가',
  'AWS 왼쪽 메뉴를 여러 섹션 동시 펼침 방식으로 변경',
  'Data Lab 메인 화면을 학습 포털 구조로 개편',
];

export default function DataLabHome() {
  return (
    <main className="site">
      <header className="topbar">
        <Link className="brand" href="/">Data Lab</Link>
        <nav className="globalNav" aria-label="Data Lab navigation">
          <Link href="/adsp#dashboard">ADsP</Link>
          <Link href="/sqld#dashboard">SQLD</Link>
          <Link href="/aws#dashboard">AWS</Link>
        </nav>
        <button className="loginButton" type="button">login</button>
      </header>

      <section className="homeHero">
        <div>
          <p className="eyebrow">Data Lab Workspace</p>
        </div>
        <div className="homeHeroPanel" aria-label="Workspace summary">
          <span>현재 정리 범위</span>
          <strong>3개 학습 공간</strong>
          <p>ADsP · SQLD · AWS</p>
        </div>
      </section>

      <section className="homeSection">
        <div className="homeSectionHeader">
          <div>
            <p className="eyebrow">Workspace</p>
            <h2>바로가기</h2>
          </div>
          <Link className="homeTextLink" href="/aws/study">AWS Study Map</Link>
        </div>
        <div className="homeSpaceGrid">
          {primarySpaces.map((space) => (
            <Link className="homeSpaceCard" href={space.href} key={space.title}>
              <div className="homeCardTop">
                <span>{space.status}</span>
                <b>{space.label}</b>
              </div>
              <h3>{space.title}</h3>
              <p>{space.summary}</p>
              <ul>
                {space.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>

      <section className="homeSection homeTwoColumn">
        <article className="homePanel">
          <div className="homeSectionHeader compact">
            <div>
              <p className="eyebrow">Quick Access</p>
              <h2>자주 여는 페이지</h2>
            </div>
          </div>
          <div className="homeQuickList">
            {quickLinks.map(([label, href]) => (
              <Link href={href} key={href}>{label}</Link>
            ))}
          </div>
        </article>

        <article className="homePanel">
          <div className="homeSectionHeader compact">
            <div>
              <p className="eyebrow">Recent Updates</p>
              <h2>최근 반영 내용</h2>
            </div>
          </div>
          <ul className="homeUpdateList">
            {recentUpdates.map((update) => (
              <li key={update}>{update}</li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
