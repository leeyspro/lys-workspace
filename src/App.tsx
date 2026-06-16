type Service = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: '디지털 전략 컨설팅',
    description: '비즈니스 목표에 맞춘 제품 로드맵과 실행 가능한 성장 전략을 설계합니다.',
  },
  {
    title: '웹 서비스 구축',
    description: '안정적인 프론트엔드와 확장 가능한 아키텍처로 고객 경험을 빠르게 구현합니다.',
  },
  {
    title: '운영 자동화',
    description: '반복 업무를 줄이고 데이터 기반 의사결정을 돕는 업무 자동화 시스템을 만듭니다.',
  },
];

function App() {
  return (
    <div className="site">
      <header className="header">
        <a className="logo" href="#home" aria-label="NovaWorks 홈">
          NovaWorks
        </a>
        <nav className="nav" aria-label="주요 메뉴">
          <a href="#services">서비스</a>
          <a href="#contact">문의하기</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="heroContent">
            <p className="eyebrow">Strategy · Product · Automation</p>
            <h1>비즈니스의 다음 단계를 만드는 디지털 파트너</h1>
            <p className="heroText">
              NovaWorks는 기업의 아이디어를 실용적인 디지털 제품과 효율적인 운영 시스템으로
              전환하는 기술 컨설팅 회사입니다.
            </p>
            <a className="primaryButton" href="#contact">
              프로젝트 문의
            </a>
          </div>
          <div className="heroPanel" aria-label="회사 핵심 지표">
            <div>
              <strong>42+</strong>
              <span>완료 프로젝트</span>
            </div>
            <div>
              <strong>98%</strong>
              <span>고객 재협업률</span>
            </div>
            <div>
              <strong>12주</strong>
              <span>평균 MVP 구축</span>
            </div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="sectionHeading">
            <p className="eyebrow">Our Services</p>
            <h2>성장을 현실로 만드는 서비스</h2>
          </div>
          <div className="serviceGrid">
            {services.map((service) => (
              <article className="serviceCard" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>새 프로젝트를 함께 시작해볼까요?</h2>
            <p>
              간단한 아이디어부터 구체적인 제품 기획까지 편하게 남겨주세요. 영업일 기준 1일
              이내에 연락드리겠습니다.
            </p>
          </div>
          <form className="contactForm">
            <label>
              이름
              <input type="text" name="name" placeholder="홍길동" />
            </label>
            <label>
              이메일
              <input type="email" name="email" placeholder="hello@example.com" />
            </label>
            <label>
              문의 내용
              <textarea name="message" rows={5} placeholder="프로젝트에 대해 알려주세요." />
            </label>
            <button type="submit">문의 보내기</button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
