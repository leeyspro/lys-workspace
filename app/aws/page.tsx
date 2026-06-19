import Link from 'next/link';

export default function AwsHomePage() {
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
        <p className="eyebrow">AWS Track</p>
        <h1>AWS</h1>
        <p>AWS 교육과정 자료와 개인 자격증 학습 내용을 분리해서 관리합니다.</p>
      </section>

      <section className="section">
        <div className="trackGrid">
          <Link className="trackCard" href="/aws/education">
            <span className="badge activeBadge">교육과정</span>
            <h3>AWS 교육</h3>
            <strong>AIF, SAA, Educator Academy</strong>
            <p>제공받은 AWS 교육자료를 사업 개요, 일정, 실습 도구, 커리큘럼 중심으로 정리합니다.</p>
            <div><span>바로가기</span><b>교육 페이지</b></div>
          </Link>
          <Link className="trackCard" href="/aws/study">
            <span className="badge activeBadge">개인학습</span>
            <h3>AWS 학습</h3>
            <strong>자격증 로드맵과 시험 준비</strong>
            <p>AWS 자격증 단계, 비용, 시험방법, 첫 추천 자격증과 학습 범위를 정리합니다.</p>
            <div><span>바로가기</span><b>학습 페이지</b></div>
          </Link>
        </div>
      </section>
    </main>
  );
}
