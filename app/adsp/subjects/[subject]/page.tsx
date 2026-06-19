import Link from 'next/link';
import { notFound } from 'next/navigation';
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
      <header className="topbar">
        <Link className="brand" href="/">
          Data Lab
        </Link>
        <nav className="globalNav" aria-label="학습 트랙">
          <Link className="activeTrack" href="/adsp">ADsP</Link>
          <Link href="/#sql">SQL</Link>
          <Link href="/aws">AWS</Link>
          <Link href="/buc">부과대</Link>
        </nav>
        <Link className="loginButton linkButton" href="/adsp#summary">
          과목 목록
        </Link>
      </header>

      <nav className="trackNav" aria-label="ADsP 세부 메뉴">
        <Link href="/adsp#dashboard">대시보드</Link>
        <Link href="/adsp#intro">소개</Link>
        <Link href="/adsp#summary">과목별 핵심요약</Link>
        <Link href="/adsp#questions">문제유형 정리</Link>
        <Link href="/adsp#study">학습관리</Link>
      </nav>

      <section className="subjectHero">
        <p className="eyebrow">ADsP Subject Notes</p>
        <h1>
          {subject.order} {subject.title}
        </h1>
        <p>{subject.description}</p>
      </section>

      <section className="subjectLayout">
        <aside className="subjectSidebar" aria-label="과목별 학습 목차">
          <strong>과목별 학습 목차</strong>
          <nav className="subjectNav">
            {subjectDetails.map((navSubject) => {
              const isCurrentSubject = navSubject.slug === subject.slug;

              return (
                <div className="subjectNavGroup" key={navSubject.slug}>
                  <Link
                    className={isCurrentSubject ? 'subjectNavTitle currentSubject' : 'subjectNavTitle'}
                    href={`/adsp/subjects/${navSubject.slug}`}
                  >
                    <span>{navSubject.order}</span>
                    <strong>{navSubject.title}</strong>
                  </Link>
                  <div className="subjectNavItems">
                    {navSubject.categories.map((category) => (
                      <Link
                        className={isCurrentSubject ? 'currentSubjectItem' : undefined}
                        href={
                          isCurrentSubject
                            ? `#${category.id}`
                            : `/adsp/subjects/${navSubject.slug}#${category.id}`
                        }
                        key={category.id}
                      >
                        {category.title}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>
        </aside>

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
