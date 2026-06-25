import Link from 'next/link';
import AwsStudySidebar from '../../AwsStudySidebar';

const sidebarGroups = [
  {
    title: 'AI Practitioner',
    links: [
      ['자격증 소개', '/aws/study/ai-practitioner#overview'],
      ['학습 핵심', '/aws/study/ai-practitioner#domains'],
      ['학습 로드맵', '/aws/study/ai-practitioner#order'],
      ['문제유형', '/aws/study/ai-practitioner#questions'],
      ['실제 공부 내용', '#study-content'],
    ],
  },
  {
    title: 'AWS 학습',
    links: [
      ['AWS 학습 홈', '/aws/study'],
      ['AWS 교육', '/aws/education'],
    ],
  },
];

const studySteps = [
  {
    id: 'step-1',
    step: '1단계',
    title: 'AI·ML 기본 용어 정리',
    goal: '시험 문장에서 AI, ML, 딥러닝, 생성형 AI가 어떤 의미로 쓰이는지 구분합니다.',
    learn: [
      'AI는 사람의 지능적 작업을 모방하는 큰 범위의 기술입니다.',
      'ML은 데이터를 바탕으로 패턴을 학습해 예측하거나 분류하는 AI의 한 분야입니다.',
      '딥러닝은 신경망을 여러 층으로 쌓아 이미지, 음성, 자연어 같은 복잡한 데이터를 처리합니다.',
      '생성형 AI는 기존 데이터를 학습해 텍스트, 이미지, 코드, 요약문 같은 새 콘텐츠를 만듭니다.',
    ],
    memorize: [
      '지도학습: 정답 라벨이 있는 데이터로 학습',
      '비지도학습: 정답 없이 데이터의 구조나 군집을 찾음',
      '강화학습: 보상과 패널티를 통해 행동 전략을 학습',
      '추론: 학습된 모델을 실제 입력에 적용해 결과를 내는 과정',
    ],
    practice: '문제가 “고객 이탈 가능성 예측”, “이미지 속 객체 탐지”, “문서 요약 생성” 중 무엇을 말하는지 보고 예측·분류·생성 문제로 나눠봅니다.',
  },
  {
    id: 'step-2',
    step: '2단계',
    title: '생성형 AI와 Foundation Model 이해',
    goal: 'Foundation Model, LLM, 프롬프트, 토큰, 임베딩의 관계를 연결합니다.',
    learn: [
      'Foundation Model은 대규모 데이터로 사전 학습되어 여러 작업에 재사용할 수 있는 기반 모델입니다.',
      'LLM은 텍스트 이해와 생성을 잘하는 대규모 언어 모델입니다.',
      '프롬프트는 모델에게 작업을 지시하는 입력 문장입니다.',
      '토큰은 모델이 텍스트를 처리하는 작은 단위입니다.',
      '임베딩은 텍스트나 이미지를 의미가 담긴 숫자 벡터로 표현한 값입니다.',
    ],
    memorize: [
      '프롬프트 품질이 결과 품질에 큰 영향을 줌',
      '모델이 사실과 다른 답을 자신 있게 내는 현상을 환각이라고 함',
      'Temperature가 높으면 답변 다양성이 커지고, 낮으면 일관성이 커짐',
      '생성형 AI는 콘텐츠 생성, 요약, 분류, 질의응답, 코드 생성에 활용',
    ],
    practice: '같은 질문을 “짧게 요약”, “표로 정리”, “초보자에게 설명”처럼 프롬프트만 바꿔 결과가 달라지는 이유를 정리합니다.',
  },
  {
    id: 'step-3',
    step: '3단계',
    title: 'AWS AI 서비스 연결',
    goal: '시험에 자주 나오는 AWS AI 서비스를 상황별로 고르는 연습을 합니다.',
    learn: [
      'Amazon Bedrock은 Foundation Model을 API로 사용하고 생성형 AI 앱을 만들 때 중심이 되는 서비스입니다.',
      'Amazon SageMaker는 ML 모델을 학습, 배포, 관리하는 서비스입니다.',
      'Amazon Rekognition은 이미지와 비디오 분석에 사용합니다.',
      'Amazon Comprehend는 텍스트에서 감정, 핵심 문구, 엔터티를 분석합니다.',
      'Amazon Transcribe는 음성을 텍스트로 변환하고, Amazon Polly는 텍스트를 음성으로 변환합니다.',
      'Amazon Q는 업무용 생성형 AI 어시스턴트 성격으로 이해합니다.',
    ],
    memorize: [
      '생성형 AI 앱 구축: Bedrock',
      '모델 학습·배포 전 과정: SageMaker',
      '이미지·영상 분석: Rekognition',
      '자연어 텍스트 분석: Comprehend',
      '음성→텍스트: Transcribe, 텍스트→음성: Polly',
    ],
    practice: '문제에서 “직접 모델을 학습해야 하는가”, “이미 준비된 Foundation Model을 쓰면 되는가”, “이미지/음성/문서 중 무엇을 처리하는가”를 먼저 표시합니다.',
  },
  {
    id: 'step-4',
    step: '4단계',
    title: 'RAG, Knowledge Bases, Agents 이해',
    goal: '생성형 AI 활용 패턴을 단순 암기가 아니라 문제 상황에 맞게 판단합니다.',
    learn: [
      'RAG는 외부 지식 저장소에서 관련 정보를 검색한 뒤 모델 답변에 활용하는 방식입니다.',
      'Knowledge Bases for Amazon Bedrock은 회사 문서나 지식 저장소를 연결해 RAG를 구현할 때 사용합니다.',
      'Agents for Amazon Bedrock은 사용자의 요청을 이해하고 필요한 도구나 API를 호출해 작업을 수행합니다.',
      'Guardrails for Amazon Bedrock은 부적절한 입력과 출력을 제한하고 안전 기준을 적용합니다.',
      '파인튜닝은 특정 목적에 맞게 모델 자체를 추가 학습시키는 방법입니다.',
    ],
    memorize: [
      '최신 사내 문서를 근거로 답변해야 하면 RAG',
      '외부 도구 호출과 업무 자동화가 필요하면 Agents',
      '출력 제한과 안전 정책이 중요하면 Guardrails',
      '특정 도메인 스타일이나 패턴을 모델에 익히려면 파인튜닝',
    ],
    practice: '“사내 규정집을 근거로 답변”, “고객 요청에 따라 주문 조회 API 호출”, “욕설과 개인정보 출력을 차단” 같은 문장을 각각 RAG, Agents, Guardrails로 연결합니다.',
  },
  {
    id: 'step-5',
    step: '5단계',
    title: '책임 있는 AI와 보안·거버넌스',
    goal: 'AI 서비스 사용 시 반드시 따라오는 위험 관리 키워드를 정리합니다.',
    learn: [
      '책임 있는 AI는 공정성, 설명가능성, 투명성, 개인정보 보호, 안전성을 포함합니다.',
      '편향은 특정 집단이나 조건에 불리한 결과를 만들 수 있는 데이터·모델 문제입니다.',
      'Human-in-the-loop는 중요한 판단에 사람이 검토하거나 승인하는 절차입니다.',
      'IAM은 최소 권한 원칙에 따라 AI 서비스와 데이터 접근 권한을 제한합니다.',
      'KMS는 암호화 키를 관리하고, CloudWatch와 CloudTrail은 모니터링과 감사 추적에 활용합니다.',
    ],
    memorize: [
      '개인정보와 민감정보는 보호·마스킹·접근 제한 대상',
      '모델 출력은 정확성, 안전성, 편향을 검토해야 함',
      '권한은 최소 권한 원칙으로 부여',
      '로그와 모니터링은 운영 중 문제 추적에 필요',
    ],
    practice: '문제에서 “민감정보”, “규정 준수”, “편향”, “설명 가능”, “감사 로그”가 보이면 책임 있는 AI 또는 보안·거버넌스 문제로 분류합니다.',
  },
];

const reviewChecklist = [
  'AI, ML, 딥러닝, 생성형 AI를 한 문장으로 구분할 수 있다.',
  'Bedrock과 SageMaker의 차이를 설명할 수 있다.',
  'RAG, 파인튜닝, 프롬프트 엔지니어링, Agents를 구분할 수 있다.',
  'Rekognition, Comprehend, Transcribe, Polly의 사용 사례를 고를 수 있다.',
  '책임 있는 AI 키워드와 보안 서비스를 연결할 수 있다.',
];

export default function AiPractitionerStudyPlanPage() {
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
        <p className="eyebrow">AI Practitioner Study Plan</p>
        <h1>학습 로드맵별 실제 학습</h1>
        <p>AI Practitioner를 처음 준비할 때 읽고 외울 내용을 학습 로드맵에 맞춰 정리했습니다.</p>
      </section>

      <section className="awsLayout">
        <AwsStudySidebar current="ai-plan" />

        <div className="awsContent" id="study-content">
          <section className="learningBlock" id="study-method">
            <div className="sectionTitle compact">
              <p className="eyebrow">How To Use</p>
              <h2>공부 방식</h2>
            </div>
            <p className="blockLead">
              각 단계는 읽을 내용, 반드시 외울 키워드, 직접 풀어볼 관점으로 나눴습니다. 먼저 개념을 읽고,
              키워드를 암기한 뒤 문제 문장에서 어떤 단서가 나오는지 표시하는 방식으로 공부합니다.
            </p>
            <div className="simpleList">
              <div>
                <strong>1회독</strong>
                <span>용어와 서비스 이름을 익히고, 헷갈리는 단어를 표시합니다.</span>
              </div>
              <div>
                <strong>2회독</strong>
                <span>문제 상황을 보고 어떤 AWS 서비스와 개념을 연결할지 판단합니다.</span>
              </div>
              <div>
                <strong>3회독</strong>
                <span>오답노트에는 틀린 이유보다 “문제의 단서”와 “정답 서비스”를 짝으로 남깁니다.</span>
              </div>
            </div>
          </section>

          {studySteps.map((step) => (
            <section className="learningBlock" id={step.id} key={step.id}>
              <div className="learningHeader">
                <span>{step.step}</span>
                <h2>{step.title}</h2>
                <p>{step.goal}</p>
              </div>
              <div className="learningGrid">
                <section>
                  <h3>공부할 내용</h3>
                  <ul>
                    {step.learn.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3>암기 키워드</h3>
                  <ul>
                    {step.memorize.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </div>
              <div className="examFocus">
                <strong>문제풀이 관점</strong>
                <p>{step.practice}</p>
              </div>
            </section>
          ))}

          <section className="learningBlock">
            <div className="sectionTitle compact">
              <p className="eyebrow">Review Checklist</p>
              <h2>최종 점검</h2>
            </div>
            <div className="simpleList">
              {reviewChecklist.map((item, index) => (
                <div key={item}>
                  <strong>{index + 1}. 점검 항목</strong>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
