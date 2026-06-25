import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteHeader from '../../../SiteHeader';
import AdspSidebar from '../../AdspSidebar';
import { getSubjectDetail, subjectDetails } from '../subjects-data';

type SubjectPageProps = {
  params: Promise<{
    subject: string;
  }>;
};

export function generateStaticParams() {
  return subjectDetails.map((subject) => ({
    subject: subject.slug,
  }));
}

export async function generateMetadata({ params }: SubjectPageProps) {
  const { subject: slug } = await params;
  const subject = getSubjectDetail(slug);

  if (!subject) {
    return {
      title: '과목을 찾을 수 없음',
    };
  }

  return {
    title: `${subject.order} ${subject.title} | Data Lab`,
    description: subject.description,
  };
}

export default async function SubjectPage({ params }: SubjectPageProps) {
  const { subject: slug } = await params;
  const subject = getSubjectDetail(slug);

  if (!subject) {
    notFound();
  }

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
        </nav>
        <Link className="loginButton linkButton" href="/adsp#summary">
          과목 목록
        </Link>
      </header>

      <nav className="trackNav" aria-label="ADsP 세부 메뉴">
        <Link href="/adsp#dashboard">Dashboard</Link>
        <Link href="/adsp#summary">과목별 학습</Link>
      </nav>

      */}

      <section className="subjectHero">
        <p className="eyebrow">ADsP Subject Notes</p>
        <h1>
          {subject.order} {subject.title}
        </h1>
        <p>{subject.description}</p>
      </section>

      <section className="subjectLayout">
        <AdspSidebar activeSubjectSlug={subject.slug} />

        <div className="subjectContent">
          {subject.categories.map((category) => (
            <article className="learningBlock" id={category.id} key={category.id}>
              <div className="learningHeader">
                <span>{subject.order}</span>
                <h2>{category.title}</h2>
                <p>{category.summary}</p>
              </div>

              <div className="learningGrid">
                <section>
                  <h3>학습 목표</h3>
                  <ul>
                    {category.goals.map((goal) => (
                      <li key={goal}>{goal}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h3>핵심 포인트</h3>
                  <ul>
                    {category.keyPoints.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <div className="examFocus">
                <strong>출제 포인트</strong>
                <p>{category.examFocus}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
