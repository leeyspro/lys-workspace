import Link from 'next/link';
import { subjectDetails } from './subjects/subjects-data';

type AdspSidebarProps = {
  activeSubjectSlug?: string;
};

export default function AdspSidebar({ activeSubjectSlug }: AdspSidebarProps) {
  return (
    <aside className="subjectSidebar" aria-label="ADsP 학습 메뉴">
      <strong>ADsP 학습 메뉴</strong>
      <nav className="subjectNav">
        <div className="subjectNavGroup">
          <Link className="subjectNavTitle currentSubject" href="/adsp#dashboard">
            <span>Dashboard</span>
            <strong>Dashboard</strong>
          </Link>
          <div className="subjectNavItems">
            <Link href="/adsp#intro">ADsP 소개</Link>
            <Link href="/adsp#questions">문제유형 정리</Link>
            <Link href="/adsp#study">학습관리</Link>
            <Link href="/adsp#faq">FAQ</Link>
          </div>
        </div>

        <div className="subjectNavGroup">
          <a className="subjectNavTitle" href="/adsp#summary">
            <span>Subject Notes</span>
            <strong>과목별 학습</strong>
          </a>
          {subjectDetails.map((navSubject) => {
            const isCurrentSubject = navSubject.slug === activeSubjectSlug;

            return (
              <div className="subjectNavGroup nestedSubjectGroup" key={navSubject.slug}>
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
        </div>
      </nav>
    </aside>
  );
}
