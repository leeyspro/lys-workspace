export type SubjectDetail = {
  slug: string;
  order: string;
  title: string;
  description: string;
  categories: {
    id: string;
    title: string;
    summary: string;
    goals: string[];
    keyPoints: string[];
    examFocus: string;
  }[];
};

export const subjectDetails: SubjectDetail[] = [
  {
    slug: 'data-understanding',
    order: '1과목',
    title: '데이터 이해',
    description: '데이터의 의미, 데이터베이스, 빅데이터, 데이터 가치와 데이터 사이언스의 기본 개념을 정리합니다.',
    categories: [
      {
        id: 'data-information',
        title: '데이터와 정보',
        summary: '데이터, 정보, 지식, 지혜의 차이를 구분하고 DIKW 피라미드를 이해합니다.',
        goals: ['데이터와 정보의 차이 설명', '정성적 데이터와 정량적 데이터 구분', 'DIKW 단계 암기'],
        keyPoints: ['데이터는 가공 전 사실', '정보는 목적에 맞게 처리된 데이터', '지식은 정보의 패턴과 맥락'],
        examFocus: '용어 간 차이를 묻는 개념 구분형 문제가 자주 나옵니다.',
      },
      {
        id: 'database',
        title: '데이터베이스',
        summary: '데이터베이스의 특징, DBMS, 데이터 모델, SQL의 기본 역할을 정리합니다.',
        goals: ['DBMS 역할 이해', '데이터베이스 특징 암기', '스키마와 인스턴스 구분'],
        keyPoints: ['통합 저장', '공유 가능', '중복 최소화', '일관성 유지'],
        examFocus: '데이터베이스 특징과 DBMS 장점을 묻는 암기형 문제가 나옵니다.',
      },
      {
        id: 'bigdata',
        title: '빅데이터 특징',
        summary: '빅데이터의 3V, 4V, 5V와 기존 데이터 처리 방식과의 차이를 정리합니다.',
        goals: ['3V 요소 암기', '빅데이터 처리 특징 이해', '정형/반정형/비정형 데이터 구분'],
        keyPoints: ['Volume', 'Velocity', 'Variety', 'Veracity', 'Value'],
        examFocus: '3V와 데이터 유형을 연결하는 문제가 자주 등장합니다.',
      },
      {
        id: 'data-value',
        title: '데이터 가치',
        summary: '데이터가 비즈니스 의사결정과 전략 수립에 어떻게 활용되는지 정리합니다.',
        goals: ['데이터 가치 창출 과정 이해', '분석 활용 사례 구분', '데이터 기반 의사결정 설명'],
        keyPoints: ['문제 발견', '패턴 분석', '예측', '최적화', '의사결정 지원'],
        examFocus: '사례를 주고 데이터 활용 목적을 고르는 문제가 나올 수 있습니다.',
      },
      {
        id: 'data-science',
        title: '데이터 사이언스',
        summary: '통계, IT, 도메인 지식이 결합되는 데이터 사이언스의 역할을 정리합니다.',
        goals: ['데이터 사이언스 구성 요소 암기', '분석가 역량 이해', '데이터 분석 프로세스 파악'],
        keyPoints: ['통계 지식', '프로그래밍', '도메인 이해', '커뮤니케이션'],
        examFocus: '데이터 사이언티스트 역량과 분석 프로세스 관련 문제가 출제됩니다.',
      },
    ],
  },
  {
    slug: 'analysis-planning',
    order: '2과목',
    title: '데이터분석 기획',
    description: '분석 과제를 정의하고 방법론, 프로젝트 관리, 거버넌스 체계를 정리합니다.',
    categories: [
      {
        id: 'planning',
        title: '분석 기획',
        summary: '비즈니스 문제를 분석 문제로 전환하고 분석 목표와 범위를 정의합니다.',
        goals: ['분석 기획의 목적 이해', '문제 정의 절차 정리', '분석 목표 설정'],
        keyPoints: ['문제 정의', '목표 설정', '범위 확정', '성과 기준'],
        examFocus: '분석 기획 단계의 순서와 산출물을 묻는 문제가 나옵니다.',
      },
      {
        id: 'methodology',
        title: '분석 방법론',
        summary: 'KDD, CRISP-DM 등 분석 방법론의 흐름과 단계별 특징을 정리합니다.',
        goals: ['KDD 절차 암기', 'CRISP-DM 단계 암기', '방법론별 차이 구분'],
        keyPoints: ['비즈니스 이해', '데이터 이해', '데이터 준비', '모델링', '평가', '전개'],
        examFocus: '방법론 단계 순서와 각 단계 설명을 연결하는 문제가 자주 나옵니다.',
      },
      {
        id: 'task-discovery',
        title: '과제 발굴',
        summary: '하향식 접근법과 상향식 접근법으로 분석 과제를 도출하는 방법을 정리합니다.',
        goals: ['Top-down 접근 이해', 'Bottom-up 접근 이해', '분석 과제 우선순위 판단'],
        keyPoints: ['문제 탐색', '가설 설정', '데이터 탐색', '과제 후보 도출'],
        examFocus: '접근 방식의 차이를 묻는 사례 판단형 문제가 나올 수 있습니다.',
      },
      {
        id: 'project-management',
        title: '프로젝트 관리',
        summary: '분석 프로젝트 수행 시 일정, 품질, 위험, 인력 관리 포인트를 정리합니다.',
        goals: ['프로젝트 관리 영역 암기', '위험 관리 이해', '분석 프로젝트 특성 파악'],
        keyPoints: ['범위', '일정', '비용', '품질', '위험', '의사소통'],
        examFocus: '프로젝트 관리 항목과 설명을 매칭하는 문제가 나옵니다.',
      },
      {
        id: 'governance',
        title: '분석 거버넌스',
        summary: '조직 내 분석 체계, 데이터 관리, 분석 문화와 역량 관리 구조를 정리합니다.',
        goals: ['거버넌스 구성 요소 이해', '분석 조직 구조 구분', '데이터 품질 관리 이해'],
        keyPoints: ['조직', '프로세스', '시스템', '데이터', '문화'],
        examFocus: '분석 거버넌스 체계의 구성 요소를 묻는 문제가 출제됩니다.',
      },
    ],
  },
  {
    slug: 'data-analysis',
    order: '3과목',
    title: '데이터분석',
    description: 'R 기초, 전처리, 통계분석, 회귀, 분류, 군집, 연관분석을 실전 중심으로 정리합니다.',
    categories: [
      {
        id: 'r-basic',
        title: 'R 기초',
        summary: 'R 자료형, 데이터프레임, 기본 함수와 코드 해석 포인트를 정리합니다.',
        goals: ['벡터/리스트/데이터프레임 구분', '기본 함수 해석', '패키지 사용 흐름 이해'],
        keyPoints: ['vector', 'list', 'data.frame', 'factor', 'summary', 'str'],
        examFocus: 'R 코드 실행 결과를 해석하는 문제가 출제될 수 있습니다.',
      },
      {
        id: 'preprocessing',
        title: '데이터 전처리',
        summary: '결측값, 이상값, 파생변수, 표준화 등 분석 전 데이터 준비 과정을 정리합니다.',
        goals: ['결측값 처리 방법 이해', '이상값 탐지 방식 구분', '표준화와 정규화 차이 이해'],
        keyPoints: ['NA 처리', '이상값', '스케일링', '파생변수', '데이터 마트'],
        examFocus: '전처리 목적과 방법을 묻는 문제가 나옵니다.',
      },
      {
        id: 'statistics',
        title: '통계분석',
        summary: '기술통계, 추론통계, 가설검정, 분포, 상관분석의 핵심을 정리합니다.',
        goals: ['평균/분산/표준편차 이해', '귀무가설과 대립가설 구분', 'p-value 해석'],
        keyPoints: ['기술통계', '추론통계', '가설검정', '유의수준', '상관계수'],
        examFocus: '통계 결과 해석형 문제가 많이 나올 수 있습니다.',
      },
      {
        id: 'regression',
        title: '회귀분석',
        summary: '선형회귀, 다중회귀, 회귀계수, 결정계수, 모형 적합도 해석을 정리합니다.',
        goals: ['회귀계수 의미 이해', '결정계수 해석', '다중공선성 개념 정리'],
        keyPoints: ['독립변수', '종속변수', '회귀계수', 'R-squared', '다중공선성'],
        examFocus: '회귀분석 결과표를 보고 해석하는 문제가 중요합니다.',
      },
      {
        id: 'classification-clustering',
        title: '분류와 군집',
        summary: '의사결정나무, 로지스틱 회귀, K-means, 계층적 군집 등 알고리즘을 비교합니다.',
        goals: ['지도학습과 비지도학습 구분', '분류와 군집 차이 이해', '평가지표 암기'],
        keyPoints: ['Decision Tree', 'Logistic Regression', 'K-means', 'Accuracy', 'ROC'],
        examFocus: '알고리즘의 목적과 특징을 비교하는 문제가 자주 나옵니다.',
      },
      {
        id: 'association',
        title: '연관분석',
        summary: '장바구니 분석, 지지도, 신뢰도, 향상도의 의미를 정리합니다.',
        goals: ['지지도 계산 이해', '신뢰도 해석', '향상도 의미 구분'],
        keyPoints: ['Support', 'Confidence', 'Lift', 'Association Rule'],
        examFocus: '지지도, 신뢰도, 향상도 개념과 계산 문제가 나올 수 있습니다.',
      },
    ],
  },
];

export function getSubjectDetail(slug: string) {
  return subjectDetails.find((subject) => subject.slug === slug);
}
