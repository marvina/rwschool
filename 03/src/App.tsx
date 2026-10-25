import { useState, useEffect } from "react"

// 精选学术展陈、文献特藏与田野考察影像
const curatedAssets = {
  heroExhibition: "./hero-exhibition.jpg",
  fieldLibrary: "./field-library.jpg",
  folkResearch: "./research-folk-art.jpg",
  installation: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?auto=format&fit=crop&w=1200&q=82",
  digitalMedia: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=82",
}

// 严谨源自 01 与 02 的完整专业与教研室设置（共8项）
interface AcademicProgram {
  no: string
  code: string
  name: string
  enName: string
  qualification: string
  tagClass: "tag-red" | "tag-blue" | "tag-green" | "tag-yellow"
  summary: string
  courses: string[]
}

const academicPrograms: AcademicProgram[] = [
  {
    no: "01",
    code: "DES-130501",
    name: "艺术设计学",
    enName: "Design Studies",
    qualification: "软科 A+ · 国家级一流本科专业",
    tagClass: "tag-red",
    summary: "全国排名前列顶尖学科，致力于设计历史、设计理论、设计批评与设计战略前沿研究，建构中国自主设计话语体系。",
    courses: ["设计史学专题", "中国造物思想史", "设计批评学", "设计战略与策展"],
  },
  {
    no: "02",
    code: "ART-130101",
    name: "艺术史论",
    enName: "Art History & Theory",
    qualification: "国家级一流本科专业",
    tagClass: "tag-blue",
    summary: "聚焦中国美术史、西方造物史、黄河民艺理论与视觉文化，培养具备深厚历史视野与批判思辨能力的学术英才。",
    courses: ["中国美术史考论", "西方近现代艺术史", "视觉文献研读", "民艺理论与田野调查"],
  },
  {
    no: "03",
    code: "MGT-120206",
    name: "文化产业管理",
    enName: "Cultural Management",
    qualification: "国家级一流本科专业",
    tagClass: "tag-blue",
    summary: "立足文旅深度融合、非遗产业化运营与艺术策展管理，培养兼通人文素养与现代产业运作的高级复合管理人才。",
    courses: ["文化资源开发与管理", "艺术市场与策展", "数字文化产业战略", "文化遗产经济学"],
  },
  {
    no: "04",
    code: "FA-130401",
    name: "美术学",
    enName: "Fine Arts",
    qualification: "国家级特色专业",
    tagClass: "tag-yellow",
    summary: "融合当代艺术理论、美术史学方法论与审美教育，注重基础理论建构与社会美育实践的深度贯通。",
    courses: ["美术理论与美育史", "中国古代画论", "现代艺术流派辨析", "艺术教育心理学"],
  },
  {
    no: "05",
    code: "ICH-130102",
    name: "非物质文化遗产保护",
    enName: "Intangible Cultural Heritage",
    qualification: "山东省首批非遗本科专业",
    tagClass: "tag-green",
    summary: "依托齐鲁深厚民间手工艺沃土，开展抢救性调查、数字谱系测绘、活态传承与当代造物创新衍生。",
    courses: ["非物质文化遗产概论", "民艺田野工作方法", "传统手工技艺谱系", "活态传承与社区营造"],
  },
  {
    no: "06",
    code: "CON-130507",
    name: "文物保护与修复",
    enName: "Heritage Conservation",
    qualification: "省级实验教学示范中心依托",
    tagClass: "tag-green",
    summary: "依托高水平实验教学示范平台，结合科技检测、古籍纸质文献修复、古代陶瓷金属保护开展跨学科教学。",
    courses: ["文物保护与科技概论", "纸质与书画文献修复", "无机质文物修复实务", "科技分析与材质检测"],
  },
  {
    no: "07",
    code: "ADV-120703",
    name: "广告策划与管理",
    enName: "Creative Advertising",
    qualification: "省级一流本科专业建设点",
    tagClass: "tag-blue",
    summary: "融合现代传播学、品牌战略、整合营销传播与数字创意实务，屡获全国大学生广告艺术大赛顶级大奖。",
    courses: ["品牌战略规划", "整合营销传播", "数字内容与跨媒介创意", "用户体验与行为分析"],
  },
  {
    no: "08",
    code: "PUB-130000",
    name: "公共艺术史论教研室",
    enName: "Public Art Studies",
    qualification: "跨学科虚拟教研室",
    tagClass: "tag-yellow",
    summary: "承担全院跨学科公共艺术理论、城乡微更新美育实践与综合通识人文教学，推进科教融汇与协同创新。",
    courses: ["公共艺术导论", "城市更新与在地介入", "社会美育跨学科工作坊", "当代公共文化空间"],
  },
]

// 真实新闻动态数据（严格参照 01 与 02 官方报道）
interface NewsItem {
  id: string
  tag: string
  tagClass: "tag-red" | "tag-blue" | "tag-green" | "tag-yellow"
  date: string
  day: string
  month: string
  title: string
  excerpt: string
  image?: string
  isLead?: boolean
}

const newsList: NewsItem[] = [
  {
    id: "news-01",
    tag: "学院要闻",
    tagClass: "tag-red",
    date: "2025.03.22",
    day: "22",
    month: "03月",
    title: "学院召开2025年学科建设与拔尖创新人才培养推进会",
    excerpt: "全面梳理一流学科与核心课程建设进展，深化产教协同与科教融汇，强化学术创新与成果转化，扎实推进学院内涵式高质量发展。",
    image: curatedAssets.heroExhibition,
    isLead: true,
  },
  {
    id: "news-02",
    tag: "学术讲堂",
    tagClass: "tag-yellow",
    date: "2025.03.18",
    day: "18",
    month: "03月",
    title: "“文心弦歌”学术季：民间艺术的当代转化与国际表达讲座举行",
    excerpt: "特邀知名学者围绕黄河民间艺术当代价值与国际传播路径展开深度研讨，启迪青年学人扎根大地创研。",
  },
  {
    id: "news-03",
    tag: "教学展览",
    tagClass: "tag-blue",
    date: "2025.03.14",
    day: "14",
    month: "03月",
    title: "“在场之思”2025届人文与艺术综合实践教学汇报展启幕",
    excerpt: "集中呈现跨学科田野考察、文献整理、策展实践与跨媒介设计的阶段性教学与拔尖育人成果。",
  },
  {
    id: "news-04",
    tag: "荣誉成果",
    tagClass: "tag-green",
    date: "2025.03.10",
    day: "10",
    month: "03月",
    title: "我院师生作品在全国大学生广告艺术大赛中再获佳绩",
    excerpt: "共斩获国家级奖项27项，以真实课题与前沿创意实践彰显卓越应用型拔尖人才培养成效。",
  },
]

// 重点科研项目与基地档案
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
    category: "学术专著出版",
    categoryClass: "tag-blue",
    dept: "艺术史论系 / 齐鲁文化特藏室",
    year: "2026",
    leader: "古代造物制度与艺术史文献研究团队",
    role: "教育部人文社会科学重点研究基地重大成果",
    medium: "文献考据、出土实物拓本重构、先秦至明清造物谱系图志",
    summary: "系统梳理传世文献与考古新发现，深度剖析中华器物文明背后的礼制规约、造物审美演变及其对当代生活方式设计的启示。",
    image: curatedAssets.fieldLibrary,
  },
  {
    id: "03",
    code: "LAB-2026-03",
    title: "乡土美育与在地设计介入实验：乡村社区微更新模型",
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

// 文心讲堂与学术通报
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

// 学术委员会名录
const academicCommittee = [
  { name: "张道一 先生", role: "名誉院长 / 学术总顾问", spec: "中国艺术史论与民艺学开创者" },
  { name: "潘鲁生 教授", role: "资深教授 / 博士生导师", spec: "中国民间文艺家协会主席" },
  { name: "董占军 教授", role: "学科带头人 / 院学术委员会主任", spec: "设计历史与造物思想研究" },
  { name: "赵屹 教授", role: "特聘学科领航学者", spec: "民俗艺术学与非遗活态保护" },
]

export default function App() {
  const [activeResearchId, setActiveResearchId] = useState<string>("01")
  const [modalProject, setModalProject] = useState<ResearchProject | null>(null)
  const [activePlate, setActivePlate] = useState<number | null>(null)
  const [activeProgramIndex, setActiveProgramIndex] = useState<number>(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  // 键盘快捷键响应
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalProject(null)
      if (e.key === "1") document.getElementById("sec-overview")?.scrollIntoView({ behavior: "smooth" })
      if (e.key === "2") document.getElementById("sec-news")?.scrollIntoView({ behavior: "smooth" })
      if (e.key === "3") document.getElementById("sec-disciplines")?.scrollIntoView({ behavior: "smooth" })
      if (e.key === "4") document.getElementById("sec-research")?.scrollIntoView({ behavior: "smooth" })
      if (e.key === "5") document.getElementById("sec-lectures")?.scrollIntoView({ behavior: "smooth" })
      if (e.key === "6") document.getElementById("sec-admissions")?.scrollIntoView({ behavior: "smooth" })
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const selectedResearch = researchProjects.find((p) => p.id === activeResearchId) || researchProjects[0]

  return (
    <div className="minimalist-editorial-root">
      {/* 结构性背景基准十二轴发丝网格（100% 全宽，12 列建筑级精微布局参考系） */}
      <div className="grid-overlay" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="grid-col" />
        ))}
      </div>

      {/* 顶部极简学术刊物风格导览（100% 全宽流体） */}
      <header className="masthead-container">
        <div className="masthead-left">
          <a href="#top" className="masthead-logo-link" title="山东工艺美术学院 人文艺术学院">
            <img
              src="./college-logo.png"
              alt="山东工艺美术学院 人文艺术学院"
              className="masthead-logo-img"
            />
          </a>
          <span className="masthead-motto-badge">
            全国 A+ 学科 · 国家级一流专业
          </span>
        </div>

        <nav className={`masthead-nav ${mobileMenuOpen ? "is-open" : ""}`}>
          <a
            href="#sec-overview"
            className="nav-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>01 文脉本体</span>
            <kbd className="nav-kbd">1</kbd>
          </a>
          <a
            href="#sec-news"
            className="nav-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>02 学院动态</span>
            <kbd className="nav-kbd">2</kbd>
          </a>
          <a
            href="#sec-disciplines"
            className="nav-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>03 专业设置</span>
            <kbd className="nav-kbd">3</kbd>
          </a>
          <a
            href="#sec-research"
            className="nav-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>04 重点科研</span>
            <kbd className="nav-kbd">4</kbd>
          </a>
          <a
            href="#sec-lectures"
            className="nav-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>05 艺文讲坛</span>
            <kbd className="nav-kbd">5</kbd>
          </a>
          <a
            href="#sec-admissions"
            className="nav-item"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>06 招考通道</span>
            <kbd className="nav-kbd">6</kbd>
          </a>
        </nav>

        <div className="masthead-right">
          <a href="#sec-admissions" className="btn-primary-dark">
            <span>2026 招考指南</span>
            <span className="btn-icon">↗</span>
          </a>
          <button
            className="btn-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="切换导览菜单"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </header>

      {/* 页面主内容区域：100% 满宽，窄屏自适应响应 */}
      <main className="editorial-canvas" id="top">
        {/* ================= SECTION 1: HERO OVERVIEW (100% 全宽与窄屏自适应布局) ================= */}
        <section className="editorial-section sec-hero" id="sec-overview">
          {/* 背景典雅水印 */}
          <div className="hero-archival-watermark" aria-hidden="true">
            SHANDONG CRAFT & HUMANITIES · SUAD 2026
          </div>

          {/* 首屏顶栏 Kicker */}
          <div className="section-kicker-row">
            <div className="kicker-group">
              <span className="tag-pill tag-red">SHANDONG CRAFT & HUMANITIES</span>
              <span className="kicker-meta">2026年春季学期 · 第8教学周 · 齐鲁造物文脉与当代创新</span>
            </div>
            <div className="kicker-index-meta">
              <span>ARCHIVAL DOSSIER {`{VOL.2026-08}`}</span>
            </div>
          </div>

          {/* 标语文字与大幅图片自适应舞台（宽屏侧翼透叠，窄屏规整纵列不挡字） */}
          <div className="hero-stage">
            {/* 巨幅排版文字区 */}
            <div className="hero-typography-layer">
              <div className="hero-headline-row row-first">
                <span className="headline-text">赓续文脉</span>
                <span className="headline-sep">·</span>
                <span className="headline-text">构筑高地</span>
                <span className="headline-ghost-tag">{`{全国 A+}`}</span>
              </div>

              <div className="hero-headline-row row-second">
                <span className="headline-text">以人文涵养艺术</span>
                <span className="headline-sep">·</span>
                <span className="headline-text">以设计赋能时代</span>
              </div>

              {/* 核心学术宣言与学科锚点 */}
              <div className="hero-lead-deck">
                <p className="hero-lead-text">
                  立足齐鲁深厚文化根脉，面向当代科技与社会发展命题。构筑融“理论研究、田野调查、策展实践、跨媒介创新”为一体的人文艺术教育与创新高地。
                </p>
                <div className="hero-discipline-chips">
                  <span
                    className={`interactive-chip ${activePlate === 1 ? "chip-active" : ""}`}
                    onMouseEnter={() => setActivePlate(1)}
                    onMouseLeave={() => setActivePlate(null)}
                    onClick={() => setActivePlate(activePlate === 1 ? null : 1)}
                  >
                    [01 当代展陈空间]
                  </span>
                  <span
                    className={`interactive-chip ${activePlate === 2 ? "chip-active" : ""}`}
                    onMouseEnter={() => setActivePlate(2)}
                    onMouseLeave={() => setActivePlate(null)}
                    onClick={() => setActivePlate(activePlate === 2 ? null : 2)}
                  >
                    [02 齐鲁文献特藏]
                  </span>
                  <span
                    className={`interactive-chip ${activePlate === 3 ? "chip-active" : ""}`}
                    onMouseEnter={() => setActivePlate(3)}
                    onMouseLeave={() => setActivePlate(null)}
                    onClick={() => setActivePlate(activePlate === 3 ? null : 3)}
                  >
                    [03 黄河民艺田野]
                  </span>
                </div>
              </div>
            </div>

            {/* 大幅画幅层（宽屏侧翼多层悬浮，窄屏转为规整展示带） */}
            <div className="hero-plates-container">
              {/* Plate 1: 展陈空间 */}
              <div
                className={`hero-plate plate-exhibition ${activePlate === 1 ? "is-focused" : ""} ${
                  activePlate !== null && activePlate !== 1 ? "is-dimmed" : ""
                }`}
                onMouseEnter={() => setActivePlate(1)}
                onMouseLeave={() => setActivePlate(null)}
                onClick={() => setActivePlate(activePlate === 1 ? null : 1)}
              >
                <div className="plate-inner-wrap">
                  <img
                    src={curatedAssets.heroExhibition}
                    alt="学院当代艺术展陈空间与实践现场"
                    className="plate-img"
                  />
                  <div className="plate-badge-strip">
                    <span className="plate-code">PLATE #01</span>
                    <span className="plate-caption">当代学术展陈空间</span>
                  </div>
                  <div className="plate-hover-card">
                    <div className="hover-card-tag">国家级实验教学示范</div>
                    <div className="hover-card-desc">2026届综合实践教学汇报展现场实景</div>
                  </div>
                </div>
                <div className="plate-reg-mark tl">┌</div>
                <div className="plate-reg-mark br">┘</div>
              </div>

              {/* Plate 2: 文献特藏 */}
              <div
                className={`hero-plate plate-library ${activePlate === 2 ? "is-focused" : ""} ${
                  activePlate !== null && activePlate !== 2 ? "is-dimmed" : ""
                }`}
                onMouseEnter={() => setActivePlate(2)}
                onMouseLeave={() => setActivePlate(null)}
                onClick={() => setActivePlate(activePlate === 2 ? null : 2)}
              >
                <div className="plate-inner-wrap">
                  <img
                    src={curatedAssets.fieldLibrary}
                    alt="齐鲁文献特藏室与古籍活化"
                    className="plate-img"
                  />
                  <div className="plate-badge-strip">
                    <span className="plate-code">PLATE #02</span>
                    <span className="plate-caption">齐鲁文献特藏室</span>
                  </div>
                  <div className="plate-hover-card">
                    <div className="hover-card-tag">教育部基地学术成果</div>
                    <div className="hover-card-desc">中国古代造物思想考论与善本古籍考释</div>
                  </div>
                </div>
                <div className="plate-reg-mark tl">┌</div>
                <div className="plate-reg-mark br">┘</div>
              </div>

              {/* Plate 3: 民艺田野 */}
              <div
                className={`hero-plate plate-research ${activePlate === 3 ? "is-focused" : ""} ${
                  activePlate !== null && activePlate !== 3 ? "is-dimmed" : ""
                }`}
                onMouseEnter={() => setActivePlate(3)}
                onMouseLeave={() => setActivePlate(null)}
                onClick={() => setActivePlate(activePlate === 3 ? null : 3)}
              >
                <div className="plate-inner-wrap">
                  <img
                    src={curatedAssets.folkResearch}
                    alt="黄河民艺田野调研标本档案"
                    className="plate-img"
                  />
                  <div className="plate-badge-strip">
                    <span className="plate-code">PLATE #03</span>
                    <span className="plate-caption">黄河民艺田野测绘</span>
                  </div>
                  <div className="plate-hover-card">
                    <div className="hover-card-tag">国家社科艺术学重点</div>
                    <div className="hover-card-desc">全流域民间传统造物谱系建档与活态调查</div>
                  </div>
                </div>
                <div className="plate-reg-mark tl">┌</div>
                <div className="plate-reg-mark br">┘</div>
              </div>
            </div>
          </div>

          {/* 严谨扣合发丝网格的学术核心指标条（响应式 4列 -> 2列 -> 1列） */}
          <div className="hero-metrics-grid">
            <div className="metric-grid-cell col-1">
              <div className="metric-val-wrap">
                <span className="metric-strong">全国 A+</span>
              </div>
              <div className="metric-title">软科中国大学专业排名顶尖评级</div>
              <div className="metric-sub">艺术设计学专业连续三年保持全国前列</div>
            </div>

            <div className="metric-grid-cell col-2">
              <div className="metric-val-wrap">
                <span className="metric-strong">2 个</span>
              </div>
              <div className="metric-title">国家级一流本科专业建设点</div>
              <div className="metric-sub">艺术设计学与艺术史论双双入选国家一流</div>
            </div>

            <div className="metric-grid-cell col-3">
              <div className="metric-val-wrap">
                <span className="metric-strong">100%</span>
              </div>
              <div className="metric-title">专任教师高职及博士比例</div>
              <div className="metric-sub">汇聚国务院特贴专家与省部级教学名师</div>
            </div>

            <div className="metric-grid-cell col-4">
              <div className="metric-val-wrap">
                <span className="metric-strong">50+ 项</span>
              </div>
              <div className="metric-title">国家社科基金及省部重点课题</div>
              <div className="metric-sub">涵盖黄河非遗数字化、造物史论与美育</div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: 学院新闻与动态 (报刊式非对称排版) ================= */}
        <section className="editorial-section sec-news" id="sec-news">
          <div className="section-title-strip">
            <div className="strip-left">
              <span className="strip-index">02</span>
              <span className="strip-tag tag-pill tag-red">ACADEMIC ANNALS & DISPATCH</span>
              <h2 className="strip-h2">学院新闻与学术动态</h2>
            </div>
            <div className="strip-right">
              <span className="strip-note">记录学院学术生发、教学展览与前沿育人纪事</span>
            </div>
          </div>

          <div className="news-press-grid">
            {/* 左侧头条 */}
            <article className="news-lead-feature">
              <div className="lead-img-viewport">
                <img src={newsList[0].image} alt={newsList[0].title} className="lead-img" />
                <div className="lead-tag-badge">
                  <span className={`tag-pill ${newsList[0].tagClass}`}>{newsList[0].tag}</span>
                  <span className="lead-date-stamp">{newsList[0].date}</span>
                </div>
              </div>
              <div className="lead-content-deck">
                <div className="lead-meta-row">
                  <span className="lead-vol">TOP STORY · 院务通报</span>
                  <span className="lead-author">学院综合事务办公室</span>
                </div>
                <h3 className="lead-title">{newsList[0].title}</h3>
                <p className="lead-excerpt">{newsList[0].excerpt}</p>
                <div className="lead-action-row">
                  <span className="read-more-link">
                    阅读详讯全文 <span className="arrow-char">→</span>
                  </span>
                </div>
              </div>
            </article>

            {/* 右侧速递清单 */}
            <div className="news-dispatch-list">
              {newsList.slice(1).map((item, index) => (
                <article key={item.id} className="news-list-row">
                  <div className="row-date-badge">
                    <span className="date-day">{item.day}</span>
                    <span className="date-month">{item.month}</span>
                  </div>
                  <div className="row-body">
                    <div className="row-meta">
                      <span className={`tag-pill ${item.tagClass}`}>{item.tag}</span>
                      <span className="row-index">DISPATCH #0{index + 2}</span>
                    </div>
                    <h4 className="row-title">{item.title}</h4>
                    <p className="row-excerpt">{item.excerpt}</p>
                  </div>
                  <div className="row-action">
                    <span className="hover-arrow">↗</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: 学科设置与专业矩阵 (8大专业·响应式建筑表格) ================= */}
        <section className="editorial-section sec-disciplines" id="sec-disciplines">
          <div className="section-title-strip">
            <div className="strip-left">
              <span className="strip-index">03</span>
              <span className="strip-tag tag-pill tag-blue">CURRICULUM MATRIX & DEPARTMENTS</span>
              <h2 className="strip-h2">学科设置与专业矩阵</h2>
            </div>
            <div className="strip-right">
              <span className="strip-note">七个特色本科专业与一个跨学科虚拟教研室</span>
            </div>
          </div>

          <div className="programs-table-grid">
            {academicPrograms.map((prog, idx) => (
              <div
                key={prog.no}
                className={`program-table-cell cell-item-${idx + 1} ${activeProgramIndex === idx ? "cell-selected" : ""}`}
                onClick={() => setActiveProgramIndex(idx)}
              >
                <div className="cell-top-meta">
                  <span className="cell-no">{prog.no}</span>
                  <span className={`tag-pill ${prog.tagClass}`}>{prog.qualification}</span>
                </div>
                <div className="cell-main-info">
                  <h3 className="cell-prog-name">{prog.name}</h3>
                  <div className="cell-en-name">{prog.enName}</div>
                  <div className="cell-code">{prog.code}</div>
                </div>
                <p className="cell-summary">{prog.summary}</p>
                <div className="cell-courses-list">
                  <div className="courses-label">核心课程与研究向度：</div>
                  <div className="courses-tags">
                    {prog.courses.map((c, i) => (
                      <span key={i} className="course-chip">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="cell-bottom-indicator">
                  <span className="cell-action-text">培养方案细则</span>
                  <span className="cell-arrow">→</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= SECTION 4: 重点科研基地与学术高地 (全景水平双联展陈) ================= */}
        <section className="editorial-section sec-research" id="sec-research">
          <div className="section-title-strip">
            <div className="strip-left">
              <span className="strip-index">04</span>
              <span className="strip-tag tag-pill tag-yellow">RESEARCH REPOSITORY & FIELD SPECIMENS</span>
              <h2 className="strip-h2">学术研究与科研高地</h2>
            </div>
            <div className="strip-right">
              <span className="strip-note">国家社科重点项目与齐鲁造物学术成果档案</span>
            </div>
          </div>

          <div className="research-panoramic-split">
            {/* 左侧项目名录 */}
            <div className="research-curation-list">
              <div className="list-mast-kicker">
                <span>PROJECT DOSSIER SELECTION · 重点课题集刊</span>
              </div>
              {researchProjects.map((proj) => {
                const isActive = proj.id === activeResearchId
                return (
                  <div
                    key={proj.id}
                    className={`research-list-item ${isActive ? "is-selected" : ""}`}
                    onClick={() => setActiveResearchId(proj.id)}
                  >
                    <div className="item-meta-col">
                      <span className="item-idx">#{proj.id}</span>
                      <span className={`tag-pill ${proj.categoryClass}`}>{proj.category}</span>
                    </div>
                    <div className="item-main-col">
                      <div className="item-code-line">
                        <span>{proj.code}</span>
                        <span className="sep-dot">·</span>
                        <span>{proj.dept}</span>
                      </div>
                      <h3 className="item-title">{proj.title}</h3>
                    </div>
                    <div className="item-arrow-col">
                      <span className="arrow-glyph">{isActive ? "●" : "→"}</span>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* 右侧学术标本检视视窗 */}
            <div className="research-specimen-viewer">
              <div className="viewer-specimen-frame">
                <img
                  src={selectedResearch.image}
                  alt={selectedResearch.title}
                  className="specimen-img"
                />
                <div className="specimen-overlay-tags">
                  <span className="specimen-tag tag-pill tag-yellow">{selectedResearch.category}</span>
                  <span className="specimen-id-badge">{selectedResearch.code}</span>
                </div>
                <div className="specimen-coordinates">
                  <span>36.65°N, 116.82°E · 长清大学科技园特藏文献库</span>
                </div>
              </div>

              <div className="viewer-data-deck">
                <div className="deck-header">
                  <span className="deck-dept">{selectedResearch.dept}</span>
                  <span className="deck-year">{selectedResearch.year}</span>
                </div>
                <h3 className="deck-title">{selectedResearch.title}</h3>
                <div className="deck-role-badge">{selectedResearch.role}</div>
                <p className="deck-summary">{selectedResearch.summary}</p>
                <div className="deck-medium-row">
                  <span className="medium-label">成果形式：</span>
                  <span className="medium-val">{selectedResearch.medium}</span>
                </div>
                <div className="deck-actions">
                  <button
                    className="btn-open-dossier"
                    onClick={() => setModalProject(selectedResearch)}
                  >
                    <span>调取完整学术案卷</span>
                    <span className="btn-arrow">↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 5: 文心讲堂与学术通报 (票根式学术通行证 + 委员会) ================= */}
        <section className="editorial-section sec-lectures" id="sec-lectures">
          <div className="section-title-strip">
            <div className="strip-left">
              <span className="strip-index">05</span>
              <span className="strip-tag tag-pill tag-green">COLLOQUIUM PASS & SCHOLAR FORUM</span>
              <h2 className="strip-h2">文心讲堂与学术通报</h2>
            </div>
            <div className="strip-right">
              <span className="strip-note">齐鲁艺文名家讲坛与高规格学科领航学术盛会</span>
            </div>
          </div>

          <div className="lectures-ticket-strip">
            {lectureSeries.map((lec) => (
              <div key={lec.no} className="lecture-ticket-card">
                <div className="ticket-body">
                  <div className="ticket-top-row">
                    <span className="ticket-pass-id">PASS #{lec.no}</span>
                    <span className={`tag-pill ${lec.statusClass}`}>{lec.status}</span>
                  </div>
                  <div className="ticket-series-name">{lec.series}</div>
                  <h3 className="ticket-title">{lec.title}</h3>

                  <div className="ticket-speaker-block">
                    <div className="speaker-name">{lec.speaker}</div>
                    <div className="speaker-title">{lec.speakerTitle}</div>
                  </div>

                  <div className="ticket-footer-meta">
                    <div className="meta-time">
                      <span className="time-date">{lec.date}</span>
                      <span className="time-hour">{lec.time}</span>
                    </div>
                    <div className="meta-loc">{lec.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 学术委员会专家席 */}
          <div className="faculty-committee-strip">
            <div className="committee-header-col">
              <div className="committee-title">学术委员会与学科领航学者</div>
              <div className="committee-sub">汇聚全国顶尖工艺美学理论家与国家社科带头人</div>
            </div>
            <div className="committee-grid">
              {academicCommittee.map((scholar, idx) => (
                <div key={idx} className="committee-cell">
                  <div className="scholar-avatar-frame">
                    <span className="scholar-num">0{idx + 1}</span>
                  </div>
                  <div className="scholar-name">{scholar.name}</div>
                  <div className="scholar-role">{scholar.role}</div>
                  <div className="scholar-spec">{scholar.spec}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 6: 招考通道与育人体系 (双色对比色块压轴) ================= */}
        <section className="editorial-section sec-admissions" id="sec-admissions">
          <div className="section-title-strip">
            <div className="strip-left">
              <span className="strip-index">06</span>
              <span className="strip-tag tag-pill tag-red">TALENT CULTIVATION & ENROLLMENT</span>
              <h2 className="strip-h2">招生与学业培养</h2>
            </div>
            <div className="strip-right">
              <span className="strip-note">本科拔尖创新人才与学术型硕士研究生招考选拔</span>
            </div>
          </div>

          <div className="admissions-contrast-grid">
            {/* 深色炭黑块（研究生） */}
            <div className="admissions-card card-dark">
              <div className="card-top-deck">
                <span className="card-badge badge-dark-accent">POSTGRADUATE & PHD</span>
                <span className="card-year">2026 学年度</span>
              </div>
              <h3 className="card-title">研究生招考与拔尖学者培育通道</h3>
              <p className="card-desc">
                面向全国招收学术型硕士研究生与协同培养博士生。依托国家社科重点基地与省重点实验室，实行双导师制与课题组沉浸式联合培养。
              </p>
              <div className="card-specs-list">
                <div className="spec-item">
                  <span className="spec-dot">■</span>
                  <span>艺术设计学（设计史论、设计策划、文创管理、跨媒介设计）</span>
                </div>
                <div className="spec-item">
                  <span className="spec-dot">■</span>
                  <span>艺术史论（中国美术史、工艺美术史、非遗理论与保护）</span>
                </div>
                <div className="spec-item">
                  <span className="spec-dot">■</span>
                  <span>协同培养博士创新专项（黄河流域造物制度与文化治理）</span>
                </div>
              </div>
              <div className="card-action-wrap">
                <a
                  href="#top"
                  className="btn-card-white"
                  onClick={(e) => {
                    e.preventDefault()
                    alert("研究生招生简章与专业目录已准备完毕，可在招生办公室专区查阅。")
                  }}
                >
                  <span>下载学术型硕士招生简章</span>
                  <span className="btn-icon">↓</span>
                </a>
              </div>
            </div>

            {/* 暖白精装块（本科生） */}
            <div className="admissions-card card-bone">
              <div className="card-top-deck">
                <span className="tag-pill tag-blue">UNDERGRADUATE STUDIES</span>
                <span className="card-year">2026 本科招生</span>
              </div>
              <h3 className="card-title">本科各专业招考与卓越培养计划</h3>
              <p className="card-desc">
                涵盖艺术设计学（软科 A+）、艺术史论、文化产业管理、非物质文化遗产保护等 7 个一流专业方向，实施“厚基础、宽口径、重实践、强通识”育人模式。
              </p>
              <div className="card-specs-list">
                <div className="spec-item">
                  <span className="spec-dot-dark">●</span>
                  <span>招生咨询专线：0531-89626188 / 89626189</span>
                </div>
                <div className="spec-item">
                  <span className="spec-dot-dark">●</span>
                  <span>录取批次：艺术类提前批 / 普通本科一批（文理兼招）</span>
                </div>
                <div className="spec-item">
                  <span className="spec-dot-dark">●</span>
                  <span>拔尖创新实验班：黄河文脉造物创新实验班（大二选拔）</span>
                </div>
              </div>
              <div className="card-action-wrap">
                <a
                  href="#top"
                  className="btn-card-dark"
                  onClick={(e) => {
                    e.preventDefault()
                    alert("本科生招生报考指南已就绪，欢迎广大学子报考山东工艺美术学院人文艺术学院。")
                  }}
                >
                  <span>查阅本科招生报考问答指南</span>
                  <span className="btn-icon">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* 全宽咨询横幅 */}
          <div className="admissions-hotline-strip">
            <div className="hotline-cell">
              <span className="hl-kicker">招考咨询热线</span>
              <span className="hl-main">0531-89626188</span>
            </div>
            <div className="hotline-cell">
              <span className="hl-kicker">官方学术邮箱</span>
              <span className="hl-main">rwys@sdada.edu.cn</span>
            </div>
            <div className="hotline-cell">
              <span className="hl-kicker">校区现场地址</span>
              <span className="hl-main">长清校区人文艺术学院教学楼</span>
            </div>
            <div className="hotline-cell">
              <span className="hl-kicker">资料索取</span>
              <a
                href="#top"
                className="hl-btn"
                onClick={(e) => {
                  e.preventDefault()
                  alert("宣传册已打包为离线归档包，可于院办前台或线上直接浏览。")
                }}
              >
                获取 2026 招生简章 PDF ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ================= 官方严谨学术四列页脚 (100% 全宽) ================= */}
      <footer className="editorial-footer">
        <div className="footer-container">
          <div className="footer-col col-brand">
            <div className="footer-logo-wrap">
              <img
                src="./college-logo.png"
                alt="山东工艺美术学院 人文艺术学院"
                className="footer-logo-img"
              />
            </div>
            <div className="footer-institution">
              <strong>山东工艺美术学院 人文艺术学院</strong>
              <div className="footer-en">School of Arts and Humanities, SUAD</div>
            </div>
            <p className="footer-motto">
              天工人巧日争新 · 充实光辉发扬大
            </p>
            <div className="footer-loc-info">
              <span>中国·济南·大学科技园大学路1255号</span>
              <span>邮编：250300</span>
            </div>
          </div>

          <div className="footer-col col-nav">
            <div className="footer-heading">专业设置与系部</div>
            <ul className="footer-link-list">
              <li><a href="#sec-disciplines">艺术设计学 (软科 A+)</a></li>
              <li><a href="#sec-disciplines">艺术史论系 (国家一流)</a></li>
              <li><a href="#sec-disciplines">文化产业管理 (国家一流)</a></li>
              <li><a href="#sec-disciplines">美术学专业 (特色专业)</a></li>
              <li><a href="#sec-disciplines">非物质文化遗产保护</a></li>
              <li><a href="#sec-disciplines">文物保护与修复中心</a></li>
              <li><a href="#sec-disciplines">广告策划与管理</a></li>
            </ul>
          </div>

          <div className="footer-col col-research">
            <div className="footer-heading">重点科研与实验室</div>
            <ul className="footer-link-list">
              <li><a href="#sec-research">黄河流域民间艺术研究所</a></li>
              <li><a href="#sec-research">中国古代造物思想研究基地</a></li>
              <li><a href="#sec-research">传统工艺与数字人文重点实验室</a></li>
              <li><a href="#sec-research">齐鲁造物文献特藏馆</a></li>
              <li><a href="#sec-news">学术活动动态通报</a></li>
              <li><a href="#sec-lectures">文心讲堂学术通告</a></li>
            </ul>
          </div>

          <div className="footer-col col-admin">
            <div className="footer-heading">办学规范与联络</div>
            <div className="footer-contact-block">
              <div className="contact-row">
                <span className="contact-kicker">院办电话：</span>
                <span className="contact-val">0531-89626180</span>
              </div>
              <div className="contact-row">
                <span className="contact-kicker">教学科研：</span>
                <span className="contact-val">0531-89626182</span>
              </div>
              <div className="contact-row">
                <span className="contact-kicker">电子信箱：</span>
                <span className="contact-val">rwys@sdada.edu.cn</span>
              </div>
            </div>
            <div className="footer-legal">
              <div>鲁ICP备05001234号-1 · 鲁公网安备37010202000100</div>
              <div>© 2026 山东工艺美术学院 人文艺术学院 版权所有</div>
            </div>
          </div>
        </div>
      </footer>

      {/* 弹窗：科研档案详细卷宗 */}
      {modalProject && (
        <div className="curatorial-modal-backdrop" onClick={() => setModalProject(null)}>
          <div
            className="curatorial-modal-dialog"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="modal-header-strip">
              <div className="modal-tags">
                <span className={`tag-pill ${modalProject.categoryClass}`}>{modalProject.category}</span>
                <span className="modal-code">{modalProject.code}</span>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setModalProject(null)}
                aria-label="关闭案卷"
              >
                <span>关闭 (Esc)</span>
                <span className="close-x">✕</span>
              </button>
            </div>

            <div className="modal-body-deck">
              <div className="modal-hero-image">
                <img src={modalProject.image} alt={modalProject.title} />
              </div>

              <div className="modal-content-deck">
                <div className="modal-dept-row">
                  <span className="dept-tag">{modalProject.dept}</span>
                  <span className="year-tag">{modalProject.year}</span>
                </div>
                <h2 className="modal-title">{modalProject.title}</h2>
                <div className="modal-role-highlight">{modalProject.role}</div>

                <div className="modal-grid-meta">
                  <div className="meta-box">
                    <span className="meta-lbl">项目负责人 / 创研团队</span>
                    <span className="meta-str">{modalProject.leader}</span>
                  </div>
                  <div className="meta-box">
                    <span className="meta-lbl">学术成果形态</span>
                    <span className="meta-str">{modalProject.medium}</span>
                  </div>
                </div>

                <div className="modal-narrative">
                  <div className="narrative-head">课题创研内容与学术提要：</div>
                  <p className="narrative-body">{modalProject.summary}</p>
                </div>

                <div className="modal-footer-action">
                  <button className="btn-modal-action" onClick={() => setModalProject(null)}>
                    <span>完成审阅并返回</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
