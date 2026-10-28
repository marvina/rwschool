import { useState, type ReactNode } from "react"

const heroImage =
  "https://images.unsplash.com/photo-1741638811543-41f234ef1aad?auto=format&fit=crop&w=2200&q=88"
const studioImage =
  "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?auto=format&fit=crop&w=1400&q=86"
const galleryImage =
  "https://images.unsplash.com/photo-1769284012089-14765f328786?auto=format&fit=crop&w=1400&q=86"

type IconName = "arrow" | "calendar" | "search" | "menu" | "close" | "book" | "people" | "museum" | "palette" | "chevron" | "location" | "mail"

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    calendar: (
      <>
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m6 6 12 12M18 6 6 18" />
      </>
    ),
    book: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    people: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
    museum: (
      <>
        <path d="m3 10 9-6 9 6" />
        <path d="M5 10v9M9 10v9M15 10v9M19 10v9M3 20h18" />
      </>
    ),
    palette: (
      <>
        <path d="M12 22a10 10 0 1 1 10-10c0 2.2-1.8 4-4 4h-1.8a2 2 0 0 0-1.7 3l.15.25A1.83 1.83 0 0 1 13.1 22Z" />
        <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="10.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="14.5" cy="7.5" r=".5" fill="currentColor" />
        <circle cx="16.5" cy="11.5" r=".5" fill="currentColor" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    location: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6"
    >
      {paths[name]}
    </svg>
  )
}

const navItems = [
  ["学院概况", "About"],
  ["专业设置", "Academics"],
  ["师资队伍", "Faculty"],
  ["教学与课程", "Teaching"],
  ["学术研究", "Research"],
  ["动态公告", "News"],
  ["招生育人", "Admissions"],
]

const news = [
  {
    day: "18",
    month: "03月",
    tag: "学院要闻",
    title: "学院召开2025年度学科建设与人才培养工作推进会",
    excerpt: "聚焦优势学科发展，深化艺科融合，持续推动学院内涵式高质量发展。",
  },
  {
    day: "14",
    month: "03月",
    tag: "学术动态",
    title: "创意大讲堂｜中国民艺的当代转化与国际表达",
    excerpt: "特邀知名学者围绕民间艺术的当代价值与创新路径展开深度对话。",
  },
  {
    day: "10",
    month: "03月",
    tag: "荣誉成果",
    title: "我院师生作品在全国大学生广告艺术大赛中再获佳绩",
    excerpt: "共获国家级奖项27项，以创意实践彰显卓越育人成果。",
  },
]

const programs = [
  { no: "01", name: "艺术设计学", note: "软科 A+ · 国家级一流本科专业" },
  { no: "02", name: "艺术史论", note: "国家级一流本科专业" },
  { no: "03", name: "文化产业管理", note: "国家级一流本科专业" },
  { no: "04", name: "美术学", note: "国家级特色专业" },
  { no: "05", name: "非物质文化遗产保护", note: "山东省首批非遗本科专业" },
  { no: "06", name: "文物保护与修复", note: "省级实验教学示范中心依托" },
  { no: "07", name: "广告策划与管理", note: "省级一流本科专业建设点" },
  { no: "08", name: "公共艺术史论教研室", note: "跨学科虚拟教研室" },
]

function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string
  title: string
  light?: boolean
}) {
  return (
    <div className={`section-heading ${light ? "section-heading--light" : ""}`}>
      <span>{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="site-shell">
      <header className="header">
        <div className="utility-bar">
          <div className="container utility-inner">
            <span>人文为本 · 艺术为用 · 创意为先</span>
            <div>
              <a href="#admissions">招生信息</a>
              <a href="#footer">联系我们</a>
              <a href="#en">EN</a>
            </div>
          </div>
        </div>
        <div className="container brand-row">
          <a className="brand" href="#top" aria-label="人文艺术学院首页">
            <img
              className="brand-logo"
              src="./college-logo.png"
              alt="人文艺术学院 School of Arts And Humanities, SUAD"
            />
          </a>
          <div className="header-tools">
            <button
              className="icon-button"
              aria-label="搜索"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <Icon name="search" />
            </button>
            <button
              className="icon-button menu-button"
              aria-label="打开导航"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
        <nav className={`main-nav ${menuOpen ? "is-open" : ""}`}>
          <div className="container nav-inner">
            <a
              className="active"
              href="#top"
              onClick={() => setMenuOpen(false)}
            >
              首页
            </a>
            {navItems.map(([cn, en]) => (
              <a
                href={`#${en.toLowerCase()}`}
                key={cn}
                onClick={() => setMenuOpen(false)}
              >
                <span>{cn}</span>
                <small>{en}</small>
              </a>
            ))}
          </div>
        </nav>
        {searchOpen && (
          <div className="search-panel">
            <div className="container search-inner">
              <label htmlFor="site-search">站内搜索</label>
              <input
                id="site-search"
                autoFocus
                placeholder="输入关键词，搜索学院资讯"
              />
              <button aria-label="提交搜索">
                <Icon name="arrow" />
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="hero">
          <img src={heroImage} alt="现代艺术学院建筑与展览空间" />
          <div className="hero-overlay" />
          <div className="hero-line" />
          <div className="container hero-content">
            <p className="hero-kicker">HUMANITIES · ARTS · INNOVATION</p>
            <h1>
              以人文观照时代
              <br />
              <em>以艺术创造未来</em>
            </h1>
            <p className="hero-copy">
              立足深厚人文传统，连接艺术、设计与文化产业，
              <br className="desktop-only" />
              培养具有文化自觉、创新能力和国际视野的卓越人才。
            </p>
            <div className="hero-actions">
              <a className="button button--primary" href="#about">
                走进学院 <Icon name="arrow" />
              </a>
              <a className="text-link" href="#academics">
                探索专业设置 <Icon name="arrow" />
              </a>
            </div>
          </div>
          <div className="hero-pagination">
            <strong>01</strong>
            <span />
            <small>03</small>
          </div>
          <div className="hero-caption">学院展览与公共艺术空间</div>
        </section>

        <section className="ticker" aria-label="重要通知">
          <div className="container ticker-inner">
            <span className="ticker-label">通知</span>
            <a href="#notices">
              2025年硕士研究生招生复试工作安排
              <small>2025.03.20</small>
            </a>
            <a className="ticker-more" href="#news">
              查看全部 <Icon name="arrow" size={17} />
            </a>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-grid">
            <div>
              <SectionHeading
                eyebrow="ABOUT THE SCHOOL"
                title="深植人文沃土，塑造艺术新知"
              />
              <p className="lead">
                学院坚持“人文引领、艺科融合、实践创新”的办学理念，构建涵盖艺术理论、设计创新、文化管理与遗产保护的多元学科生态。
              </p>
              <p className="body-copy">
                我们以国家一流专业与课程建设为牵引，以高水平师资和科研平台为支撑，让传统文化在当代语境中焕发新生，让艺术教育回应社会与时代的真实命题。
              </p>
              <a className="underlined-link" href="#about-more">
                了解学院概况 <Icon name="arrow" />
              </a>
            </div>
            <div className="stats" aria-label="学院数据">
              <div>
                <strong>
                  30<sup>+</sup>
                </strong>
                <span>年办学积淀</span>
              </div>
              <div>
                <strong>
                  7<sup>个</sup>
                </strong>
                <span>特色本科专业</span>
              </div>
              <div>
                <strong>
                  5<sup>个</sup>
                </strong>
                <span>国家级一流专业</span>
              </div>
              <div>
                <strong>
                  60<sup>+</sup>
                </strong>
                <span>高水平专任教师</span>
              </div>
            </div>
          </div>
        </section>

        <section className="news-section section" id="news">
          <div className="container">
            <div className="section-top">
              <SectionHeading eyebrow="NEWS & EVENTS" title="学院动态" />
              <a className="underlined-link" href="#news-all">
                查看全部动态 <Icon name="arrow" />
              </a>
            </div>
            <div className="news-grid">
              <article className="featured-news">
                <div className="featured-image">
                  <img src={studioImage} alt="艺术专业学生在工作室创作" />
                  <span>特别报道</span>
                </div>
                <div className="featured-content">
                  <p className="meta">2025.03.22 · 人才培养</p>
                  <h3>让创意扎根文化：学院“新文科”人才培养的探索与实践</h3>
                  <p>
                    打破学科边界，将理论研究、艺术创作与产业实践融入真实项目，在知行合一中培育新时代艺术人才。
                  </p>
                  <a href="#story" aria-label="阅读特别报道">
                    <Icon name="arrow" />
                  </a>
                </div>
              </article>
              <div className="news-list">
                {news.map((item) => (
                  <article className="news-item" key={item.title}>
                    <time>
                      <strong>{item.day}</strong>
                      <span>{item.month}</span>
                    </time>
                    <div>
                      <span className="tag">{item.tag}</span>
                      <h3>{item.title}</h3>
                      <p>{item.excerpt}</p>
                    </div>
                    <a href="#detail" aria-label={`阅读：${item.title}`}>
                      <Icon name="chevron" />
                    </a>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="academics section" id="academics">
          <div className="container">
            <div className="section-top">
              <SectionHeading
                eyebrow="ACADEMIC PROGRAMS"
                title="以专业回应时代命题"
                light
              />
              <p>
                构建艺术理论、创意设计、文化管理与遗产保护
                <br />
                交叉融通的特色专业体系
              </p>
            </div>
            <div className="program-grid">
              {programs.map((program) => (
                <a className="program-card" href="#program" key={program.no}>
                  <span>{program.no}</span>
                  <div>
                    <h3>{program.name}</h3>
                    <p>{program.note}</p>
                  </div>
                  <Icon name="arrow" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="strength section" id="teaching">
          <div className="container">
            <div className="section-top">
              <SectionHeading eyebrow="TEACHING & RESEARCH" title="教学科研" />
              <p className="body-copy">
                以一流课程夯实育人根基，以前沿研究拓展学术边界，
                <br />
                推动优秀文化成果创造性转化。
              </p>
            </div>
            <div className="strength-grid">
              <a className="strength-card" href="#courses">
                <Icon name="book" size={29} />
                <span>01</span>
                <h3>一流课程</h3>
                <p>国家级、省级线上线下金课与自主教材体系</p>
                <b>
                  探索课程体系 <Icon name="arrow" size={18} />
                </b>
              </a>
              <a className="strength-card" href="#faculty">
                <Icon name="people" size={29} />
                <span>02</span>
                <h3>名师团队</h3>
                <p>汇聚领军人才、泰山学者与行业创新导师</p>
                <b>
                  认识我们的教师 <Icon name="arrow" size={18} />
                </b>
              </a>
              <a className="strength-card" href="#research">
                <Icon name="museum" size={29} />
                <span>03</span>
                <h3>文化研究</h3>
                <p>国家社科重大项目与标志性教材专著成果</p>
                <b>
                  走进学术研究 <Icon name="arrow" size={18} />
                </b>
              </a>
              <a className="strength-card" href="#practice">
                <Icon name="palette" size={29} />
                <span>04</span>
                <h3>实验实践</h3>
                <p>六大实验室与多层次产学研实践基地</p>
                <b>
                  了解实践平台 <Icon name="arrow" size={18} />
                </b>
              </a>
            </div>
          </div>
        </section>

        <section className="research-feature" id="research">
          <div className="feature-image">
            <img src={galleryImage} alt="学院艺术展览作品陈列" />
          </div>
          <div className="feature-copy">
            <span className="feature-no">01 / 03</span>
            <p className="eyebrow">RESEARCH HIGHLIGHT</p>
            <h2>传统民艺的当代新生</h2>
            <p>
              从乡土田野到当代生活，学院研究团队持续推进中国民间艺术的系统整理、学理阐释与创新设计，构建具有本土特色的艺术学知识体系。
            </p>
            <div className="feature-tags">
              <span>民艺研究</span>
              <span>非遗保护</span>
              <span>设计转化</span>
            </div>
            <a className="button button--dark" href="#research-more">
              查看研究成果 <Icon name="arrow" />
            </a>
          </div>
        </section>

        <section className="admissions section" id="admissions">
          <div className="admissions-pattern" />
          <div className="container admissions-inner">
            <div>
              <p className="eyebrow">JOIN OUR COMMUNITY</p>
              <h2>在这里，遇见更广阔的艺术世界</h2>
              <p>与我们一起，在人文与艺术的交汇处发现、创造、成长。</p>
            </div>
            <div className="admission-actions">
              <a className="button button--light" href="#undergraduate">
                本科生招生 <Icon name="arrow" />
              </a>
              <a className="button button--outline" href="#graduate">
                研究生教育 <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer" id="footer">
        <div className="container footer-grid">
          <div>
            <a className="brand brand--footer" href="#top">
              <img
                className="brand-logo"
                src="./college-logo.png"
                alt="人文艺术学院 School of Arts And Humanities, SUAD"
              />
            </a>
            <p>崇德 · 尚艺 · 笃学 · 创新</p>
          </div>
          <div className="footer-links">
            <div>
              <strong>快速链接</strong>
              <a href="#about">学院概况</a>
              <a href="#academics">专业设置</a>
              <a href="#faculty">师资队伍</a>
              <a href="#news">动态公告</a>
            </div>
            <div>
              <strong>公共服务</strong>
              <a href="#calendar">活动日历</a>
              <a href="#download">资料下载</a>
              <a href="#jobs">人才招聘</a>
              <a href="#alumni">校友之家</a>
            </div>
          </div>
          <div className="footer-contact">
            <strong>联系我们</strong>
            <p>
              <Icon name="location" size={18} /> 山东省济南市大学路1号
              人文艺术学院
            </p>
            <p>
              <Icon name="mail" size={18} /> sha_office@university.edu.cn
            </p>
            <p>
              <Icon name="calendar" size={18} /> 0531-8888 6666
            </p>
          </div>
        </div>
        <div className="container copyright">
          <span>© 2025 人文艺术学院 版权所有</span>
          <span>鲁ICP备00000000号</span>
        </div>
      </footer>
    </div>
  )
}
