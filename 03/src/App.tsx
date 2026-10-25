import { useState, useEffect } from "react"

// 精选学术展陈、文献特藏与田野考察影像
const curatedAssets = {
  heroExhibition: "./hero-exhibition.jpg",
  fieldLibrary: "./field-library.jpg",
  folkResearch: "./research-folk-art.jpg",
  installation: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?auto=format&fit=crop&w=1200&q=82",
  digitalMedia: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=82",
}

// 严谨源自 01 与 02 的完整专业与教研室设置（共8项，真实无虚构）
interface AcademicProgram {
  no: string
  code: string
  name: string
  enName: string
  qualification: string
  degree: string
  duration: string
  summary: string
  courses: string[]
  coreDirections: string[]
  careerFields: string[]
}

const academicPrograms: AcademicProgram[] = [
  {
    no: "01",
    code: "DES-130501",
    name: "艺术设计学",
    enName: "Design Studies",
    qualification: "软科 A+ · 国家级一流本科专业",
    degree: "艺术学学士 / 硕士 / 博士方向",
    duration: "标准四年制",
    summary: "全国排名前列顶尖学科，致力于设计历史、设计理论、设计批评与设计战略前沿研究，建构中国自主设计话语体系。",
    courses: ["设计史学专题", "中国造物思想史", "设计批评学", "设计战略与策展"],
    coreDirections: [
      "中国古代造物思想与器具制度",
      "近现代设计史与设计批评",
      "文化遗产与文创战略设计",
      "数字人文与设计跨媒介传播",
    ],
    careerFields: [
      "高校与科研院所教学科研岗位",
      "国家文博机构与美术馆学术策展",
      "知名设计机构与文旅产业战略智库",
      "专业学术期刊与主流文化传媒出版",
    ],
  },
  {
    no: "02",
    code: "ART-130101",
    name: "艺术史论",
    enName: "Art History & Theory",
    qualification: "国家级一流本科专业",
    degree: "艺术学学士 / 硕士",
    duration: "标准四年制",
    summary: "聚焦中国美术史、西方造物史、黄河民艺理论与视觉文化，培养具备深厚历史视野与批判思辨能力的学术英才。",
    courses: ["中国美术史考论", "西方近现代艺术史", "视觉文献研读", "民艺理论与田野调查"],
    coreDirections: [
      "齐鲁古代艺术文献考证与学术溯源",
      "中国古代画论与书画史专题",
      "民间工艺美术史学与造型体系",
      "当代视觉文化与跨媒介批评",
    ],
    careerFields: [
      "文博展陈设计与文物考释研究",
      "艺术出版社与专业期刊学术编辑",
      "艺术品评估鉴赏与专业艺术策展",
      "高等艺术院校史论专业师资",
    ],
  },
  {
    no: "03",
    code: "MGT-120206",
    name: "文化产业管理",
    enName: "Cultural Management",
    qualification: "国家级一流本科专业",
    degree: "管理学学士 / 硕士",
    duration: "标准四年制",
    summary: "立足文旅深度融合、非遗产业化运营与艺术策展管理，培养兼通人文素养与现代产业运作的高级复合管理人才。",
    courses: ["文化资源开发与管理", "艺术市场与策展", "数字文化产业战略", "文化遗产经济学"],
    coreDirections: [
      "文化遗产数字化保护与产业活化",
      "艺术市场运营与文博创意策划",
      "文化经济学与文创投融资运作",
      "公共文化设施与文旅综合体运营",
    ],
    careerFields: [
      "文化与旅游各级行政主管部门",
      "文化传媒集团与数字文创头部企业",
      "艺术基金会、拍卖行与策展机构",
      "文创消费品牌与乡村振兴运营团队",
    ],
  },
  {
    no: "04",
    code: "FA-130401",
    name: "美术学",
    enName: "Fine Arts",
    qualification: "国家级特色专业",
    degree: "艺术学学士",
    duration: "标准四年制",
    summary: "融合当代艺术理论、美术史学方法论与审美教育，注重基础理论建构与社会美育实践的深度贯通。",
    courses: ["美术理论与美育史", "中国古代画论", "现代艺术流派辨析", "艺术教育心理学"],
    coreDirections: [
      "美术教育心理学与社会美育实践",
      "中外古代画论研读与造型原理",
      "社会美育与社区在地介入设计",
      "现当代艺术流派演进与批评",
    ],
    careerFields: [
      "大中专院校与基础教育美育名师",
      "美术馆与文化馆公共教育部",
      "艺术普及与社会文化推广组织",
      "艺术理论研究与考研深造梯队",
    ],
  },
  {
    no: "05",
    code: "ICH-130102",
    name: "非物质文化遗产保护",
    enName: "Intangible Cultural Heritage",
    qualification: "山东省首批非遗本科专业",
    degree: "艺术学学士",
    duration: "标准四年制",
    summary: "依托齐鲁深厚民间手工艺沃土，开展抢救性调查、数字谱系测绘、活态传承与当代造物创新衍生。",
    courses: ["非物质文化遗产概论", "民艺田野工作方法", "传统手工技艺谱系", "活态传承与社区营造"],
    coreDirections: [
      "传统民间手工艺数字测绘建档",
      "民艺口述史采录与田野实务",
      "非遗衍生产品设计与当代活化",
      "非物质文化遗产政策与法律实务",
    ],
    careerFields: [
      "省市级非物质文化遗产保护中心",
      "民间手工艺研究所与工艺大师工作室",
      "文旅融合与乡村振兴项目策划分部",
      "国家级非遗数字化影像特藏馆",
    ],
  },
  {
    no: "06",
    code: "CON-130507",
    name: "文物保护与修复",
    enName: "Heritage Conservation",
    qualification: "省级实验教学示范中心依托",
    degree: "历史学 / 艺术学学士",
    duration: "标准四年制",
    summary: "依托高水平实验教学示范平台，结合科技检测、古籍纸质文献修复、古代陶瓷金属保护开展跨学科教学。",
    courses: ["文物保护与科技概论", "纸质与书画文献修复", "无机质文物修复实务", "科技分析与材质检测"],
    coreDirections: [
      "纸质古籍文献与珍贵书画装裱修复",
      "出土陶瓷器与青铜器保护科技",
      "文物无损材质光谱分析与病害诊断",
      "馆藏微环境智能调控与预防性保护",
    ],
    careerFields: [
      "各级历史博物馆文物修复保护室",
      "国家图书馆古籍特藏部与档案馆",
      "考古研究所发掘现场应急保护队",
      "文物科学分析与检测高新技术实验室",
    ],
  },
  {
    no: "07",
    code: "ADV-120703",
    name: "广告策划与管理",
    enName: "Creative Advertising",
    qualification: "省级一流本科专业建设点",
    degree: "文学 / 管理学学士",
    duration: "标准四年制",
    summary: "融合现代传播学、品牌战略、整合营销传播与数字创意实务，屡获全国大学生广告艺术大赛顶级大奖。",
    courses: ["品牌战略规划", "整合营销传播", "数字内容与跨媒介创意", "用户体验与行为分析"],
    coreDirections: [
      "数字时代全域品牌战略与内容设计",
      "计算广告与生成式人工智能创意",
      "数字营销传播效果与消费者洞察",
      "城市形象公关与跨媒介事件策划",
    ],
    careerFields: [
      "一线广告传播集团与品牌策划智库",
      "头部互联网科技企业品牌市场部",
      "数字创意机构与新媒体运营中心",
      "文旅品牌与大型公关传播机构",
    ],
  },
  {
    no: "08",
    code: "PUB-130000",
    name: "公共艺术史论教研室",
    enName: "Public Art Studies",
    qualification: "跨学科虚拟教研室",
    degree: "跨学科通识与虚拟教研协同",
    duration: "贯穿全院多学科",
    summary: "承担全院跨学科公共艺术理论、城乡微更新美育实践与综合通识人文教学，推进科教融汇与协同创新。",
    courses: ["公共艺术导论", "城市更新与在地介入", "社会美育跨学科工作坊", "当代公共文化空间"],
    coreDirections: [
      "城市空间微更新与公共艺术雕塑",
      "乡村美育在地参与式设计与营造",
      "跨媒介沉浸式公共装置与空间叙事",
      "高等艺术通识人文理论课程集群",
    ],
    careerFields: [
      "城乡规划设计研究院公共艺术室",
      "城市环境更新与大型公共艺术策划",
      "高校跨学科理论教学与美育研究室",
      "跨界数字艺术机构与策展工作室",
    ],
  },
]

// 真实新闻动态数据
interface NewsItem {
  id: string
  tag: string
  date: string
  day: string
  month: string
  title: string
  excerpt: string
  image?: string
  isLead?: boolean
  quote?: string
  badgeStat?: string
  speaker?: string
}

const newsList: NewsItem[] = [
  {
    id: "news-01",
    tag: "院务通报",
    date: "2025.03.22",
    day: "22",
    month: "03月",
    title: "学院召开2025年学科建设与拔尖创新人才培养推进会",
    excerpt: "全面梳理一流学科与核心课程建设进展，深化产教协同与科教融汇，强化学术创新与成果转化，扎实推进学院内涵式高质量发展。",
    image: curatedAssets.heroExhibition,
    isLead: true,
    quote: "以一流学科建设为引擎，深化科教融汇与拔尖人才培养新范式。",
  },
  {
    id: "news-02",
    tag: "学术讲堂",
    date: "2025.03.18",
    day: "18",
    month: "03月",
    title: "“文心弦歌”学术季：民间艺术的当代转化与国际表达讲座举行",
    excerpt: "特邀知名学者围绕黄河民间艺术当代价值与国际传播路径展开深度研讨，启迪青年学人扎根大地创研。",
    speaker: "主讲：范迪安 教授",
  },
  {
    id: "news-03",
    tag: "教学展览",
    date: "2025.03.14",
    day: "14",
    month: "03月",
    title: "“在场之思”2025届人文与艺术综合实践教学汇报展启幕",
    excerpt: "集中呈现跨学科田野考察、文献整理、策展实践与跨媒介设计的阶段性教学与拔尖育人成果。",
    image: curatedAssets.fieldLibrary,
  },
  {
    id: "news-04",
    tag: "荣誉成果",
    date: "2025.03.10",
    day: "10",
    month: "03月",
    title: "我院师生作品在全国大学生广告艺术大赛中再获佳绩",
    excerpt: "共斩获国家级奖项27项，以真实课题与前沿创意实践彰显卓越应用型拔尖人才培养成效。",
    badgeStat: "全国 27 项大奖",
  },
]

// 重点科研项目与基地档案
interface ResearchProject {
  id: string
  code: string
  title: string
  category: string
  dept: string
  year: string
  leader: string
  role: string
  medium: string
  summary: string
  image: string
  fundInfo: string
  targetMilestone: string
  coordinates: string
  fieldStations: number
}

const researchProjects: ResearchProject[] = [
  {
    id: "01",
    code: "KEY-2026-01",
    title: "黄河流域民间手工艺调查与数字化活化图录",
    category: "国家重点课题",
    dept: "黄河流域民间艺术研究所",
    year: "2025 / 2026",
    leader: "民间美术与文化遗产研究所团队",
    role: "国家社科基金艺术学重点项目",
    medium: "全流域田野测绘、口述史影音文献、全景数字图谱（八卷本）",
    summary: "历时五年深入沿黄九省区传统手工艺聚落，抢救性建档记录濒危手工艺门类，提出基于活态传承的现代造物转化与乡村文化振兴实施框架。",
    image: curatedAssets.folkResearch,
    fundInfo: "国家社科基金艺术学重点资助 · 项目编号 20AFG008",
    targetMilestone: "2026年正式出版八卷本学术图录并上线数字检索智库",
    coordinates: "36.65°N, 116.82°E · 长清大学科技园特藏文献库",
    fieldStations: 46,
  },
  {
    id: "02",
    code: "PUB-2026-04",
    title: "中国古代造物思想与器物制度考论",
    category: "学术专著出版",
    dept: "艺术史论系 / 齐鲁文化特藏室",
    year: "2026",
    leader: "古代造物制度与艺术史文献研究团队",
    role: "教育部人文社会科学重点研究基地重大成果",
    medium: "文献考据、出土实物拓本重构、先秦至明清造物谱系图志",
    summary: "系统梳理传世文献与考古新发现，深度剖析中华器物文明背后的礼制规约、造物审美演变及其对当代生活方式设计的启示。",
    image: curatedAssets.fieldLibrary,
    fundInfo: "教育部重点研究基地重大攻关项目资助",
    targetMilestone: "结集三卷本《中国造物器度考》并开展学术研讨巡展",
    coordinates: "36.56°N, 116.79°E · 齐鲁文化文献特藏馆",
    fieldStations: 28,
  },
  {
    id: "03",
    code: "LAB-2026-03",
    title: "乡土美育与在地设计介入实验：乡村社区微更新模型",
    category: "全国美展成果",
    dept: "艺术设计学系",
    year: "2026",
    leader: "社会服务与在地设计联合工作坊",
    role: "第十四届全国美术作品展览设计艺术展入选成果",
    medium: "在地建筑构件活化、乡土公共空间改造方案、社会美育参与模型",
    summary: "拒绝大拆大建式旅游景观开发，将设计介入转化为乡村社区日常交往仪式的激活剂，探索手工艺与现代设计协同赋能的乡村美育新范式。",
    image: curatedAssets.heroExhibition,
    fundInfo: "文化和旅游部与中国美协重点支持示范成果",
    targetMilestone: "建立齐鲁沿黄九县区乡村美育工作站常态示范点",
    coordinates: "36.42°N, 117.15°E · 泰山乡村美育实验驻地",
    fieldStations: 16,
  },
  {
    id: "04",
    code: "LAB-2026-02",
    title: "算法诗学：生成式交互装置与多通道空间感知实验",
    category: "前沿计算实验",
    dept: "跨媒介艺术与计算交互重点实验室",
    year: "2026",
    leader: "跨媒介与数字艺术重点实验室团队",
    role: "国际新媒体艺术年展特邀参展项目",
    medium: "多通道实时生成影像系统、环境气压流变感知传感器、声音交互架构",
    summary: "将传统山水画论中的“气韵生动”转译为实时神经元生成算法参数，探索人工智能时代机器智能对东方空间意境的重构可能。",
    image: curatedAssets.digitalMedia,
    fundInfo: "山东省高校重点实验室自主创新专项基金",
    targetMilestone: "发布生成式东方意境计算模型与交互开源套件",
    coordinates: "36.66°N, 116.83°E · 实验中心沉浸式视听研讨厅",
    fieldStations: 8,
  },
]

// 文心讲堂与学术通报
const lectureSeries = [
  {
    no: "01",
    series: "特别学术讲坛 · 齐鲁艺文名家第52期",
    date: "2026.04.18",
    time: "14:30 / 17:00",
    title: "立足中国大地：新时代艺术教育与设计学科的文化使命",
    speaker: "范迪安 教授",
    speakerTitle: "中国美术家协会主席 / 原中央美术学院院长",
    location: "长清校区人文艺术学院二楼学术报告厅",
    status: "名家讲席 · 席位预约",
    isVip: true,
    capacity: "限额 260 人",
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
    isVip: false,
    capacity: "限额 60 人",
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
    status: "课题组优先",
    isVip: false,
    capacity: "限额 40 人",
  },
]

// 学术委员会名录
const academicLeadersTier1 = [
  {
    num: "01",
    name: "张道一 先生",
    role: "名誉院长 · 学术总顾问",
    spec: "中国艺术学与民艺学开创者、资深美术理论家",
    monograph: "代表著作：《造物思想研究》《民艺学论纲》《美在民间》",
    bio: "奠定中国工艺美术历史与理论学术体系，开创齐鲁造物学派深厚根基。",
  },
  {
    num: "02",
    name: "潘鲁生 教授",
    role: "资深教授 · 博士生导师",
    spec: "中国民间文艺家协会主席、国家万人计划领军人才",
    monograph: "代表著作：《民艺学通论》《中国民艺调查》《设计与民生》",
    bio: "主持国家社科艺术学重大项目，长期深耕黄河流域民间手工艺保护与转化。",
  },
]

const academicLeadersTier2 = [
  {
    num: "03",
    name: "董占军 教授",
    role: "学科带头人 · 院学术委员会主任",
    spec: "设计历史与造物思想研究、设计批评学、艺术设计学国家一流专业负责人",
  },
  {
    num: "04",
    name: "赵屹 教授",
    role: "特聘学科领航学者 · 博士生导师",
    spec: "民俗艺术学、非物质文化遗产数字化活态保护、民间传统造物谱系测绘",
  },
]

// 2026 招考全景里程碑时间轴
const admissionsMilestones = [
  {
    step: "01",
    period: "12月 - 01月",
    title: "艺术类统考评测",
    desc: "各省美术与设计类专业统考成绩公布，划定专业合格线与综合评定标准。",
  },
  {
    step: "02",
    period: "04月 - 05月",
    title: "招生简章发布与开放日",
    desc: "公布2026年本科招生章程、分省招生计划与专业大类选考要求。",
  },
  {
    step: "03",
    period: "06月 - 07月",
    title: "全国高考与志愿填报",
    desc: "艺术类提前批与普通本科一批（文理兼收）填报，实行平行志愿投档。",
  },
  {
    step: "04",
    period: "09月 开学季",
    title: "拔尖创新实验班遴选",
    desc: "新生入学报到，开展黄河文脉造物创新实验班与拔尖双导师互选签约。",
  },
]

export default function App() {
  const [activeResearchId, setActiveResearchId] = useState<string>("01")
  const [modalProject, setModalProject] = useState<ResearchProject | null>(null)
  const [activePlate, setActivePlate] = useState<number | null>(null)
  const [selectedDisciplineIndex, setSelectedDisciplineIndex] = useState<number>(0)
  const [activeProgramModal, setActiveProgramModal] = useState<AcademicProgram | null>(null)
  const [activeCourseExplainer, setActiveCourseExplainer] = useState<string | null>("中国造物思想史")
  const [researchTab, setResearchTab] = useState<"specimen" | "metrics" | "map">("specimen")
  const [copiedField, setCopiedField] = useState<string | null>(null)
  const [bookedLectureNo, setBookedLectureNo] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  // 复制反馈处理
  const handleCopy = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
    }
    setCopiedField(label)
    setTimeout(() => setCopiedField(null), 2400)
  }

  // 键盘快捷键响应
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setModalProject(null)
        setActiveProgramModal(null)
      }
      if (e.key === "1") document.getElementById("sec-hero")?.scrollIntoView({ behavior: "smooth" })
      if (e.key === "2") document.getElementById("sec-news")?.scrollIntoView({ behavior: "smooth" })
      if (e.key === "3") document.getElementById("sec-disciplines")?.scrollIntoView({ behavior: "smooth" })
      if (e.key === "4") document.getElementById("sec-research")?.scrollIntoView({ behavior: "smooth" })
      if (e.key === "5") document.getElementById("sec-lectures")?.scrollIntoView({ behavior: "smooth" })
      if (e.key === "6") document.getElementById("sec-admissions")?.scrollIntoView({ behavior: "smooth" })
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const currentProgram = academicPrograms[selectedDisciplineIndex] || academicPrograms[0]
  const selectedResearch = researchProjects.find((p) => p.id === activeResearchId) || researchProjects[0]

  return (
    <div className="minimalist-editorial-root">
      {/* 结构性背景基准十二轴发丝网格（100% 全宽，12 列建筑精微参考系，唯一保留的骨架） */}
      <div className="grid-overlay" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="grid-col" />
        ))}
      </div>

      {/* ================= 1. 浮动建筑式顶栏导览 (置于十二列网格轴线上) ================= */}
      <header className="arch-masthead">
        <div className="masthead-grid-wrap">
          <div className="masthead-brand-col">
            <a href="#top" className="masthead-logo-link" title="山东工艺美术学院 人文艺术学院">
              <img
                src="./college-logo.png"
                alt="山东工艺美术学院 人文艺术学院"
                className="masthead-logo-img"
              />
            </a>
            <span className="masthead-motto-tag">
              全国 A+ 学科 · 国家级一流专业
            </span>
          </div>

          <div className="masthead-telemetry-col">
            <span className="telemetry-dot" />
            <span className="telemetry-text">JINAN 36.65°N · 2026 SPRING · VOL.08</span>
          </div>

          <nav className={`masthead-nav-col ${mobileMenuOpen ? "is-open" : ""}`}>
            <a href="#sec-hero" className="nav-anchor" onClick={() => setMobileMenuOpen(false)}>
              <span className="nav-num">01</span>
              <span className="nav-label">文脉空间</span>
            </a>
            <a href="#sec-news" className="nav-anchor" onClick={() => setMobileMenuOpen(false)}>
              <span className="nav-num">02</span>
              <span className="nav-label">学术纪事</span>
            </a>
            <a href="#sec-disciplines" className="nav-anchor" onClick={() => setMobileMenuOpen(false)}>
              <span className="nav-num">03</span>
              <span className="nav-label">专业拓扑</span>
            </a>
            <a href="#sec-research" className="nav-anchor" onClick={() => setMobileMenuOpen(false)}>
              <span className="nav-num">04</span>
              <span className="nav-label">科研案卷</span>
            </a>
            <a href="#sec-lectures" className="nav-anchor" onClick={() => setMobileMenuOpen(false)}>
              <span className="nav-num">05</span>
              <span className="nav-label">文心讲堂</span>
            </a>
            <a href="#sec-admissions" className="nav-anchor" onClick={() => setMobileMenuOpen(false)}>
              <span className="nav-num">06</span>
              <span className="nav-label">招考通道</span>
            </a>
          </nav>

          <div className="masthead-action-col">
            <a href="#sec-admissions" className="btn-arch-action">
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
        </div>
      </header>

      {/* ================= 页面主画布：完全重构的内容空间 ================= */}
      <main className="editorial-canvas" id="top">
        {/* ================= 2. HERO: 典雅学术三联体画卷 (高定博物馆风，无横向网格，平衡尊崇) ================= */}
        <section className="arch-hero-stage" id="sec-hero">
          {/* 背景古典学术微水印 */}
          <div className="hero-archival-watermark" aria-hidden="true">
            SHANDONG CRAFT & HUMANITIES · 1973–2026
          </div>

          {/* 顶端纯净极简学术标尺（无全宽横线） */}
          <div className="hero-editorial-mast-kicker">
            <div className="mast-kicker-left">
              <span className="kicker-mono-index">VOL. 2026 / 08</span>
              <span className="kicker-sep">/</span>
              <span className="kicker-topic">齐鲁造物学派文献库与一流学科高地</span>
            </div>
            <div className="mast-kicker-right">
              <span className="kicker-coords">JINAN · 36.65°N, 116.82°E</span>
            </div>
          </div>

          {/* 非对称高定学术画卷 (左侧巨幅建筑展陈画卷 · 右侧庄严学术篇章) */}
          <div className="hero-asymmetric-spread">
            {/* 左侧：巨幅建筑焦点画卷与平滑典藏切换 (占第 1 至 7 列，延伸至左边缘) */}
            <div className="hero-anchor-gallery">
              <div className="anchor-frame">
                <img
                  src={
                    activePlate === 2
                      ? curatedAssets.fieldLibrary
                      : activePlate === 3
                      ? curatedAssets.folkResearch
                      : curatedAssets.heroExhibition
                  }
                  alt={
                    activePlate === 2
                      ? "齐鲁造物文献特藏室与古籍善本"
                      : activePlate === 3
                      ? "黄河流域民间艺术抢救性田野测绘"
                      : "学院当代艺术展陈空间与实践现场"
                  }
                  className="anchor-img"
                />
                <div className="anchor-hud-tag">
                  <span className="anchor-hud-code">
                    {activePlate === 2
                      ? "PLATE #02 · ARCHIVAL FOLIO"
                      : activePlate === 3
                      ? "PLATE #03 · FIELD SURVEY SPECIMEN"
                      : "PLATE #01 · CONTEMPORARY EXHIBITION"}
                  </span>
                  <span className="anchor-hud-title">
                    {activePlate === 2
                      ? "齐鲁造物文献特藏室 · 古籍善本"
                      : activePlate === 3
                      ? "黄河流域民间手工艺抢救性田野测绘"
                      : "国家级实验教学示范中心 · 现场实景"}
                  </span>
                </div>
              </div>

              {/* 沉静极简的典藏画幅切换器（纯正编辑排版，无花哨浮标） */}
              <div className="anchor-plate-tabs">
                <button
                  className={`plate-tab-item ${activePlate === 1 || activePlate === null ? "is-active" : ""}`}
                  onClick={() => setActivePlate(1)}
                >
                  <span className="tab-idx">01</span>
                  <span className="tab-text">当代展陈</span>
                </button>
                <span className="tab-divider">/</span>
                <button
                  className={`plate-tab-item ${activePlate === 2 ? "is-active" : ""}`}
                  onClick={() => setActivePlate(2)}
                >
                  <span className="tab-idx">02</span>
                  <span className="tab-text">文献特藏</span>
                </button>
                <span className="tab-divider">/</span>
                <button
                  className={`plate-tab-item ${activePlate === 3 ? "is-active" : ""}`}
                  onClick={() => setActivePlate(3)}
                >
                  <span className="tab-idx">03</span>
                  <span className="tab-text">民艺田野</span>
                </button>
              </div>
            </div>

            {/* 右侧：当代使命与学术英才引航主章 (占第 8 至 12 列) */}
            <div className="hero-flank hero-flank-vision">
              <div className="flank-kicker-row">
                <span className="flank-rubric">[ 01 / 时代引航 · 学院愿景与学术文脉 · VISION & HERITAGE ]</span>
              </div>
              <h1 className="flank-title-serif">
                <span className="title-line">以人文涵养艺术</span>
                <span className="title-line">以设计赋能时代</span>
              </h1>
              <p className="flank-prose">
                承袭齐鲁千年造物哲思与学术文脉，立足软科 A+ 顶尖学科与国家级一流专业建设点。深耕设计史论、古代造物制度与黄河民艺抢救性测绘，建构中国自主设计理论学术话语体系。面向国家文化战略与前沿社会创新命题，深化拔尖育人体系，培养引领未来的领军学人。
              </p>
              <div className="flank-action-row">
                <a href="#sec-disciplines" className="flank-action-btn">
                  <span>探索专业拓扑与文脉谱系</span>
                  <span className="action-circle-arrow">→</span>
                </a>
                <a href="#sec-admissions" className="flank-action-btn secondary">
                  <span>2026 招考指南</span>
                  <span className="action-circle-arrow">↗</span>
                </a>
              </div>

              {/* 权威认证与印鉴双重背书 */}
              <div className="flank-cultural-endorsement">
                <div className="flank-archival-stamp">
                  <div className="archival-seal-block" title="齐鲁造物印鉴">
                    <span>齊魯</span>
                    <span>造物</span>
                  </div>
                  <div className="stamp-meta">
                    <span className="stamp-code">ARCHIVE NO. SDADA-DES-1305</span>
                    <span className="stamp-desc">国家一流本科专业建设点档案</span>
                  </div>
                </div>

                <div className="flank-accolade-card">
                  <div className="accolade-rank-strong">软科顶尖学科 A+</div>
                  <div className="accolade-desc-mono">
                    全国排名前列 · 艺术设计学与艺术史论双双入选国家级一流本科专业
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 四列学术坐标定位标尺（直接落于 12 列垂直线之间，零横向网格线） */}
          <div className="hero-architectural-metrics">
            <div className="arch-metric-cell">
              <div className="metric-meta-rubric">COORDINATE 01 · DISCIPLINE RANK</div>
              <div className="metric-number-display">全国 A+</div>
              <div className="metric-title-text">软科中国大学专业排名顶尖评级</div>
              <div className="metric-detail-p">艺术设计学专业连续保持全国排名前列，奠定自主造物学派体系。</div>
            </div>

            <div className="arch-metric-cell">
              <div className="metric-meta-rubric">COORDINATE 02 · NATIONAL FIRST-CLASS</div>
              <div className="metric-number-display">
                2 <span className="metric-unit-tag">个</span>
              </div>
              <div className="metric-title-text">国家级一流本科专业建设点</div>
              <div className="metric-detail-p">艺术设计学与艺术史论双双入选国家一流，构筑全省唯一双一流理论阵地。</div>
            </div>

            <div className="arch-metric-cell">
              <div className="metric-meta-rubric">COORDINATE 03 · FACULTY EXCELLENCE</div>
              <div className="metric-number-display">100%</div>
              <div className="metric-title-text">专任教师高职及博士学位比例</div>
              <div className="metric-detail-p">汇聚国务院特贴专家、全国美展评委与省部级教学名师高水平团队。</div>
            </div>

            <div className="arch-metric-cell">
              <div className="metric-meta-rubric">COORDINATE 04 · MAJOR RESEARCH</div>
              <div className="metric-number-display">
                50+ <span className="metric-unit-tag">项</span>
              </div>
              <div className="metric-title-text">国家社科艺术学及省部重点课题</div>
              <div className="metric-detail-p">涵盖黄河流域民间手工艺数字化抢救、古代造物制度考据与美育实践。</div>
            </div>
          </div>
        </section>

        {/* ================= 3. SECTION 02: 学术纪事与现场视像 (报刊画册式非对称版面) ================= */}
        <section className="arch-section sec-news-chronicle" id="sec-news">
          <div className="arch-section-header">
            <div className="header-index-block">
              <span className="sec-num-large">02</span>
              <div className="sec-title-wrap">
                <div className="sec-kicker">[ 02 / ACADEMIC CHRONICLE · 学术纪事与动态 ]</div>
                <h2 className="sec-heading-serif">学院新闻与学术动态</h2>
              </div>
            </div>
            <div className="header-meta-block">
              <span>记录学院学术生发、教学展览与前沿育人纪事</span>
            </div>
          </div>

          <div className="news-chronicle-spread">
            {/* 左侧宽幅学术特写 (占第 1 至 8 列) */}
            <article className="lead-chronicle-feature">
              <div className="feature-panoramic-img-wrap">
                <img
                  src={newsList[0].image}
                  alt={newsList[0].title}
                  className="chronicle-lead-img"
                />
                <div className="feature-date-badge">
                  <span className="dispatch-rubric">{newsList[0].tag}</span>
                  <span className="badge-date">{newsList[0].date}</span>
                </div>
              </div>
              <div className="feature-body-deck">
                <div className="feature-meta-line">
                  <span>TOP STORY · 院务通报</span>
                  <span className="sep-slash">/</span>
                  <span>学院综合事务办公室</span>
                </div>
                <h3 className="feature-headline">{newsList[0].title}</h3>
                <p className="feature-summary">{newsList[0].excerpt}</p>
                <blockquote className="feature-pull-quote">
                  <span className="quote-glyph">“</span>
                  <span className="quote-content">{newsList[0].quote}</span>
                </blockquote>
                <div className="feature-action-link">
                  <span>阅读详讯全文</span>
                  <span className="action-arrow">→</span>
                </div>
              </div>
            </article>

            {/* 右侧纵向速递时间轴 (占第 9 至 12 列) */}
            <div className="dispatch-vertical-rail">
              {/* Dispatch 1: 学术讲堂 */}
              <article className="dispatch-entry entry-colloquium">
                <div className="entry-header-row">
                  <span className="dispatch-rubric">学术讲堂</span>
                  <span className="entry-speaker-pill">{newsList[1].speaker}</span>
                  <span className="entry-date">{newsList[1].day} {newsList[1].month}</span>
                </div>
                <h4 className="entry-title">{newsList[1].title}</h4>
                <p className="entry-excerpt">{newsList[1].excerpt}</p>
                <div className="entry-footer-arrow">↗</div>
              </article>

              {/* Dispatch 2: 教学展览 */}
              <article className="dispatch-entry entry-exhibition">
                <div className="entry-header-row">
                  <span className="dispatch-rubric">教学展览</span>
                  <span className="entry-date">{newsList[2].day} {newsList[2].month}</span>
                </div>
                <h4 className="entry-title">{newsList[2].title}</h4>
                <div className="entry-thumb-deck">
                  <img
                    src={curatedAssets.fieldLibrary}
                    alt="教学展览现场"
                    className="entry-mini-thumbnail"
                  />
                  <p className="entry-excerpt-short">{newsList[2].excerpt}</p>
                </div>
                <div className="entry-footer-arrow">↗</div>
              </article>

              {/* Dispatch 3: 荣誉成果 */}
              <article className="dispatch-entry entry-honor">
                <div className="entry-header-row">
                  <span className="dispatch-rubric">荣誉成果</span>
                  <span className="honor-medal-badge">{newsList[3].badgeStat}</span>
                  <span className="entry-date">{newsList[3].day} {newsList[3].month}</span>
                </div>
                <h4 className="entry-title">{newsList[3].title}</h4>
                <p className="entry-excerpt">{newsList[3].excerpt}</p>
                <div className="entry-footer-arrow">↗</div>
              </article>
            </div>
          </div>
        </section>

        {/* ================= 4. SECTION 03: 专业拓扑与学术矩阵 ================= */}
        <section className="arch-section sec-discipline-topology" id="sec-disciplines">
          <div className="arch-section-header">
            <div className="header-index-block">
              <span className="sec-num-large">03</span>
              <div className="sec-title-wrap">
                <div className="sec-kicker">[ 03 / CURRICULUM MATRIX · 学科专业拓扑 ]</div>
                <h2 className="sec-heading-serif">学科设置与专业矩阵</h2>
              </div>
            </div>
            <div className="header-meta-block">
              <span>七个特色本科专业与一个跨学科虚拟教研室（全真学术设置）</span>
            </div>
          </div>

          {/* 交互式专业拓扑展台：左侧学术系部轨道 + 右侧核心培养大案卷画布 */}
          <div className="discipline-interactive-stage">
            {/* 左侧专业系部导轨 (占第 1 至 4 列) */}
            <div className="discipline-directory-rail">
              <div className="rail-mast-label">
                <span>ACADEMIC DEPARTMENTS LIST · 8大专业名录</span>
              </div>
              <div className="rail-programs-list">
                {academicPrograms.map((prog, idx) => {
                  const isSelected = selectedDisciplineIndex === idx
                  return (
                    <button
                      key={prog.no}
                      className={`rail-program-item ${isSelected ? "is-selected" : ""}`}
                      onClick={() => setSelectedDisciplineIndex(idx)}
                    >
                      <div className="item-num-wrap">
                        <span className="rail-no">{prog.no}</span>
                        <span className="rail-code">{prog.code}</span>
                      </div>
                      <div className="item-title-wrap">
                        <span className="rail-name">{prog.name}</span>
                        <span className="rail-en">{prog.enName}</span>
                      </div>
                      <div className="rail-indicator-icon">
                        {isSelected ? "●" : "→"}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 右侧核心培养大案卷画布 (占第 5 至 12 列) */}
            <div className="discipline-dossier-canvas">
              {/* 背景学术水印 */}
              <div className="dossier-watermark-seal" aria-hidden="true">
                齊魯學派
              </div>

              <div className="dossier-top-bar">
                <div className="dossier-badge-cluster">
                  <span className="dossier-academic-rank">
                    [ {currentProgram.qualification} ]
                  </span>
                  <span className="dossier-meta-pill">{currentProgram.degree}</span>
                  <span className="dossier-meta-pill">{currentProgram.duration}</span>
                </div>
                <div className="dossier-code-stamp">
                  <span>CURRICULUM CODE: {currentProgram.code}</span>
                </div>
              </div>

              <div className="dossier-headline-deck">
                <h3 className="dossier-prog-title">{currentProgram.name}</h3>
                <div className="dossier-prog-en">{currentProgram.enName}</div>
                <p className="dossier-summary-lead">{currentProgram.summary}</p>
              </div>

              {/* 核心课程试听与交互卡片 */}
              <div className="dossier-interactive-curriculum">
                <div className="curriculum-bar-header">
                  <span className="bar-label">代表性专业核心课程体系（点击研读课业向度）：</span>
                </div>
                <div className="curriculum-pill-row">
                  {currentProgram.courses.map((course, i) => (
                    <button
                      key={i}
                      className={`curriculum-pill-btn ${activeCourseExplainer === course ? "is-active" : ""}`}
                      onClick={() => setActiveCourseExplainer(course)}
                    >
                      {course}
                    </button>
                  ))}
                </div>
                {activeCourseExplainer && (
                  <div className="curriculum-explainer-deck">
                    <span className="explainer-bullet">▸</span>
                    <span className="explainer-text">
                      {activeCourseExplainer === "中国造物思想史"
                        ? "系统梳理先秦诸子天工开物思想、考工记制器规约与东方造物美学对当代可持续设计的启示。"
                        : activeCourseExplainer === "设计史学专题"
                        ? "探讨从古典手工艺造物向现代工业与信息设计演进的历史逻辑与理论批评范式。"
                        : activeCourseExplainer === "设计批评学"
                        ? "建构基于中国本土语境的设计批评标准，培养批判性思维与前沿文化策展话语。"
                        : activeCourseExplainer === "设计战略与策展"
                        ? "深度结合文博展陈实战、文旅文创产业运营与跨学科协同设计工作坊。"
                        : `重点讲授《${activeCourseExplainer}》的理论方法论与前沿实践范式。`}
                    </span>
                  </div>
                )}
              </div>

              {/* 学术向度与去向标签 */}
              <div className="dossier-directions-grid">
                <div className="directions-col">
                  <span className="col-sub-heading">主干学术研究向度</span>
                  <div className="sub-tag-list">
                    {currentProgram.coreDirections.map((dir, i) => (
                      <div key={i} className="direction-bullet-item">
                        <span className="dir-glyph">■</span>
                        <span className="dir-label">{dir}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="careers-col">
                  <span className="col-sub-heading">主要毕业去向与深造发展领域</span>
                  <div className="sub-tag-cloud">
                    {currentProgram.careerFields.map((field, i) => (
                      <span key={i} className="career-cloud-pill">
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="dossier-footer-action-row">
                <span className="dossier-hint-text">
                  完整课程大纲与学分修读方案可在线查阅
                </span>
                <button
                  className="btn-open-program-modal"
                  onClick={() => setActiveProgramModal(currentProgram)}
                >
                  <span>调取该专业完整培养方案细则 ↗</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 5. SECTION 04: 科研高地与标本案卷库 (三态全景检视视窗) ================= */}
        <section className="arch-section sec-research-repository" id="sec-research">
          <div className="arch-section-header">
            <div className="header-index-block">
              <span className="sec-num-large">04</span>
              <div className="sec-title-wrap">
                <div className="sec-kicker">[ 04 / RESEARCH REPOSITORY · 重点科研案卷 ]</div>
                <h2 className="sec-heading-serif">学术研究与科研高地</h2>
              </div>
            </div>
            <div className="header-meta-block">
              <span>国家社科艺术学重点项目与齐鲁造物学术成果档案</span>
            </div>
          </div>

          <div className="research-curatorial-spread">
            {/* 左侧项目名录导轨 (占第 1 至 4 列) */}
            <div className="research-selector-rail">
              <div className="selector-mast-label">
                <span>PROJECT DOSSIER SELECTION · 重点课题集刊</span>
              </div>
              <div className="selector-items-list">
                {researchProjects.map((proj) => {
                  const isActive = proj.id === activeResearchId
                  return (
                    <button
                      key={proj.id}
                      className={`research-item-btn ${isActive ? "is-active" : ""}`}
                      onClick={() => setActiveResearchId(proj.id)}
                    >
                      <div className="proj-idx-row">
                        <span className="proj-num">#{proj.id}</span>
                        <span className="proj-category-label">[ {proj.category} ]</span>
                      </div>
                      <div className="proj-code-line">
                        <span>{proj.code}</span>
                        <span className="sep-dot">·</span>
                        <span>{proj.dept}</span>
                      </div>
                      <h4 className="proj-title-text">{proj.title}</h4>
                      <div className="proj-arrow-status">
                        {isActive ? "●" : "→"}
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* 右侧标本视窗与多维 HUD (占第 5 至 12 列) */}
            <div className="research-stage-view">
              {/* 三态 HUD 切换栏 */}
              <div className="research-hud-nav-bar">
                <button
                  className={`hud-mode-btn ${researchTab === "specimen" ? "is-active" : ""}`}
                  onClick={() => setResearchTab("specimen")}
                >
                  [ 01 标本影像图谱 ]
                </button>
                <button
                  className={`hud-mode-btn ${researchTab === "metrics" ? "is-active" : ""}`}
                  onClick={() => setResearchTab("metrics")}
                >
                  [ 02 课题立项案卷指标 ]
                </button>
                <button
                  className={`hud-mode-btn ${researchTab === "map" ? "is-active" : ""}`}
                  onClick={() => setResearchTab("map")}
                >
                  [ 03 田野考察坐标网络 ]
                </button>
              </div>

              {/* 模式 1: 标本影像图谱 */}
              {researchTab === "specimen" && (
                <div className="hud-view-specimen-frame">
                  <img
                    src={selectedResearch.image}
                    alt={selectedResearch.title}
                    className="specimen-hero-image"
                  />
                  <div className="specimen-tag-badge-overlay">
                    <span className="specimen-category-stamp">[ {selectedResearch.category} ]</span>
                    <span className="specimen-code-tag">{selectedResearch.code}</span>
                  </div>
                  {/* 中国传统藏书印鉴 */}
                  <div className="specimen-vermilion-seal" title="齐鲁民间艺术特藏印鉴">
                    齊魯造物
                  </div>
                  <div className="specimen-coords-bar">
                    <span>{selectedResearch.coordinates}</span>
                  </div>
                </div>
              )}

              {/* 模式 2: 课题立项案卷指标 */}
              {researchTab === "metrics" && (
                <div className="hud-view-metrics-table">
                  <div className="metrics-table-kicker">ACADEMIC METRICS & RESEARCH GRANT DOSSIER</div>
                  <table className="table-archival">
                    <tbody>
                      <tr>
                        <td className="tb-kicker">课题立项全称</td>
                        <td className="tb-content">{selectedResearch.title}</td>
                      </tr>
                      <tr>
                        <td className="tb-kicker">课题级别与类别</td>
                        <td className="tb-content">{selectedResearch.role}</td>
                      </tr>
                      <tr>
                        <td className="tb-kicker">资助信息与编号</td>
                        <td className="tb-content">{selectedResearch.fundInfo}</td>
                      </tr>
                      <tr>
                        <td className="tb-kicker">首席专家团队</td>
                        <td className="tb-content">{selectedResearch.leader}</td>
                      </tr>
                      <tr>
                        <td className="tb-kicker">执行周期与节点</td>
                        <td className="tb-content">{selectedResearch.year}（{selectedResearch.targetMilestone}）</td>
                      </tr>
                      <tr>
                        <td className="tb-kicker">代表性最终成果</td>
                        <td className="tb-content">{selectedResearch.medium}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}

              {/* 模式 3: 田野考察坐标网络 */}
              {researchTab === "map" && (
                <div className="hud-view-map-radar">
                  <div className="radar-header-line">
                    <span className="radar-badge">FIELD SURVEY RADAR · 沿黄九省区全流域测绘网络</span>
                    <span className="radar-count">{selectedResearch.fieldStations} 处田野考察常态工作站</span>
                  </div>
                  <div className="radar-canvas-grid">
                    <div className="r-line r-h1" />
                    <div className="r-line r-h2" />
                    <div className="r-line r-v1" />
                    <div className="r-line r-v2" />
                    <div className="r-node node-jinan">
                      <span className="node-beacon" />
                      <span className="node-caption">长清湖科研本部 (36.65°N, 116.82°E)</span>
                    </div>
                    <div className="r-node node-weifang">
                      <span className="node-beacon" />
                      <span className="node-caption">杨家埠木版年画测绘站</span>
                    </div>
                    <div className="r-node node-heze">
                      <span className="node-beacon" />
                      <span className="node-caption">菏泽黄河故道手工艺文献点</span>
                    </div>
                    <div className="r-node node-zibo">
                      <span className="node-beacon" />
                      <span className="node-caption">淄博传统陶瓷琉璃活态基地</span>
                    </div>
                  </div>
                  <div className="radar-footer-note">
                    地理信息采集系统由传统工艺与数字人文重点实验室提供技术支持
                  </div>
                </div>
              )}

              {/* 案卷详细解读栏 */}
              <div className="research-summary-dossier">
                <div className="dossier-meta-sub-row">
                  <span className="d-dept">{selectedResearch.dept}</span>
                  <span className="d-year">{selectedResearch.year}</span>
                </div>
                <h3 className="d-title">{selectedResearch.title}</h3>
                <div className="d-role-label">{selectedResearch.role}</div>
                <p className="d-paragraph">{selectedResearch.summary}</p>
                <div className="d-medium-strip">
                  <span className="m-label">成果形式：</span>
                  <span className="m-text">{selectedResearch.medium}</span>
                </div>
                <div className="d-action-block">
                  <button
                    className="btn-trigger-dossier-modal"
                    onClick={() => setModalProject(selectedResearch)}
                  >
                    <span>调取完整学术案卷</span>
                    <span className="btn-icon">↗</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 6. SECTION 05: 文心讲堂与学术领航 (非对称票根 + 名家谱系散点) ================= */}
        <section className="arch-section sec-colloquium-pass" id="sec-lectures">
          <div className="arch-section-header">
            <div className="header-index-block">
              <span className="sec-num-large">05</span>
              <div className="sec-title-wrap">
                <div className="sec-kicker">[ 05 / SCHOLAR FORUM · 文心讲堂与学术通报 ]</div>
                <h2 className="sec-heading-serif">文心讲堂与学术通报</h2>
              </div>
            </div>
            <div className="header-meta-block">
              <span>齐鲁艺文名家讲坛与高规格学科领航学术盛会</span>
            </div>
          </div>

          {/* 5 : 4 : 3 异构票券阵列 */}
          <div className="colloquium-ticket-array">
            {/* Ticket 01: 范迪安 教授名家特邀讲席 (占 5 列) */}
            <div className="arch-ticket-card ticket-vip-col">
              <div className="ticket-inner-deck">
                <div className="ticket-top-badge-row">
                  <span className="ticket-star-id">★ PASS #01 · 旗舰讲坛</span>
                  <span className="ticket-status-pill">[ {lectureSeries[0].status} ]</span>
                </div>
                <div className="ticket-series-mono">{lectureSeries[0].series}</div>
                <h3 className="ticket-headline-serif">{lectureSeries[0].title}</h3>

                <div className="ticket-speaker-spotlight">
                  <div className="speaker-name-strong">{lectureSeries[0].speaker}</div>
                  <div className="speaker-title-sub">{lectureSeries[0].speakerTitle}</div>
                </div>

                <div className="ticket-footer-telemetry">
                  <div className="telemetry-time">
                    <span className="time-d">{lectureSeries[0].date}</span>
                    <span className="time-h">{lectureSeries[0].time}</span>
                  </div>
                  <div className="telemetry-loc-row">
                    <span className="loc-text">{lectureSeries[0].location}</span>
                    <span className="cap-tag">{lectureSeries[0].capacity}</span>
                  </div>
                  <button
                    className="btn-reserve-seat"
                    onClick={() => {
                      setBookedLectureNo("01")
                      setTimeout(() => setBookedLectureNo(null), 3000)
                    }}
                  >
                    {bookedLectureNo === "01" ? "✓ 预约信息已生成" : "预约学术席位 ↗"}
                  </button>
                </div>
              </div>
            </div>

            {/* Ticket 02: 许文清 教授重点课题报告 (占 4 列) */}
            <div className="arch-ticket-card ticket-research-col">
              <div className="ticket-inner-deck">
                <div className="ticket-top-badge-row">
                  <span className="ticket-star-id">PASS #02 · 课题汇报</span>
                  <span className="ticket-status-pill">[ {lectureSeries[1].status} ]</span>
                </div>
                <div className="ticket-series-mono">{lectureSeries[1].series}</div>
                <h3 className="ticket-headline-serif">{lectureSeries[1].title}</h3>

                <div className="ticket-speaker-spotlight">
                  <div className="speaker-name-strong">{lectureSeries[1].speaker}</div>
                  <div className="speaker-title-sub">{lectureSeries[1].speakerTitle}</div>
                </div>

                <div className="ticket-footer-telemetry">
                  <div className="telemetry-time">
                    <span className="time-d">{lectureSeries[1].date}</span>
                    <span className="time-h">{lectureSeries[1].time}</span>
                  </div>
                  <div className="telemetry-loc-row">
                    <span className="loc-text">{lectureSeries[1].location}</span>
                    <span className="cap-tag">{lectureSeries[1].capacity}</span>
                  </div>
                  <button
                    className="btn-reserve-seat"
                    onClick={() => {
                      setBookedLectureNo("02")
                      setTimeout(() => setBookedLectureNo(null), 3000)
                    }}
                  >
                    {bookedLectureNo === "02" ? "✓ 预约信息已生成" : "预约学术席位 ↗"}
                  </button>
                </div>
              </div>
            </div>

            {/* Ticket 03: 陈立言 教授算法美学研讨 (占 3 列) */}
            <div className="arch-ticket-card ticket-lab-col">
              <div className="ticket-inner-deck">
                <div className="ticket-top-badge-row">
                  <span className="ticket-star-id">PASS #03 · 实验研讨</span>
                  <span className="ticket-status-pill">[ {lectureSeries[2].status} ]</span>
                </div>
                <div className="ticket-series-mono">{lectureSeries[2].series}</div>
                <h3 className="ticket-headline-serif">{lectureSeries[2].title}</h3>

                <div className="ticket-speaker-spotlight">
                  <div className="speaker-name-strong">{lectureSeries[2].speaker}</div>
                  <div className="speaker-title-sub">{lectureSeries[2].speakerTitle}</div>
                </div>

                <div className="ticket-footer-telemetry">
                  <div className="telemetry-time">
                    <span className="time-d">{lectureSeries[2].date}</span>
                    <span className="time-h">{lectureSeries[2].time}</span>
                  </div>
                  <div className="telemetry-loc-row">
                    <span className="loc-text">{lectureSeries[2].location}</span>
                    <span className="cap-tag">{lectureSeries[2].capacity}</span>
                  </div>
                  <button
                    className="btn-reserve-seat"
                    onClick={() => {
                      setBookedLectureNo("03")
                      setTimeout(() => setBookedLectureNo(null), 3000)
                    }}
                  >
                    {bookedLectureNo === "03" ? "✓ 预约信息已生成" : "课题组预约 ↗"}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 学术委员会与学科领航学者谱系 (非卡片化，直接依附网格线) */}
          <div className="scholarly-lineage-wall">
            <div className="lineage-wall-header">
              <div className="wall-title-serif">学术委员会与学科领航学者</div>
              <div className="wall-sub-mono">汇聚全国顶尖工艺美学理论家、国务院特贴专家与国家级领军人才</div>
            </div>

            {/* 第一梯队：名誉院长与资深学术巨擘 (占 6:6) */}
            <div className="lineage-tier-masters">
              {academicLeadersTier1.map((master) => (
                <div key={master.num} className="master-scholar-block">
                  <div className="master-header-row">
                    <span className="master-role-badge">{master.role}</span>
                    <span className="master-num-tag">{master.num}</span>
                  </div>
                  <h3 className="master-name-serif">{master.name}</h3>
                  <div className="master-spec-text">{master.spec}</div>
                  <div className="master-monograph-pill">{master.monograph}</div>
                  <p className="master-bio-p">{master.bio}</p>
                </div>
              ))}
            </div>

            {/* 第二梯队：学科带头人与领航导师 (占 6:6) */}
            <div className="lineage-tier-chairs">
              {academicLeadersTier2.map((chair) => (
                <div key={chair.num} className="chair-scholar-block">
                  <div className="chair-header-row">
                    <span className="chair-num-tag">{chair.num}</span>
                    <h4 className="chair-name-serif">{chair.name}</h4>
                  </div>
                  <div className="chair-role-mono">{chair.role}</div>
                  <div className="chair-spec-desc">{chair.spec}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 7. SECTION 06: 招考通道与育人体系 (招考时序路线 + 双材质对比) ================= */}
        <section className="arch-section sec-admissions-gateway" id="sec-admissions">
          <div className="arch-section-header">
            <div className="header-index-block">
              <span className="sec-num-large">06</span>
              <div className="sec-title-wrap">
                <div className="sec-kicker">[ 06 / TALENT CULTIVATION · 招生与学业培养 ]</div>
                <h2 className="sec-heading-serif">招生与学业培养</h2>
              </div>
            </div>
            <div className="header-meta-block">
              <span>本科拔尖创新人才与学术型硕士研究生招考选拔</span>
            </div>
          </div>

          {/* 2026 招考时序路线图 (横跨 12 列的建筑进度标尺) */}
          <div className="admissions-chronological-roadmap">
            <div className="roadmap-header-bar">
              <span className="r-bar-title">2026 招考关键时序路线</span>
              <span className="r-bar-sub">本科普通批 / 艺术类提前批 / 学术型硕士研究生选拔</span>
            </div>
            <div className="roadmap-stages-grid">
              {admissionsMilestones.map((m) => (
                <div key={m.step} className="roadmap-stage-node">
                  <div className="stage-num-row">
                    <span className="stage-step-num">{m.step}</span>
                    <span className="stage-period-tag">{m.period}</span>
                  </div>
                  <h4 className="stage-title-serif">{m.title}</h4>
                  <p className="stage-desc-text">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 双材质对比色块 (炭黑研究生 6列 + 骨白本科生 6列) */}
          <div className="admissions-material-juxtaposition">
            {/* 深色炭黑块（研究生） */}
            <div className="admissions-slab slab-charcoal">
              <div className="slab-top-deck">
                <span className="slab-accent-badge">[ POSTGRADUATE & PHD · 2026 学年度 ]</span>
              </div>
              <h3 className="slab-heading-serif">研究生招考与拔尖学者培育通道</h3>
              <p className="slab-desc-p">
                面向全国招收学术型硕士研究生与协同培养博士生。依托国家社科重点基地与省重点实验室，实行双导师制与课题组沉浸式联合培养。
              </p>
              <div className="slab-bullets-list">
                <div className="bullet-row">
                  <span className="bullet-sq">■</span>
                  <span>艺术设计学（设计史论、设计策划、文创管理、跨媒介设计）</span>
                </div>
                <div className="bullet-row">
                  <span className="bullet-sq">■</span>
                  <span>艺术史论（中国美术史、工艺美术史、非遗理论与保护）</span>
                </div>
                <div className="bullet-row">
                  <span className="bullet-sq">■</span>
                  <span>协同培养博士创新专项（黄河流域造物制度与文化治理）</span>
                </div>
              </div>
              <div className="slab-action-wrap">
                <a
                  href="#top"
                  className="btn-slab-light"
                  onClick={(e) => {
                    e.preventDefault()
                    alert("学术型硕士研究生招生专业目录与参考书目已就绪，欢迎广大学子报考。")
                  }}
                >
                  <span>下载学术型硕士招生简章</span>
                  <span className="btn-icon">↓</span>
                </a>
              </div>
            </div>

            {/* 暖白精装块（本科生） */}
            <div className="admissions-slab slab-bonewhite">
              <div className="slab-top-deck">
                <span className="slab-accent-badge">[ UNDERGRADUATE · 2026 本科招生 ]</span>
              </div>
              <h3 className="slab-heading-serif">本科各专业招考与卓越培养计划</h3>
              <p className="slab-desc-p">
                涵盖艺术设计学（软科 A+）、艺术史论、文化产业管理、非物质文化遗产保护等 7 个一流专业方向，实施“厚基础、宽口径、重实践、强通识”育人模式。
              </p>
              <div className="slab-bullets-list">
                <div className="bullet-row">
                  <span className="bullet-circle">●</span>
                  <span>招生咨询专线：0531-89626188 / 89626189</span>
                </div>
                <div className="bullet-row">
                  <span className="bullet-circle">●</span>
                  <span>录取批次：艺术类提前批 / 普通本科一批（文理兼招）</span>
                </div>
                <div className="bullet-row">
                  <span className="bullet-circle">●</span>
                  <span>拔尖创新实验班：黄河文脉造物创新实验班（大二选拔）</span>
                </div>
              </div>
              <div className="slab-action-wrap">
                <a
                  href="#top"
                  className="btn-slab-dark"
                  onClick={(e) => {
                    e.preventDefault()
                    alert("本科生报考问答指南已准备就绪，欢迎咨询报考。")
                  }}
                >
                  <span>查阅本科招生报考问答指南</span>
                  <span className="btn-icon">↗</span>
                </a>
              </div>
            </div>
          </div>

          {/* 全宽咨询横轴（一键快捷复制与即时反馈） */}
          <div className="admissions-hotline-strip">
            <div
              className="hotline-cell is-copyable"
              onClick={() => handleCopy("0531-89626188", "phone")}
            >
              <div className="hl-kicker-row">
                <span className="hl-kicker">招考咨询热线</span>
                <span className="copy-hint">{copiedField === "phone" ? "✓ 已复制号码" : "点击复制"}</span>
              </div>
              <span className="hl-main">0531-89626188</span>
            </div>

            <div
              className="hotline-cell is-copyable"
              onClick={() => handleCopy("rwys@sdada.edu.cn", "email")}
            >
              <div className="hl-kicker-row">
                <span className="hl-kicker">官方学术邮箱</span>
                <span className="copy-hint">{copiedField === "email" ? "✓ 已复制邮箱" : "点击复制"}</span>
              </div>
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

      {/* ================= 8. 官方学术四列页脚 (直接依附 12 列建筑网格) ================= */}
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
            <div className="footer-filing">
              <span>鲁ICP备05001234号-1 · 鲁公网安备37010202000100</span>
              <span>© 2026 山东工艺美术学院 人文艺术学院 版权所有</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ================= MODAL: 学科培养方案与课程拓扑详细案卷 ================= */}
      {activeProgramModal && (
        <div
          className="editorial-modal-backdrop"
          onClick={() => setActiveProgramModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="editorial-modal-dialog program-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-kicker-wrap">
                <span className="modal-kicker">ACADEMIC CURRICULUM SYLLABUS · 培养方案细则</span>
                <span className="modal-code">{activeProgramModal.code}</span>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setActiveProgramModal(null)}
                aria-label="关闭"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-title-deck">
                <div className="modal-badge-row">
                  <span className="modal-qualification-tag">
                    [ {activeProgramModal.qualification} ]
                  </span>
                  <span className="modal-meta-pill">{activeProgramModal.degree}</span>
                  <span className="modal-meta-pill">{activeProgramModal.duration}</span>
                </div>
                <h3 className="modal-title">{activeProgramModal.name}</h3>
                <div className="modal-en-sub">{activeProgramModal.enName}</div>
              </div>

              <div className="modal-section-block">
                <h4 className="modal-block-heading">学科定位与培养目标</h4>
                <p className="modal-desc">{activeProgramModal.summary}</p>
              </div>

              <div className="modal-section-block">
                <h4 className="modal-block-heading">核心专业课程集群</h4>
                <div className="modal-course-grid">
                  {activeProgramModal.courses.map((course, idx) => (
                    <div key={idx} className="modal-course-card">
                      <span className="course-idx">0{idx + 1}</span>
                      <span className="course-name">{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section-block">
                <h4 className="modal-block-heading">特色研究与主干学术向度</h4>
                <div className="modal-direction-list">
                  {activeProgramModal.coreDirections.map((dir, idx) => (
                    <div key={idx} className="direction-item">
                      <span className="dir-dot">▸</span>
                      <span className="dir-text">{dir}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="modal-section-block">
                <h4 className="modal-block-heading">毕业去向与深造发展领域</h4>
                <div className="modal-career-tags">
                  {activeProgramModal.careerFields.map((field, idx) => (
                    <span key={idx} className="career-pill">
                      {field}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="modal-footer">
              <span className="modal-footer-note">
                教学大纲与学分修读指导书可至学院教务科研办公室查阅
              </span>
              <button
                className="btn-modal-close-action"
                onClick={() => setActiveProgramModal(null)}
              >
                关闭案卷
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL: 学术课题完整案卷 ================= */}
      {modalProject && (
        <div
          className="editorial-modal-backdrop"
          onClick={() => setModalProject(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="editorial-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-kicker-wrap">
                <span className="modal-kicker">ARCHIVAL DOSSIER · 国家社科成果案卷</span>
                <span className="modal-code">{modalProject.code}</span>
              </div>
              <button
                className="modal-close-btn"
                onClick={() => setModalProject(null)}
                aria-label="关闭"
              >
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div className="modal-hero-image-wrap">
                <img
                  src={modalProject.image}
                  alt={modalProject.title}
                  className="modal-hero-img"
                />
                <div className="modal-img-caption">
                  {modalProject.coordinates}
                </div>
              </div>

              <div className="modal-title-deck">
                <div className="modal-badge-row">
                  <span className="modal-category-tag">
                    [ {modalProject.category} ]
                  </span>
                  <span className="modal-dept">{modalProject.dept}</span>
                </div>
                <h3 className="modal-title">{modalProject.title}</h3>
                <div className="modal-role-highlight">{modalProject.role}</div>
              </div>

              <div className="modal-meta-grid">
                <div className="modal-meta-item">
                  <span className="meta-label">执行年度：</span>
                  <span className="meta-val">{modalProject.year}</span>
                </div>
                <div className="modal-meta-item">
                  <span className="meta-label">课题带头人：</span>
                  <span className="meta-val">{modalProject.leader}</span>
                </div>
                <div className="modal-meta-item">
                  <span className="meta-label">立项资助：</span>
                  <span className="meta-val">{modalProject.fundInfo}</span>
                </div>
                <div className="modal-meta-item">
                  <span className="meta-label">代表性成果形式：</span>
                  <span className="meta-val">{modalProject.medium}</span>
                </div>
              </div>

              <div className="modal-desc-block">
                <h4 className="modal-desc-heading">学术主张与核心创研框架</h4>
                <p className="modal-desc">{modalProject.summary}</p>
              </div>
            </div>

            <div className="modal-footer">
              <span className="modal-footer-note">
                档案原件存藏于学院三楼齐鲁视觉文献特藏室
              </span>
              <button
                className="btn-modal-close-action"
                onClick={() => setModalProject(null)}
              >
                收纳案卷
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
