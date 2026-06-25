import Link from 'next/link';
import SiteHeader from '../SiteHeader';

const metrics = [
  ['문항 수', '50문항'],
  ['시험시간', '90분'],
  ['합격기준', '60점 이상'],
  ['응시료', '50,000원'],
  ['시행횟수', '연 4회'],
  ['응시자격', '제한 없음'],
];

const schedule = [
  { round: '제58회', apply: '2026 상반기', exam: '일정 확인 필요', result: '발표 예정', status: '예정' },
  { round: '제59회', apply: '2026 상반기', exam: '일정 확인 필요', result: '발표 예정', status: '예정' },
  { round: '제60회', apply: '2026 하반기', exam: '일정 확인 필요', result: '발표 예정', status: '준비' },
  { round: '제61회', apply: '2026 하반기', exam: '일정 확인 필요', result: '발표 예정', status: '예정' },
];

const subjectWeights = [
  { name: '데이터 모델링의 이해', questions: 10 },
  { name: 'SQL 기본 및 활용', questions: 40 },
];

const subjects = [
  {
    title: '데이터 모델링의 이해',
    weight: '10문항 내외',
    description: '엔터티, 속성, 관계, 식별자, 정규화처럼 테이블 설계의 기본 개념을 정리합니다.',
    keywords: ['엔터티', '속성', '관계', '식별자', '정규화', 'ERD'],
  },
  {
    title: 'SQL 기본 및 활용',
    weight: '40문항 내외',
    description: 'SELECT, JOIN, GROUP BY, 서브쿼리, 집합연산, DML, DDL, TCL, 윈도우 함수를 학습합니다.',
    keywords: ['SELECT', 'JOIN', 'GROUP BY', '서브쿼리', '윈도우 함수', 'DML'],
  },
];

const studyRoadmap = [
  ['1단계', 'SELECT 기본기', 'WHERE, ORDER BY, GROUP BY, HAVING의 실행 흐름을 먼저 잡습니다.'],
  ['2단계', 'JOIN과 서브쿼리', 'INNER/OUTER JOIN, 상관 서브쿼리, EXISTS를 문제 상황과 연결합니다.'],
  ['3단계', '함수와 집계', '문자·숫자·날짜 함수, NULL 처리, 집계 결과 해석을 반복합니다.'],
  ['4단계', '모델링 용어', '엔터티, 관계, 식별자, 정규화를 짧은 정의와 예시로 암기합니다.'],
  ['5단계', '기출 패턴', 'SQL 실행 결과 예측, 옳은 SQL 고르기, 모델링 용어 구분 문제를 풉니다.'],
];

const questionTypes = [
  ['결과 예측형', 'SQL 문장을 보고 최종 출력 행, 정렬, 집계값을 고릅니다.'],
  ['구문 완성형', '조건에 맞는 JOIN, GROUP BY, HAVING, 서브쿼리 위치를 선택합니다.'],
  ['개념 구분형', '엔터티·속성·관계·식별자·정규화 용어를 사례와 연결합니다.'],
  ['함정 판단형', 'NULL, 중복 행, OUTER JOIN 조건 위치, 집계 조건을 주의해서 판단합니다.'],
];

const practiceItems = [
  ['오늘 푼 문제', '0'],
  ['오답노트', '0'],
  ['즐겨찾기', '0'],
  ['진도율', '0%'],
];

export default function SqldPage() {
  return (
    <main className="site">
      <SiteHeader
        active="sqld"
        subNav={[
          { label: 'Dashboard', href: '/sqld#dashboard' },
          { label: '과목별 학습', href: '/sqld#subjects' },
        ]}
        subNavLabel="SQLD 세부 메뉴"
      />
      {/*
      <header className="topbar">
        <Link className="brand" href="/">Data Lab</Link>
        <nav className="globalNav" aria-label="학습 트랙">
          <Link href="/adsp#dashboard">ADsP</Link>
          <Link className="activeTrack" href="/sqld#dashboard">SQLD</Link>
          <Link href="/aws#dashboard">AWS</Link>
          <Link href="/smart-social#dashboard">AI DX</Link>
        </nav>
        <button className="loginButton" type="button">login</button>
      </header>

      <nav className="trackNav" aria-label="SQLD 세부 메뉴">
        <a href="#dashboard">Dashboard</a>
        <a href="#subjects">과목별 학습</a>
      </nav>

      */}

      <section className="subjectLayout">
        <aside className="subjectSidebar" aria-label="SQLD 학습 메뉴">
          <strong>SQLD 학습 메뉴</strong>
          <nav className="subjectNav">
            <div className="subjectNavGroup">
              <a className="subjectNavTitle currentSubject" href="#dashboard">
                <span>Dashboard</span>
                <strong>Dashboard</strong>
              </a>
              <div className="subjectNavItems">
                <a href="#exam">시험정보</a>
                <a href="#roadmap">학습 로드맵</a>
                <a href="#questions">문제유형</a>
                <a href="#manager">학습관리</a>
              </div>
            </div>
            <div className="subjectNavGroup">
              <a className="subjectNavTitle" href="#subjects">
                <span>Subject Notes</span>
                <strong>과목별 학습</strong>
              </a>
              <div className="subjectNavItems">
                <a href="#modeling">데이터 모델링의 이해</a>
                <a href="#sql-basic">SQL 기본 및 활용</a>
              </div>
            </div>
          </nav>
        </aside>

        <div className="subjectContent adspPageContent">
          <section className="hero" id="dashboard">
            <div className="heroText">
              <p className="eyebrow">SQL Developer</p>
              <h1>SQLD Study Dashboard</h1>
              <p>
                SQLD는 깊은 이론보다 SQL 실행 결과를 정확히 읽고, 모델링 용어를 빠르게 구분하는 것이 핵심입니다.
                먼저 SELECT 흐름을 잡고 JOIN, 집계, 서브쿼리, 모델링 용어 순서로 쌓습니다.
              </p>
            </div>
            <div className="scorePanel">
              <span>최근 모의고사</span>
              <strong>--점</strong>
              <p>목표는 60점 이상입니다. SQL 결과 예측 문제를 꾸준히 반복합니다.</p>
            </div>
          </section>

          <section className="section">
            <div className="metricGrid">
              {metrics.map(([label, value]) => (
                <article className="metricCard" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className="section dashboardGrid" id="exam">
            <article className="panel widePanel">
              <div className="sectionTitle">
                <p className="eyebrow">2026 Schedule</p>
                <h2>2026년 시험 일정</h2>
              </div>
              <div className="timeline">
                {schedule.map((item) => (
                  <div className="timelineItem" key={item.round}>
                    <span className={`badge ${item.status === '준비' ? 'activeBadge' : ''}`}>{item.status}</span>
                    <strong>{item.round}</strong>
                    <p>접수 {item.apply}</p>
                    <p>시험 {item.exam}</p>
                    <p>발표 {item.result}</p>
                  </div>
                ))}
              </div>
            </article>

            <article className="panel chartPanel">
              <div className="sectionTitle compact">
                <p className="eyebrow">Subject Weight</p>
                <h2>과목 비중</h2>
              </div>
              <div className="donut sqldDonut" aria-label="데이터 모델링의 이해 20%, SQL 기본 및 활용 80%">
                <span>SQL<br />80%</span>
              </div>
              <div className="legend">
                {subjectWeights.map((subject) => (
                  <div key={subject.name}>
                    <span>{subject.name}</span>
                    <strong>{subject.questions}문항</strong>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section className="section splitGrid">
            <article className="panel">
              <div className="sectionTitle compact">
                <p className="eyebrow">Study Plan</p>
                <h2>수준별 공부기간</h2>
              </div>
              <div className="planList">
                <div><strong>SQL 경험자</strong><span>1~2주</span></div>
                <div><strong>기본 문법 학습자</strong><span>2~3주</span></div>
                <div><strong>완전 입문자</strong><span>4주 이상</span></div>
              </div>
            </article>
            <article className="panel">
              <div className="sectionTitle compact">
                <p className="eyebrow">Strategy Flow</p>
                <h2>합격 전략</h2>
              </div>
              <ol className="flow">
                <li>SELECT 실행 순서 파악</li>
                <li>JOIN과 GROUP BY 반복</li>
                <li>서브쿼리와 윈도우 함수 정리</li>
                <li>모델링 용어 암기</li>
                <li>결과 예측 문제 반복</li>
              </ol>
            </article>
          </section>

          <section className="section" id="subjects">
            <div className="sectionTitle compact">
              <p className="eyebrow">Subject Notes</p>
              <h2>과목별 학습</h2>
            </div>
            <div className="summaryGrid sqldSubjectGrid">
              {subjects.map((subject, index) => (
                <article className="summaryCard" id={index === 0 ? 'modeling' : 'sql-basic'} key={subject.title}>
                  <span className="subjectOrder">{subject.weight}</span>
                  <h3>{subject.title}</h3>
                  <p>{subject.description}</p>
                  <ul>
                    {subject.keywords.map((keyword) => (
                      <li key={keyword}>{keyword}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="learningBlock" id="roadmap">
            <div className="learningHeader">
              <span>Study Roadmap</span>
              <h2>학습 로드맵</h2>
              <p>SQLD는 손으로 쿼리를 따라가며 결과를 예측하는 연습이 가장 중요합니다.</p>
            </div>
            <div className="simpleList">
              {studyRoadmap.map(([step, title, description]) => (
                <div key={step}>
                  <em>{step}</em>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="section" id="questions">
            <div className="sectionTitle compact">
              <p className="eyebrow">Question Types</p>
              <h2>문제유형</h2>
            </div>
            <div className="typeGrid">
              {questionTypes.map(([title, description]) => (
                <article className="typeCard" key={title}>
                  <strong>{title}</strong>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="manager">
            <div className="sectionTitle compact">
              <p className="eyebrow">Study Manager</p>
              <h2>학습관리</h2>
            </div>
            <div className="studyStats sqldStudyStats">
              {practiceItems.map(([label, value]) => (
                <article key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
            <div className="managerPanel">
              <div>
                <h3>추후 기능 연결 영역</h3>
                <p>문제풀이, 오답노트, 즐겨찾기, 점수 기록을 ADsP와 같은 방식으로 확장할 수 있도록 자리만 잡아둡니다.</p>
              </div>
              <div className="actions">
                <button type="button">문제풀이 준비</button>
                <button type="button">오답노트 준비</button>
                <button type="button">점수기록 준비</button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
