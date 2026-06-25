import Link from 'next/link';

const tracks = [
  {
    id: 'adsp',
    title: 'ADsP',
    subtitle: '데이터분석 준전문가',
    status: '진행중',
    description: '시험정보, 과목별 핵심요약, 문제유형, 학습관리를 한곳에서 정리합니다.',
    href: '/adsp',
    progress: '초기 구축',
  },
  {
    id: 'sql',
    title: 'SQLD',
    subtitle: 'SQL 개발자',
    status: '진행중',
    description: '데이터 모델링, SQL 기본·활용, 문제유형과 학습관리를 정리합니다.',
    href: '/sqld',
    progress: '초기 구성',
  },
  {
    id: 'aws',
    title: 'AWS',
    subtitle: 'AI·Cloud 교육과정',
    status: '진행중',
    description: 'AWS AI Practitioner, SAA-C03, AI Educator Academy 교육 내용을 정리합니다.',
    href: '/aws',
    progress: '구성중',
  },
  {
    id: 'buc',
    title: '부과대',
    subtitle: '산학협력 지식환류 플랫폼',
    status: '목업 반영',
    description: 'DX-SPARK 산학협력 환류 콘솔의 기능정의, 메뉴 구조, 데이터 흐름을 정리합니다.',
    href: '/buc',
    progress: '기능정의 정리',
  },
  {
    id: 'smart-social',
    title: 'AI DX',
    subtitle: '스마트소셜 업무 기록',
    status: '업무관리',
    description: '스마트소셜 AI DX 사업부의 사이트, 대학별 프로젝트, DX-Spark 업무 내용을 날짜별로 관리합니다.',
    href: '/smart-social',
    progress: '업무 로그 구성',
  },
];

export default function DataLabHome() {
  return (
    <main className="site">
      <header className="topbar">
        <Link className="brand" href="/">Data Lab</Link>
        <nav className="globalNav" aria-label="학습 트랙">
          <Link href="/adsp#dashboard">ADsP</Link>
          <Link href="/sqld#dashboard">SQLD</Link>
          <Link href="/aws#dashboard">AWS</Link>
          <Link href="/smart-social#dashboard">AI DX</Link>
        </nav>
        <button className="loginButton" type="button">login</button>
      </header>

      <section className="labHero">
        <p className="eyebrow">Personal Learning Workspace</p>
        <h1>Data Lab</h1>
        <p>
          ADsP를 시작으로 SQLD, AWS까지 확장할 개인 학습 포털입니다.
          자격증별 대시보드와 요약노트, 문제유형, 학습기록을 트랙별로 관리합니다.
        </p>
      </section>

      <section className="section">
        <div className="sectionTitle">
          <p className="eyebrow">Learning Tracks</p>
          <h2>학습 트랙</h2>
        </div>
        <div className="trackGrid">
          {tracks.map((track) => (
            <Link className="trackCard" href={track.href} id={track.id} key={track.id}>
              <span className={track.status === '진행중' ? 'badge activeBadge' : 'badge'}>{track.status}</span>
              <h3>{track.title}</h3>
              <strong>{track.subtitle}</strong>
              <p>{track.description}</p>
              <div>
                <span>상태</span>
                <b>{track.progress}</b>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section splitGrid">
        <article className="panel">
          <div className="sectionTitle compact">
            <p className="eyebrow">Current Focus</p>
            <h2>현재 목표</h2>
          </div>
          <p>ADsP 자격증 취득과 AWS AI·Cloud 교육과정 정리를 우선 목표로 두고 학습 콘텐츠를 쌓습니다.</p>
        </article>
        <article className="panel">
          <div className="sectionTitle compact">
            <p className="eyebrow">Next Expansion</p>
            <h2>확장 방향</h2>
          </div>
          <p>SQLD는 같은 구조로 대시보드, 개념요약, 문제유형, 학습관리 페이지를 추가할 수 있게 구성합니다.</p>
        </article>
      </section>
    </main>
  );
}
