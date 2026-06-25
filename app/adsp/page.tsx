'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import SiteHeader from '../SiteHeader';
import AdspSidebar from './AdspSidebar';
import { subjectDetails } from './subjects/subjects-data';

type StudyState = {
  solved: number;
  wrong: number;
  bookmarks: number;
  progress: number;
  latestScore: number;
};

const defaultStudyState: StudyState = {
  solved: 0,
  wrong: 0,
  bookmarks: 0,
  progress: 0,
  latestScore: 0,
};

const schedule = [
  { round: '제48회', apply: '2026.01.05 ~ 01.09', exam: '2026.02.07', result: '2026.03.06', status: '완료' },
  { round: '제49회', apply: '2026.04.13 ~ 04.17', exam: '2026.05.17', result: '2026.06.05', status: '완료' },
  { round: '제50회', apply: '2026.07.06 ~ 07.10', exam: '2026.08.08', result: '2026.08.28', status: '준비' },
  { round: '제51회', apply: '2026.09.28 ~ 10.02', exam: '2026.10.31', result: '2026.11.20', status: '예정' },
];

const subjects = [
  { name: '데이터 이해', questions: 10 },
  { name: '데이터분석 기획', questions: 10 },
  { name: '데이터분석', questions: 30 },
];

const questionTypes = ['개념 암기형', '용어 구분형', '사례 판단형', '통계 해석형', 'R 코드 해석형', '계산형', '알고리즘 비교형'];

const faqs = [
  {
    question: '비전공자도 합격 가능한가요?',
    answer: '가능합니다. 다만 3과목의 통계, R, 데이터마이닝 용어가 낯설 수 있어 3~4주 정도를 잡는 편이 안정적입니다.',
  },
  {
    question: '처음부터 Supabase가 필요한가요?',
    answer: '혼자 사용하는 학습 사이트라면 브라우저 저장소로 시작해도 됩니다. 나중에 회사 컴퓨터와 집 노트북의 기록 동기화가 필요해지면 Supabase Auth와 DB를 붙이면 됩니다.',
  },
  {
    question: '시험 직전에는 무엇을 봐야 하나요?',
    answer: '과목별 핵심 키워드, 오답노트, 자주 헷갈리는 통계 개념, 데이터마이닝 알고리즘 비교표를 우선 확인하는 것이 좋습니다.',
  },
];

const storageKey = 'adsp-study-state';

export default function AdspPage() {
  const [study, setStudy] = useState<StudyState>(defaultStudyState);
  const [activeTab, setActiveTab] = useState('문제풀이');

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      setStudy(JSON.parse(saved) as StudyState);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(storageKey, JSON.stringify(study));
  }, [study]);

  const remainingQuestions = useMemo(() => Math.max(50 - study.solved, 0), [study.solved]);

  const updateStudy = (key: keyof StudyState, delta: number) => {
    setStudy((current) => ({
      ...current,
      [key]: Math.max(0, Math.min(key === 'latestScore' ? 100 : 999, current[key] + delta)),
    }));
  };

  return (
    <main className="site">
      <SiteHeader
        active="adsp"
        subNav={[
          { label: 'Dashboard', href: '/adsp#dashboard' },
          { label: '과목별 학습', href: '/adsp#summary' },
        ]}
        subNavLabel="ADsP 세부 메뉴"
      />
      {/*
      <header className="topbar">
        <Link className="brand" href="/">
          Data Lab
        </Link>
        <nav className="globalNav" aria-label="학습 트랙">
          <Link className="activeTrack" href="/adsp#dashboard">ADsP</Link>
          <Link href="/sqld#dashboard">SQLD</Link>
          <Link href="/aws#dashboard">AWS</Link>
          <Link href="/smart-social#dashboard">AI DX</Link>
        </nav>
        <button className="loginButton" type="button">login</button>
      </header>

      <nav className="trackNav" aria-label="ADsP 세부 메뉴">
        <a href="#dashboard">Dashboard</a>
        <a href="#summary">과목별 학습</a>
      </nav>

      */}

      <section className="subjectLayout adspMainLayout">
        <AdspSidebar />

        <div className="subjectContent adspPageContent">
          <section className="hero" id="dashboard">
            <div className="heroText">
              <p className="eyebrow">ADsP Track</p>
              <h1>ADsP Study Dashboard</h1>
              <p>
                시험 일정, 과목 비중, 공부전략, 오답 관리까지 한 화면에서 확인하고 기록합니다.
                현재는 로컬 저장 방식이며, 추후 Supabase 동기화를 붙일 수 있도록 구성합니다.
              </p>
            </div>
            <div className="scorePanel">
              <span>최근 모의고사</span>
              <strong>{study.latestScore || '--'}점</strong>
              <p>합격 목표는 60점 이상, 과목별 과락 방지가 핵심입니다.</p>
            </div>
          </section>

          <section className="section">
            <div className="metricGrid">
              {[
                ['문항 수', '50문항'],
                ['시험시간', '90분'],
                ['합격기준', '60점 이상'],
                ['응시료', '50,000원'],
                ['시행횟수', '연 4회'],
                ['응시자격', '제한 없음'],
              ].map(([label, value]) => (
                <article className="metricCard" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </article>
              ))}
            </div>
          </section>

          <section className="section dashboardGrid">
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
              <div className="donut" aria-label="데이터 이해 20%, 데이터분석 기획 20%, 데이터분석 60%">
                <span>3과목<br />60%</span>
              </div>
              <div className="legend">
                {subjects.map((subject) => (
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
                <div><strong>전공자/경험자</strong><span>1~2주</span></div>
                <div><strong>비전공자</strong><span>3~4주</span></div>
                <div><strong>완전 입문자</strong><span>4~6주</span></div>
              </div>
            </article>
            <article className="panel">
              <div className="sectionTitle compact">
                <p className="eyebrow">Strategy Flow</p>
                <h2>합격 전략</h2>
              </div>
              <ol className="flow">
                <li>시험 구조 파악</li>
                <li>1·2과목 용어 회독</li>
                <li>3과목 집중 학습</li>
                <li>기출·예상문제 풀이</li>
                <li>오답노트 복습</li>
              </ol>
            </article>
          </section>

          <section className="section" id="intro">
            <div className="sectionTitle">
              <p className="eyebrow">About ADsP</p>
              <h2>ADsP 소개</h2>
            </div>
            <div className="contentGrid">
              <article>
                <h3>자격증의 목적</h3>
                <p>ADsP는 데이터 이해, 분석 기획, 데이터 분석의 기본 역량을 확인하는 데이터분석 준전문가 자격입니다.</p>
              </article>
              <article>
                <h3>활용 방향</h3>
                <p>데이터 직무 입문, SQLD 이후 학습 확장, 실무 데이터 분석 기초 정리에 활용할 수 있습니다.</p>
              </article>
            </div>
          </section>

          <section className="section" id="summary">
            <div className="sectionTitle">
              <p className="eyebrow">Subject Notes</p>
              <h2>과목별 학습</h2>
            </div>
            <div className="summaryGrid">
              {subjectDetails.map((subject) => (
                <Link className="summaryCard linkedCard" href={`/adsp/subjects/${subject.slug}`} key={subject.slug}>
                  <span className="subjectOrder">{subject.order}</span>
                  <h3>{subject.title}</h3>
                  <ul>
                    {subject.categories.slice(0, 5).map((category) => (
                      <li key={category.id}>{category.title}</li>
                    ))}
                  </ul>
                  <p>{subject.description}</p>
                  <strong className="cardAction">상세 학습하기</strong>
                </Link>
              ))}
            </div>
          </section>

          <section className="section" id="questions">
            <div className="sectionTitle">
              <p className="eyebrow">Question Types</p>
              <h2>문제유형 정리</h2>
            </div>
            <div className="typeGrid">
              {questionTypes.map((type) => (
                <article className="typeCard" key={type}>
                  <strong>{type}</strong>
                  <p>대표 예시, 풀이 포인트, 자주 틀리는 함정을 계속 추가할 예정입니다.</p>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="study">
            <div className="sectionTitle">
              <p className="eyebrow">Study Manager</p>
              <h2>학습관리</h2>
            </div>
            <div className="studyStats">
              <article><span>푼 문제</span><strong>{study.solved}</strong></article>
              <article><span>남은 기준</span><strong>{remainingQuestions}</strong></article>
              <article><span>오답</span><strong>{study.wrong}</strong></article>
              <article><span>즐겨찾기</span><strong>{study.bookmarks}</strong></article>
              <article><span>진도율</span><strong>{study.progress}%</strong></article>
            </div>
            <div className="tabs" role="tablist" aria-label="학습관리 탭">
              {['문제풀이', '오답노트', '즐겨찾기', '진도체크', '점수기록'].map((tab) => (
                <button className={activeTab === tab ? 'tab activeTab' : 'tab'} key={tab} onClick={() => setActiveTab(tab)} type="button">
                  {tab}
                </button>
              ))}
            </div>
            <div className="managerPanel">
              <div>
                <h3>{activeTab}</h3>
                <p>현재는 실제 문제 데이터가 들어오기 전 단계입니다. 이 구조는 나중에 Supabase 테이블로 옮기기 쉽게 분리할 예정입니다.</p>
              </div>
              <div className="actions">
                <button type="button" onClick={() => updateStudy('solved', 1)}>문제 1개 풀이</button>
                <button type="button" onClick={() => updateStudy('wrong', 1)}>오답 추가</button>
                <button type="button" onClick={() => updateStudy('bookmarks', 1)}>즐겨찾기 추가</button>
                <button type="button" onClick={() => updateStudy('progress', 5)}>진도 +5%</button>
                <button type="button" onClick={() => updateStudy('latestScore', 5)}>점수 +5</button>
              </div>
            </div>
          </section>

          <section className="section faqSection" id="faq">
            <div className="sectionTitle">
              <p className="eyebrow">FAQ</p>
              <h2>자주 묻는 질문</h2>
            </div>
            <div className="faqList">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
