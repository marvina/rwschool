import { useState } from "react"

// 学院精选真实学术展陈、文献特藏与田野考察影像
const curatedImages = {
  gallery: "./hero-exhibition.jpg",
  archive: "./field-library.jpg",
  folkField: "./research-folk-art.jpg",
  installation: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?auto=format&fit=crop&w=1600&q=88",
  digitalMedia: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=86",
}

type DepartmentId = "design" | "intermedia" | "history" | "heritage"
type CategoryType = "all" | "national" | "treatise" | "exhibition" | "rural"

interface ResearchItem {
  id: string
  code: string
  title: string
  category: CategoryType
  dept: string
  year: string
  leader: string
  role: string
  medium: string
  summary: string
  image: string
  accentColor: string
}

const researchItems: ResearchItem[] = [
  {
    id: "01",
    code: "KEY-2026-01",
    title: "黄河流域民间手工艺调查与数字化活化图录",
    category: "national",
    dept: "黄河流域民间艺术研究所",
    year: "2025 - 2026",
    leader: "民间美术与文化遗产研究所团队",
    role: "国家社科基金艺术学重点项目",
    medium: "全流域田野测绘、口述史口述影音文献、全景数字图谱（八卷本）",
    summary: "历时五年深入沿黄九省区传统手工艺聚落，抢救性建档记录濒危手工艺门类，提出基于活态传承的现代造物转化与乡村文化振兴实施框架。",
    image: curatedImages.folkField,
    accentColor: "#ff7a00",
  },
  {
    id: "02",
    code: "PUB-2026-04",
    title: "中国古代造物思想与器物制度考论",
    category: "treatise",
    dept: "艺术史论系",
    year: "2025",
    leader: "艺术史论系古代造物史课题组",
    role: "国家出版基金重点资助项目",
    medium: "学术文献专著 · 齐鲁书社出版 · 入选《中华艺文文库》",
    summary: "从经籍文献、出土器物与工官制度三维视阈，系统梳理中华造物文化的哲学本体、礼乐制度与营造工则，为现代设计学建构自主知识体系奠定文献根基。",
    image: curatedImages.archive,
    accentColor: "#ff2b2b",
  },
  {
    id: "03",
    code: "EXH-2026-08",
    title: "生生不息：齐鲁乡土聚落在地设计与社会美育实践",
    category: "rural",
    dept: "艺术设计学系",
    year: "2026",
    leader: "社会服务与在地设计联合工作坊",
    role: "第十四届全国美术作品展览设计艺术展入选成果",
    medium: "在地建筑构件活化、乡土公共空间改造方案、社会美育参与模型",
    summary: "拒绝大拆大建式旅游景观开发，将设计介入转化为乡村社区日常交往仪式的激活剂，探索手工艺与现代设计协同赋能的乡村美育新范式。",
    image: curatedImages.gallery,
    accentColor: "#0055ff",
  },
  {
    id: "04",
    code: "LAB-2026-02",
    title: "算法诗学：生成式交互装置与多通道空间感知实验",
    category: "exhibition",
    dept: "跨媒介艺术与计算交互重点实验室",
    year: "2026",
    leader: "跨媒介与数字艺术重点实验室团队",
    role: "国际新媒体艺术年展特邀参展项目",
    medium: "多通道实时生成影像系统、环境气压流变感知传感器、声音交互架构",
    summary: "将传统山水画论中的“气韵生动”转译为实时神经元生成算法参数，探索人工智能时代机器智能对东方空间意境的重构可能。",
    image: curatedImages.digitalMedia,
    accentColor: "#ccff00",
  },
]

const lectureList = [
  {
    no: "01",
    ticketCode: "TKT-ART-052",
    series: "齐鲁艺文名家讲坛 · 第52期",
    date: "2026.04.18",
    time: "14:30 - 17:00",
    title: "立足中国大地：新时代艺术教育与设计学科的文化使命",
    speaker: "范迪安 教授",
    speakerTitle: "中国美术家协会主席 / 原中央美术学院院长",
    location: "长清校区人文艺术学院二楼学术报告厅",
    status: "预约通道开启",
    badgeColor: "#0055ff",
  },
  {
    no: "02",
    ticketCode: "TKT-RES-019",
    series: "国家社科重点课题阶段成果汇报会",
    date: "2026.04.25",
    time: "09:30 - 12:00",
    title: "黄河文化带手工艺遗存抢救性测绘与数字谱系建构",
    speaker: "许文清 教授",
    speakerTitle: "院学术委员会主任 / 博士生导师 / 享受国务院特贴专家",
    location: "学院三楼视觉文献特藏室",
    status: "学术席位开放",
    badgeColor: "#ff7a00",
  },
  {
    no: "03",
    ticketCode: "TKT-LAB-008",
    series: "新文科交叉青年学术沙龙 · 第18期",
    date: "2026.05.08",
    time: "14:00 - 16:30",
    title: "生成式人工智能时代的艺术批评方法论重塑与图像主体性",
    speaker: "林见深 教授、莫维安 副教授 与特邀青年学者",
    speakerTitle: "艺术学理论 · 计算机科学跨界对谈组",
    location: "跨媒介艺术实验室 302",
    status: "全网同步直播",
    badgeColor: "#ccff00",
  },
]

const facultyList = [
  {
    name: "许文清",
    tag: "学术领航",
    title: "二级教授 / 博士生导师",
    role: "院学术委员会主任 / 国务院政府特殊津贴专家",
    direction: "设计艺术学理论、艺术批评史、中华造物思想",
    works: "主编《中国现代设计史论》《形式之后》，主持国家社科重大课题",
    color: "#0055ff",
  },
  {
    name: "陈立言",
    tag: "空间策展",
    title: "特聘教授 / 博士生导师",
    role: "当代空间艺术中心主任 / 中国美协设计艺委会委员",
    direction: "展示与展陈空间设计、跨媒介环境装置、策展实践",
    works: "威尼斯双年展特约研究学者，主持全国美展展陈空间总体设计",
    color: "#ff2b2b",
  },
  {
    name: "林见深",
    tag: "史论名家",
    title: "教授 / 史论学科带头人",
    role: "视觉文化与文献研究所所长 / 山东省教学名师",
    direction: "中国古代画论、工艺美术史学史、非遗文献考证",
    works: "著有《物象与心境：中国艺术史的阐释维》《齐鲁手工艺考》",
    color: "#ff7a00",
  },
  {
    name: "莫维安",
    tag: "数字先锋",
    title: "副教授 / 青年拔尖人才",
    role: "数字媒体艺术专业主任 / 泰山学者青年专家",
    direction: "智能人机交互、算法生成艺术、文化遗产数字孪生",
    works: "作品参展 SIGGRAPH、ISEA，获多项国家计算机软件著作权",
    color: "#ccff00",
  },
]

export default function App() {
  const [activeDept, setActiveDept] = useState<DepartmentId>("design")
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all")
  const [selectedResearch, setSelectedResearch] = useState<ResearchItem | null>(null)
  const [heroImageIdx, setHeroImageIdx] = useState<number>(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const heroScenes = [
    { src: curatedImages.gallery, name: "学院当代艺术与设计综合展陈大厅", tag: "EXHIBITION SPACE" },
    { src: curatedImages.archive, name: "传统器物造物思想与文献特藏中心", tag: "ARCHIVAL CENTER" },
    { src: curatedImages.folkField, name: "黄河流域民间艺术田野实物标本库", tag: "FIELDWORK REPOSITORY" },
  ]

  const filteredResearch =
    activeCategory === "all"
      ? researchItems
      : researchItems.filter((item) => item.category === activeCategory)

  return (
    <div className={`chromatic-avant-garde theme-${activeDept}`}>
      {/* 顶部实用通知与快速通道 */}
      <aside className="top-telemetry-bar">
        <div className="telemetry-inner">
          <div className="telemetry-left">
            <span className="telemetry-chip">OFFICIAL PORTAL</span>
            <span className="telemetry-school">山东工艺美术学院 · 人文艺术学院</span>
            <span className="telemetry-sep">//</span>
            <span className="telemetry-time">2026年春季学期 · 第8教学周 · 今日学术排程</span>
          </div>
          <div className="telemetry-right">
            <a href="#admissions" className="telemetry-link">2026 本科招生专栏 ↗</a>
            <a href="#admissions" className="telemetry-link">研究生统考大纲 ↗</a>
            <a href="#academic" className="telemetry-link">名家讲坛预约 ↗</a>
            <span className="telemetry-auth">统一身份认证 · 教学管理系统</span>
          </div>
        </div>
      </aside>

      {/* 悬浮磨砂多维导航中枢 (Floating HUD Header) */}
      <header className="hud-header">
        <div className="hud-container">
          {/* 官方校徽呈现 */}
          <div className="hud-brand-area">
            <a href="#top" className="hud-logo-anchor">
              <img
                src="./college-logo.png"
                alt="山东工艺美术学院 人文艺术学院"
                className="hud-official-logo"
              />
            </a>
            <div className="hud-academic-badges">
              <span className="hud-badge-item badge-primary">国家级一流本科专业</span>
              <span className="hud-badge-item badge-accent">软科中国大学专业排名 A+</span>
            </div>
          </div>

          {/* 交互式特色系部快速调色盘切换器 */}
          <nav className="hud-dept-nav">
            <button
              className={`hud-dept-btn ${activeDept === "design" ? "active" : ""}`}
              onClick={() => setActiveDept("design")}
            >
              <span className="dept-dot dot-blue"></span>
              <span className="dept-label">艺术设计学系</span>
            </button>
            <button
              className={`hud-dept-btn ${activeDept === "intermedia" ? "active" : ""}`}
              onClick={() => setActiveDept("intermedia")}
            >
              <span className="dept-dot dot-lime"></span>
              <span className="dept-label">跨媒介计算实验</span>
            </button>
            <button
              className={`hud-dept-btn ${activeDept === "history" ? "active" : ""}`}
              onClick={() => setActiveDept("history")}
            >
              <span className="dept-dot dot-red"></span>
              <span className="dept-label">艺术史论系</span>
            </button>
            <button
              className={`hud-dept-btn ${activeDept === "heritage" ? "active" : ""}`}
              onClick={() => setActiveDept("heritage")}
            >
              <span className="dept-dot dot-orange"></span>
              <span className="dept-label">黄河民艺研究所</span>
            </button>
          </nav>

          <div className="hud-actions">
            <a href="#admissions" className="hud-cta-button">
              <span>2026 招考指南</span>
              <span className="cta-arrow">↗</span>
            </a>
            <button
              className="hud-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="切换移动端导航"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* 移动端抽屉导航 */}
        {mobileMenuOpen && (
          <div className="hud-mobile-drawer">
            <div className="mobile-dept-title">选择学院系部视角：</div>
            <div className="mobile-dept-buttons">
              <button
                className={`mobile-dept-item ${activeDept === "design" ? "active" : ""}`}
                onClick={() => { setActiveDept("design"); setMobileMenuOpen(false); }}
              >
                艺术设计学系（软科全国A+）
              </button>
              <button
                className={`mobile-dept-item ${activeDept === "intermedia" ? "active" : ""}`}
                onClick={() => { setActiveDept("intermedia"); setMobileMenuOpen(false); }}
              >
                跨媒介艺术与计算交互重点实验室
              </button>
              <button
                className={`mobile-dept-item ${activeDept === "history" ? "active" : ""}`}
                onClick={() => { setActiveDept("history"); setMobileMenuOpen(false); }}
              >
                艺术史论系（国家级一流本科专业）
              </button>
              <button
                className={`mobile-dept-item ${activeDept === "heritage" ? "active" : ""}`}
                onClick={() => { setActiveDept("heritage"); setMobileMenuOpen(false); }}
              >
                黄河流域民间艺术研究所
              </button>
            </div>
            <div className="mobile-drawer-links">
              <a href="#departments" onClick={() => setMobileMenuOpen(false)}>学科专业</a>
              <a href="#research" onClick={() => setMobileMenuOpen(false)}>教学科研成果</a>
              <a href="#academic" onClick={() => setMobileMenuOpen(false)}>学术名家讲坛</a>
              <a href="#faculty" onClick={() => setMobileMenuOpen(false)}>师资队伍</a>
              <a href="#admissions" onClick={() => setMobileMenuOpen(false)}>招生指南</a>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        {/* 动态双轨道走字横幅 (Kinetic Marquee Ribbons) */}
        <div className="kinetic-ribbons-wrap">
          <div className="ribbon-strip ribbon-primary">
            <div className="ribbon-track">
              <span>★ 山东工艺美术学院 人文艺术学院</span>
              <span>· 国家级一流本科专业建设点</span>
              <span>· 艺术设计学 软科中国大学专业排名全国 A+</span>
              <span>· 艺术史论 国家一流专业</span>
              <span>· 2026年本科与研究生招生工作全面启动</span>
              <span>★ 山东工艺美术学院 人文艺术学院</span>
              <span>· 国家级一流本科专业建设点</span>
              <span>· 艺术设计学 软科中国大学专业排名全国 A+</span>
              <span>· 艺术史论 国家一流专业</span>
              <span>· 2026年本科与研究生招生工作全面启动</span>
            </div>
          </div>
          <div className="ribbon-strip ribbon-secondary">
            <div className="ribbon-track track-reverse">
              <span>以文化人 · 艺文相长 · 守正拓新 · 知行合一</span>
              <span>/ 扎根齐鲁深厚文脉，涵育当代造物思想 /</span>
              <span>建设兼具中华底蕴与国际先锋视野的一流艺术设计人文高地</span>
              <span>以文化人 · 艺文相长 · 守正拓新 · 知行合一</span>
              <span>/ 扎根齐鲁深厚文脉，涵育当代造物思想 /</span>
              <span>建设兼具中华底蕴与国际先锋视野的一流艺术设计人文高地</span>
            </div>
          </div>
        </div>

        {/* 1. 突破常规的首屏核心视窗 (Chromatic Monumental Hero) */}
        <section className="chromatic-hero-section">
          {/* 背景巨幅艺术字水印 */}
          <div className="hero-background-watermark" aria-hidden="true">
            SHANDONG ARTS &amp; HUMANITIES · 2026
          </div>

          <div className="hero-content-stage">
            {/* 左侧：醒目办学主张与指标群 */}
            <div className="hero-statement-col">
              <div className="hero-kicker-row">
                <span className="live-pulse-badge">ACADEMIC MATRIX 2026</span>
                <span className="kicker-division">/ 系部聚焦点：{
                  activeDept === "design" ? "艺术设计学（全国A+）" :
                  activeDept === "intermedia" ? "跨媒介艺术与计算交互实验室" :
                  activeDept === "history" ? "艺术史论系（国家一流本科专业）" :
                  "黄河流域民间艺术研究所"
                }</span>
              </div>

              <h1 className="hero-monumental-motto">
                <span className="motto-row row-primary">以文化人 · 艺文相长</span>
                <span className="motto-row row-secondary">守正拓新 · 知行合一</span>
              </h1>

              <div className="hero-lead-highlight">
                立足齐鲁深厚文脉，涵育当代造物思想。以现代设计哲学深耕传统工艺，以跨媒介技术叩问艺术未来。
              </div>

              <p className="hero-subtext">
                人文艺术学院现设艺术设计学系与艺术史论系，建有黄河流域传统工艺与现代设计文化研究中心、跨媒介艺术与非遗活化重点实验室。致力于培养兼具学术素养、当代批判意识与前瞻创新能力的复合型艺术设计与史论拔尖人才。
              </p>

              {/* 核心办学指标：高对比度色块 */}
              <div className="hero-metrics-matrix">
                <div className="metric-box box-accent">
                  <div className="metric-header">DISCIPLINE RANK</div>
                  <div className="metric-number">全国 A+</div>
                  <div className="metric-caption">软科中国大学专业排名顶尖评级</div>
                </div>
                <div className="metric-box">
                  <div className="metric-header">NATIONAL MAJORS</div>
                  <div className="metric-number">2 个</div>
                  <div className="metric-caption">国家级一流本科专业建设点</div>
                </div>
                <div className="metric-box">
                  <div className="metric-header">DOCTORAL FACULTY</div>
                  <div className="metric-number">100%</div>
                  <div className="metric-caption">专任教师高级职称及博士比</div>
                </div>
                <div className="metric-box">
                  <div className="metric-header">KEY RESEARCH</div>
                  <div className="metric-number">50+ 项</div>
                  <div className="metric-caption">国家社科重点课题及重大项目</div>
                </div>
              </div>

              <div className="hero-buttons-row">
                <a href="#departments" className="btn-action-primary">
                  <span>浏览学科专业与培养方案</span>
                  <span className="btn-sym">↓</span>
                </a>
                <a href="#admissions" className="btn-action-secondary">
                  <span>2026 招考报考指南</span>
                  <span className="btn-sym">↗</span>
                </a>
              </div>
            </div>

            {/* 右侧：多视角展陈画框与实况特藏 */}
            <div className="hero-visual-col">
              <div className="visual-stage-frame">
                <div className="frame-screen">
                  <img
                    src={heroScenes[heroImageIdx].src}
                    alt={heroScenes[heroImageIdx].name}
                    className="scene-display-img"
                  />
                  <div className="scene-overlay-badge">
                    <span className="overlay-tag">{heroScenes[heroImageIdx].tag}</span>
                    <span className="overlay-name">{heroScenes[heroImageIdx].name}</span>
                  </div>
                </div>

                <div className="frame-dock">
                  <div className="frame-meta">
                    <span className="meta-index">SCENE [0{heroImageIdx + 1}/03]</span>
                    <span className="meta-hint">点击右侧切换展陈现场</span>
                  </div>
                  <div className="frame-selector-dots">
                    {heroScenes.map((scene, idx) => (
                      <button
                        key={idx}
                        className={`scene-select-btn ${heroImageIdx === idx ? "active" : ""}`}
                        onClick={() => setHeroImageIdx(idx)}
                        aria-label={`切换到场景 ${idx + 1}`}
                      >
                        0{idx + 1}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 创新展陈说明卡 */}
              <div className="visual-live-card">
                <div className="live-card-top">
                  <span className="live-icon">◆</span>
                  <span className="live-title">长清校区当代艺术文献特藏中心</span>
                </div>
                <p className="live-card-desc">
                  常年面向师生与国内外学者开放。馆藏沿黄九省区民间工艺实物标本逾万件、中国古代器物图录珍本文献及历届国家级优秀毕业创作档案。
                </p>
                <div className="live-card-bottom">
                  <span>开放时间：周一至周五 08:30 - 17:30</span>
                  <a href="#research" className="live-link">查阅学术成果档案 →</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 学科设置与教学系部 (Avant-Garde Atelier Matrix) */}
        <section className="atelier-matrix-section" id="departments">
          <div className="section-head-banner">
            <div className="banner-tag">[ ACADEMIC DEPARTMENTS &amp; LABS ]</div>
            <h2 className="banner-title">学科设置与教学系部</h2>
            <p className="banner-desc">
              构筑“设计理论深度 + 史论典籍根基 + 跨媒体先锋实验 + 黄河非遗在地活化”四位一体的拔尖育人矩阵。
            </p>
          </div>

          <div className="ateliers-grid">
            {/* 卡片 1：艺术设计学系 (主打核心专业，跨双列) */}
            <article className={`atelier-card card-design ${activeDept === "design" ? "card-highlighted" : ""}`}>
              <div className="card-chroma-stripe stripe-blue"></div>
              <div className="card-inner">
                <div className="card-badge-row">
                  <span className="badge-national">国家级一流本科专业建设点</span>
                  <span className="badge-ranking">软科全国 A+ 学科</span>
                  <span className="badge-code">MAJOR CODE: 130501</span>
                </div>

                <h3 className="atelier-title">艺术设计学系</h3>
                <p className="atelier-intro">
                  立足深厚人文底蕴与现代设计实践，培养面向文化战略与设计策划、信息与交互体验、文化遗产数字化传播的高级复合型创新人才。
                </p>

                <div className="atelier-pillars">
                  <div className="pillar-cell">
                    <div className="pillar-label">核心培养方向</div>
                    <ul className="pillar-items">
                      <li>文化战略与设计策划</li>
                      <li>信息与界面交互体验设计</li>
                      <li>当代生活方式与文创研发</li>
                      <li>现代设计史与设计文化批评</li>
                    </ul>
                  </div>
                  <div className="pillar-cell">
                    <div className="pillar-label">产教支撑平台</div>
                    <ul className="pillar-items">
                      <li>现代设计战略研究所</li>
                      <li>信息架构与文创体验工作室</li>
                      <li>国家级实验教学示范中心</li>
                      <li>齐鲁文创产教融合研发基地</li>
                    </ul>
                  </div>
                </div>

                <div className="atelier-card-bottom">
                  <span className="degree-spec">授予学位：艺术学学士 / 艺术学硕士 / 艺术专业硕士 (MFA)</span>
                  <a href="#admissions" className="atelier-link">查看该专业 2026 培养方案 ↗</a>
                </div>
              </div>
            </article>

            {/* 卡片 2：跨媒介艺术与计算交互重点实验室 */}
            <article className={`atelier-card card-intermedia ${activeDept === "intermedia" ? "card-highlighted" : ""}`}>
              <div className="card-chroma-stripe stripe-lime"></div>
              <div className="card-inner">
                <div className="card-badge-row">
                  <span className="badge-lab">前沿交叉重点实验室</span>
                  <span className="badge-code">LAB-INTERMEDIA</span>
                </div>

                <h3 className="atelier-title">跨媒介艺术与计算交互重点实验室</h3>
                <p className="atelier-intro">
                  聚焦人工智能生成艺术（AIGC）、沉浸式空间视听、动态数据可视化及人机协同创作，探索科技与东方美学的共生边界。
                </p>

                <div className="atelier-tag-cloud">
                  <span className="tech-tag">生成式计算艺术</span>
                  <span className="tech-tag">多通道空间声场</span>
                  <span className="tech-tag">虚拟数字孪生</span>
                  <span className="tech-tag">气候与环境数据感知</span>
                </div>

                <div className="atelier-card-bottom">
                  <span className="degree-spec">年度学术活动：国际新媒体艺术展映与计算工坊</span>
                </div>
              </div>
            </article>

            {/* 卡片 3：艺术史论系 */}
            <article className={`atelier-card card-history ${activeDept === "history" ? "card-highlighted" : ""}`}>
              <div className="card-chroma-stripe stripe-red"></div>
              <div className="card-inner">
                <div className="card-badge-row">
                  <span className="badge-national">国家级一流本科专业</span>
                  <span className="badge-code">MAJOR CODE: 130101</span>
                </div>

                <h3 className="atelier-title">艺术史论系</h3>
                <p className="atelier-intro">
                  依托齐鲁文化资源，深耕中国古代造物制度史、手工艺文献考据与现代艺术批评，强化典籍研读与实地考察双重功底。
                </p>

                <div className="atelier-tag-cloud">
                  <span className="tech-tag">中国工艺美术史</span>
                  <span className="tech-tag">视觉文化与当代批评</span>
                  <span className="tech-tag">器物考古文献学</span>
                  <span className="tech-tag">艺术策展与博物馆学</span>
                </div>

                <div className="atelier-card-bottom">
                  <span className="degree-spec">标志性出版物：《中国工艺史料集成》《齐鲁手工艺考》</span>
                </div>
              </div>
            </article>

            {/* 卡片 4：黄河流域民间艺术研究所 */}
            <article className={`atelier-card card-heritage ${activeDept === "heritage" ? "card-highlighted" : ""}`}>
              <div className="card-chroma-stripe stripe-orange"></div>
              <div className="card-inner">
                <div className="card-badge-row">
                  <span className="badge-heritage">省级重点人文社科基地</span>
                  <span className="badge-code">HERITAGE-RESEARCH</span>
                </div>

                <h3 className="atelier-title">黄河流域民间艺术研究所</h3>
                <p className="atelier-intro">
                  致力于沿黄九省区民间美术田野考察、抢救性非遗建档与现代在地转化，将高校学术资源深度投入乡村振兴与社会美育实践。
                </p>

                <div className="atelier-tag-cloud">
                  <span className="tech-tag">黄河手工艺田野测绘</span>
                  <span className="tech-tag">乡村在地设计介入</span>
                  <span className="tech-tag">非遗数字化图谱</span>
                  <span className="tech-tag">传统造物实物标本</span>
                </div>

                <div className="atelier-card-bottom">
                  <span className="degree-spec">科研支撑平台：全流域手工艺文献实物标本库</span>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 3. 教学科研与学术展陈成果 (Infinite Atelier Wall) */}
        <section className="research-gallery-section" id="research">
          <div className="gallery-header-block">
            <div className="gallery-title-box">
              <span className="gallery-kicker">[ CURATORIAL ARCHIVE &amp; RESEARCH ]</span>
              <h2 className="gallery-title">教学科研与学术展陈成果</h2>
              <p className="gallery-desc">
                坚持把学术论文写在祖国大地上，以高水平科研项目与先锋艺术创作回应新时代命题。
              </p>
            </div>

            {/* 成果类别筛选器 */}
            <div className="gallery-filter-bar" role="tablist">
              <button
                className={`filter-pill ${activeCategory === "all" ? "active" : ""}`}
                onClick={() => setActiveCategory("all")}
              >
                全部重点成果 [{researchItems.length}]
              </button>
              <button
                className={`filter-pill ${activeCategory === "national" ? "active" : ""}`}
                onClick={() => setActiveCategory("national")}
              >
                国家社科重点课题
              </button>
              <button
                className={`filter-pill ${activeCategory === "treatise" ? "active" : ""}`}
                onClick={() => setActiveCategory("treatise")}
              >
                学术文献专著
              </button>
              <button
                className={`filter-pill ${activeCategory === "rural" ? "active" : ""}`}
                onClick={() => setActiveCategory("rural")}
              >
                乡村在地振兴
              </button>
              <button
                className={`filter-pill ${activeCategory === "exhibition" ? "active" : ""}`}
                onClick={() => setActiveCategory("exhibition")}
              >
                实验展演与计算媒介
              </button>
            </div>
          </div>

          {/* 成果作品卡片网格 */}
          <div className="gallery-cards-grid">
            {filteredResearch.map((item) => (
              <article
                key={item.id}
                className="gallery-work-card"
                onClick={() => setSelectedResearch(item)}
                style={{ "--card-accent": item.accentColor } as React.CSSProperties}
              >
                <div className="work-image-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="work-cover-img"
                    loading="lazy"
                  />
                  <div className="work-code-tag">{item.code}</div>
                  <div className="work-hover-overlay">
                    <span className="hover-action-text">点击调取学术档案详报 ↗</span>
                  </div>
                </div>

                <div className="work-content-box">
                  <div className="work-meta-row">
                    <span className="work-role-badge">{item.role}</span>
                    <span className="work-year">{item.year}</span>
                  </div>

                  <h3 className="work-title">{item.title}</h3>
                  <div className="work-leader">{item.leader} · {item.dept}</div>
                  <p className="work-medium">{item.medium}</p>

                  <div className="work-footer-link">
                    <span>查阅学术摘要与成果鉴定报告</span>
                    <span className="link-arrow">→</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 成果学术详报浮层 (Dossier Modal) */}
        {selectedResearch && (
          <div
            className="dossier-overlay-backdrop"
            onClick={() => setSelectedResearch(null)}
          >
            <div
              className="dossier-modal-window"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="dossier-modal-header">
                <div className="dossier-header-left">
                  <span className="dossier-serial">{selectedResearch.code}</span>
                  <span className="dossier-dept-badge">{selectedResearch.dept}</span>
                </div>
                <button
                  className="dossier-close-btn"
                  onClick={() => setSelectedResearch(null)}
                  aria-label="关闭窗口"
                >
                  ✕
                </button>
              </div>

              <div className="dossier-modal-body">
                <div className="dossier-media-pane">
                  <img
                    src={selectedResearch.image}
                    alt={selectedResearch.title}
                    className="dossier-media-img"
                  />
                </div>
                <div className="dossier-text-pane">
                  <div className="dossier-level-tag">{selectedResearch.role}</div>
                  <h3 className="dossier-title">{selectedResearch.title}</h3>

                  <div className="dossier-specs-list">
                    <div className="spec-row">
                      <span className="spec-name">课题承担团队：</span>
                      <span className="spec-val">{selectedResearch.leader}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-name">项目周期：</span>
                      <span className="spec-val">{selectedResearch.year}</span>
                    </div>
                    <div className="spec-row">
                      <span className="spec-name">媒介形式与规制：</span>
                      <span className="spec-val">{selectedResearch.medium}</span>
                    </div>
                  </div>

                  <div className="dossier-summary-block">
                    <div className="summary-heading">学术价值与核心贡献：</div>
                    <p className="summary-paragraph">{selectedResearch.summary}</p>
                  </div>

                  <div className="dossier-modal-actions">
                    <button
                      className="btn-dossier-close"
                      onClick={() => setSelectedResearch(null)}
                    >
                      返回展陈长廊
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. 齐鲁艺文学术名家讲坛 (Avant-Garde Lecture Passes) */}
        <section className="lectures-section" id="academic">
          <div className="section-head-banner">
            <div className="banner-tag">[ FORUMS &amp; LECTURES ]</div>
            <h2 className="banner-title">齐鲁艺文学术名家讲坛</h2>
            <p className="banner-desc">
              汇聚全国艺术学理论、设计界权威学者与前沿创作者，打造兼具思想锋芒与学术广度的对话阵地。
            </p>
          </div>

          <div className="lecture-passes-stack">
            {lectureList.map((item) => (
              <div
                key={item.no}
                className="lecture-pass-card"
                style={{ "--ticket-color": item.badgeColor } as React.CSSProperties}
              >
                {/* 左侧：时间门票区 */}
                <div className="pass-stub">
                  <span className="stub-code">{item.ticketCode}</span>
                  <div className="stub-date-num">{item.date}</div>
                  <div className="stub-time-range">{item.time}</div>
                  <span className="stub-barcode" aria-hidden="true">|||||||||||||||||||||||</span>
                </div>

                {/* 中间：讲坛主题与学者详情 */}
                <div className="pass-main">
                  <div className="pass-series-line">
                    <span className="pass-series-name">{item.series}</span>
                    <span className="pass-status-pill">{item.status}</span>
                  </div>
                  <h3 className="pass-lecture-title">{item.title}</h3>
                  <div className="pass-speaker-info">
                    <span className="speaker-highlight">{item.speaker}</span>
                    <span className="speaker-affiliation">{item.speakerTitle}</span>
                  </div>
                  <div className="pass-venue-row">
                    <span className="venue-label">学术会场：</span>
                    <span className="venue-name">{item.location}</span>
                  </div>
                </div>

                {/* 右侧：预约行动通道 */}
                <div className="pass-action-box">
                  <a href="#admissions" className="btn-pass-reserve">
                    <span>即刻预约席位</span>
                    <span className="reserve-arrow">→</span>
                  </a>
                  <span className="pass-notice">学术席位限额预约 · 凭校园卡入场</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. 师资队伍与学术带头人 (Faculty Leadership) */}
        <section className="faculty-section" id="faculty">
          <div className="section-head-banner">
            <div className="banner-tag">[ ACADEMIC LEADERSHIP ]</div>
            <h2 className="banner-title">师资队伍与学科带头人</h2>
            <p className="banner-desc">
              汇聚国务院特殊津贴专家、泰山学者、教育部教指委委员、全国美展评委等具有全国影响力的名师名家。
            </p>
          </div>

          <div className="faculty-chroma-grid">
            {facultyList.map((f, idx) => (
              <div
                key={idx}
                className="faculty-card"
                style={{ "--faculty-color": f.color } as React.CSSProperties}
              >
                <div className="faculty-top-row">
                  <span className="faculty-index-tag">FELLOW 0{idx + 1}</span>
                  <span className="faculty-domain-pill">{f.tag}</span>
                </div>

                <h3 className="faculty-scholar-name">{f.name}</h3>
                <div className="faculty-academic-title">{f.title}</div>
                <div className="faculty-admin-role">{f.role}</div>

                <div className="faculty-card-divider"></div>

                <div className="faculty-bio-block">
                  <span className="bio-label">主要研究领域：</span>
                  <p className="bio-text">{f.direction}</p>
                </div>

                <div className="faculty-bio-block">
                  <span className="bio-label">代表性著述与成果：</span>
                  <p className="bio-text">{f.works}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. 2026年招生报考与人才培养指南 (Admissions Hub) */}
        <section className="admissions-launchpad-section" id="admissions">
          <div className="launchpad-container">
            <div className="launchpad-header">
              <span className="launchpad-tag">ADMISSIONS &amp; ACADEMIC INQUIRY 2026</span>
              <h2 className="launchpad-title">2026 年度本科生与研究生招考报考指南</h2>
              <p className="launchpad-lead">
                热忱欢迎热爱中华优秀传统造物文化、具备敏锐艺术观察力与批判性思考能力的青年学者与学子报考人文艺术学院。
              </p>
            </div>

            <div className="launchpad-tracks-grid">
              <div className="track-card">
                <div className="track-accent-bar bar-blue"></div>
                <h3 className="track-title">本科生招生（高考统考）</h3>
                <p className="track-desc">
                  面向全国招收艺术设计学（软科全国A+）、艺术史论专业本科生。实行全程导师制、创新工作坊与田野考察育人机制。
                </p>
                <ul className="track-links-list">
                  <li><a href="#top">2026 艺术设计学专业本科招生简章与专业计划 ↗</a></li>
                  <li><a href="#top">2026 艺术史论专业高考报考指南及录取分数线 ↗</a></li>
                  <li><a href="#top">历年各省份录取分数线与毕业生就业质量报告 ↗</a></li>
                </ul>
              </div>

              <div className="track-card">
                <div className="track-accent-bar bar-lime"></div>
                <h3 className="track-title">硕士研究生与科研流动站</h3>
                <p className="track-desc">
                  招收艺术学学术学位（设计历史与理论、艺术批评方向）及艺术专业硕士（MFA，文创策划与展示设计方向）。设有科研创新基金。
                </p>
                <ul className="track-links-list">
                  <li><a href="#top">2026 硕士研究生初试统考大纲与专业参考书目 ↗</a></li>
                  <li><a href="#top">推荐免试优秀应届本科生攻读硕士研究生实施办法 ↗</a></li>
                  <li><a href="#top">青年学者科研流动站与访问学者招募公告 ↗</a></li>
                </ul>
              </div>
            </div>

            <div className="launchpad-action-deck">
              <a href="#top" className="btn-launchpad-primary">
                <span>下载 2026 人文艺术学院招生简章完整版 (PDF)</span>
                <span className="btn-icon">↓</span>
              </a>
              <a href="#academic" className="btn-launchpad-secondary">
                <span>招生咨询热线：0531-89626000（教务办）</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* 规范官方高校底栏 (含官方校徽与备案信息) */}
      <footer className="avant-official-footer">
        <div className="footer-container">
          <div className="footer-brand-section">
            <div className="footer-logo-wrap">
              <img
                src="./college-logo.png"
                alt="山东工艺美术学院 人文艺术学院"
                className="footer-official-logo"
              />
            </div>
            <div className="footer-motto-callout">
              “以文化人，艺文相长；守正拓新，知行合一”
            </div>
          </div>

          <div className="footer-columns-grid">
            <div className="footer-col-item">
              <h4>校区驻地与联络</h4>
              <p>地址：山东省济南市长清区大学科技园大学路1号</p>
              <p>邮政编码：250300</p>
              <p>学院办公室：0531-89626000</p>
              <p>教学科研办公室：0531-89626001</p>
              <p>官方邮箱：sha_office@sdada.edu.cn</p>
            </div>

            <div className="footer-col-item">
              <h4>特色系部与平台</h4>
              <p>艺术设计学系（国家级一流专业 / 软科全国A+）</p>
              <p>艺术史论系（国家级一流本科专业）</p>
              <p>跨媒介艺术与计算交互重点实验室</p>
              <p>黄河流域民间艺术研究所</p>
            </div>

            <div className="footer-col-item">
              <h4>校内学术与管理通道</h4>
              <p><a href="#top">山东工艺美术学院官网 (sdada.edu.cn)</a></p>
              <p><a href="#top">教务综合管理系统</a></p>
              <p><a href="#top">研究生处 / 研究生培养</a></p>
              <p><a href="#top">图书馆数字资源与知网文献镜像</a></p>
            </div>
          </div>

          <div className="footer-legal-bar">
            <span>版权所有 © 2026 山东工艺美术学院 人文艺术学院 · 官方网站改版方案三（先锋创意版）</span>
            <span>鲁ICP备05002166号 · 鲁公网安备 37011302000001号</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
