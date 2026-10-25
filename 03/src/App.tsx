import { useState } from "react"

// 学院精选真实学术展陈、文献特藏与田野考察影像
const curatedImages = {
  gallery: "./hero-exhibition.jpg",
  archive: "./field-library.jpg",
  folkField: "./research-folk-art.jpg",
  installation: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?auto=format&fit=crop&w=1600&q=88",
  digitalMedia: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=86",
}

type ViewMode = "canvas" | "matrix" | "archive"
type CategoryType = "all" | "national" | "treatise" | "exhibition" | "rural"

interface ResearchItem {
  id: string
  code: string
  title: string
  category: CategoryType
  year: string
  leader: string
  role: string
  medium: string
  summary: string
  image: string
}

const researchItems: ResearchItem[] = [
  {
    id: "01",
    code: "KEY-2026-01",
    title: "黄河流域民间手工艺调查与数字化活化图录",
    category: "national",
    year: "2025 - 2026",
    leader: "民间美术与文化遗产研究所",
    role: "国家社科基金艺术学重点项目",
    medium: "全流域田野测绘、口述史口述影音文献、全景数字图谱（八卷本）",
    summary: "历时五年深入沿黄九省区传统手工艺聚落，抢救性建档记录濒危手工艺门类，提出基于活态传承的现代造物转化与乡村文化振兴实施框架。",
    image: curatedImages.folkField,
  },
  {
    id: "02",
    code: "PUB-2026-04",
    title: "中国古代造物思想与器物制度考论",
    category: "treatise",
    year: "2025",
    leader: "艺术史论系古代造物史课题组",
    role: "国家出版基金重点资助项目",
    medium: "学术文献专著 · 齐鲁书社出版 · 入选《中华艺文文库》",
    summary: "从经籍文献、出土器物与工官制度三维视阈，系统梳理中华造物文化的哲学本体、礼乐制度与营造工则，为现代设计学建构自主知识体系奠定文献根基。",
    image: curatedImages.archive,
  },
  {
    id: "03",
    code: "EXH-2026-08",
    title: "生生不息：齐鲁乡土聚落在地设计与社会美育实践",
    category: "rural",
    year: "2026",
    leader: "社会服务与在地设计联合工作坊",
    role: "第十四届全国美术作品展览设计艺术展入选成果",
    medium: "在地建筑构件活化、乡土公共空间改造方案、社会美育参与模型",
    summary: "拒绝大拆大建式旅游景观开发，将设计介入转化为乡村社区日常交往仪式的激活剂，探索手工艺与现代设计协同赋能的乡村美育新范式。",
    image: curatedImages.gallery,
  },
  {
    id: "04",
    code: "LAB-2026-02",
    title: "算法诗学：生成式交互装置与多通道空间感知实验",
    category: "exhibition",
    year: "2026",
    leader: "跨媒介与数字艺术重点实验室",
    role: "国际新媒体艺术年展特邀参展项目",
    medium: "多通道实时生成影像系统、环境气压流变感知传感器、声音交互架构",
    summary: "将传统山水画论中的“气韵生动”转译为实时神经元生成算法参数，探索人工智能时代机器智能对东方空间意境的重构可能。",
    image: curatedImages.digitalMedia,
  },
]

const lectureList = [
  {
    no: "01",
    series: "齐鲁艺文名家讲坛 · 第52期",
    date: "2026.04.18",
    time: "14:30 - 17:00",
    title: "立足中国大地：新时代艺术教育与设计学科的文化使命",
    speaker: "范迪安 教授",
    speakerTitle: "中国美术家协会主席 / 原中央美术学院院长",
    location: "长清校区人文艺术学院二楼学术报告厅",
    status: "开放预约",
  },
  {
    no: "02",
    series: "国家社科重点课题阶段汇报",
    date: "2026.04.25",
    time: "09:30 - 12:00",
    title: "黄河文化带手工艺遗存抢救性测绘与数字谱系建构",
    speaker: "许文清 教授",
    speakerTitle: "院学术委员会主任 / 博士生导师 / 享受国务院特贴专家",
    location: "学院三楼视觉文献特藏室",
    status: "院内研讨",
  },
  {
    no: "03",
    series: "新文科交叉青年学术沙龙 · 第18期",
    date: "2026.05.08",
    time: "14:00 - 16:30",
    title: "生成式人工智能时代的艺术批评方法论重塑与图像主体性",
    speaker: "林见深 教授、莫维安 副教授 与特邀青年学者",
    speakerTitle: "艺术学理论 · 计算机科学跨界对谈组",
    location: "跨媒介艺术实验室 302",
    status: "同步直播",
  },
]

const facultyList = [
  {
    name: "许文清",
    title: "二级教授 / 博士生导师",
    role: "院学术委员会主任 / 国务院政府特殊津贴专家",
    direction: "设计艺术学理论、艺术批评史、中华造物思想",
    works: "主编《中国现代设计史论》《形式之后》，主持国家社科重大课题",
  },
  {
    name: "陈立言",
    title: "特聘教授 / 博士生导师",
    role: "当代空间艺术中心主任 / 中国美协设计艺委会委员",
    direction: "展示与展陈空间设计、跨媒介环境装置、策展实践",
    works: "威尼斯双年展特约研究学者，主持全国美展展陈空间总体设计",
  },
  {
    name: "林见深",
    title: "教授 / 史论学科带头人",
    role: "视觉文化与文献研究所所长 / 山东省教学名师",
    direction: "中国古代画论、工艺美术史学史、非遗文献考证",
    works: "著有《物象与心境：中国艺术史的阐释维》《齐鲁手工艺考》",
  },
  {
    name: "莫维安",
    title: "副教授 / 青年拔尖人才",
    role: "数字媒体艺术专业主任 / 泰山学者青年专家",
    direction: "智能人机交互、算法生成艺术、文化遗产数字孪生",
    works: "作品参展 SIGGRAPH、ISEA，获多项国家计算机软件著作权",
  },
]

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>("canvas")
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all")
  const [selectedResearch, setSelectedResearch] = useState<ResearchItem | null>(null)
  const [activeTab, setActiveTab] = useState<string>("overview")
  const [heroImageIndex, setHeroImageIndex] = useState<number>(0)

  const heroImages = [
    { src: curatedImages.gallery, label: "学院当代艺术与设计综合展陈大厅" },
    { src: curatedImages.archive, label: "传统器物与文献文献特藏中心" },
    { src: curatedImages.folkField, label: "黄河流域民间艺术田野调查实物库" },
  ]

  const handleModeChange = (mode: ViewMode) => {
    setViewMode(mode)
    if (mode === "canvas") {
      const el = document.getElementById("intro")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    } else if (mode === "matrix") {
      const el = document.getElementById("departments")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    } else if (mode === "archive") {
      const el = document.getElementById("research")
      if (el) el.scrollIntoView({ behavior: "smooth" })
    }
  }

  const filteredResearch =
    activeCategory === "all"
      ? researchItems
      : researchItems.filter((item) => item.category === activeCategory)

  return (
    <div className="avant-garde-academy">
      {/* 顶部实用服务与校务通行栏 */}
      <aside className="campus-utility-bar">
        <div className="utility-inner">
          <div className="utility-left">
            <span className="utility-tag">山东工艺美术学院 · 人文艺术学院官方门户</span>
            <span className="utility-sep">/</span>
            <span className="utility-calendar">2026年春季学期 · 第8教学周 · 校历周刊</span>
          </div>
          <div className="utility-right">
            <a href="#admissions" className="utility-link">2026 本科生招生专栏</a>
            <a href="#admissions" className="utility-link">硕士招考统考大纲</a>
            <a href="#academic" className="utility-link">讲座预约入口</a>
            <span className="utility-auth">校内教务 · 统一身份认证 ↗</span>
          </div>
        </div>
      </aside>

      {/* 移动端顶栏 (含官方 Logo) */}
      <header className="mobile-masthead">
        <a href="#top" className="mobile-logo-wrap">
          <img
            src="./college-logo.png"
            alt="山东工艺美术学院人文艺术学院"
            className="mobile-official-logo"
          />
        </a>
        <div className="mobile-view-tabs">
          <button
            className={`mobile-tab-btn ${viewMode === "canvas" ? "active" : ""}`}
            onClick={() => handleModeChange("canvas")}
          >
            综合画卷
          </button>
          <button
            className={`mobile-tab-btn ${viewMode === "matrix" ? "active" : ""}`}
            onClick={() => handleModeChange("matrix")}
          >
            学科矩阵
          </button>
          <button
            className={`mobile-tab-btn ${viewMode === "archive" ? "active" : ""}`}
            onClick={() => handleModeChange("archive")}
          >
            成果年鉴
          </button>
        </div>
      </header>

      {/* 主体非对称双轴空间架构 */}
      <div className="spatial-split-layout">
        {/* 左侧：严谨建筑级常驻学术控制轴 (Persistent Control Spine) */}
        <aside className="academic-spine">
          <div className="spine-sticky-box">
            {/* 官方 Logo 呈现区 */}
            <div className="spine-brand-block">
              <a href="#top" className="official-logo-link" title="返回顶部">
                <img
                  src="./college-logo.png"
                  alt="山东工艺美术学院 人文艺术学院"
                  className="official-college-logo"
                />
              </a>
              <div className="spine-sub-badge">
                <span className="badge-line">国家级一流本科专业建设点</span>
                <span className="badge-line">软科中国大学专业排名 A+ 学科</span>
              </div>
            </div>

            {/* 视角切换器 (打破常规的浏览模式) */}
            <div className="perspective-selector">
              <div className="selector-title">空间透视模式</div>
              <div className="selector-pills">
                <button
                  className={`pill-btn ${viewMode === "canvas" ? "active" : ""}`}
                  onClick={() => handleModeChange("canvas")}
                  title="画卷式多维非对称排版"
                >
                  <span className="pill-code">01</span>
                  <span className="pill-text">综合画卷</span>
                </button>
                <button
                  className={`pill-btn ${viewMode === "matrix" ? "active" : ""}`}
                  onClick={() => handleModeChange("matrix")}
                  title="聚焦系部与实验室工程网格"
                >
                  <span className="pill-code">02</span>
                  <span className="pill-text">学科矩阵</span>
                </button>
                <button
                  className={`pill-btn ${viewMode === "archive" ? "active" : ""}`}
                  onClick={() => handleModeChange("archive")}
                  title="检索学术课题文献与创作纪年"
                >
                  <span className="pill-code">03</span>
                  <span className="pill-text">成果年鉴</span>
                </button>
              </div>
            </div>

            {/* 垂直学术章节索引 */}
            <nav className="spine-index-nav">
              <div className="nav-group-title">学院目录索引</div>
              <ul className="index-links">
                <li>
                  <a
                    href="#intro"
                    className={`index-item ${activeTab === "overview" ? "current" : ""}`}
                    onClick={() => setActiveTab("overview")}
                  >
                    <span className="index-num">§ 01</span>
                    <span className="index-name">学院概况与办学定位</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#departments"
                    className={`index-item ${activeTab === "departments" ? "current" : ""}`}
                    onClick={() => setActiveTab("departments")}
                  >
                    <span className="index-num">§ 02</span>
                    <span className="index-name">特色系部与前沿实验室</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#research"
                    className={`index-item ${activeTab === "research" ? "current" : ""}`}
                    onClick={() => setActiveTab("research")}
                  >
                    <span className="index-num">§ 03</span>
                    <span className="index-name">国家重点课题与创作成果</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#academic"
                    className={`index-item ${activeTab === "academic" ? "current" : ""}`}
                    onClick={() => setActiveTab("academic")}
                  >
                    <span className="index-num">§ 04</span>
                    <span className="index-name">齐鲁艺文学术名家讲坛</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#faculty"
                    className={`index-item ${activeTab === "faculty" ? "current" : ""}`}
                    onClick={() => setActiveTab("faculty")}
                  >
                    <span className="index-num">§ 05</span>
                    <span className="index-name">师资队伍与学术委员会</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#admissions"
                    className={`index-item ${activeTab === "admissions" ? "current" : ""}`}
                    onClick={() => setActiveTab("admissions")}
                  >
                    <span className="index-num">§ 06</span>
                    <span className="index-name">2026 招考指南与人才培养</span>
                  </a>
                </li>
              </ul>
            </nav>

            {/* 底部校区与联络指引 */}
            <div className="spine-footer-meta">
              <div className="meta-row">
                <span className="meta-label">校区地址：</span>
                <span>山东省济南市长清区大学路1号</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">办公咨询：</span>
                <span>0531-89626000（教务办）</span>
              </div>
              <div className="meta-row">
                <span className="meta-label">学院邮箱：</span>
                <span>sha_office@sdada.edu.cn</span>
              </div>
            </div>
          </div>
        </aside>

        {/* 右侧：高密度动态非对称主视窗 (Dynamic Spatial Canvas) */}
        <main className={`spatial-canvas mode-${viewMode}`} id="top">
          {/* 1. 顶部学术动态滚动导报条 */}
          <div className="academic-marquee-strip">
            <div className="marquee-content">
              <span className="marquee-item">【院况通报】人文艺术学院艺术设计学学科荣膺软科中国大学专业排名 A+ 顶尖评级</span>
              <span className="marquee-dot">·</span>
              <span className="marquee-item">【课题立项】黄河流域民间手工艺调查与数字化活化项目获国家社科基金艺术学重点资助</span>
              <span className="marquee-dot">·</span>
              <span className="marquee-item">【招生快讯】2026年本科生艺术设计学、艺术史论专业招生培养方案正式公布</span>
              <span className="marquee-dot">·</span>
              <span className="marquee-item">【办学理念】以文化人，艺文相长；守正拓新，知行合一</span>
            </div>
          </div>

          {/* 2. 突破常规的首屏核心视窗 (Monumental Editorial Hero) */}
          <section className="avant-hero-section" id="intro">
            <div className="hero-spatial-grid">
              {/* 左栏：建筑级庄重文献排版 */}
              <div className="hero-text-pane">
                <div className="hero-college-code">
                  <span>DISCIPLINE: ART &amp; DESIGN THEORY</span>
                  <span className="code-sep">/</span>
                  <span>ESTABLISHED IN SHANDONG</span>
                </div>

                <div className="hero-motto-block">
                  <h1 className="hero-motto-title">
                    以文化人 · 艺文相长<br />
                    守正拓新 · 知行合一
                  </h1>
                  <p className="hero-motto-sub">
                    立足齐鲁深厚文脉，涵育当代造物思想。建设兼具中华文化底蕴与当代国际视野的一流艺术设计人文高地。
                  </p>
                </div>

                <div className="hero-intro-paragraph">
                  <p>
                    人文艺术学院现设艺术设计学系与艺术史论系，拥有黄河流域传统工艺与现代设计文化研究中心、跨媒介艺术与非遗活化重点实验室。学院以深厚历史文脉为底蕴，直面当代社会与技术变革，致力于培养具备扎实学术素养、敏锐批判意识与前沿创新能力的复合型艺术设计与史论人才。
                  </p>
                </div>

                {/* 学院关键核心办学指标 */}
                <div className="hero-metrics-deck">
                  <div className="metric-cell">
                    <span className="metric-val">全国 A+</span>
                    <span className="metric-label">艺术设计学学科评级</span>
                  </div>
                  <div className="metric-cell">
                    <span className="metric-val">2 个</span>
                    <span className="metric-label">国家级一流本科专业点</span>
                  </div>
                  <div className="metric-cell">
                    <span className="metric-val">100%</span>
                    <span className="metric-label">专任教师高级职称/博士比</span>
                  </div>
                  <div className="metric-cell">
                    <span className="metric-val">50+ 项</span>
                    <span className="metric-label">国家社科及重点课题成果</span>
                  </div>
                </div>

                <div className="hero-cta-deck">
                  <a href="#departments" className="btn-solid-rect">
                    <span>查阅学科专业与培养方案</span>
                    <span>↓</span>
                  </a>
                  <a href="#admissions" className="btn-outline-rect">
                    <span>2026 招考报考指南</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* 右栏：多状态真实展陈画框与文献现场切换 */}
              <div className="hero-visual-pane">
                <div className="interactive-photo-frame">
                  <img
                    src={heroImages[heroImageIndex].src}
                    alt={heroImages[heroImageIndex].label}
                    className="featured-hero-image"
                  />
                  <div className="frame-bottom-bar">
                    <div className="frame-active-label">
                      <span className="label-prefix">VIEW [{heroImageIndex + 1}/3]</span>
                      <span className="label-title">{heroImages[heroImageIndex].label}</span>
                    </div>
                    <div className="frame-switch-buttons">
                      {heroImages.map((_, idx) => (
                        <button
                          key={idx}
                          className={`frame-switch-dot ${heroImageIndex === idx ? "active" : ""}`}
                          onClick={() => setHeroImageIndex(idx)}
                          aria-label={`切换至场景 ${idx + 1}`}
                        >
                          0{idx + 1}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="visual-annotation-card">
                  <div className="annot-title">学术展陈与田野档案特藏</div>
                  <p className="annot-text">
                    学院依托长清校区高规格展陈空间与民间美术文献特藏馆，常年开展跨媒介实验展演、黄河文化带手工艺实物建档及国家级优秀毕业创作巡展。
                  </p>
                  <div className="annot-footer">
                    <span>展厅位置：人文艺术学院一楼东侧展厅</span>
                    <a href="#research" className="annot-link">查看重点成果档案 →</a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. 学科专业与前沿实验室矩阵 (Atelier & Department Matrix) */}
          <section className="departments-section" id="departments">
            <div className="section-title-stack">
              <h2 className="main-section-title">学科设置与教学系部</h2>
              <p className="main-section-desc">
                紧扣新文科建设脉搏，构建“史论基础 + 设计理论 + 跨媒介实验 + 田野遗产活化”四位一体的特色育人矩阵。
              </p>
            </div>

            <div className="departments-asymmetric-grid">
              {/* 核心卡片 1：艺术设计学系 (重点展开) */}
              <article className="dept-large-card featured-card">
                <div className="card-top-tag">
                  <span className="tag-major">国家级一流本科专业 · 软科全国 A+</span>
                  <span className="tag-code">CODE: 130501</span>
                </div>
                <h3 className="dept-name">艺术设计学系</h3>
                <p className="dept-brief">
                  立足深厚的人文底蕴与现代设计实践，培养面向文化战略、设计管理、信息与交互策划、文化遗产数字化传播的高级创新复合型人才。
                </p>

                <div className="dept-focus-grid">
                  <div className="focus-block">
                    <div className="focus-heading">核心培养方向</div>
                    <ul className="focus-list">
                      <li>设计策划与文化战略</li>
                      <li>信息与界面交互设计理论</li>
                      <li>当代生活方式与文创研发</li>
                      <li>设计历史与当代设计批评</li>
                    </ul>
                  </div>
                  <div className="focus-block">
                    <div className="focus-heading">特色支撑平台</div>
                    <ul className="focus-list">
                      <li>现代设计战略研究所</li>
                      <li>信息架构与文创体验工作室</li>
                      <li>国家级实验教学示范中心</li>
                      <li>齐鲁文创产教融合研发基地</li>
                    </ul>
                  </div>
                </div>

                <div className="dept-card-footer">
                  <span className="footer-spec">授予学位：艺术学学士 / 艺术学硕士 / 艺术专业硕士 (MFA)</span>
                  <a href="#admissions" className="dept-action-link">查看该专业培养方案 ↗</a>
                </div>
              </article>

              {/* 卡片 2：艺术史论系 */}
              <article className="dept-large-card">
                <div className="card-top-tag">
                  <span className="tag-major">国家级一流本科专业</span>
                  <span className="tag-code">CODE: 130101</span>
                </div>
                <h3 className="dept-name">艺术史论系</h3>
                <p className="dept-brief">
                  依托齐鲁文化资源，深耕中国古代造物制度史、手工艺文献考据与现代艺术批评，强化典籍研读与实地考察双重功底。
                </p>

                <div className="dept-tags-wrap">
                  <span className="dept-pill">中国工艺美术史</span>
                  <span className="dept-pill">视觉文化与当代批评</span>
                  <span className="dept-pill">器物考古与文献学</span>
                  <span className="dept-pill">艺术策展与博物馆学</span>
                </div>

                <div className="dept-card-footer">
                  <span className="footer-spec">重点专著：《中国工艺史料集成》《齐鲁手工艺考》</span>
                </div>
              </article>

              {/* 卡片 3：跨媒介艺术与计算交互实验室 */}
              <article className="dept-large-card">
                <div className="card-top-tag">
                  <span className="tag-major">前沿学科重点实验室</span>
                  <span className="tag-code">LAB-INTERMEDIA</span>
                </div>
                <h3 className="dept-name">跨媒介艺术与数字交互实验室</h3>
                <p className="dept-brief">
                  聚焦人工智能生成艺术（AIGC）、沉浸式空间视听、动态数据可视化及人机协同创作，探索科技与艺术的共生边界。
                </p>

                <div className="dept-tags-wrap">
                  <span className="dept-pill">生成式计算艺术</span>
                  <span className="dept-pill">多通道声场交互</span>
                  <span className="dept-pill">虚拟数字孪生空间</span>
                  <span className="dept-pill">气候与环境数据感知</span>
                </div>

                <div className="dept-card-footer">
                  <span className="footer-spec">学术活动：年度国际新媒体艺术展映与计算工坊</span>
                </div>
              </article>

              {/* 卡片 4：文化遗产与民间美术研究所 */}
              <article className="dept-large-card">
                <div className="card-top-tag">
                  <span className="tag-major">省级重点研究基地</span>
                  <span className="tag-code">HERITAGE-RESEARCH</span>
                </div>
                <h3 className="dept-name">黄河流域民间艺术研究所</h3>
                <p className="dept-brief">
                  致力于全流域民间美术田野考察、抢救性非遗建档与现代在地转化，将高校学术资源深度投入乡村振兴与社会美育实践。
                </p>

                <div className="dept-tags-wrap">
                  <span className="dept-pill">黄河手工艺田野测绘</span>
                  <span className="dept-pill">乡村在地设计介入</span>
                  <span className="dept-pill">非遗数字化谱系</span>
                  <span className="dept-pill">传统年画与造物档案</span>
                </div>

                <div className="dept-card-footer">
                  <span className="footer-spec">基地支撑：全流域手工艺文献实物标本库</span>
                </div>
              </article>
            </div>
          </section>

          {/* 4. 国家重点科研与优秀创作成果 (Research & Archive) */}
          <section className="research-section" id="research">
            <div className="research-header-row">
              <div className="section-title-stack">
                <h2 className="main-section-title">教学科研与学术展陈成果</h2>
                <p className="main-section-desc">
                  坚持把论文写在祖国大地上，以高水平课题与先锋创作回应时代命题。
                </p>
              </div>

              {/* 成果类别筛选器 */}
              <div className="research-filter-nav" role="tablist">
                <button
                  className={`filter-rect-btn ${activeCategory === "all" ? "active" : ""}`}
                  onClick={() => setActiveCategory("all")}
                >
                  全部成果 [{researchItems.length}]
                </button>
                <button
                  className={`filter-rect-btn ${activeCategory === "national" ? "active" : ""}`}
                  onClick={() => setActiveCategory("national")}
                >
                  国家社科重点课题
                </button>
                <button
                  className={`filter-rect-btn ${activeCategory === "treatise" ? "active" : ""}`}
                  onClick={() => setActiveCategory("treatise")}
                >
                  学术文献专著
                </button>
                <button
                  className={`filter-rect-btn ${activeCategory === "rural" ? "active" : ""}`}
                  onClick={() => setActiveCategory("rural")}
                >
                  乡村在地振兴
                </button>
                <button
                  className={`filter-rect-btn ${activeCategory === "exhibition" ? "active" : ""}`}
                  onClick={() => setActiveCategory("exhibition")}
                >
                  实验展演与计算媒介
                </button>
              </div>
            </div>

            {/* 成果卡片栅格 */}
            <div className="research-items-grid">
              {filteredResearch.map((item) => (
                <article
                  key={item.id}
                  className="research-card"
                  onClick={() => setSelectedResearch(item)}
                >
                  <div className="research-thumb-wrap">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="research-thumb-img"
                      loading="lazy"
                    />
                    <div className="research-item-code">{item.code}</div>
                  </div>

                  <div className="research-card-content">
                    <div className="research-card-meta">
                      <span className="meta-year">{item.year}</span>
                      <span className="meta-role">{item.role}</span>
                    </div>

                    <h3 className="research-card-title">{item.title}</h3>
                    <div className="research-leader">{item.leader}</div>
                    <div className="research-medium-text">{item.medium}</div>

                    <div className="research-action-bar">
                      <span className="dossier-callout">查阅学术详报与立项档案 ↗</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 成果学术详报浮层 (Dossier Modal) */}
          {selectedResearch && (
            <div
              className="dossier-overlay"
              onClick={() => setSelectedResearch(null)}
            >
              <div
                className="dossier-window"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="dossier-topbar">
                  <span className="dossier-code">{selectedResearch.code} · 学术成果档案详录</span>
                  <button
                    className="dossier-close-button"
                    onClick={() => setSelectedResearch(null)}
                    aria-label="关闭窗口"
                  >
                    ✕
                  </button>
                </div>

                <div className="dossier-body">
                  <div className="dossier-img-frame">
                    <img
                      src={selectedResearch.image}
                      alt={selectedResearch.title}
                      className="dossier-full-img"
                    />
                  </div>
                  <div className="dossier-info-block">
                    <div className="dossier-category-pill">{selectedResearch.role}</div>
                    <h3 className="dossier-item-title">{selectedResearch.title}</h3>
                    <div className="dossier-leader-line">承担团队 / 作者：{selectedResearch.leader}</div>
                    <div className="dossier-year-line">成果周期：{selectedResearch.year}</div>

                    <div className="dossier-divider"></div>

                    <div className="dossier-field-row">
                      <span className="field-title">成果媒介形态与规制：</span>
                      <p className="field-content">{selectedResearch.medium}</p>
                    </div>

                    <div className="dossier-field-row">
                      <span className="field-title">学术价值与内容摘要：</span>
                      <p className="field-content">{selectedResearch.summary}</p>
                    </div>

                    <div className="dossier-action-deck">
                      <button
                        className="btn-dossier-return"
                        onClick={() => setSelectedResearch(null)}
                      >
                        返回成果列表
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. 齐鲁艺文学术名家讲坛 (Academic Lectures & Events) */}
          <section className="academic-section" id="academic">
            <div className="section-title-stack">
              <h2 className="main-section-title">齐鲁艺文学术讲坛与学术动态</h2>
              <p className="main-section-desc">
                汇聚全国艺术学理论、设计前沿与文化学者，打造开放、思辨、扎实的高规格对话场域。
              </p>
            </div>

            <div className="lecture-timeline-list">
              {lectureList.map((item) => (
                <div key={item.no} className="lecture-row-card">
                  <div className="lecture-date-box">
                    <span className="lecture-date-day">{item.date}</span>
                    <span className="lecture-time-slot">{item.time}</span>
                  </div>

                  <div className="lecture-main-info">
                    <div className="lecture-series-tag">{item.series}</div>
                    <h3 className="lecture-topic-title">{item.title}</h3>
                    <div className="lecture-speaker-meta">
                      <span className="speaker-name">{item.speaker}</span>
                      <span className="speaker-title">{item.speakerTitle}</span>
                    </div>
                    <div className="lecture-venue">地点：{item.location}</div>
                  </div>

                  <div className="lecture-status-box">
                    <span className="lecture-status-badge">{item.status}</span>
                    <a href="#admissions" className="lecture-reserve-btn">预约入场 / 听讲指南 →</a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 6. 师资队伍与学术带头人 (Faculty Leadership) */}
          <section className="faculty-section" id="faculty">
            <div className="section-title-stack">
              <h2 className="main-section-title">师资队伍与学科带头人</h2>
              <p className="main-section-desc">
                汇聚享受国务院特贴专家、泰山学者、教育部教指委委员与全国美展评委等一流学者团队。
              </p>
            </div>

            <div className="faculty-cards-deck">
              {facultyList.map((f, idx) => (
                <div key={idx} className="faculty-scholar-card">
                  <div className="scholar-index-line">FELLOW 0{idx + 1}</div>
                  <h3 className="scholar-name">{f.name}</h3>
                  <div className="scholar-title">{f.title}</div>
                  <div className="scholar-role">{f.role}</div>

                  <div className="scholar-divider"></div>

                  <div className="scholar-detail-row">
                    <span className="scholar-label">主要研究领域：</span>
                    <span className="scholar-val">{f.direction}</span>
                  </div>

                  <div className="scholar-detail-row">
                    <span className="scholar-label">代表性著述与成果：</span>
                    <span className="scholar-val">{f.works}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 7. 2026年招生报考与人才培养指南 (Admissions & Services) */}
          <section className="admissions-section" id="admissions">
            <div className="admissions-inner-box">
              <div className="admissions-header">
                <span className="admissions-code-tag">ADMISSIONS &amp; TALENT DEVELOPMENT 2026</span>
                <h2 className="admissions-headline">2026 年度本科生与研究生招考报考指南</h2>
                <p className="admissions-subtext">
                  热忱欢迎热爱中华优秀传统文化、具备敏锐艺术观察力与批判性思考能力的青年学者与学子报考人文艺术学院。
                </p>
              </div>

              <div className="admissions-grid-cols">
                <div className="admissions-card">
                  <h3 className="admissions-card-title">本科生统考招生</h3>
                  <p className="admissions-card-desc">
                    面向全国招收艺术设计学（软科全国A+）、艺术史论专业本科生。依托国家级一流本科专业点，实行全程导师制与创新工作坊育人模式。
                  </p>
                  <ul className="admissions-links">
                    <li><a href="#top">2026 艺术设计学本科招生章程与计划 ↗</a></li>
                    <li><a href="#top">2026 艺术史论专业高考报考指南 ↗</a></li>
                    <li><a href="#top">历年各省份录取分数线与报录比汇总 ↗</a></li>
                  </ul>
                </div>

                <div className="admissions-card">
                  <h3 className="admissions-card-title">硕士研究生与科研流动</h3>
                  <p className="admissions-card-desc">
                    招收艺术学学术学位（设计历史与理论、艺术学理论方向）及艺术专业硕士（MFA，文创策划与展示设计方向）。设有科研创新激励基金。
                  </p>
                  <ul className="admissions-links">
                    <li><a href="#top">2026 硕士研究生初试统考与专业参考书目 ↗</a></li>
                    <li><a href="#top">优秀应届本科毕业生免试攻读硕士研究生办法 ↗</a></li>
                    <li><a href="#top">青年学者科研流动站与访问学者招募公告 ↗</a></li>
                  </ul>
                </div>
              </div>

              <div className="admissions-bottom-actions">
                <a href="#top" className="btn-admissions-primary">
                  <span>下载 2026 人文艺术学院招生简章完整版 (PDF)</span>
                  <span>↓</span>
                </a>
                <a href="#academic" className="btn-admissions-secondary">
                  <span>招生咨询热线：0531-89626000</span>
                </a>
              </div>
            </div>
          </section>

          {/* 规范官方高校底栏 (含 Logo、备案与机构信息) */}
          <footer className="academy-official-footer">
            <div className="footer-content-wrap">
              <div className="footer-brand-row">
                <div className="footer-logo-box">
                  <img
                    src="./college-logo.png"
                    alt="山东工艺美术学院 人文艺术学院"
                    className="footer-official-logo"
                  />
                </div>
                <div className="footer-motto-text">
                  “以文化人，艺文相长；守正拓新，知行合一”
                </div>
              </div>

              <div className="footer-nav-grid">
                <div className="footer-col">
                  <h4>校区驻地与联系方式</h4>
                  <p>地址：山东省济南市长清区大学科技园大学路1号</p>
                  <p>邮政编码：250300</p>
                  <p>学院办公室：0531-89626000</p>
                  <p>教学科研办公室：0531-89626001</p>
                </div>

                <div className="footer-col">
                  <h4>教学系部与研究平台</h4>
                  <p>艺术设计学系（国家级一流专业 / 软科A+）</p>
                  <p>艺术史论系（国家级一流本科专业）</p>
                  <p>跨媒介艺术与数字交互重点实验室</p>
                  <p>黄河流域民间艺术研究所</p>
                </div>

                <div className="footer-col">
                  <h4>校内常用系统与学术导航</h4>
                  <p><a href="#top">学校官方主页 (sdada.edu.cn)</a></p>
                  <p><a href="#top">教务综合管理系统</a></p>
                  <p><a href="#top">研究生处 / 研究生教育</a></p>
                  <p><a href="#top">图书馆数字文献与中国知网镜像</a></p>
                </div>
              </div>

              <div className="footer-copyright-strip">
                <span>版权所有 © 2026 山东工艺美术学院 人文艺术学院 · 官方网站改版方案三</span>
                <span>鲁ICP备05002166号 · 鲁公网安备 37011302000001号</span>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  )
}
