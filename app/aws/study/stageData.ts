export type StageKey = 'foundational' | 'associate' | 'professional' | 'specialty';

export type StageCertification = {
  name: string;
  role: string;
  exam: string;
  cost: string;
  time: string;
  questions: string;
  focus: string[];
  study: string[];
};

export type StageData = {
  key: StageKey;
  eyebrow: string;
  title: string;
  description: string;
  overview: string[][];
  certifications: StageCertification[];
  order: string[][];
  questionTypes: string[][];
};

export const stageData: Record<StageKey, StageData> = {
  foundational: {
    key: 'foundational',
    eyebrow: 'Level 1',
    title: 'Foundational 상세 학습',
    description: 'AWS와 AI의 기본 개념을 확인하는 입문 단계입니다. 처음에는 이 단계에서 용어와 서비스 지도를 잡습니다.',
    overview: [
      ['목적', '클라우드와 AI 기본 개념을 이해하고 AWS 서비스 이름과 사용 사례를 익힙니다.'],
      ['추천 대상', 'AWS 입문자, 비전공자, 기획·영업·관리 직무, AI 교육 입문자'],
      ['대표 비용', '100 USD'],
      ['대표 시험시간', '90분'],
      ['대표 문항 수', '65문항'],
      ['학습 우선순위', 'Cloud Practitioner로 클라우드 전체 그림을 잡고, AI Practitioner로 AI/ML 사용 사례를 연결합니다.'],
    ],
    certifications: [
      {
        name: 'AWS Certified Cloud Practitioner',
        role: '클라우드 입문',
        exam: 'Foundational',
        cost: '100 USD',
        time: '90분',
        questions: '65문항',
        focus: ['AWS Cloud 가치', '책임 공유 모델', '보안과 규정 준수', 'EC2·S3·RDS·Lambda 기본', '비용과 Support Plan'],
        study: ['클라우드 장점 암기', '주요 서비스 이름과 용도 연결', '요금·보안·운영 키워드 정리'],
      },
      {
        name: 'AWS Certified AI Practitioner',
        role: 'AI 입문',
        exam: 'Foundational',
        cost: '100 USD',
        time: '90분',
        questions: '65문항',
        focus: ['AI·ML 기본', '생성형 AI', 'Foundation Model', 'Amazon Bedrock', '책임 있는 AI', 'AI 보안과 거버넌스'],
        study: ['AI/ML 용어 구분', 'Bedrock 중심 서비스 연결', 'RAG·Agents·Guardrails 패턴 정리'],
      },
    ],
    order: [
      ['1단계', '클라우드 공통 용어', '리전, 가용 영역, 온디맨드, 탄력성, 고가용성, 확장성을 먼저 구분합니다.'],
      ['2단계', '핵심 서비스 지도', '컴퓨팅, 스토리지, 데이터베이스, 네트워킹, 보안 서비스를 한 장으로 묶습니다.'],
      ['3단계', 'AI 기본 개념', 'AI, ML, 딥러닝, 생성형 AI, Foundation Model, 프롬프트를 구분합니다.'],
      ['4단계', '서비스 매칭 연습', '문제 상황에서 Cloud Practitioner 서비스와 AI Practitioner 서비스를 고르는 연습을 합니다.'],
    ],
    questionTypes: [
      ['개념 구분형', '클라우드 장점, 책임 공유 모델, AI/ML 차이를 묻습니다.'],
      ['서비스 매칭형', '문제 상황에 맞는 AWS 서비스를 고르는 형태가 많습니다.'],
      ['비용·보안 판단형', '비용 최적화, 지원 플랜, 최소 권한, 암호화 개념을 묻습니다.'],
    ],
  },
  associate: {
    key: 'associate',
    eyebrow: 'Level 2',
    title: 'Associate 상세 학습',
    description: '실무 AWS 역량을 검증하는 핵심 단계입니다. 설계, 개발, 운영, 데이터, 머신러닝 방향으로 나뉩니다.',
    overview: [
      ['목적', 'AWS에서 실제 워크로드를 설계, 구축, 운영할 수 있는 기본 실무 역량을 확인합니다.'],
      ['추천 대상', '클라우드 엔지니어, 개발자, 데이터 엔지니어, ML 엔지니어 입문자'],
      ['대표 비용', '150 USD'],
      ['대표 시험시간', '약 130분'],
      ['대표 문항 수', '보통 65문항'],
      ['학습 우선순위', '대부분은 Solutions Architect - Associate로 설계 기준을 먼저 잡는 것이 좋습니다.'],
    ],
    certifications: [
      {
        name: 'AWS Certified Solutions Architect - Associate',
        role: '아키텍처 설계',
        exam: 'Associate',
        cost: '150 USD',
        time: '130분',
        questions: '65문항',
        focus: ['VPC', 'EC2', 'ELB', 'Auto Scaling', 'S3', 'RDS', 'DynamoDB', '고가용성', '비용 최적화'],
        study: ['Well-Architected 관점 정리', '장애 복구와 다중 AZ 설계', '스토리지·DB 선택 기준 비교'],
      },
      {
        name: 'AWS Certified Developer - Associate',
        role: '애플리케이션 개발',
        exam: 'Associate',
        cost: '150 USD',
        time: '130분',
        questions: '65문항',
        focus: ['Lambda', 'API Gateway', 'DynamoDB', 'SQS', 'SNS', 'CI/CD', 'IAM', 'CloudWatch'],
        study: ['서버리스 흐름', 'API와 이벤트 기반 아키텍처', '배포와 모니터링 키워드 정리'],
      },
      {
        name: 'AWS Certified CloudOps Engineer - Associate',
        role: '운영 자동화',
        exam: 'Associate',
        cost: '150 USD',
        time: '130분',
        questions: '65문항',
        focus: ['모니터링', '배포', '운영 자동화', '백업', '패치', '장애 대응', '비용 관리'],
        study: ['CloudWatch와 CloudTrail 차이', '운영 이벤트 대응', '자동화와 복구 절차 정리'],
      },
      {
        name: 'AWS Certified Data Engineer - Associate',
        role: '데이터 파이프라인',
        exam: 'Associate',
        cost: '150 USD',
        time: '130분',
        questions: '65문항',
        focus: ['데이터 수집', '변환', '저장', '품질', '보안', '거버넌스', '분석 파이프라인'],
        study: ['Glue, S3, Redshift 흐름', '배치와 스트리밍 구분', '데이터 품질과 권한 관리'],
      },
      {
        name: 'AWS Certified Machine Learning Engineer - Associate',
        role: 'ML 워크로드',
        exam: 'Associate',
        cost: '150 USD',
        time: '130분',
        questions: '65문항',
        focus: ['SageMaker', '데이터 준비', '모델 학습', '배포', 'MLOps', '모니터링'],
        study: ['ML 수명주기', '학습·추론·배포 구분', '모델 성능과 운영 관리'],
      },
    ],
    order: [
      ['1단계', 'Solutions Architect', 'AWS 전체 설계 기준과 주요 서비스 선택 기준을 먼저 잡습니다.'],
      ['2단계', '직무별 분기', '개발자는 Developer, 운영은 CloudOps, 데이터는 Data Engineer, ML은 ML Engineer로 이동합니다.'],
      ['3단계', '실무형 문제풀이', '가용성, 비용, 성능, 보안 요구사항을 보고 정답 서비스를 선택합니다.'],
      ['4단계', '핸즈온 보강', 'VPC, Lambda, S3, RDS, IAM, CloudWatch는 직접 콘솔 흐름을 확인합니다.'],
    ],
    questionTypes: [
      ['아키텍처 선택형', '요구사항을 보고 가장 적절한 서비스 조합을 고릅니다.'],
      ['운영 시나리오형', '장애, 배포, 모니터링, 백업 상황을 판단합니다.'],
      ['보안·비용 최적화형', '최소 권한, 암호화, 비용 절감, 성능 개선을 묻습니다.'],
    ],
  },
  professional: {
    key: 'professional',
    eyebrow: 'Level 3',
    title: 'Professional 상세 학습',
    description: '복잡한 조직 환경에서 고급 설계, 운영, 생성형 AI 개발 역량을 검증하는 상위 단계입니다.',
    overview: [
      ['목적', '복잡한 멀티 계정, 대규모 워크로드, 자동화, 마이그레이션, 고급 AI 앱 설계를 다룹니다.'],
      ['추천 대상', '2년 이상 AWS 실무 경험이 있는 아키텍트, DevOps, AI 개발자'],
      ['대표 비용', '300 USD'],
      ['대표 시험시간', '약 180분'],
      ['대표 문항 수', '보통 75문항'],
      ['학습 우선순위', 'Associate 수준의 설계와 운영을 충분히 익힌 뒤 진입하는 것이 좋습니다.'],
    ],
    certifications: [
      {
        name: 'AWS Certified Solutions Architect - Professional',
        role: '고급 아키텍처',
        exam: 'Professional',
        cost: '300 USD',
        time: '180분',
        questions: '75문항',
        focus: ['멀티 계정', '하이브리드 네트워크', '마이그레이션', 'DR', '비용 최적화', '보안 아키텍처'],
        study: ['조직 단위 설계', '복잡한 네트워크', '장애 복구 전략 비교'],
      },
      {
        name: 'AWS Certified DevOps Engineer - Professional',
        role: 'DevOps 자동화',
        exam: 'Professional',
        cost: '300 USD',
        time: '180분',
        questions: '75문항',
        focus: ['CI/CD', 'IaC', '모니터링', '자동 복구', '보안 자동화', '운영 우수성'],
        study: ['배포 전략', 'CloudFormation/CDK', '운영 이벤트 자동 대응'],
      },
      {
        name: 'AWS Certified Generative AI Developer - Professional',
        role: '생성형 AI 개발',
        exam: 'Professional',
        cost: '300 USD',
        time: '180분',
        questions: '75문항 내외',
        focus: ['Bedrock', 'Agentic AI', 'RAG', '모델 평가', '보안', '비용', '운영'],
        study: ['생성형 AI 앱 설계', '에이전트와 도구 호출', '책임 있는 AI와 거버넌스'],
      },
    ],
    order: [
      ['1단계', 'Associate 복습', 'SAA 수준의 핵심 설계와 운영 서비스를 먼저 다시 정리합니다.'],
      ['2단계', '멀티 계정과 조직 설계', 'Organizations, Control Tower, IAM Identity Center, 네트워크 분리를 학습합니다.'],
      ['3단계', '고급 시나리오 풀이', '긴 문제에서 핵심 요구사항과 제약 조건을 먼저 표시합니다.'],
      ['4단계', '자동화와 운영', 'IaC, CI/CD, 관측성, 보안 자동화를 연결합니다.'],
    ],
    questionTypes: [
      ['장문 시나리오형', '요구사항이 많고 제약 조건이 긴 문제에서 핵심 단서를 찾아야 합니다.'],
      ['마이그레이션·DR형', 'RTO/RPO, 비용, 운영 복잡도에 따라 전략을 고릅니다.'],
      ['조직·보안 설계형', '멀티 계정, 권한 위임, 중앙 로깅, 네트워크 분리를 묻습니다.'],
    ],
  },
  specialty: {
    key: 'specialty',
    eyebrow: 'Level 4',
    title: 'Specialty 상세 학습',
    description: '보안, 네트워킹처럼 특정 전문 영역을 깊게 검증하는 단계입니다.',
    overview: [
      ['목적', '특정 기술 영역을 깊게 다루며 실무 경험과 서비스 세부 지식이 필요합니다.'],
      ['추천 대상', '보안 담당자, 네트워크 엔지니어, 전문 영역을 강화하려는 클라우드 실무자'],
      ['대표 비용', '300 USD'],
      ['대표 시험시간', '약 170분'],
      ['대표 문항 수', '보통 65문항'],
      ['학습 우선순위', 'Associate 수준의 AWS 기본기를 갖춘 뒤 보안 또는 네트워킹 등 전문 분야로 들어갑니다.'],
    ],
    certifications: [
      {
        name: 'AWS Certified Security - Specialty',
        role: '보안 전문',
        exam: 'Specialty',
        cost: '300 USD',
        time: '170분',
        questions: '65문항',
        focus: ['IAM', 'KMS', 'CloudTrail', 'GuardDuty', 'Security Hub', '데이터 보호', '인시던트 대응'],
        study: ['최소 권한', '암호화', '탐지와 감사', '네트워크 보안', '규정 준수'],
      },
      {
        name: 'AWS Certified Advanced Networking - Specialty',
        role: '네트워크 전문',
        exam: 'Specialty',
        cost: '300 USD',
        time: '170분',
        questions: '65문항',
        focus: ['VPC', 'Transit Gateway', 'Direct Connect', 'Route 53', '하이브리드 네트워크', 'DNS', '보안'],
        study: ['라우팅', '연결 옵션', 'DNS 설계', '온프레미스 연동', '트러블슈팅'],
      },
      {
        name: 'Machine Learning 전문 영역',
        role: 'ML 전문 심화',
        exam: 'Specialty 또는 ML Associate 이후 심화',
        cost: '시험별 확인',
        time: '시험별 확인',
        questions: '시험별 확인',
        focus: ['데이터 준비', '모델링', '학습', '튜닝', '배포', 'MLOps'],
        study: ['SageMaker 심화', '모델 성능 평가', '운영 중 드리프트와 모니터링'],
      },
    ],
    order: [
      ['1단계', '전문 분야 선택', '보안, 네트워킹, ML 중 현재 업무와 가장 가까운 영역을 선택합니다.'],
      ['2단계', '핵심 서비스 깊게 보기', '서비스 이름보다 설정 옵션, 제약, 장애 원인을 학습합니다.'],
      ['3단계', '시나리오별 판단', '보안 사고, 라우팅 장애, 성능 저하 같은 실전 상황을 기준으로 풉니다.'],
      ['4단계', '로그와 진단', 'CloudTrail, VPC Flow Logs, CloudWatch 등 증거를 해석하는 연습을 합니다.'],
    ],
    questionTypes: [
      ['전문 진단형', '로그, 권한, 라우팅, 암호화 설정에서 원인을 찾습니다.'],
      ['서비스 세부 설정형', '정답이 서비스 이름이 아니라 구체 설정인 경우가 많습니다.'],
      ['보안·네트워크 시나리오형', '조직 보안 요구와 네트워크 제약을 동시에 고려합니다.'],
    ],
  },
};
