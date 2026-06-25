import Link from 'next/link';
import AwsStudySidebar from './AwsStudySidebar';
import { StageData } from './stageData';

type StageDetailPageProps = {
  stage: StageData;
};

type CertificationBadgeMeta = {
  code: string;
  korean: string;
  level: string;
  shortName: string;
};

const certificationBadgeMeta: Record<string, CertificationBadgeMeta> = {
  'AWS Certified Cloud Practitioner': {
    code: 'CLF-C02',
    korean: '클라우드 입문',
    level: 'FOUNDATIONAL',
    shortName: 'Cloud Practitioner',
  },
  'AWS Certified AI Practitioner': {
    code: 'AIF-C01',
    korean: 'AI 입문',
    level: 'FOUNDATIONAL',
    shortName: 'AI Practitioner',
  },
  'AWS Certified Solutions Architect - Associate': {
    code: 'SAA-C03',
    korean: '솔루션스 아키텍트',
    level: 'ASSOCIATE',
    shortName: 'Solutions Architect',
  },
  'AWS Certified Developer - Associate': {
    code: 'DVA-C02',
    korean: '개발자',
    level: 'ASSOCIATE',
    shortName: 'Developer',
  },
  'AWS Certified CloudOps Engineer - Associate': {
    code: 'SOA-C02',
    korean: '클라우드 운영 엔지니어',
    level: 'ASSOCIATE',
    shortName: 'CloudOps Engineer',
  },
  'AWS Certified Data Engineer - Associate': {
    code: 'DEA-C01',
    korean: '데이터 엔지니어',
    level: 'ASSOCIATE',
    shortName: 'Data Engineer',
  },
  'AWS Certified Machine Learning Engineer - Associate': {
    code: 'MLA-C01',
    korean: '머신러닝 엔지니어',
    level: 'ASSOCIATE',
    shortName: 'Machine Learning Engineer',
  },
  'AWS Certified Solutions Architect - Professional': {
    code: 'SAP-C02',
    korean: '고급 솔루션스 아키텍트',
    level: 'PROFESSIONAL',
    shortName: 'Solutions Architect',
  },
  'AWS Certified DevOps Engineer - Professional': {
    code: 'DOP-C02',
    korean: '데브옵스 엔지니어',
    level: 'PROFESSIONAL',
    shortName: 'DevOps Engineer',
  },
  'AWS Certified Generative AI Developer - Professional': {
    code: 'AIP-C01',
    korean: '생성형 AI 개발자',
    level: 'PROFESSIONAL',
    shortName: 'Generative AI Developer',
  },
  'AWS Certified Security - Specialty': {
    code: 'SCS-C02',
    korean: '보안',
    level: 'SPECIALTY',
    shortName: 'Security',
  },
  'AWS Certified Advanced Networking - Specialty': {
    code: 'ANS-C01',
    korean: '고급 네트워킹',
    level: 'SPECIALTY',
    shortName: 'Advanced Networking',
  },
};

const fallbackBadgeMeta: Record<StageData['key'], CertificationBadgeMeta> = {
  foundational: { code: 'AIF-C01', korean: '입문', level: 'FOUNDATIONAL', shortName: 'Practitioner' },
  associate: { code: 'ASSOCIATE', korean: '초급~중급 실무', level: 'ASSOCIATE', shortName: 'Associate' },
  professional: { code: 'PRO', korean: '고급 전문가', level: 'PROFESSIONAL', shortName: 'Professional' },
  specialty: { code: 'SPECIALTY', korean: '전문 분야', level: 'SPECIALTY', shortName: 'Specialty' },
};

function slugifyCertification(name: string) {
  return name
    .replace(/^AWS Certified /, '')
    .replace(/ - /g, ' ')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getBadgeMeta(stage: StageData, certName: string) {
  if (certName.includes('Machine Learning')) {
    return {
      code: 'MLS-C01',
      korean: '머신러닝',
      level: stage.key === 'specialty' ? 'SPECIALTY' : 'ASSOCIATE',
      shortName: 'Machine Learning',
    };
  }

  return certificationBadgeMeta[certName] ?? fallbackBadgeMeta[stage.key];
}

const stageIntro: Record<StageData['key'], string[][]> = {
  foundational: [
    ['레벨', 'Foundational · 입문'],
    ['대표 자격증', 'AWS Certified Cloud Practitioner / AWS Certified AI Practitioner'],
    ['시험 코드', 'CLF-C02 / AIF-C01'],
    ['대표 비용', '100 USD'],
    ['대표 시험시간', '90분'],
    ['대표 문항 수', '65문항'],
  ],
  associate: [
    ['레벨', 'Associate · 초급~중급 실무'],
    ['대표 자격증', 'Solutions Architect, Developer, CloudOps, Data Engineer, Machine Learning Engineer'],
    ['대표 시험 코드', 'SAA-C03 / DVA-C02 / SOA-C02 / DEA-C01 / MLA-C01'],
    ['대표 비용', '150 USD'],
    ['대표 시험시간', '약 130분'],
    ['대표 문항 수', '보통 65문항'],
  ],
  professional: [
    ['레벨', 'Professional · 고급/전문가'],
    ['대표 자격증', 'Solutions Architect Professional / DevOps Engineer Professional / Generative AI Developer Professional'],
    ['대표 시험 코드', 'SAP-C02 / DOP-C02 / AIP-C01'],
    ['대표 비용', '300 USD'],
    ['대표 시험시간', '약 180분'],
    ['대표 문항 수', '보통 75문항'],
  ],
  specialty: [
    ['레벨', 'Specialty · 특화/전문 분야'],
    ['대표 자격증', 'Security Specialty / Advanced Networking Specialty / Machine Learning 전문 영역'],
    ['대표 시험 코드', 'SCS-C02 / ANS-C01 / MLS-C01'],
    ['대표 비용', '300 USD'],
    ['대표 시험시간', '약 170분'],
    ['대표 문항 수', '보통 65문항'],
  ],
};

export default function StageDetailPage({ stage }: StageDetailPageProps) {
  const overviewRows = [...stageIntro[stage.key], ...stage.overview];

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
        <p className="eyebrow">{stage.eyebrow}</p>
        <h1>{stage.title}</h1>
        <p>{stage.description}</p>
      </section>

      <section className="awsLayout">
        <AwsStudySidebar current={stage.key} />

        <div className="awsContent">
          <section className="learningBlock" id="overview">
            <div className="sectionTitle compact">
              <p className="eyebrow">Overview</p>
              <h2>자격증 소개</h2>
            </div>
            <div className="infoTable">
              {overviewRows.map(([label, value], index) => (
                <div key={`${label}-${index}`}>
                  <strong>{label}</strong>
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="learningBlock" id="certifications">
            <div className="sectionTitle compact">
              <p className="eyebrow">Certifications</p>
              <h2>자격증별 학습 내용</h2>
            </div>
            <div className="certDetailGrid">
              {stage.certifications.map((cert) => {
                const badge = getBadgeMeta(stage, cert.name);

                return (
                <article className="certDetailCard" id={slugifyCertification(cert.name)} key={cert.name}>
                  <div className="certDetailTop">
                    <div className="certBadgeItem compactCertBadge">
                      <span className="certBadgeCode">{badge.code}</span>
                      <div className={`certBadge ${badge.shortName.includes(' ') ? 'certBadgeLong' : ''}`}>
                        <span className="certBadgeBrand">
                          <b>aws</b>
                          <i>certified</i>
                        </span>
                        <strong>{badge.shortName}</strong>
                        <em>{badge.level}</em>
                      </div>
                      <span className="certBadgeCaption">{badge.korean}</span>
                    </div>
                    <div className="certDetailSummary">
                      <span className="subjectOrder">{cert.role}</span>
                      <h3>{cert.name}</h3>
                      <p>{cert.exam} · {cert.cost} · {cert.time} · {cert.questions}</p>
                    </div>
                  </div>
                  <strong className="cardAction">핵심 범위</strong>
                  <ul>
                    {cert.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <strong className="cardAction">공부 포인트</strong>
                  <p>{cert.study.join(' / ')}</p>
                </article>
                );
              })}
            </div>
          </section>

          <section className="learningBlock" id="order">
            <div className="sectionTitle compact">
              <p className="eyebrow">Study Roadmap</p>
              <h2>학습 로드맵</h2>
            </div>
            <div className="simpleList">
              {stage.order.map(([step, title, content], index) => (
                <div key={`${step}-${index}`}>
                  <strong>{step}: {title}</strong>
                  <span>{content}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="learningBlock" id="question-types">
            <div className="sectionTitle compact">
              <p className="eyebrow">Question Types</p>
              <h2>문제유형</h2>
            </div>
            <div className="typeGrid">
              {stage.questionTypes.map(([title, content], index) => (
                <article className="typeCard" key={`${title}-${index}`}>
                  <strong>{title}</strong>
                  <p>{content}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
