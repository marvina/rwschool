import { useState, useEffect } from "react"

// 精选学术展陈、文献特藏与田野考察影像
const curatedAssets = {
  heroExhibition: "./hero-exhibition.jpg",
  fieldLibrary: "./field-library.jpg",
  folkResearch: "./research-folk-art.jpg",
  installation: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?auto=format&fit=crop&w=1200&q=82",
  digitalMedia: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=82",
}

interface ResearchProject {
  id: string
  code: string
  title: string
  category: string
  categoryClass: "tag-red" | "tag-blue" | "tag-green" | "tag-yellow"
  dept: string
  year: string
  leader: string
  role: string
  medium: string
  summary: string
  image: string
}

const researchProjects: ResearchProject[] = [
  {
    id: "01",
    code: "KEY-2026-01",
    title: "黄河流域民间手工艺调查与数字化活化图录",
    category: "国家重点课题",
    categoryClass: "tag-red",
    dept: "黄河流域民间艺术研究所",
    year: "2025 / 2026",
    leader: "民间美术与文化遗产研究所团队",
    role: "国家社科基金艺术学重点项目",
    medium: "全流域田野测绘、口述史影音文献、全景数字图谱（八卷本）",
    summary: "历时五年深入沿黄九省区传统手工艺聚落，抢救性建档记录濒危手工艺门类，提出基于活态传承的现代造物转化与乡村文化振兴实施框架。",
    image: curatedAssets.folkResearch,
  },
  {
    id: "02",
    code: "PUB-2026-04",
    title: "中国古代造物思想与器物制度考论",
    category: "国家出版基金",
    categoryClass: "tag-blue",
    dept: "艺术史论系",
    year: "2025",
    leader: "艺术史论系古代造物史课题组",
    role: "国家出版基金重点资助项目",
    medium: "学术文献专著 · 齐鲁书社出版 · 入选《中华艺文文库》",
    summary: "从经籍文献、出土器物与工官制度三维视阈，系统梳理中华造物文化的哲学本体、礼乐制度与营造工则，为现代设计学建构自主知识体系奠定文献根基。",
    image: curatedAssets.fieldLibrary,
  },
  {
    id: "03",
    code: "EXH-2026-08",
    title: "生生不息：齐鲁乡土聚落在地设计与社会美育实践",
    category: "全国美展成果",
    categoryClass: "tag-green",
    dept: "艺术设计学系",
    year: "2026",
    leader: "社会服务与在地设计联合工作坊",
    role: "第十四届全国美术作品展览设计艺术展入选成果",
    medium: "在地建筑构件活化、乡土公共空间改造方案、社会美育参与模型",
    summary: "拒绝大拆大建式旅游景观开发，将设计介入转化为乡村社区日常交往仪式的激活剂，探索手工艺与现代设计协同赋能的乡村美育新范式。",
    image: curatedAssets.heroExhibition,
  },
  {
    id: "04",
    code: "LAB-2026-02",
    title: "算法诗学：生成式交互装置与多通道空间感知实验",
    category: "前沿计算实验",
    categoryClass: "tag-yellow",
    dept: "跨媒介艺术与计算交互重点实验室",
    year: "2026",
    leader: "跨媒介与数字艺术重点实验室团队",
    role: "国际新媒体艺术年展特邀参展项目",
    medium: "多通道实时生成影像系统、环境气压流变感知传感器、声音交互架构",
    summary: "将传统山水画论中的“气韵生动”转译为实时神经元生成算法参数，探索人工智能时代机器智能对东方空间意境的重构可能。",
    image: curatedAssets.digitalMedia,
  },
]

const lectureSeries = [
  {
    no: "01",
    series: "齐鲁艺文名家讲坛 · 第52期",
    date: "2026.04.18",
    time: "14:30 / 17:00",
    title: "立足中国大地：新时代艺术教育与设计学科的文化使命",
    speaker: "范迪安 教授",
    speakerTitle: "中国美术家协会主席 / 原中央美术学院院长",
    location: "长清校区人文艺术学院二楼学术报告厅",
    status: "席位预约开启",
    statusClass: "tag-green",
  },
  {
    no: "02",
    series: "国家社科重点课题阶段汇报会",
    date: "2026.04.25",
    time: "09:30 / 12:00",
    title: "黄河文化带手工艺遗存抢救性测绘与数字谱系建构",
    speaker: "许文清 教授",
    speakerTitle: "院学术委员会主任 / 博士生导师 / 国务院特贴专家",
    location: "学院三楼视觉文献特藏室",
    status: "学术席位开放",
    statusClass: "tag-yellow",
  },
  {
    no: "03",
    series: "前沿计算美学系列研讨",
    date: "2026.05.09",
    time: "15:00 / 17:30",
    title: "神经拟态与东方空间生成：跨媒介叙事的算法哲学",
    speaker: "陈立言 特聘教授",
    speakerTitle: "跨媒介艺术实验室主任 / 国际策展人",
    location: "实验中心一楼沉浸式视听研讨厅",
    status: "课题组成员优先",
    statusClass: "tag-blue",
  },
]

const facultyMembers = [
  {
    name: "许文清",
    role: "院学术委员会主任 / 二级教授 / 博士生导师",
    tags: ["国务院特贴专家", "国家社科重点课题主持人"],
    research: "设计艺术学理论、艺术批评学、中华造物思想考论",
    works: "主编《中国现代设计史论》《形式之后：当代造物哲学论纲》",
  },
  {
    name: "陈立言",
    role: "特聘教授 / 跨媒介实验中心主任 / 博士生导师",
    tags: ["国际策展人", "中国美协设计艺委会委员"],
    research: "展示与展陈空间设计、跨媒介环境装置、计算艺术美学",
    works: "威尼斯双年展特约研究学者，主持全国美展展陈空间总体设计",
  },
  {
    name: "林见深",
    role: "艺术史论系系主任 / 教授 / 硕士生导师",
    tags: ["山东省教学名师", "中华艺文文库编委"],
    research: "中国古代画论、工艺美术史学史、非遗田野文献考证",
    works: "著有《物象与心境：中国古代器物思想释读》《齐鲁民间造物记》",
  },
  {
    name: "高韶华",
    role: "艺术设计学系系主任 / 副教授 / 硕士生导师",
    tags: ["软科A+专业负责人", "教育部青年骨干教师"],
    research: "文化战略与设计策划、信息架构与体验设计、乡村社会美育",
    works: "主持省部级教学改革重点课题，第十四届全国美展入选作者",
  },
]

export default function App() {
  const [activeResearchIdx, setActiveResearchIdx] = useState(0)
  const [modalItem, setModalItem] = useState<ResearchProject | null>(null)
  const [activeFilter, setActiveFilter] = useState("all")

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalItem(null)
      } else if (e.key === "1") {
        document.getElementById("sec-overview")?.scrollIntoView({ behavior: "smooth" })
      } else if (e.key === "2") {
        document.getElementById("sec-disciplines")?.scrollIntoView({ behavior: "smooth" })
      } else if (e.key === "3") {
        document.getElementById("sec-research")?.scrollIntoView({ behavior: "smooth" })
      } else if (e.key === "4") {
        document.getElementById("sec-lectures")?.scrollIntoView({ behavior: "smooth" })
      } else if (e.key === "5") {
        document.getElementById("sec-admissions")?.scrollIntoView({ behavior: "smooth" })
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const activeProject = researchProjects[activeResearchIdx]

  return (
    <div className="minimalist-editorial-root">
      {/* 4-Track Architectural Column Grid Lines */}
      <div className="viewport-grid-guides" aria-hidden="true">
        <div className="grid-col-guide"></div>
        <div className="grid-col-guide"></div>
        <div className="grid-col-guide"></div>
        <div className="grid-col-guide"></div>
      </div>

      {/* Top Architectural Masthead */}
      <header className="editorial-masthead">
        <div className="masthead-left">
          <a href="#top" className="masthead-logo-link" aria-label="人文艺术学院首页">
            <img
              src="./college-logo.png"
              alt="山东工艺美术学院 人文艺术学院"
              className="masthead-logo-img"
            />
          </a>
          <span className="masthead-motto-badge">
            软科中国大学专业排名全国 A+ · 国家级一流本科专业
          </span>
        </div>

        <nav className="masthead-nav">
          <a href="#sec-overview" className="nav-item">
            <span>01 文脉本体</span>
            <kbd className="nav-kbd">1</kbd>
          </a>
          <a href="#sec-disciplines" className="nav-item">
            <span>02 教学系部</span>
            <kbd className="nav-kbd">2</kbd>
          </a>
          <a href="#sec-research" className="nav-item">
            <span>03 重点科研</span>
            <kbd className="nav-kbd">3</kbd>
          </a>
          <a href="#sec-lectures" className="nav-item">
            <span>04 艺文讲坛</span>
            <kbd className="nav-kbd">4</kbd>
          </a>
          <a href="#sec-admissions" className="nav-item">
            <span>05 招考通道</span>
            <kbd className="nav-kbd">5</kbd>
          </a>
        </nav>

        <div className="masthead-right">
          <a href="#sec-admissions" className="btn-primary-dark">
            <span>2026 招考指南</span>
            <span className="btn-icon">↗</span>
          </a>
        </div>
      </header>

      {/* Main Editorial Canvas */}
      <main className="editorial-canvas" id="top">
        {/* ================= SECTION 1: OVERVIEW & MONUMENTAL HERO ================= */}
        <section className="editorial-section sec-hero" id="sec-overview">
          {/* Subtle archival watermark text */}
          <div className="hero-archival-watermark" aria-hidden="true">
            SHANDONG CRAFT & HUMANITIES · SUAD 2026
          </div>

          <div className="section-kicker-row">
            <div className="kicker-group">
              <span className="tag-pill tag-red">SHANDONG CRAFT & HUMANITIES</span>
              <span className="kicker-meta">2026年春季学期 · 第8教学周 · 齐鲁造物文脉</span>
            </div>
            <div className="kicker-index-meta">
              <span>ARCHIVAL DOSSIER {`{VOL.2026}`}</span>
            </div>
          </div>

          {/* Monumental Headline with Inline Micro-Images */}
          <div className="hero-monumental-block">
            <h1 className="hero-editorial-h1">
              <span className="h1-line">
                以文化人
                <span className="inline-media-frame" title="田野考察与文献特藏">
                  <img src={curatedAssets.fieldLibrary} alt="文献特藏" />
                </span>
                · 艺文相长
              </span>
              <span className="h1-line">
                守正拓新
                <span className="inline-badge-marker">{`{全国 A+}`}</span>
                <span className="inline-media-frame frame-wide" title="学院学术展陈空间">
                  <img src={curatedAssets.heroExhibition} alt="学术展陈" />
                </span>
                · 知行合一
              </span>
            </h1>

            {/* Discipline Matrix with Superscripts */}
            <div className="hero-discipline-strip">
              <div className="discipline-meta-label">
                <span>{`{ 核心学科矩阵 }`}</span>
              </div>
              <div className="discipline-nodes">
                <span className="node-item">
                  艺术设计学 <sup className="sup-badge sup-red">A+</sup>
                </span>
                <span className="node-sep">|</span>
                <span className="node-item">
                  艺术史论 <sup className="sup-badge sup-blue">一流专业</sup>
                </span>
                <span className="node-sep">|</span>
                <span className="node-item">
                  跨媒介计算 <sup className="sup-badge sup-green">重点实验室</sup>
                </span>
                <span className="node-sep">|</span>
                <span className="node-item">
                  黄河民艺所 <sup className="sup-badge sup-yellow">国家社科基地</sup>
                </span>
              </div>
            </div>

            {/* Editorial Lead & Academic Mission */}
            <div className="hero-manifesto-grid">
              <div className="manifesto-lead-col">
                <p className="manifesto-callout">
                  立足齐鲁深厚文脉，涵育当代造物思想。建设兼具中华文化底蕴与当代国际视野的一流艺术设计人文高地。
                </p>
                <p className="manifesto-body">
                  人文艺术学院现设艺术设计学系与艺术史论系，建有黄河流域传统手工艺与现代设计文化研究中心、跨媒介艺术与非遗活化重点实验室。以深厚文脉为根基，直面当代技术变革，培养具备扎实学术素养、敏锐批判意识与前沿创新能力的复合型拔尖人才。
                </p>
              </div>

              {/* Staggered Secondary Card */}
              <div className="manifesto-card-col">
                <div className="featured-artifact-card">
                  <div className="artifact-image-container">
                    <img src={curatedAssets.folkResearch} alt="民间艺术活态传承" />
                    <span className="artifact-category-overlay">田野考察文献实录</span>
                  </div>
                  <div className="artifact-meta-deck">
                    <div className="artifact-kicker">
                      <span className="tag-pill tag-yellow">田野建档</span>
                      <span className="artifact-year">2026 特刊</span>
                    </div>
                    <h3 className="artifact-title">黄河流域手工艺谱系测绘与活态传承</h3>
                    <p className="artifact-abstract">
                      深入沿黄九省区百余个手工艺传承聚落，完成实地口述史录音与高精度三维构件测绘，构建民间造物数字档案库。
                    </p>
                    <div className="artifact-action-row">
                      <a href="#sec-research" className="link-arrow">
                        <span>查看国家重点课题成果</span>
                        <span className="arrow-char">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Cell Rigid Academic Metrics Bar */}
            <div className="hero-metrics-strip">
              <div className="metric-cell">
                <div className="metric-value-row">
                  <span className="metric-number">全国 A+</span>
                </div>
                <div className="metric-label">软科中国大学专业排名顶尖评级</div>
                <div className="metric-desc">艺术设计学专业连续三年保持全国前列</div>
              </div>

              <div className="metric-cell">
                <div className="metric-value-row">
                  <span className="metric-number">2 个</span>
                </div>
                <div className="metric-label">国家级一流本科专业建设点</div>
                <div className="metric-desc">艺术设计学与艺术史论双双入选国家一流</div>
              </div>

              <div className="metric-cell">
                <div className="metric-value-row">
                  <span className="metric-number">100%</span>
                </div>
                <div className="metric-label">专任教师高职及博士比例</div>
                <div className="metric-desc">汇聚国务院特贴专家与省部级教学名师</div>
              </div>

              <div className="metric-cell">
                <div className="metric-value-row">
                  <span className="metric-number">50+ 项</span>
                </div>
                <div className="metric-label">国家社科基金及省部级重点课题</div>
                <div className="metric-desc">涵盖黄河非遗数字化、造物史论与乡村美育</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: DISCIPLINES & ATELIERS ================= */}
        <section className="editorial-section sec-disciplines" id="sec-disciplines">
          <div className="section-header-row">
            <div>
              <div className="section-sub-kicker">ACADEMIC ATELIERS & DISCIPLINES</div>
              <h2 className="section-title">学科设置与教学系部</h2>
            </div>
            <div className="section-header-note">
              <span>构建“理论深度 + 史论典籍 + 跨媒介实验 + 黄河民艺活化”协同育人体系</span>
            </div>
          </div>

          {/* Bento Grid Layout breaking conventional symmetry */}
          <div className="disciplines-bento-grid">
            {/* Card 1: 艺术设计学系 (Large focus card) */}
            <article className="bento-card bento-span-2 card-highlight">
              <div className="bento-card-header">
                <div className="bento-code-tag">
                  <span className="tag-pill tag-red">软科全国 A+ · 国家一流专业</span>
                  <span className="mono-code">MAJOR CODE: 130501</span>
                </div>
                <span className="bento-corner-num">01</span>
              </div>

              <h3 className="bento-dept-name">艺术设计学系</h3>
              <p className="bento-dept-lead">
                立足深厚人文底蕴与现代设计实践，面向国家文化战略、设计管理、信息与交互体验、文化遗产数字化传播需求，培养具备扎实文脉根基与前沿创新能力的拔尖复合型设计人才。
              </p>

              <div className="bento-feature-list">
                <div className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span><strong>专业特色方向：</strong>文化战略与设计策划、信息与界面交互体验、生活方式文创研发、现代设计文化批评</span>
                </div>
                <div className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span><strong>协同育人平台：</strong>国家级实验教学示范中心、社会美育与乡村在地设计工作坊</span>
                </div>
                <div className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span><strong>授予学位层次：</strong>艺术学学士 / 艺术学硕士 / 艺术专业硕士 (MFA)</span>
                </div>
              </div>

              <div className="bento-footer-row">
                <span className="bento-meta-badge">全程双导师制 · 创新课题制工坊</span>
                <a href="#sec-admissions" className="link-arrow">
                  <span>查看高考招生专业介绍</span>
                  <span className="arrow-char">→</span>
                </a>
              </div>
            </article>

            {/* Card 2: 跨媒介艺术实验室 */}
            <article className="bento-card bento-span-2">
              <div className="bento-card-header">
                <div className="bento-code-tag">
                  <span className="tag-pill tag-green">前沿交叉重点实验室</span>
                  <span className="mono-code">LAB-INTERMEDIA: 01</span>
                </div>
                <span className="bento-corner-num">02</span>
              </div>

              <h3 className="bento-dept-name">跨媒介艺术与计算交互重点实验室</h3>
              <p className="bento-dept-lead">
                聚焦人工智能生成艺术（AIGC）、沉浸式空间视听、动态数据可视化及人机协同创作，探索未来科技与东方诗意美学的共生边界。
              </p>

              <div className="pill-tag-cluster">
                <span className="tag-pill tag-green">生成式计算艺术</span>
                <span className="tag-pill tag-green">多通道空间声场</span>
                <span className="tag-pill tag-green">数字孪生虚实共生</span>
                <span className="tag-pill tag-green">气候环境感知装置</span>
              </div>

              <div className="bento-footer-row">
                <span className="bento-meta-badge">配有高性能算力集群与多通道感知展演大厅</span>
                <a href="#sec-research" className="link-arrow">
                  <span>查看实验成果</span>
                  <span className="arrow-char">→</span>
                </a>
              </div>
            </article>

            {/* Card 3: 艺术史论系 */}
            <article className="bento-card bento-span-2">
              <div className="bento-card-header">
                <div className="bento-code-tag">
                  <span className="tag-pill tag-blue">国家级一流本科专业</span>
                  <span className="mono-code">MAJOR CODE: 130101</span>
                </div>
                <span className="bento-corner-num">03</span>
              </div>

              <h3 className="bento-dept-name">艺术史论系</h3>
              <p className="bento-dept-lead">
                注重经典文献研读与出土器物互证，深耕中国古代造物思想、工艺文化制度史、西方现当代艺术批评与东方美学谱系，培养具备高水平文字著述与批判性研究能力的研究型专门人才。
              </p>

              <div className="bento-feature-list">
                <div className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span><strong>核心研究板块：</strong>中华造物哲学考论、齐鲁工艺史料整理、艺术批评与策展实践、文化遗产保护理论</span>
                </div>
                <div className="feature-item">
                  <span className="feature-bullet">•</span>
                  <span><strong>典籍文献特藏：</strong>藏有珍贵明清造物刻本、全套手工艺田野调查拓本与珍稀地方志资源</span>
                </div>
              </div>

              <div className="bento-footer-row">
                <span className="bento-meta-badge">主编《工艺文化研究》集刊</span>
                <a href="#sec-admissions" className="link-arrow">
                  <span>专业培养方案</span>
                  <span className="arrow-char">→</span>
                </a>
              </div>
            </article>

            {/* Card 4: 黄河流域民间艺术研究所 */}
            <article className="bento-card bento-span-2 card-tinted">
              <div className="bento-card-header">
                <div className="bento-code-tag">
                  <span className="tag-pill tag-yellow">省级重点人文社科基地</span>
                  <span className="mono-code">HERITAGE-RESEARCH</span>
                </div>
                <span className="bento-corner-num">04</span>
              </div>

              <h3 className="bento-dept-name">黄河流域民间艺术研究所</h3>
              <p className="bento-dept-lead">
                国家社科基金艺术学重点项目实体依托平台。长期深入沿黄流域九省区开展田野调查，建有全国领先的黄河民艺实物档案库与全景数字化活化图谱。
              </p>

              <div className="pill-tag-cluster">
                <span className="tag-pill tag-yellow">沿黄传统造物谱系</span>
                <span className="tag-pill tag-yellow">手工艺口述史抢救工程</span>
                <span className="tag-pill tag-yellow">乡村振兴在地活化</span>
              </div>

              <div className="bento-footer-row">
                <span className="bento-meta-badge">已出版《黄河流域传统手工艺图典》（八卷本）</span>
                <a href="#sec-research" className="link-arrow">
                  <span>查看田野项目</span>
                  <span className="arrow-char">→</span>
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* ================= SECTION 3: CURATORIAL RESEARCH & DOSSIER ================= */}
        <section className="editorial-section sec-research" id="sec-research">
          <div className="section-header-row">
            <div>
              <div className="section-sub-kicker">CURATORIAL ARCHIVE & MAJOR RESEARCH</div>
              <h2 className="section-title">教学科研与学术展陈成果</h2>
            </div>
            <div className="section-header-note">
              <span>把论文写在祖国大地上，以高水平重大科研项目与先锋艺术创作回应时代命题</span>
            </div>
          </div>

          {/* Interactive Curatorial Split Layout */}
          <div className="research-split-deck">
            {/* Left Column: Numbered List */}
            <div className="research-list-col">
              {researchProjects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className={`research-row-card ${activeResearchIdx === idx ? "is-active" : ""}`}
                  onMouseEnter={() => setActiveResearchIdx(idx)}
                  onClick={() => setModalItem(proj)}
                >
                  <div className="row-num-block">
                    <span className="row-index">{proj.id}</span>
                  </div>
                  <div className="row-content-block">
                    <div className="row-meta-strip">
                      <span className={`tag-pill ${proj.categoryClass}`}>{proj.category}</span>
                      <span className="row-code">{proj.code}</span>
                      <span className="row-year">{proj.year}</span>
                    </div>
                    <h4 className="row-title">{proj.title}</h4>
                    <p className="row-leader-line">
                      <span>主持团队：{proj.leader}</span>
                      <span className="sep-slash">/</span>
                      <span>依托：{proj.dept}</span>
                    </p>
                  </div>
                  <div className="row-action-block">
                    <button
                      className="btn-inspect-circle"
                      title="查阅课题详细档案"
                      onClick={(e) => {
                        e.stopPropagation()
                        setModalItem(proj)
                      }}
                    >
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Live Curatorial Display Window */}
            <div className="research-curatorial-window">
              <div className="curatorial-preview-card">
                <div className="curatorial-media-box">
                  <img src={activeProject.image} alt={activeProject.title} />
                  <div className="curatorial-tag-float">
                    <span className={`tag-pill ${activeProject.categoryClass}`}>{activeProject.category}</span>
                  </div>
                </div>

                <div className="curatorial-details-box">
                  <div className="curatorial-code-row">
                    <span className="mono-code">{activeProject.code}</span>
                    <span className="curatorial-year">{activeProject.year}</span>
                  </div>

                  <h3 className="curatorial-title">{activeProject.title}</h3>
                  <div className="curatorial-role-strip">{activeProject.role}</div>

                  <div className="curatorial-spec-row">
                    <span className="spec-label">成果形式与载体：</span>
                    <span className="spec-val">{activeProject.medium}</span>
                  </div>

                  <p className="curatorial-summary-text">{activeProject.summary}</p>

                  <div className="curatorial-action-footer">
                    <button
                      className="btn-open-dossier"
                      onClick={() => setModalItem(activeProject)}
                    >
                      <span>查阅完整成果档案与文献索引</span>
                      <span className="arrow-char">↗</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 4: FORUMS & FACULTY MATRIX ================= */}
        <section className="editorial-section sec-lectures" id="sec-lectures">
          <div className="section-header-row">
            <div>
              <div className="section-sub-kicker">DISCOURSE & ACADEMIC LEADERSHIP</div>
              <h2 className="section-title">齐鲁艺文讲坛与师资学术矩阵</h2>
            </div>
            <div className="section-header-note">
              <span>汇聚全国艺术学与设计界权威学者，打造兼具思想锋芒与学术广度的对话阵地</span>
            </div>
          </div>

          {/* Academic Lecture Passes Deck */}
          <div className="lecture-passes-deck">
            {lectureSeries.map((lec) => (
              <div key={lec.no} className="lecture-pass-card">
                <div className="pass-meta-col">
                  <span className="pass-no">PASS #{lec.no}</span>
                  <div className="pass-date-block">
                    <span className="pass-date">{lec.date}</span>
                    <span className="pass-time">{lec.time}</span>
                  </div>
                </div>

                <div className="pass-info-col">
                  <div className="pass-series-line">
                    <span className={`tag-pill ${lec.statusClass}`}>{lec.status}</span>
                    <span className="series-title">{lec.series}</span>
                  </div>
                  <h3 className="pass-lecture-title">{lec.title}</h3>
                  <div className="pass-speaker-lockup">
                    <span className="speaker-name">{lec.speaker}</span>
                    <span className="speaker-title">{lec.speakerTitle}</span>
                  </div>
                  <div className="pass-location-row">
                    <span className="loc-label">学术会场：</span>
                    <span className="loc-text">{lec.location}</span>
                  </div>
                </div>

                <div className="pass-action-col">
                  <a href="#sec-admissions" className="btn-pass-action">
                    <span>预约席位</span>
                    <span className="arrow-char">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Faculty Matrix Cards */}
          <div className="faculty-matrix-heading">
            <h3 className="sub-section-title">学术委员会与骨干导师团队</h3>
            <span className="faculty-count-badge">ACADEMIC COMMITTEE (04)</span>
          </div>

          <div className="faculty-grid">
            {facultyMembers.map((fac, idx) => (
              <div key={idx} className="faculty-card">
                <div className="faculty-card-top">
                  <span className="fac-idx">FELLOW 0{idx + 1}</span>
                  <span className="tag-pill tag-blue">{fac.tags[0]}</span>
                </div>

                <h4 className="faculty-name">{fac.name}</h4>
                <div className="faculty-role-title">{fac.role}</div>

                <div className="fac-info-block">
                  <div className="fac-info-label">主要研究领域：</div>
                  <div className="fac-info-val">{fac.research}</div>
                </div>

                <div className="fac-info-block">
                  <div className="fac-info-label">代表性著作与教学成果：</div>
                  <div className="fac-info-val">{fac.works}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 5: ADMISSIONS & OFFICIAL FOOTER ================= */}
        <section className="editorial-section sec-admissions" id="sec-admissions">
          <div className="section-header-row">
            <div>
              <div className="section-sub-kicker">ADMISSIONS & DEGREE PROGRAMMES</div>
              <h2 className="section-title">2026年本硕招考指南与综合校务</h2>
            </div>
            <div className="section-header-note">
              <span>热忱欢迎热爱中华优秀传统造物文化、具备敏锐艺术观察力与批判性思考能力的学子报考</span>
            </div>
          </div>

          <div className="admissions-split-grid">
            {/* Undergraduate Admissions Card */}
            <div className="admissions-card">
              <div className="adm-header">
                <span className="tag-pill tag-red">普通本科招生</span>
                <span className="adm-level">BACHELOR PROGRAMMES</span>
              </div>
              <h3 className="adm-title">本科生统考招生专业</h3>
              <p className="adm-desc">
                面向全国招收艺术设计学（软科全国A+）、艺术史论专业本科生。实行全程双导师制、田野考察与课题工坊育人机制。
              </p>
              <ul className="adm-path-list">
                <li>
                  <a href="#sec-overview" className="adm-link-item">
                    <span>2026 艺术设计学专业本科招生计划与简章</span>
                    <span className="link-arrow-sym">↗</span>
                  </a>
                </li>
                <li>
                  <a href="#sec-overview" className="adm-link-item">
                    <span>2026 艺术史论专业高考报考指南及录取参考</span>
                    <span className="link-arrow-sym">↗</span>
                  </a>
                </li>
                <li>
                  <a href="#sec-overview" className="adm-link-item">
                    <span>历年各省份录取分数线与毕业生就业发展报告</span>
                    <span className="link-arrow-sym">↗</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Graduate Admissions Card */}
            <div className="admissions-card card-tinted">
              <div className="adm-header">
                <span className="tag-pill tag-blue">研究生教育</span>
                <span className="adm-level">MASTER & RESEARCH</span>
              </div>
              <h3 className="adm-title">硕士研究生与学术流动</h3>
              <p className="adm-desc">
                招收艺术学学术学位（设计历史与理论、艺术批评学方向）及艺术专业硕士（MFA，文创策划与展示设计方向）。设有科研创新基金与境外访学资助。
              </p>
              <ul className="adm-path-list">
                <li>
                  <a href="#sec-overview" className="adm-link-item">
                    <span>2026 硕士研究生初试统考大纲与专业参考书目</span>
                    <span className="link-arrow-sym">↗</span>
                  </a>
                </li>
                <li>
                  <a href="#sec-overview" className="adm-link-item">
                    <span>推荐免试优秀应届本科生攻读硕士学位办法</span>
                    <span className="link-arrow-sym">↗</span>
                  </a>
                </li>
                <li>
                  <a href="#sec-overview" className="adm-link-item">
                    <span>青年学者科研流动站与访问学者招募公告</span>
                    <span className="link-arrow-sym">↗</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Download Brochure Strip */}
          <div className="brochure-download-strip">
            <div className="brochure-left">
              <span className="brochure-tag tag-pill tag-green">官方发布</span>
              <span className="brochure-name">《山东工艺美术学院 人文艺术学院 2026 本科与研究生招生培养指南 (完整版 PDF)》</span>
            </div>
            <div className="brochure-right">
              <a href="#top" className="btn-download-pdf">
                <span>下载招生简章</span>
                <span className="btn-icon">↓</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Official Institutional Footer */}
      <footer className="editorial-footer">
        <div className="footer-top-row">
          <div className="footer-brand-deck">
            <img
              src="./college-logo.png"
              alt="山东工艺美术学院 人文艺术学院"
              className="footer-logo-img"
            />
            <p className="footer-motto-line">“以文化人，艺文相长；守正拓新，知行合一”</p>
          </div>

          <div className="footer-columns-group">
            <div className="footer-col">
              <div className="footer-col-title">校区驻地与联络</div>
              <p className="footer-col-text">地址：山东省济南市长清区大学科技园大学路1号</p>
              <p className="footer-col-text">邮政编码：250300</p>
              <p className="footer-col-text">学院办公室：0531-89626000</p>
              <p className="footer-col-text">教学科研办公室：0531-89626001</p>
              <p className="footer-col-text">官方电子邮箱：sha_office@sdada.edu.cn</p>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">教学与科研实体</div>
              <p className="footer-col-text">艺术设计学系（国家级一流本科专业 / 软科全国 A+）</p>
              <p className="footer-col-text">艺术史论系（国家级一流本科专业点）</p>
              <p className="footer-col-text">跨媒介艺术与计算交互重点实验室</p>
              <p className="footer-col-text">黄河流域民间艺术研究所</p>
            </div>

            <div className="footer-col">
              <div className="footer-col-title">校内管理与资源直达</div>
              <p className="footer-col-link"><a href="#top">山东工艺美术学院主站 (sdada.edu.cn)</a></p>
              <p className="footer-col-link"><a href="#top">教务综合管理系统</a></p>
              <p className="footer-col-link"><a href="#top">研究生处 / 培养办公室</a></p>
              <p className="footer-col-link"><a href="#top">图书馆数字文献特藏数据库</a></p>
            </div>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            版权所有 © 2026 山东工艺美术学院 人文艺术学院 · 官方网站改版方案三（高定极简典雅版）
          </div>
          <div className="footer-filing">
            <span>鲁ICP备05002166号</span>
            <span className="dot-sep">·</span>
            <span>鲁公网安备 37011302000001号</span>
          </div>
        </div>
      </footer>

      {/* Interactive Modal: Curatorial Project Dossier */}
      {modalItem && (
        <div className="curatorial-modal-overlay" onClick={() => setModalItem(null)}>
          <div className="curatorial-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title-lockup">
                <span className={`tag-pill ${modalItem.categoryClass}`}>{modalItem.category}</span>
                <span className="mono-code">{modalItem.code}</span>
              </div>
              <button
                className="modal-btn-close"
                onClick={() => setModalItem(null)}
                title="关闭抽屉 (Esc)"
              >
                ✕
              </button>
            </div>

            <div className="modal-scroll-body">
              <h2 className="modal-headline">{modalItem.title}</h2>
              <div className="modal-dept-strip">{modalItem.role} · 依托机构：{modalItem.dept}</div>

              <div className="modal-media-frame">
                <img src={modalItem.image} alt={modalItem.title} />
              </div>

              <div className="modal-dossier-grid">
                <div className="dossier-cell">
                  <div className="dossier-label">课题立项年度</div>
                  <div className="dossier-val">{modalItem.year}</div>
                </div>
                <div className="dossier-cell">
                  <div className="dossier-label">主持团队 / 首席专家</div>
                  <div className="dossier-val">{modalItem.leader}</div>
                </div>
              </div>

              <div className="modal-desc-section">
                <div className="modal-sub-title">成果载体与文献规格</div>
                <p className="modal-desc-p">{modalItem.medium}</p>
              </div>

              <div className="modal-desc-section">
                <div className="modal-sub-title">学术价值与实施纲要</div>
                <p className="modal-desc-p">{modalItem.summary}</p>
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn-primary-dark" onClick={() => setModalItem(null)}>
                <span>返回展陈浏览</span>
              </button>
              <span className="modal-shortcut-tip">可按 <kbd>Esc</kbd> 快速退出</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
