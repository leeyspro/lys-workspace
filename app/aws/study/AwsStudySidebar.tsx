'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, type SyntheticEvent } from 'react';

type SidebarCurrent =
  | 'study'
  | 'foundational'
  | 'associate'
  | 'professional'
  | 'specialty'
  | 'cloud-detail'
  | 'cloud-plan'
  | 'ai-detail'
  | 'ai-plan';

type AwsStudySidebarProps = {
  current: SidebarCurrent;
};

type OpenSection =
  | 'levels'
  | 'foundational'
  | 'cloud'
  | 'cloudPlan'
  | 'ai'
  | 'aiPlan'
  | 'associate'
  | 'professional'
  | 'specialty'
  | 'registration';

type OpenSections = Record<OpenSection, boolean>;

const isFoundationalOpen = (current: SidebarCurrent) =>
  ['foundational', 'cloud-detail', 'cloud-plan', 'ai-detail', 'ai-plan'].includes(current);
const isCloudOpen = (current: SidebarCurrent) => ['cloud-detail', 'cloud-plan'].includes(current);
const isAiOpen = (current: SidebarCurrent) => ['ai-detail', 'ai-plan'].includes(current);

const closedSections: OpenSections = {
  levels: true,
  foundational: false,
  cloud: false,
  cloudPlan: false,
  ai: false,
  aiPlan: false,
  associate: false,
  professional: false,
  specialty: false,
  registration: false,
};

const openSectionsForCurrent = (current: SidebarCurrent): OpenSections => ({
  ...closedSections,
  foundational: isFoundationalOpen(current),
  cloud: isCloudOpen(current),
  cloudPlan: current === 'cloud-plan',
  ai: isAiOpen(current),
  aiPlan: current === 'ai-plan',
  associate: current === 'associate',
  professional: current === 'professional',
  specialty: current === 'specialty',
});

const defaultHrefByCurrent: Record<SidebarCurrent, string> = {
  study: '/aws/study#roadmap',
  foundational: '/aws/study/foundational#overview',
  associate: '/aws/study/associate#overview',
  professional: '/aws/study/professional#overview',
  specialty: '/aws/study/specialty#overview',
  'cloud-detail': '/aws/study/cloud-practitioner#overview',
  'cloud-plan': '/aws/study/cloud-practitioner/study-plan#study-method',
  'ai-detail': '/aws/study/ai-practitioner#overview',
  'ai-plan': '/aws/study/ai-practitioner/study-plan#study-method',
};

export default function AwsStudySidebar({ current }: AwsStudySidebarProps) {
  const pathname = usePathname();
  const [activeHref, setActiveHref] = useState(defaultHrefByCurrent[current]);
  const [activeSection, setActiveSection] = useState<OpenSection | null>(null);
  const [openSections, setOpenSections] = useState<OpenSections>(() => openSectionsForCurrent(current));

  useEffect(() => {
    setOpenSections((previous) => {
      if (current === 'study') {
        return closedSections;
      }

      const currentOpenSections = openSectionsForCurrent(current);
      const newlyOpened = Object.fromEntries(
        Object.entries(currentOpenSections).filter(([, isOpen]) => isOpen),
      ) as Partial<OpenSections>;

      return { ...previous, ...newlyOpened };
    });
  }, [current]);

  useEffect(() => {
    const syncActiveHref = () => {
      const hash = window.location.hash;
      setActiveHref(hash ? `${window.location.pathname}${hash}` : defaultHrefByCurrent[current]);
    };

    syncActiveHref();
    window.addEventListener('hashchange', syncActiveHref);
    window.addEventListener('popstate', syncActiveHref);

    return () => {
      window.removeEventListener('hashchange', syncActiveHref);
      window.removeEventListener('popstate', syncActiveHref);
    };
  }, [current, pathname]);

  const linkClass = (href: string) => `sidebarLink ${activeHref === href ? 'activeTreeLink' : ''}`;
  const linkProps = (href: string) => ({
    className: linkClass(href),
    href,
    onClick: () => {
      setActiveHref(href);
      setActiveSection(null);
    },
  });

  const detailProps = (section: OpenSection) => ({
    open: openSections[section],
    onToggle: (event: SyntheticEvent<HTMLDetailsElement>) => {
      const isOpen = event.currentTarget.open;
      setOpenSections((previous) => ({ ...previous, [section]: isOpen }));
      if (isOpen) {
        setActiveSection(section);
      }
    },
  });

  const summaryClass = (section: OpenSection) => (activeSection === section ? 'activeTreeSummary' : undefined);

  return (
    <aside className="subjectSidebar" aria-label="AWS study navigation">
      <strong>AWS Study Map</strong>
      <nav className="sidebarTree">
        <details className="sidebarDisclosure" {...detailProps('levels')}>
          <summary className={summaryClass('levels')}>
            <Link href="/aws/study#roadmap" onClick={() => setActiveHref('/aws/study#roadmap')}>
              Certification Levels
            </Link>
          </summary>
          <div className="sidebarBranch">
            <details className="sidebarDisclosure nestedDisclosure" {...detailProps('foundational')}>
              <summary className={summaryClass('foundational')}>1. Foundational</summary>
              <div className="sidebarBranch nestedBranch">
                <Link {...linkProps('/aws/study/foundational#overview')}>Foundational Overview</Link>

                <details className="sidebarDisclosure nestedDisclosure" {...detailProps('cloud')}>
                  <summary className={summaryClass('cloud')}>Cloud Practitioner</summary>
                  <div className="sidebarBranch nestedBranch">
                    <Link {...linkProps('/aws/study/cloud-practitioner#overview')}>자격증 소개</Link>
                    <Link {...linkProps('/aws/study/cloud-practitioner#domains')}>학습 핵심</Link>
                    <Link {...linkProps('/aws/study/cloud-practitioner#order')}>학습 로드맵</Link>
                    <Link {...linkProps('/aws/study/cloud-practitioner#questions')}>문제유형</Link>

                    <details className="sidebarDisclosure nestedDisclosure" {...detailProps('cloudPlan')}>
                      <summary className={summaryClass('cloudPlan')}>
                        <Link
                          href="/aws/study/cloud-practitioner/study-plan#study-method"
                          onClick={() => setActiveHref('/aws/study/cloud-practitioner/study-plan#study-method')}
                        >
                          Study Plan
                        </Link>
                      </summary>
                      <div className="sidebarBranch nestedBranch">
                        <Link {...linkProps('/aws/study/cloud-practitioner/study-plan#step-1')}>1단계 Cloud Basics</Link>
                        <Link {...linkProps('/aws/study/cloud-practitioner/study-plan#step-2')}>2단계 Global Infra</Link>
                        <Link {...linkProps('/aws/study/cloud-practitioner/study-plan#step-3')}>3단계 Core Services</Link>
                        <Link {...linkProps('/aws/study/cloud-practitioner/study-plan#step-4')}>4단계 Security</Link>
                        <Link {...linkProps('/aws/study/cloud-practitioner/study-plan#step-5')}>5단계 Cost & Support</Link>
                      </div>
                    </details>
                  </div>
                </details>

                <details className="sidebarDisclosure nestedDisclosure" {...detailProps('ai')}>
                  <summary className={summaryClass('ai')}>AI Practitioner</summary>
                  <div className="sidebarBranch nestedBranch">
                    <Link {...linkProps('/aws/study/ai-practitioner#overview')}>자격증 소개</Link>
                    <Link {...linkProps('/aws/study/ai-practitioner#domains')}>학습 핵심</Link>
                    <Link {...linkProps('/aws/study/ai-practitioner#order')}>학습 로드맵</Link>
                    <Link {...linkProps('/aws/study/ai-practitioner#questions')}>문제유형</Link>

                    <details className="sidebarDisclosure nestedDisclosure" {...detailProps('aiPlan')}>
                      <summary className={summaryClass('aiPlan')}>
                        <Link
                          href="/aws/study/ai-practitioner/study-plan#study-method"
                          onClick={() => setActiveHref('/aws/study/ai-practitioner/study-plan#study-method')}
                        >
                          Study Plan
                        </Link>
                      </summary>
                      <div className="sidebarBranch nestedBranch">
                        <Link {...linkProps('/aws/study/ai-practitioner/study-plan#step-1')}>1단계 AI/ML Basics</Link>
                        <Link {...linkProps('/aws/study/ai-practitioner/study-plan#step-2')}>2단계 Generative AI</Link>
                        <Link {...linkProps('/aws/study/ai-practitioner/study-plan#step-3')}>3단계 AWS AI Services</Link>
                        <Link {...linkProps('/aws/study/ai-practitioner/study-plan#step-4')}>4단계 RAG & Agents</Link>
                        <Link {...linkProps('/aws/study/ai-practitioner/study-plan#step-5')}>5단계 Governance</Link>
                      </div>
                    </details>
                  </div>
                </details>
              </div>
            </details>

            <details className="sidebarDisclosure nestedDisclosure" {...detailProps('associate')}>
              <summary className={summaryClass('associate')}>2. Associate</summary>
              <div className="sidebarBranch nestedBranch">
                <Link {...linkProps('/aws/study/associate#overview')}>자격증 소개</Link>
                <Link {...linkProps('/aws/study/associate#certifications')}>학습 핵심</Link>
                <Link {...linkProps('/aws/study/associate#order')}>학습 로드맵</Link>
                <Link {...linkProps('/aws/study/associate#question-types')}>문제유형</Link>
              </div>
            </details>

            <details className="sidebarDisclosure nestedDisclosure" {...detailProps('professional')}>
              <summary className={summaryClass('professional')}>3. Professional</summary>
              <div className="sidebarBranch nestedBranch">
                <Link {...linkProps('/aws/study/professional#overview')}>자격증 소개</Link>
                <Link {...linkProps('/aws/study/professional#certifications')}>학습 핵심</Link>
                <Link {...linkProps('/aws/study/professional#order')}>학습 로드맵</Link>
                <Link {...linkProps('/aws/study/professional#question-types')}>문제유형</Link>
              </div>
            </details>

            <details className="sidebarDisclosure nestedDisclosure" {...detailProps('specialty')}>
              <summary className={summaryClass('specialty')}>4. Specialty</summary>
              <div className="sidebarBranch nestedBranch">
                <Link {...linkProps('/aws/study/specialty#overview')}>자격증 소개</Link>
                <Link {...linkProps('/aws/study/specialty#certifications')}>학습 핵심</Link>
                <Link {...linkProps('/aws/study/specialty#order')}>학습 로드맵</Link>
                <Link {...linkProps('/aws/study/specialty#question-types')}>문제유형</Link>
              </div>
            </details>
          </div>
        </details>

        <details className="sidebarDisclosure" {...detailProps('registration')}>
          <summary className={summaryClass('registration')}>시험 준비</summary>
          <div className="sidebarBranch">
            <Link {...linkProps('/aws/study#registration')}>시험 응시 가이드</Link>
          </div>
        </details>
      </nav>
    </aside>
  );
}
