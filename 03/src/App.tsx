import { useState, type ReactNode } from "react"

const images = {
  campus:
    "./hero-exhibition.jpg",
  studio:
    "https://images.unsplash.com/photo-1447758902204-48010b87c24d?auto=format&fit=crop&w=1600&q=86",
  seminar:
    "https://images.unsplash.com/photo-1541665234574-8e72eb7cd028?auto=format&fit=crop&w=1600&q=86",
  exhibition:
    "https://images.unsplash.com/photo-1764726331674-2301932854d6?auto=format&fit=crop&w=1600&q=86",
}

type IconName = "arrow" | "menu" | "close" | "search" | "plus"

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M4 12h16" />
        <path d="m14 6 6 6-6 6" />
      </>
    ),
    menu: <path d="M3 7h18M3 17h18" />,
    close: <path d="m5 5 14 14M19 5 5 19" />,
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m16 16 5 5" />
      </>
    ),
    plus: <path d="M12 4v16M4 12h16" />,
  }

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="square"
      strokeWidth="1.5"
    >
      {paths[name]}
    </svg>
  )
}

const nav = [
  ["学院概况", "About"],
  ["专业设置", "Academics"],
  ["师资队伍", "Faculty"],
  ["教学与课程", "Teaching"],
  ["学术研究", "Research"],
  ["动态与公告", "News"],
  ["招生与育人", "Admissions"],
]

const programs = [
  ["01", "艺术设计学", "Design Studies", "软科 A+ / 国家级一流本科专业"],
  ["02", "艺术史论", "Art History & Theory", "国家级一流本科专业"],
  ["03", "文化产业管理", "Cultural Management", "国家级一流本科专业"],
  ["04", "美术学", "Fine Arts", "国家级特色专业"],
  ["05", "非物质文化遗产保护", "Intangible Heritage", "山东省首批非遗本科专业"],
  ["06", "文物保护与修复", "Conservation", "省级实验教学示范中心依托"],
  ["07", "广告策划与管理", "Creative Advertising", "省级一流本科专业建设点"],
  ["08", "公共艺术史论教研室", "Public Art Studies", "跨学科虚拟教研室"],
]

const stories = [
  {
    kind: "学院要闻",
    date: "2025.03.22",
    title: "学院召开学科建设与人才培养工作推进会",
  },
  {
    kind: "学术讲座",
    date: "2025.03.18",
    title: "创意大讲堂：中国民艺的当代转化与国际表达",
  },
  {
    kind: "展览现场",
    date: "2025.03.14",
    title: "“在场”2025届优秀毕业作品实验展启幕",
  },
  {
    kind: "荣誉成果",
    date: "2025.03.10",
    title: "师生作品获全国大学生广告艺术大赛国家奖27项",
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeProgram, setActiveProgram] = useState(0)

  return (
    <div className="journal-site" id="top">
      <header className="journal-header">
        <div className="header-note">
        </div>
        <div className="header-main">
          <a href="#top" className="journal-logo" aria-label="人文艺术学院首页">
            <img src="./college-logo.png" alt="人文艺术学院 School of Arts and Humanities" />
          </a>
          <div className="issue">
          </div>
          <button className="menu-trigger" onClick={() => setMenuOpen(true)}>
            <span>目录</span>
            <Icon name="menu" />
          </button>
        </div>
      </header>

      <div className={`index-drawer ${menuOpen ? "open" : ""}`}>
        <div className="drawer-top">
          <span>CONTENTS / 网站目录</span>
          <button onClick={() => setMenuOpen(false)} aria-label="关闭目录">
            <Icon name="close" size={28} />
          </button>
        </div>
        <nav>
          {nav.map(([cn, en], index) => (
            <a
              href={`#${en.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              key={cn}
            >
              <small>0{index + 1}</small>
              <strong>{cn}</strong>
              <span>{en}</span>
              <Icon name="arrow" />
            </a>
          ))}
        </nav>
        <div className="drawer-bottom">
          <a href="#search"><Icon name="search" size={17} />站内搜索</a>
          <a href="#en">中文 / EN</a>
        </div>
      </div>

      <main>
        <article className="cover">
          <div className="cover-meta">
            <span>SCHOOL OF ARTS &amp; HUMANITIES</span>
            <span>OPENING / 01</span>
          </div>
          <figure className="cover-image">
            <img src={images.campus} alt="传统艺术与文献展陈空间" />
            <figcaption>
              <span>在文献与作品之间，重新理解传统</span>
              <span>FIELD VIEW / 01</span>
            </figcaption>
          </figure>
          <div className="cover-title">
            <span className="cover-kicker">OUR WAY OF SEEING</span>
            <h1>
              <span>See, Think, Make.</span>
              <em>审视 · 思考 · 转化</em>
            </h1>
            <p>
              从看见文化现场出发，经由独立思辨抵达创造。
              我们在历史与现实之间，寻找人文艺术回应时代的方式。
            </p>
            <a href="#about">走进学院 <Icon name="arrow" /></a>
          </div>
          <span className="cover-page">SEE — THINK — MAKE</span>
        </article>

        <div className="bulletin">
          <span>校内公告</span>
          <a href="#notice">2025年硕士研究生招生复试工作安排</a>
          <time>03 / 20</time>
          <a href="#notices">全部公告 <Icon name="arrow" size={16} /></a>
        </div>

        <article className="opening-note" id="about">
          <aside>
            <span>EDITOR'S NOTE</span>
            <strong>关于学院</strong>
          </aside>
          <div>
            <p className="opening-lead">
              我们以深厚的人文底蕴为根，以开放的艺术视野为翼，建设特色鲜明、国内一流的人文艺术人才培养高地。
            </p>
            <div className="opening-columns">
              <p>
                人文艺术学院坚持“人文引领、艺科融合、实践创新”的办学理念，
                构建涵盖艺术理论、设计创新、文化管理与遗产保护的多元学科生态。
              </p>
              <p>
                我们以国家一流专业与课程建设为牵引，以高水平师资和科研平台为支撑，
                让传统文化在当代语境中持续生长。
              </p>
            </div>
          </div>
          <div className="fact-note">
            <div><strong>30+</strong><span>年办学积淀</span></div>
            <div><strong>05</strong><span>国家级一流专业</span></div>
            <div><strong>60+</strong><span>专任教师</span></div>
          </div>
        </article>

        <article className="current-issue" id="news">
          <div className="issue-heading">
            <span>CURRENT / 此刻</span>
            <h2>正在发生</h2>
            <p>NEWS, LECTURES & EXHIBITIONS</p>
          </div>
          <a className="issue-feature" href="#feature">
            <img src={images.seminar} alt="学院师生围绕创作项目展开讨论" />
            <div>
              <span>特别报道 · 2025.03.22</span>
              <h3>让创意扎根文化：<br />“新文科”人才培养的探索与实践</h3>
              <p>打破学科边界，让理论研究、艺术创作与产业实践进入同一个真实现场。</p>
              <b>继续阅读 <Icon name="arrow" size={18} /></b>
            </div>
          </a>
          <div className="story-index">
            {stories.map((story, index) => (
              <a href="#story" key={story.title}>
                <small>0{index + 1}</small>
                <span>{story.kind}</span>
                <strong>{story.title}</strong>
                <time>{story.date}</time>
              </a>
            ))}
          </div>
        </article>

        <article className="program-index" id="academics">
          <div className="program-heading">
            <span>INDEX OF STUDY</span>
            <h2>学习领域索引</h2>
            <p>
              七个专业与一个公共教研室，
              <br />
              共同构成开放、互联的知识结构。
            </p>
          </div>
          <div className="program-table">
            {programs.map((program, index) => (
              <button
                className={activeProgram === index ? "active" : ""}
                onClick={() => setActiveProgram(index)}
                onMouseEnter={() => setActiveProgram(index)}
                key={program[0]}
              >
                <small>{program[0]}</small>
                <div className="program-name">
                  <strong>{program[1]}</strong>
                  <em>{program[3]}</em>
                </div>
                <span className="program-en">{program[2]}</span>
                <b className="program-action">
                  <span>查看详情</span>
                  <Icon name="arrow" size={17} />
                </b>
              </button>
            ))}
          </div>
        </article>

        <article className="field-notes" id="teaching">
          <figure>
            <img src="./field-library.jpg" alt="学生在图书馆书架间查阅书籍" />
            <figcaption>FIELD NOTE 02 / 工作室现场</figcaption>
          </figure>
          <div className="field-copy">
            <span>LEARNING IN PRACTICE</span>
            <h2>思想从阅读开始，<br />也在实践中被重新理解。</h2>
            <p>
              国家级、省级一流课程，六大实验室与多层次实践基地，
              让课堂延伸至博物馆、文化现场和真实产业项目。
            </p>
            <div>
              <a href="#courses">一流课程体系 <Icon name="arrow" /></a>
              <a href="#laboratories">实验与实训中心 <Icon name="arrow" /></a>
              <a href="#faculty">名师与教学团队 <Icon name="arrow" /></a>
            </div>
          </div>
        </article>

        <article className="research-file" id="research">
          <div className="research-title">
            <span>RESEARCH FILE / 研究档案</span>
            <h2>传统民艺的<br />当代新生</h2>
            <p>
              从乡土田野到当代生活，学院研究团队持续推进中国民间艺术的系统整理、
              学理阐释与创新转化。
            </p>
            <a href="#research-more">打开研究档案 <Icon name="arrow" /></a>
          </div>
          <figure>
            <img src="./research-folk-art.jpg" alt="传统民艺展陈空间中的木雕门楼与民间器物" />
            <figcaption>
              <span>民艺研究 · 非遗保护 · 数字人文</span>
              <span>ARCHIVE NO. 2025—03</span>
            </figcaption>
          </figure>
          <div className="research-links">
            <a href="#books"><small>01</small><span>标志性教材与专著</span></a>
            <a href="#projects"><small>02</small><span>核心科研课题</span></a>
            <a href="#papers"><small>03</small><span>学术论文与评论</span></a>
            <a href="#service"><small>04</small><span>智库与社会服务</span></a>
          </div>
        </article>

        <article className="admission-note" id="admissions">
          <span>BEGIN HERE / 由此开始</span>
          <h2>来这里，提出你的问题。</h2>
          <p>在历史、艺术与现实的交汇处，开启一段属于你的学习旅程。</p>
          <div>
            <a href="#undergraduate"><small>01</small>本科生招生<Icon name="arrow" /></a>
            <a href="#graduate"><small>02</small>研究生教育<Icon name="arrow" /></a>
            <a href="#visit"><small>03</small>开放日与参观<Icon name="arrow" /></a>
          </div>
        </article>
      </main>

      <footer className="journal-footer">
        <img src="./college-logo.png" alt="人文艺术学院" />
        <div>
          <span>山东省济南市大学路1号</span>
          <a href="mailto:sha_office@university.edu.cn">sha_office@university.edu.cn</a>
          <span>0531—8888 6666</span>
        </div>
        <div>
          <a href="#about">学院概况</a>
          <a href="#calendar">活动日历</a>
          <a href="#downloads">资料下载</a>
          <a href="#jobs">人才招聘</a>
        </div>
        <p>© 2025 SCHOOL OF ARTS AND HUMANITIES, SUAD</p>
      </footer>
    </div>
  )
}
