import Link from 'next/link';
import SiteHeader from '../SiteHeader';

const menuGroups = [
  {
    title: '사이트목록',
    href: '#sites',
    description: '관리 대상 사이트와 바로가기, 상태를 모아둡니다.',
  },
  {
    title: '부산과학기술대학교',
    href: '#buc',
    description: '산학협력 지식환류, ANCHOR, DX-SPARK 관련 업무를 기록합니다.',
  },
  {
    title: '울산과학대학교',
    href: '#uc',
    description: 'AWS 교육, AI 교육과정, 산학협력 연계 업무를 기록합니다.',
  },
  {
    title: 'DX-Spark',
    href: '#dx-spark',
    description: 'DX-Spark 공통 플랫폼, 기능정의, 데이터 환류 구조를 관리합니다.',
  },
];

const siteList = [
  { name: '해운대구청', url: 'http://haeundae-demo.smartsocial.co.kr/', status: 'Active' },
  { name: '인천교육청', url: 'http://ice.dataebiz.com/', status: 'Inactive' },
  { name: '진성여자고등학교', url: 'http://jsg.dataebiz.com/', status: 'Inactive' },
  { name: 'HIVE', url: 'https://busan.hive2.co.kr/', status: 'Active' },
  { name: '경민대학교', url: 'https://kyungmin.lincshare.co.kr/', status: 'Active' },
  { name: '인천재능대학교', url: 'https://jeiu.lincshare.co.kr/', status: 'Active' },
  { name: '한양여자대학교', url: 'https://hywoman.lincshare.co.kr/', status: 'Active' },
  { name: '연성대학교', url: 'https://yeonsung.lincshare.co.kr/', status: 'Active' },
  { name: '동서울대학교', url: 'https://du.lincshare.co.kr/', status: 'Active' },
  { name: '강원도립대학교', url: 'https://gw.lincshare.co.kr/', status: 'Active' },
  { name: '구미대학교', url: 'https://gumi.lincshare.co.kr/', status: 'Active' },
  { name: '부산과학기술대학교', url: 'https://bist.lincshare.co.kr/', status: 'Active' },
  { name: '부산보건대학교', url: 'https://bhu.lincshare.co.kr/', status: 'Active' },
  { name: '전남과학대학교', url: 'https://cntu.lincshare.co.kr/', status: 'Active' },
  { name: '동강대학교', url: 'https://hive2.lincshare.co.kr/', status: 'Active' },
  { name: '순천제일대학교', url: 'https://suncheon.lincshare.co.kr/', status: 'Active' },
  { name: '꿈다이음', url: 'https://www.da2um.kr/', status: 'Active' },
  { name: '꿈다이음(AI)', url: 'https://www.da2um.kr/career/check-ai-state', status: 'Active' },
  { name: '퍼스트잡', url: 'https://firstjob.kr/', status: 'Inactive' },
  { name: 'aws인증센터 예약시스템', url: 'https://www.certicenter.co.kr/', status: 'Inactive' },
  { name: '잡이지', url: 'https://jobeasy.kr/', status: 'Active' },
  { name: '에뮬레이터콘텐츠', url: 'https://tuto.ssdigitaledu.co.kr/', status: 'Active' },
  { name: '디지', url: 'https://xn--2z1b150b.kr/login', status: 'Active' },
  { name: '부산보건대RISE', url: 'https://bhurise.co.kr/', status: 'Active' },
  { name: 'Dx-Spark', url: 'https://dxspark.co.kr/', status: 'Active' },
  { name: '스마트에듀', url: 'https://edu.smartsocial.co.kr/', status: 'Active' },
];

const projectCards = [
  {
    id: 'buc',
    title: '부산과학기술대학교',
    focus: '산학협력 지식환류 플랫폼',
    items: ['산학환류 콘솔 기능정의서', 'ANCHOR 지표와 환류 리포트', '기업수요·학과매칭·과제화 흐름'],
  },
  {
    id: 'uc',
    title: '울산과학대학교',
    focus: 'AWS AI·Cloud 교육과정',
    items: ['AI Practitioner 2일 과정', 'AI Educator Academy', 'SAA-C03 / Skill Builder / CertiNavigator'],
  },
  {
    id: 'dx-spark',
    title: 'DX-Spark',
    focus: 'AI DX 공통 기획',
    items: ['업무 요구사항 정리', '사이트별 메뉴 구조', '데이터 기반 리포트/환류 구조'],
  },
];

const workLogs = [
  {
    date: '2026.06.22',
    category: 'AWS 학습 사이트',
    title: 'AWS 자격증 단계와 Cloud Practitioner 학습 구조 정리',
    details: [
      '자격증 단계 비교표에서 중복 컬럼을 제거하고 핵심 포인트 카드로 이동',
      '시험 응시 가이드를 카드형 6단계 흐름으로 변경',
      'Cloud Practitioner 1단계 학습 내용을 공식 시험가이드 기준으로 재구성',
    ],
  },
  {
    date: '2026.06.19',
    category: '부산과학기술대학교',
    title: '산학환류 콘솔 기능정의서 목업 반영',
    details: [
      '기능정의서 HTML을 기준으로 01~11 섹션 구성',
      '산학협력 환류 흐름, 역할별 권한, sLLM·AI 서비스 구조 정리',
      '부과대 메뉴와 별도 페이지 추가',
    ],
  },
  {
    date: '추가 예정',
    category: '업무 기록',
    title: '새 업무 내용을 날짜별로 계속 추가',
    details: [
      '회의 내용, 기능 요청, 수정 사항, 참고 링크를 날짜별로 누적',
      '사이트별 메뉴에서 관련 프로젝트만 빠르게 확인',
      '추후 DB 연동 시 Supabase 업무 로그 테이블로 확장 가능',
    ],
  },
];

export default function SmartSocialPage() {
  return (
    <main className="site workSitePage">
      <SiteHeader
        active="ai-dx"
        subNav={[
          { label: 'Dashboard', href: '/smart-social#dashboard' },
          { label: '사이트목록', href: '/smart-social#sites' },
          { label: '업무기록', href: '/smart-social#logs' },
        ]}
        subNavLabel="AI DX 세부 메뉴"
      />
      {/*
      <header className="topbar">
        <Link className="brand" href="/">Data Lab</Link>
        <nav className="globalNav" aria-label="학습 트랙">
          <Link href="/adsp#dashboard">ADsP</Link>
          <Link href="/sqld#dashboard">SQLD</Link>
          <Link href="/aws#dashboard">AWS</Link>
          <Link className="activeTrack" href="/smart-social#dashboard">AI DX</Link>
        </nav>
        <button className="loginButton" type="button">login</button>
      </header>

      */}

      <section className="subjectHero">
        <p className="eyebrow">Smart Social AI DX Division</p>
        <h1>스마트소셜 AI DX 사업부 업무</h1>
        <p>사이트별 프로젝트와 대학별 업무 내용을 왼쪽 메뉴로 구분하고, 오른쪽에는 날짜별 업무 기록을 계속 누적합니다.</p>
      </section>

      <section className="workLayout">
        <aside className="subjectSidebar" aria-label="AI DX 업무 메뉴">
          <strong>AI DX 업무 메뉴</strong>
          <nav className="subjectNav">
            <div className="subjectNavGroup">
              {menuGroups.map((menu) => (
                <a className="subjectNavTitle" href={menu.href} key={menu.title}>
                  <span>Menu</span>
                  <strong>{menu.title}</strong>
                </a>
              ))}
            </div>
          </nav>
        </aside>

        <div className="workContent adspPageContent">
          <section className="hero" id="dashboard">
            <div className="heroText">
              <p className="eyebrow">Smart Social AI DX Division</p>
              <h1>AI DX Work Dashboard</h1>
              <p>스마트소셜 AI DX 사업부의 사이트 목록, 대학별 업무, DX-Spark 관련 기록을 한 화면에서 관리합니다.</p>
            </div>
          </section>

          <section className="learningBlock" id="sites">
            <div className="sectionTitle compact">
              <p className="eyebrow">Site List</p>
              <h2>사이트목록</h2>
            </div>
            <div className="workTable">
              {siteList.map((site) => (
                <a
                  className={`workSiteRow ${site.status === 'Inactive' ? 'inactiveSite' : ''}`}
                  href={site.url}
                  key={site.name}
                  rel="noreferrer"
                  target="_blank"
                >
                  <strong>{site.name}</strong>
                  <span>{site.url}</span>
                  <em>{site.status}</em>
                </a>
              ))}
            </div>
          </section>

          <section className="learningBlock" id="buc">
            <div className="sectionTitle compact">
              <p className="eyebrow">Projects</p>
              <h2>대학별 프로젝트</h2>
            </div>
            <div className="workProjectGrid">
              {projectCards.map((project) => (
                <article id={project.id} key={project.title}>
                  <span>{project.focus}</span>
                  <h3>{project.title}</h3>
                  <ul>
                    {project.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="learningBlock" id="dx-spark">
            <div className="sectionTitle compact">
              <p className="eyebrow">Daily Work Log</p>
              <h2>날짜별 업무 기록</h2>
            </div>
            <div className="workLogList">
              {workLogs.map((log) => (
                <article key={`${log.date}-${log.title}`}>
                  <time>{log.date}</time>
                  <div>
                    <span>{log.category}</span>
                    <h3>{log.title}</h3>
                    <ul>
                      {log.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
