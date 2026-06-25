import Link from 'next/link';

const tocItems = [
  '개요 · 핵심 가치',
  '사용자 역할 (5종)',
  '메뉴 구조 · 권한 매트릭스',
  '산학협력 환류 코어',
  '현장실습 전주기 관리',
  '산학협력 세부활동',
  '성과·리포트 (ANCHOR)',
  '졸업자 취업현황',
  'sLLM · AI 서비스',
  '학생 서비스',
  '데이터 흐름 · 환류 구조',
];

const roles = [
  ['관리자(Admin)', '전체 시스템 관리', '전체'],
  ['산학협력단', '산학협력 사업 운영·성과·행정 총괄', '전체'],
  ['학과 담당자', '본인 학과 수요·매칭·취업 관리', '본인 학과'],
  ['기업 담당자', '자사 수요 등록·프로그램·피드백', '자사'],
  ['학생', '커리어 매칭·현장실습·포트폴리오', '본인'],
];

const permissions = [
  ['대시보드 (운영 허브)', '●', '◐', '◐', '—'],
  ['기업·기관 DB / 기업정보 보강', '●', '—', '◐', '—'],
  ['기업수요', '●', '◐', '◐', '—'],
  ['산업도메인 지식 저장고 / sLLM 탐색 / 전공심화 sLLM', '●', '●', '—', '◐'],
  ['산학 AI 어시스턴트', '●', '—', '—', '—'],
  ['수요·학과 매칭 / 과제화 AI', '●', '◐', '—', '—'],
  ['LIVING-LAB (기술지원·컨설팅·R&BD·후속수요)', '●', '◐', '◐', '—'],
  ['산학협력 프로그램 운영', '●', '◐', '◐ 자사', '—'],
  ['재직자 교육과정', '●', '—', '—', '—'],
  ['현장실습 전주기 관리', '●', '—', '—', '—'],
  ['산학협력 세부활동', '●', '—', '—', '—'],
  ['기업 피드백 활동 / 소식 관리', '●', '◐', '◐', '—'],
  ['산학협력 성과·통계 분석 / ANCHOR 사업지표', '●', '—', '—', '—'],
  ['졸업자 취업현황', '●', '◐ 학과', '—', '—'],
  ['ANCHOR 환류 리포트', '●', '—', '—', '—'],
  ['AI 커리어추천·나의 이력 / 현장실습 신청 / 포트폴리오', '—', '—', '—', '●'],
];

const coreFlow = [
  ['기업수요', '기업이 등록한 산업수요와 모집·수요등록·상담목록을 관리'],
  ['수요·학과 매칭', '수요 분석 후 적합 학과·전공·교원을 연결하고 프로그램 유형을 추천'],
  ['과제화 AI', '산학협력 수요를 캡스톤·현장실습·공동연구·R&BD 과제로 전환'],
  ['LIVING-LAB', '기술지원·컨설팅·공동연구·지속 개선형 활동 관리'],
  ['프로그램 운영', '과제화된 활동을 프로젝트 또는 산학 프로그램으로 실행'],
  ['피드백 활동', '기업 만족도와 개선 의견을 모아 후속수요와 환류에 연결'],
];

const internshipSteps = ['수요조사', '신청·매칭', '학생 배정', '협약', '실습 진행', '종합평가', '성적이관', '취업연계'];

const activities = [
  ['산업체특강 / 견학', '산학중점분야·인력양성 프로그램·교류활동'],
  ['기술지도 / 공동연구', 'LIVING-LAB 기술지원·R&BD 상담·요청 연결'],
  ['연구장비활용', '공동장비 예약·기술평가·기술지도 기반 활동내역 산출'],
  ['캡스톤디자인', '팀 지도교수·기업멘토·결과물 평가'],
  ['국제산업협력', '참여기업·성과·글로벌 연계 활동을 ANCHOR 관점으로 관리'],
];

const reports = [
  ['산학협력 성과·환류 분석', 'RISE 성과지표 환류 자료와 산학협력 활동 데이터를 통합 분석'],
  ['ANCHOR 사업지표', '기업 단위·학과 단위 지표와 사업 목표 대비 성과를 확인'],
  ['ANCHOR 환류 리포트', 'sLLM이 데이터 요약과 시사점을 정리해 리포트 초안을 생성'],
];

const aiServices = [
  ['산업도메인 sLLM 탐색', '3대 도메인 지식검색과 Q&A, 관련 정책·기술 자료 연결'],
  ['전공심화 sLLM', '학과별 전공지식 검색과 전공 특화 질의응답'],
  ['산학 AI 어시스턴트', '신규 수요 분석, 과제화 추천, 프로그램 제안, 문서작성 보조'],
  ['기업수요 분석 AI', '기업 수요에서 핵심 니즈와 학과 매칭 후보를 추출'],
  ['매뉴얼 AI 도우미', '사용자 화면에서 필요한 기능 설명과 문서 작성 가이드 제공'],
];

const studentServices = [
  ['AI 기업직무 추천', '전공·역량·활동 기반 기업과 직무를 추천'],
  ['나의 산학참여 이력', '참여 프로그램과 비교과 이력, 산학활동 이력 관리'],
  ['현장실습(Co-op) 신청', '학기제 실습 공고 확인, 신청, 배정, 보고서 제출'],
  ['Canva 포트폴리오 역량 분석', '포트폴리오 기반 역량 태그와 보완 항목 분석'],
  ['학생역량·기업수요 연결', '기업 POC 콘텐츠 프로젝트 등에 신청'],
];

export default function BucPlatformPage() {
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

      <article className="bucDoc">
        <section className="bucCover">
          <div className="bucCoverBadge">◆ 부산과학기술대학교 · DX-SPARK 2040</div>
          <h1>산학협력 지식환류 모델<br />「산학환류 콘솔」 기능 정의서</h1>
          <p>
            기업수요부터 학과매칭·과제화·현장실습·취업·성과관리까지 산학협력 전 과정을
            하나의 순환 데이터로 연결하고, sLLM이 전 과정을 지능화하는 통합 플랫폼의 기능 정의입니다.
          </p>
          <div className="bucMeta">
            <span>버전 · 프로토타입 v1</span>
            <span>기준일 · 2026.06</span>
            <span>역할 5종 · 메뉴 30+</span>
          </div>
        </section>

        <section className="bucToc">
          {tocItems.map((item, index) => (
            <a href={`#buc-${index + 1}`} key={item}>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <span>{item}</span>
            </a>
          ))}
        </section>

        <section className="bucSection" id="buc-1">
          <h2><span>01</span>개요 · 핵심 가치</h2>
          <p className="bucQuote">“흩어진 산학협력 활동을 누적되는 데이터 자산으로 바꾸고, 리포트를 자동 생성한다.”</p>
          <div className="bucCard">
            <ul>
              <li><b>순환 환류 구조</b> — 기업수요 → 학과매칭 → 과제화 → 프로그램 운영 → 피드백 → 후속수요가 하나의 고리로 연결됩니다.</li>
              <li><b>데이터 통합</b> — 학사·산학협력 운영·졸업자 취업 데이터가 하나의 플랫폼으로 모여 ANCHOR 사업을 관리합니다.</li>
              <li><b>sLLM 지능화</b> — 수요 분석, 학과 매칭, 과제화, 문서작성, 의사결정 지원까지 sLLM이 전 과정을 보조합니다.</li>
              <li><b>역할 기반 서비스</b> — 산학협력단, 학과 담당자, 기업 담당자, 학생, 관리자 화면을 권한별로 분리합니다.</li>
            </ul>
          </div>
        </section>

        <section className="bucSection" id="buc-2">
          <h2><span>02</span>사용자 역할 (5종)</h2>
          <p>역할별 노출 메뉴와 데이터 범위가 분리됩니다.</p>
          <div className="bucTable">
            <div className="bucTableHeader roleGrid">
              <strong>역할</strong>
              <strong>핵심 목적</strong>
              <strong>데이터 범위</strong>
            </div>
            {roles.map(([role, goal, scope]) => (
              <div className="roleGrid" key={role}>
                <strong>{role}</strong>
                <span>{goal}</span>
                <span>{scope}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bucSection" id="buc-3">
          <h2><span>03</span>메뉴 구조 · 권한 매트릭스</h2>
          <p><b>●</b> 전체 노출 · <b>◐</b> 제한(본인 범위) · <b>—</b> 비노출</p>
          <div className="bucTable permissionTable">
            <div className="bucTableHeader permissionGrid">
              <strong>메뉴</strong>
              <strong>산학협력단</strong>
              <strong>학과</strong>
              <strong>기업</strong>
              <strong>학생</strong>
            </div>
            {permissions.map(([menu, office, department, company, student]) => (
              <div className="permissionGrid" key={menu}>
                <strong>{menu}</strong>
                <span>{office}</span>
                <span>{department}</span>
                <span>{company}</span>
                <span>{student}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bucSection" id="buc-4">
          <h2><span>04</span>산학협력 환류 코어</h2>
          <p>기업수요에서 후속수요까지 이어지는 순환 환류 흐름입니다.</p>
          <div className="bucPills">
            {['기업수요', '학과 매칭', '과제화 AI', '프로그램 운영', '피드백 환류', '후속수요'].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="bucTable">
            {coreFlow.map(([label, value]) => (
              <div className="twoColGrid" key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bucSection" id="buc-5">
          <h2><span>05</span>현장실습 전주기 관리</h2>
          <p>학생역량·기업수요·취업성과를 잇는 현장실습 전주기입니다.</p>
          <div className="bucPills">
            {internshipSteps.map((step) => (
              <span key={step}>{step}</span>
            ))}
          </div>
          <div className="bucCard">
            <ul>
              <li>실습기관 평가 기준과 학생 역량을 기준으로 적합 배정을 지원합니다.</li>
              <li>협약 작성, 실습일지, 중간점검, 평가, 성적 이관까지 하나의 흐름으로 관리합니다.</li>
              <li>실습 후 취업연계와 기업 만족도 데이터를 환류 데이터로 누적합니다.</li>
            </ul>
          </div>
        </section>

        <section className="bucSection" id="buc-6">
          <h2><span>06</span>산학협력 세부활동</h2>
          <p>IPP 기업 7개 활동 분류와 산학협력 운영 흐름입니다.</p>
          <div className="bucTable">
            {activities.map(([label, value]) => (
              <div className="twoColGrid" key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bucSection" id="buc-7">
          <h2><span>07</span>성과·리포트 (ANCHOR)</h2>
          <p>RISE 지표, 산학협력 지표, 환류 분석, AI 리포트를 연결합니다.</p>
          <div className="bucTable">
            {reports.map(([label, value]) => (
              <div className="twoColGrid" key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bucSection" id="buc-8">
          <h2><span>08</span>졸업자 취업현황</h2>
          <p>2026.02/2025.08 졸업자 1,499명 · 취업률 47.8% 기준으로 취업 흐름을 추적합니다.</p>
          <div className="bucCard">
            <ul>
              <li>전체 취업자, 미취업자, 추가확인 대상자를 학과별로 분류합니다.</li>
              <li>취업 기업과 산학협력 기업을 연결해 프로그램 효과를 확인합니다.</li>
              <li>학생 활동 이력, 현장실습, 비교과, 포트폴리오와 취업 결과를 연결합니다.</li>
            </ul>
          </div>
        </section>

        <section className="bucSection" id="buc-9">
          <h2><span>09</span>sLLM · AI 서비스</h2>
          <p>3대 도메인별 sLLM과 과제화 AI를 제공합니다.</p>
          <div className="bucTable">
            {aiServices.map(([label, value]) => (
              <div className="twoColGrid" key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bucSection" id="buc-10">
          <h2><span>10</span>학생 서비스</h2>
          <p>AI 기업직무 추천, 현장실습, 포트폴리오 분석까지 학생 커리어 성장 플랫폼으로 확장합니다.</p>
          <div className="bucTable">
            {studentServices.map(([label, value]) => (
              <div className="twoColGrid" key={label}>
                <strong>{label}</strong>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="bucSection" id="buc-11">
          <h2><span>11</span>데이터 흐름 · 환류 구조</h2>
          <p>3개 데이터원이 ANCHOR 포인트로 모이는 통합 구조입니다.</p>
          <div className="bucFlow">
            <span>학사 데이터<br />학생역량·이력</span>
            <span>산학협력 운영<br />과제·활동·평가</span>
            <span>졸업자 취업현황</span>
            <span>sLLM 종합 분석</span>
            <strong>ANCHOR 리포트·지표</strong>
          </div>
          <div className="bucCard">
            <ul>
              <li>기업 단계에서 수요와 프로그램 활동 데이터가 누적됩니다.</li>
              <li>학과 단계에서 매칭, 과제화, 참여 학생, 교육성과가 연결됩니다.</li>
              <li>학생 단계에서 현장실습, 포트폴리오, 취업 데이터가 환류됩니다.</li>
              <li>최종적으로 ANCHOR 사업지표와 성과 리포트 생성에 활용됩니다.</li>
            </ul>
          </div>
        </section>
      </article>
    </main>
  );
}
