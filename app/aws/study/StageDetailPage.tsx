import Link from 'next/link';
import AwsStudySidebar from './AwsStudySidebar';
import { StageData } from './stageData';

type StageDetailPageProps = {
  stage: StageData;
};

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
          <Link href="/adsp">ADsP</Link>
          <Link href="/#sql">SQL</Link>
          <Link className="activeTrack" href="/aws">AWS</Link>
          <Link href="/buc">부과대</Link>
        </nav>
        <Link className="loginButton linkButton" href="/aws/study">AWS 학습</Link>
      </header>

      <nav className="trackNav" aria-label="AWS 내부 메뉴">
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
              {overviewRows.map(([label, value]) => (
                <div key={label}>
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
            <div className="summaryGrid">
              {stage.certifications.map((cert) => (
                <article className="summaryCard" key={cert.name}>
                  <span className="subjectOrder">{cert.role}</span>
                  <h3>{cert.name}</h3>
                  <p>{cert.exam} · {cert.cost} · {cert.time} · {cert.questions}</p>
                  <strong className="cardAction">핵심 범위</strong>
                  <ul>
                    {cert.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <strong className="cardAction">공부 포인트</strong>
                  <p>{cert.study.join(' / ')}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="learningBlock" id="order">
            <div className="sectionTitle compact">
              <p className="eyebrow">Study Order</p>
              <h2>추천 공부 순서</h2>
            </div>
            <div className="simpleList">
              {stage.order.map(([step, title, content]) => (
                <div key={step}>
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
              {stage.questionTypes.map(([title, content]) => (
                <article className="typeCard" key={title}>
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
