import { useState, type ReactNode } from "react"

// Curated high-res contemporary art, sculpture, architectural, and gallery imagery
const curatedImages = {
  hero: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?auto=format&fit=crop&w=2000&q=88",
  gallery: "./hero-exhibition.jpg",
  sculpture: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=86",
  installation: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=1200&q=86",
  digitalMedia: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=86",
  archive: "./field-library.jpg",
  folkContemporary: "./research-folk-art.jpg",
  seminar: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=86",
}

type CategoryType = "all" | "installation" | "theory" | "media" | "space"

interface Artwork {
  id: string
  code: string
  title: string
  titleEn: string
  category: CategoryType
  year: string
  artist: string
  medium: string
  image: string
}

const artworks: Artwork[] = [
  {
    id: "01",
    code: "ART-2026-01",
    title: "在物质与虚构之间：重构空间知觉",
    titleEn: "Between Matter and Fiction: Reconstructing Spatial Perception",
    category: "installation",
    year: "2026",
    artist: "当代实验艺术工作室",
    medium: "金属张拉结构、感应灯光、声音交互装置",
    image: curatedImages.hero,
  },
  {
    id: "02",
    code: "THY-2026-08",
    title: "视觉文化转向与中国当代艺术批评话语建构",
    titleEn: "Visual Turn & Discourse of Chinese Contemporary Art Criticism",
    category: "theory",
    year: "2025—2026",
    artist: "艺术史论与批评教研室",
    medium: "国家社科重点课题文献专著·四卷本",
    image: curatedImages.archive,
  },
  {
    id: "03",
    code: "MED-2026-04",
    title: "算法幽灵与合成自然：媒介生态学实验",
    titleEn: "Algorithmic Phantom & Synthetic Nature: Media Ecology",
    category: "media",
    year: "2026",
    artist: "跨媒介与计算艺术实验室",
    medium: "多通道实时生成式影像系统、气候数据驱动",
    image: curatedImages.digitalMedia,
  },
  {
    id: "04",
    code: "SPC-2026-12",
    title: "消逝的记忆场：乡村田野与在地公共策展",
    titleEn: "Vanishing Memory Field: Rural Fieldwork & Public Curation",
    category: "space",
    year: "2025",
    artist: "社会介入艺术实践课题组",
    medium: "在地材料、口述史影像文献、聚落空间改造",
    image: curatedImages.folkContemporary,
  },
]

const discourseItems = [
  {
    no: "01",
    type: "国际名家讲座",
    typeEn: "DISTINGUISHED LECTURE",
    date: "2026.04.18",
    title: "作为认知生产的当代策展：从白盒子到行星场域",
    speaker: "汉斯·克里斯托弗 / 柏林自由大学艺术史特聘教授",
    location: "学院当代艺术学术报告厅 / 线上同步直播",
  },
  {
    no: "02",
    type: "前沿跨学科论坛",
    typeEn: "INTERDISCIPLINARY FORUM",
    date: "2026.04.25",
    title: "生成式人工智能时代：图像的主体性与灵光的去中心化",
    speaker: "青年学者对谈组（艺术学·哲学·计算机跨界）",
    location: "新媒体艺术研讨室 302",
  },
  {
    no: "03",
    type: "国家级课题研讨",
    typeEn: "NATIONAL RESEARCH SEMINAR",
    date: "2026.05.02",
    title: "中华造物传统的现代哲学阐释与当代艺术转化路径",
    speaker: "学术委员会专家组与特邀全国重点美术院校同行",
    location: "传统与现代文献特藏馆",
  },
]

const faculties = [
  {
    name: "许文清",
    title: "讲席教授 · 博士生导师",
    role: "院学术委员会主任",
    field: "当代艺术批评 · 美学理论",
    pub: "《当代视觉政治学》《形式之后》",
  },
  {
    name: "陈立言",
    title: "特聘教授 · 国际策展人",
    role: "当代实验艺术中心负责人",
    field: "空间策展 · 跨媒介装置",
    pub: "威尼斯双年展特约研究员",
  },
  {
    name: "林见深",
    title: "教授 · 史论学科带头人",
    role: "视觉文化研究所所长",
    field: "中国古代画论当代阐发",
    pub: "《物象与心境：中国艺术史的阐释维》",
  },
  {
    name: "莫维安",
    title: "副教授 · 青年拔尖人才",
    role: "数字媒体艺术实验室主任",
    field: "生成艺术 · 智能人机交互",
    pub: "SIGGRAPH / ISEA 入围艺术家",
  },
]

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const filteredArtworks =
    activeCategory === "all"
      ? artworks
      : artworks.filter((item) => item.category === activeCategory)

  return (
    <div className="minimal-contemporary-site">
      {/* Top Architectural Notice Bar */}
      <aside className="status-bar">
        <div className="status-container">
          <span className="live-indicator">
            <span className="live-dot"></span>
            CURRENT EXHIBITION: 2026 SPRING BIENNIAL
          </span>
          <span className="status-meta">
            人文艺术学院 · 当代艺术展讯与学术理论平台 · 展期至 2026.06.30
          </span>
          <span className="status-coords">36°39'N · 117°00'E</span>
        </div>
      </aside>

      {/* Main Minimalist Header */}
      <header className="site-header">
        <div className="header-inner">
          <div className="brand-group">
            <a href="#top" className="brand-lockup">
              <span className="brand-symbol">■</span>
              <div className="brand-text">
                <span className="brand-main">人文艺术学院</span>
                <span className="brand-sub">
                  COLLEGE OF ARTS &amp; HUMANITIES
                </span>
              </div>
            </a>
            <span className="edition-badge">SCHEME 03 · CONTEMPORARY</span>
          </div>

          <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
            <a href="#manifesto" onClick={() => setIsMenuOpen(false)}>
              学术主张
            </a>
            <a href="#vectors" onClick={() => setIsMenuOpen(false)}>
              研究向度
            </a>
            <a href="#exhibitions" onClick={() => setIsMenuOpen(false)}>
              前沿展陈
            </a>
            <a href="#discourse" onClick={() => setIsMenuOpen(false)}>
              理论论坛
            </a>
            <a href="#faculty" onClick={() => setIsMenuOpen(false)}>
              名家矩阵
            </a>
            <a href="#admissions" onClick={() => setIsMenuOpen(false)}>
              招考研究
            </a>
          </nav>

          <div className="header-actions">
            <a href="#admissions" className="btn-monochrome">
              <span>2026 招考指南</span>
              <span className="arrow-icon">↗</span>
            </a>
            <button
              className="mobile-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="切换导航菜单"
            >
              {isMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section: Asymmetric Monumental Typography */}
        <section className="hero-section" id="top">
          <div className="hero-grid">
            <div className="hero-text-col">
              <div className="hero-meta-kicker">
                <span className="kicker-tag">[ CONTEMPORARY / 03 ]</span>
                <span className="kicker-date">ISSUE: 2026.SPRING</span>
              </div>
              <h1 className="hero-title">
                <span className="hero-line-en">SEE. THINK. TRANSCEND.</span>
                <span className="hero-line-zh">在观念与物质之间</span>
              </h1>
              <p className="hero-lead">
                人文艺术学院以深厚的历史文脉为坐标，直面当代精神境况。我们倡导反思性的理论批评与先锋性的跨媒介创作，在极简的留白中叩问艺术的本体意义与未来形态。
              </p>
              <div className="hero-actions">
                <a href="#exhibitions" className="btn-hero-primary">
                  <span>浏览展陈与研究成果</span>
                  <span className="arrow-down">↓</span>
                </a>
                <a href="#manifesto" className="btn-hero-outline">
                  <span>阅读学院学术宣言</span>
                </a>
              </div>
              <div className="hero-stats-strip">
                <div className="stat-block">
                  <span className="stat-number">03</span>
                  <span className="stat-desc">核心前沿创作向度</span>
                </div>
                <div className="stat-block">
                  <span className="stat-number">100%</span>
                  <span className="stat-desc">国家一流本科专业点</span>
                </div>
                <div className="stat-block">
                  <span className="stat-number">12+</span>
                  <span className="stat-desc">国际联展与学术双年展</span>
                </div>
              </div>
            </div>

            <div className="hero-visual-col">
              <div className="visual-frame">
                <img
                  src={curatedImages.gallery}
                  alt="人文艺术学院当代展陈空间"
                  className="hero-img"
                />
                <div className="visual-caption">
                  <div className="caption-tag">EXHIBITION VIEW / 01</div>
                  <div className="caption-text">
                    《物态之辩：传统器物构形与当代观念装置》展出现场
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Curatorial Manifesto */}
        <section className="manifesto-section" id="manifesto">
          <div className="section-container">
            <div className="manifesto-header">
              <span className="section-kicker">01 / CURATORIAL MANIFESTO</span>
              <h2 className="section-heading">学术主张与策展宣言</h2>
            </div>
            <div className="manifesto-content">
              <blockquote className="monumental-quote">
                “艺术绝非孤立的图画再造，而是思想的肉身化。真正的当代性，根植于对文化底层的严峻省思，与对未来媒介边界的勇敢逾越。”
              </blockquote>
              <div className="quote-attribution">
                <span className="attrib-role">
                  学院学术委员会 · 2026 年度策展导言
                </span>
                <span className="attrib-loc">济南 · 长清校区</span>
              </div>
            </div>
          </div>
        </section>

        {/* Three Research Vectors */}
        <section className="vectors-section" id="vectors">
          <div className="section-container">
            <div className="section-title-row">
              <div>
                <span className="section-kicker">02 / RESEARCH VECTORS</span>
                <h2 className="section-heading">三大前沿学术向度</h2>
              </div>
              <p className="section-subtext">
                以学科交叉与观念重构为驱动力，构筑当代艺术创作与学术理论的高地。
              </p>
            </div>

            <div className="vectors-grid">
              <div className="vector-card">
                <div className="card-index">VECTOR / 01</div>
                <h3 className="card-title">跨媒介创作与空间实验</h3>
                <p className="card-desc">
                  打破单一画种界限，融合金属装置、光学材料、声场建筑与感应交互，探讨身体、场域与感知的新维度。
                </p>
                <ul className="card-tags">
                  <li>实验艺术实验室</li>
                  <li>大型空间装置</li>
                  <li>在地场域建造</li>
                </ul>
              </div>

              <div className="vector-card">
                <div className="card-index">VECTOR / 02</div>
                <h3 className="card-title">批评理论与中国现代史论</h3>
                <p className="card-desc">
                  立足中国本土文化特质，梳理 20
                  世纪以来的造物思想与视觉变革，为当代艺术创作提供坚实的哲学本体论阐释。
                </p>
                <ul className="card-tags">
                  <li>国家社科基金重大课题</li>
                  <li>视觉文化年刊</li>
                  <li>当代批评专著</li>
                </ul>
              </div>

              <div className="vector-card">
                <div className="card-index">VECTOR / 03</div>
                <h3 className="card-title">算法生态与生成式媒介</h3>
                <p className="card-desc">
                  关注人工智能、计算生成与合成生物学对艺术创作逻辑的深刻重塑，展开批判性的媒介考古与前瞻探索。
                </p>
                <ul className="card-tags">
                  <li>AI 协同艺术研究</li>
                  <li>数据动态可视化</li>
                  <li>未来媒介实验室</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Works & Exhibitions */}
        <section className="exhibitions-section" id="exhibitions">
          <div className="section-container">
            <div className="section-title-row">
              <div>
                <span className="section-kicker">03 / ARCHIVE &amp; WORKS</span>
                <h2 className="section-heading">代表性研究成果与展陈</h2>
              </div>
              <div className="category-filter">
                <button
                  className={`filter-btn ${activeCategory === "all" ? "active" : ""}`}
                  onClick={() => setActiveCategory("all")}
                >
                  全部 [ALL]
                </button>
                <button
                  className={`filter-btn ${activeCategory === "installation" ? "active" : ""}`}
                  onClick={() => setActiveCategory("installation")}
                >
                  空间装置
                </button>
                <button
                  className={`filter-btn ${activeCategory === "theory" ? "active" : ""}`}
                  onClick={() => setActiveCategory("theory")}
                >
                  史论文献
                </button>
                <button
                  className={`filter-btn ${activeCategory === "media" ? "active" : ""}`}
                  onClick={() => setActiveCategory("media")}
                >
                  计算媒介
                </button>
                <button
                  className={`filter-btn ${activeCategory === "space" ? "active" : ""}`}
                  onClick={() => setActiveCategory("space")}
                >
                  在地策展
                </button>
              </div>
            </div>

            <div className="artworks-grid">
              {filteredArtworks.map((item) => (
                <article key={item.id} className="artwork-card">
                  <div className="artwork-image-box">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="artwork-img"
                    />
                    <div className="artwork-badge">{item.code}</div>
                  </div>
                  <div className="artwork-meta">
                    <div className="artwork-header">
                      <span className="artwork-year">{item.year}</span>
                      <span className="artwork-artist">{item.artist}</span>
                    </div>
                    <h3 className="artwork-title">{item.title}</h3>
                    <p className="artwork-title-en">{item.titleEn}</p>
                    <p className="artwork-medium">{item.medium}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Discourse & Forum */}
        <section className="discourse-section" id="discourse">
          <div className="section-container">
            <div className="section-title-row">
              <div>
                <span className="section-kicker">04 / PUBLIC DISCOURSE</span>
                <h2 className="section-heading">先锋理论论坛与学术争鸣</h2>
              </div>
              <p className="section-subtext">
                以开放姿态介入国际理论对话，保持思想的锋芒与批判力。
              </p>
            </div>

            <div className="discourse-list">
              {discourseItems.map((item) => (
                <div key={item.no} className="discourse-row">
                  <div className="row-number">{item.no}</div>
                  <div className="row-type">
                    <span className="type-badge">{item.type}</span>
                    <span className="type-en">{item.typeEn}</span>
                  </div>
                  <div className="row-content">
                    <h3 className="discourse-title">{item.title}</h3>
                    <div className="discourse-speaker">{item.speaker}</div>
                    <div className="discourse-location">{item.location}</div>
                  </div>
                  <div className="row-date">
                    <span className="date-text">{item.date}</span>
                    <span className="join-link">登记参与 →</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Faculty & Academic Committee */}
        <section className="faculty-section" id="faculty">
          <div className="section-container">
            <div className="section-title-row">
              <div>
                <span className="section-kicker">05 / ACADEMIC FELLOWS</span>
                <h2 className="section-heading">名师与学术委员会</h2>
              </div>
              <p className="section-subtext">
                汇聚全国顶尖当代艺术家、国家级一流专业学者与前沿策展人。
              </p>
            </div>

            <div className="faculty-grid">
              {faculties.map((f, idx) => (
                <div key={idx} className="faculty-card">
                  <div className="card-top-index">FELLOW / 0{idx + 1}</div>
                  <h3 className="faculty-name">{f.name}</h3>
                  <div className="faculty-title">{f.title}</div>
                  <div className="faculty-role">{f.role}</div>
                  <div className="faculty-divider"></div>
                  <div className="faculty-field">
                    <span className="field-label">研究方向：</span>
                    <span>{f.field}</span>
                  </div>
                  <div className="faculty-pub">
                    <span className="field-label">代表著述 / 展陈：</span>
                    <span>{f.pub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Admissions & Global Fellowship CTA */}
        <section className="cta-section" id="admissions">
          <div className="cta-container">
            <div className="cta-badge">ADMISSIONS &amp; ACADEMIC INQUIRY</div>
            <h2 className="cta-title">在当代现场，与卓越同行</h2>
            <p className="cta-desc">
              2026 年度本科生报考、硕士研究生统考及博士后科研流动站申请全面开放。
              欢迎具备敏锐批判意识、扎实学术素养与创新勇气的青年学者与创作者加入。
            </p>
            <div className="cta-actions">
              <a href="#top" className="btn-cta-primary">
                <span>下载 2026 本科与研究生招考简章</span>
                <span>↓</span>
              </a>
              <a href="#top" className="btn-cta-secondary">
                <span>访问学者与青年艺术家驻留计划</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Minimalist Architectural Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand">
              <span className="footer-symbol">■</span>
              <span className="footer-name">人文艺术学院</span>
              <span className="footer-en">SCHOOL OF ARTS AND HUMANITIES</span>
            </div>
            <div className="footer-slogan">
              “以当代反思传统，以观念引领造物。”
            </div>
          </div>

          <div className="footer-grid">
            <div className="footer-col">
              <h4>校区驻地与场馆</h4>
              <p>山东省济南市长清区大学科技园大学路1号</p>
              <p>实验艺术中心 / 视觉文献馆 / 美术馆东厅</p>
            </div>
            <div className="footer-col">
              <h4>学术事务联络</h4>
              <p>学术办公室: sha_academic@university.edu.cn</p>
              <p>展览策展部: sha_gallery@university.edu.cn</p>
              <p>电话咨询: 0531-89626000</p>
            </div>
            <div className="footer-col">
              <h4>前沿学科专业</h4>
              <p>艺术设计学 (国家级一流专业 / 软科A+)</p>
              <p>艺术史论 (国家级一流本科专业)</p>
              <p>跨媒体艺术与当代策展方向</p>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 人文艺术学院 (School of Arts and Humanities) · 官方官网改版方案三</span>
            <span>CONTEMPORARY AVANT-GARDE EDITION · 鲁ICP备00000000号</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
