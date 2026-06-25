import Link from 'next/link';

const educationSections = [
  {
    id: 'overview',
    title: '사업·교육 개요',
    description: 'AWS AI Practitioner 대비와 자동차·조선 산업 AI 활용 역량 강화를 위한 2일 교육 과정입니다.',
    items: [
      ['사업명', 'AWS Certified AI Practitioner 자격증 대비 및 자동차·조선 산업 AI 활용 역량 강화 교육과정'],
      ['기간', '2일 과정: Day 1 ~ Day 2'],
      ['장소', '울산대학교 전산실'],
      ['대상', '울산대학교 자동차·조선 전공 재학생 20~25명'],
      ['교육시간', '총 12시간'],
      ['교육방식', 'AWS Skill Builder 사전 자율학습 + 현장 집합교육 병행'],
    ],
  },
  {
    id: 'aif',
    title: 'AWS Certified AI Practitioner 2일 과정',
    description: 'Day 1은 AIF 이론과 AWS AI 서비스 이해, Day 2는 문제 풀이와 산업 AI 실습으로 구성합니다.',
    days: [
      {
        day: 'Day 1',
        title: 'AIF 이론 집중',
        sessions: [
          ['사전(자율)', 'AIF 사전 학습', 'AWS Skill Builder를 활용한 AIF 사전 학습', '온라인'],
          ['10:00~12:00', 'AWS AI 개요 및 시험 이해', 'AIF 시험 구조, AI·ML·생성형 AI 개념, 자동차·조선 산업 적용 사례', '오프라인'],
          ['13:00~15:00', 'AIF 핵심 이론 및 AWS AI 서비스 이해', 'AI 학습 방식, AI 윤리·책임·보안, Bedrock·SageMaker·Rekognition 역할', '오프라인'],
          ['15:00~17:00', 'AIF 시험 대비 핵심 정리', '빈출 개념, 문제 유형별 접근, 산업 키워드와 AIF 개념 연결', '오프라인'],
        ],
      },
      {
        day: 'Day 2',
        title: '문제 풀이 + 산업 AI 실습',
        sessions: [
          ['10:00~12:00', 'AIF 문제 풀이', 'CertiNavigator 활용 문제 풀이, 오답 분석, 핵심 키워드 기반 정답 도출 훈련', '오프라인'],
          ['13:00~14:30', 'AI 활용 실습: 자동차 분야', '자동차 결함 리포트 분석, Human-in-the-loop 검증, 보안·윤리 고려사항 인식', '오프라인'],
          ['14:30~16:00', 'AI 활용 실습: 조선 분야', '선박 기술 사양 문서 요약, 정비 시나리오 설계, AI 결과 정확성 검증', '오프라인'],
          ['16:00~17:00', '종합 정리', '현장 AI 윤리·보안 이슈, AIF 시험 개념과 실습 경험 연결, 향후 커리어 방향 공유', '오프라인'],
        ],
      },
    ],
  },
  {
    id: 'educator',
    title: 'AWS AI Educator Academy',
    description: 'SAA 자격증반과 AI 교수자 양성 과정으로 나누어 약 93시간 이상 운영하는 교육 흐름입니다.',
    phases: [
      {
        phase: 'Phase 1',
        title: 'SAA 자격증반',
        goal: 'AWS 아키텍처 설계 역량 확보 및 SAA-C03 자격증 취득 준비',
        total: 'ILT 28h + Skill Builder 20.5h+ = 48.5h+',
        rows: [
          ['Day 1~3', 'ILT', 'Architecting on AWS', '3일(21h)', 'AWS 아키텍처 설계 핵심 과정'],
          ['Skill Builder', '자기주도', 'Amazon VPC, IAM, Well-Architected, Lambda, DynamoDB', '5.5h+', '네트워킹, 보안, 서버리스, NoSQL'],
          ['Day 4', 'ILT', 'Exam Prep: SAA-C03', '1일(7h)', 'SAA 시험 준비'],
          ['Skill Builder', '자기주도', 'SAA-C03 시험 준비 과정, Cloud Quest, 덤프 문제풀이', '15h+', '시험 합격률 제고'],
        ],
      },
      {
        phase: 'Phase 2',
        title: 'AI 교수자 양성',
        goal: 'AI 애플리케이션 개발 실습 역량과 학생 대상 교수법 체득',
        total: 'ILT 35h + Skill Builder 9.5h = 44.5h',
        rows: [
          ['Day 5~6', 'ILT', 'Developing Generative AI Applications on AWS', '2일(14h)', 'AI 개발 수준 심화'],
          ['Skill Builder', '자기주도', 'Amazon Bedrock RAG, Guardrails, SageMaker', '4h', 'RAG 패턴, 안전한 배포, ML 모델 학습/배포'],
          ['Day 7', 'ILT', 'Building Agentic AI with Amazon Bedrock AgentCore', '1일(7h)', 'Agentic AI 실전 구축'],
          ['Day 8~9', 'ILT', '교수법 워크숍(Custom)', '14h', '교수자 역량 강화 실습'],
          ['Skill Builder', '자기주도', '교육 혁신, 생성형 AI 프로젝트 계획, Amazon Q Developer', '4h', '교육 활용과 AI 코딩 도구'],
        ],
      },
    ],
  },
  {
    id: 'tools',
    title: '실습 도구',
    description: 'Claude.ai, AWS Skill Builder, CertiNavigator를 교육 목적에 맞게 분리해 사용합니다.',
    tools: [
      ['Claude.ai', 'AIF 실습 및 산업 문서 분석', '자동차 결함 리포트, 선박 기술 문서 분석, Human-in-the-loop 검증 실습'],
      ['AWS Skill Builder', 'AWS 공식 자기주도 학습 플랫폼', 'Builder Labs, Cloud Quest, Jam, 공식 시험 대비 과정 활용'],
      ['CertiNavigator', 'AWS 자격증 문제풀이', 'SAA-C03 및 AIF 문제 유형 반복 훈련과 오답 분석'],
    ],
  },
];

export default function AwsEducationPage() {
  return (
    <main className="site">
      <header className="topbar">
        <Link className="brand" href="/">Data Lab</Link>
        <nav className="globalNav" aria-label="학습 트랙">
          <Link href="/adsp#dashboard">ADsP</Link>
          <Link href="/sqld#dashboard">SQLD</Link>
          <Link className="activeTrack" href="/aws#dashboard">AWS</Link>
          <Link href="/smart-social#dashboard">AI DX</Link>
        </nav>
        <button className="loginButton" type="button">login</button>
      </header>

      <nav className="trackNav" aria-label="AWS 세부 메뉴">
        <Link href="/aws#dashboard">Dashboard</Link>
        <Link href="/aws/education">AWS 교육</Link>
        <Link href="/aws/study">AWS 학습</Link>
      </nav>

      <section className="subjectHero">
        <p className="eyebrow">AWS Education</p>
        <h1>AWS 교육</h1>
        <p>AWS 교육과정 자료를 사업 개요, 일정, Educator Academy, 실습 도구 중심으로 정리합니다.</p>
      </section>

      <section className="awsLayout">
        <aside className="subjectSidebar" aria-label="AWS 교육 목차">
          <strong>AWS 교육 목차</strong>
          <nav className="subjectNav">
            {educationSections.map((section) => (
              <a className="subjectNavTitle" href={`#${section.id}`} key={section.id}>
                <strong>{section.title}</strong>
              </a>
            ))}
          </nav>
        </aside>

        <div className="awsContent">
          {educationSections.map((section) => (
            <section className="learningBlock" id={section.id} key={section.id}>
              <div className="sectionTitle compact">
                <p className="eyebrow">Education Category</p>
                <h2>{section.title}</h2>
              </div>
              <p className="blockLead">{section.description}</p>

              {section.items && (
                <div className="infoTable">
                  {section.items.map(([label, value]) => (
                    <div key={label}>
                      <strong>{label}</strong>
                      <span>{value}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.days && (
                <div className="scheduleStack">
                  {section.days.map((day) => (
                    <article className="scheduleCard" key={day.day}>
                      <h3>{day.day} — {day.title}</h3>
                      <div className="curriculumTable">
                        <div className="tableHeader">
                          <span>일시</span>
                          <span>주제</span>
                          <span>주요 학습 내용</span>
                          <span>비고</span>
                        </div>
                        {day.sessions.map(([time, topic, content, note]) => (
                          <div className="tableRow" key={`${day.day}-${time}-${topic}`}>
                            <span>{time}</span>
                            <strong>{topic}</strong>
                            <p>{content}</p>
                            <span>{note}</span>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {section.phases && (
                <div className="scheduleStack">
                  {section.phases.map((phase) => (
                    <article className="scheduleCard" key={phase.phase}>
                      <div className="phaseHeader">
                        <span>{phase.phase}</span>
                        <h3>{phase.title}</h3>
                        <p>{phase.goal}</p>
                        <strong>{phase.total}</strong>
                      </div>
                      <div className="curriculumTable academyTable">
                        <div className="tableHeader">
                          <span>일차</span>
                          <span>구분</span>
                          <span>과정명</span>
                          <span>시간</span>
                          <span>비고</span>
                        </div>
                        {phase.rows.map(([day, type, name, time, note]) => (
                          <div className="tableRow" key={`${phase.phase}-${day}-${name}`}>
                            <span>{day}</span>
                            <strong>{type}</strong>
                            <p>{name}</p>
                            <span>{time}</span>
                            <span>{note}</span>
                          </div>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {section.tools && (
                <div className="toolGrid">
                  {section.tools.map(([title, subtitle, content]) => (
                    <article className="toolCard" key={title}>
                      <h3>{title}</h3>
                      <strong>{subtitle}</strong>
                      <p>{content}</p>
                    </article>
                  ))}
                </div>
              )}
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
