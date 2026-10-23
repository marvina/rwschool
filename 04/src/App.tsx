import { useState } from "react";
import schoolLogo from "./assets/school-logo.png";

type IconProps = { className?: string };

const Arrow = ({ className = "size-4" }: IconProps) => (
  <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
    <path d="M5 12h14m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

const Search = ({ className = "size-5" }: IconProps) => (
  <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
    <path d="m16 16 4 4" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

const navItems = [
  { label: "首页", sub: [] },
  { label: "学院概况", sub: ["学院简介", "领导班子", "组织机构"] },
  { label: "专业设置", sub: ["本科专业", "公共艺术史论教研室", "人才培养方案"] },
  { label: "师资队伍", sub: ["名师与学者", "教学团队", "专任教师", "行业导师"] },
  { label: "教学与课程", sub: ["一流课程", "实验实训中心", "教学成果"] },
  { label: "学术研究", sub: ["教材与专著", "科研课题", "智库服务"] },
  { label: "动态与公告", sub: ["学院要闻", "通知公告", "讲座与展讯"] },
  { label: "招生与育人", sub: ["本科生招生", "研究生教育", "学生风采"] },
];

const majors = [
  {
    no: "01",
    name: "艺术设计学",
    tags: ["软科 A+", "国家级一流本科专业"],
    image: "https://images.unsplash.com/photo-1609605348579-3123e3d40eb8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
  {
    no: "02",
    name: "艺术史论",
    tags: ["国家级一流本科专业"],
    image: "https://images.unsplash.com/photo-1654120547425-ee909f906ea2?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
  {
    no: "03",
    name: "文化（设计）产业管理",
    tags: ["国家级一流本科专业"],
    image: "https://images.unsplash.com/photo-1561490497-43bc900ac2d8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
  {
    no: "04",
    name: "美术学",
    tags: ["国家级一流本科专业", "国家级特色专业"],
    image: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
  {
    no: "05",
    name: "非物质文化遗产保护",
    tags: ["山东省首批非遗本科专业"],
    image: "https://images.unsplash.com/photo-1761724794734-4ee4148a621b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
  {
    no: "06",
    name: "文物保护与修复",
    tags: ["省实验教学示范中心依托"],
    image: "https://images.unsplash.com/photo-1745237826674-1fb299b72913?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
  {
    no: "07",
    name: "广告策划与管理",
    tags: ["省级一流本科专业建设点"],
    image: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
  {
    no: "08",
    name: "公共艺术史论教研室",
    tags: ["跨学科虚拟教研室", "全校通识底座"],
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=85&w=900",
  },
];

const notices = [
  { date: "06.18", type: "学院要闻", title: "学院召开新文科背景下人才培养质量提升专题研讨会" },
  { date: "06.12", type: "学术讲座", title: "创意大讲堂｜传统造物智慧与当代设计方法" },
  { date: "06.08", type: "成果动态", title: "我院师生作品入选全国高校艺术设计优秀成果展" },
  { date: "06.03", type: "通知公告", title: "关于开展2025届优秀毕业设计与论文评选的通知" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f6f4ed] text-[#17241f]">
      <header className="relative z-50">
        <div className="bg-[#173f34] text-white">
          <div className="mx-auto flex h-9 max-w-[1480px] items-center justify-between border-b border-white/10 px-5 font-sans text-[11px] tracking-wide text-white/65 md:px-10">
            <p>厚植人文 · 贯通艺理 · 服务时代</p>
            <div className="hidden items-center gap-5 sm:flex">
              <a className="transition-colors hover:text-white" href="#admissions">招生信息</a>
              <a className="transition-colors hover:text-white" href="#footer">联系我们</a>
              <span className="h-3 w-px bg-white/25" />
              <button className="inline-flex items-center gap-2 transition-colors hover:text-white" aria-label="站内搜索">
                <Search className="size-3.5" /> 站内搜索
              </button>
            </div>
          </div>
          <div className="mx-auto flex h-24 max-w-[1480px] items-center justify-between px-5 md:h-28 md:px-10">
            <a className="block" href="#" aria-label="人文艺术学院首页">
              <img
                alt="山东艺术学院人文艺术学院 School of Arts and Humanities, SUAD"
                className="h-auto w-[260px]"
                src={schoolLogo}
              />
            </a>
            <button
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "关闭菜单" : "打开菜单"}
              className="grid size-11 place-items-center border border-white/25 text-white xl:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="relative block h-4 w-5">
                <span className={`absolute left-0 top-1 h-px w-5 bg-current transition-transform ${menuOpen ? "translate-y-1 rotate-45" : ""}`} />
                <span className={`absolute bottom-1 left-0 h-px w-5 bg-current transition-transform ${menuOpen ? "-translate-y-1 -rotate-45" : ""}`} />
              </span>
            </button>
          </div>
        </div>

        <div className="hidden border-b border-[#173f34]/15 bg-[#f6f4ed] xl:block">
          <div className="mx-auto h-14 max-w-[1480px] px-10">
            <nav className="hidden h-full items-center justify-between xl:flex" aria-label="主导航">
              {navItems.map((item, index) => (
                <div className="group relative flex h-full items-center" key={item.label}>
                  <a
                    className={`flex h-full items-center px-5 font-sans text-[13px] font-medium transition-colors hover:text-[#a13a2a] ${
                      index === 0 ? "text-[#a13a2a]" : ""
                    }`}
                    href={index === 0 ? "#" : `#section-${index}`}
                  >
                    {item.label}
                  </a>
                  {item.sub.length > 0 && (
                    <div className="invisible absolute left-1/2 top-full w-48 -translate-x-1/2 border-t-2 border-[#b9a56a] bg-[#173f34] p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                      {item.sub.map((sub) => (
                        <a
                          className="block border-b border-white/10 px-4 py-3 font-sans text-xs text-white/75 transition-colors last:border-0 hover:bg-white/10 hover:text-white"
                          href="#"
                          key={sub}
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>

        {menuOpen && (
          <nav className="absolute left-0 top-full max-h-[calc(100vh-8rem)] w-full overflow-y-auto bg-[#173f34] px-5 py-6 text-white shadow-2xl xl:hidden" aria-label="移动端导航">
            <div className="grid gap-px bg-white/15 sm:grid-cols-2">
              {navItems.map((item, index) => (
                <a className="bg-[#173f34] px-4 py-4 font-sans text-sm" href={index === 0 ? "#" : `#section-${index}`} key={item.label} onClick={() => setMenuOpen(false)}>
                  <span className="mr-3 text-[10px] text-[#d7c581]">0{index + 1}</span>
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main>
        <section className="relative min-h-[710px] overflow-hidden bg-[#20352f] text-white">
          <img
            alt="博物馆展厅中的中国古代雕塑"
            className="absolute inset-0 h-full w-full object-cover opacity-70"
            src="https://images.unsplash.com/photo-1787806764711-6e4f83c45596?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1800"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,42,34,.96)_0%,rgba(13,42,34,.78)_42%,rgba(13,42,34,.08)_100%)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-white/25" />
          <div className="relative mx-auto flex min-h-[710px] max-w-[1480px] items-center px-5 py-20 md:px-10">
            <div className="max-w-4xl">
              <p className="mb-8 flex items-center gap-4 font-sans text-xs tracking-[0.24em] text-[#d7c581]">
                <span className="h-px w-12 bg-[#d7c581]" />
                以艺术观照时代，以人文理解世界
              </p>
              <h1 className="font-serif text-[clamp(3.8rem,7.8vw,7.5rem)] font-medium leading-[0.96] tracking-[-0.045em]">
                究造物之理
                <br />
                <span className="text-[#d7c581]">宏民艺之道</span>
              </h1>
              <p className="mt-8 max-w-xl font-sans text-sm leading-8 text-white/72 md:text-base">
                面向中华优秀传统文化创造性转化与创新性发展，构建艺术理论、文化遗产、设计管理与美育教育交叉融通的人才培养新格局。
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <a className="inline-flex items-center gap-8 bg-[#a13a2a] px-6 py-4 font-sans text-xs font-medium tracking-wider transition-colors hover:bg-[#be4a37]" href="#section-2">
                  探索专业设置 <Arrow />
                </a>
                <a className="inline-flex items-center gap-8 border border-white/40 px-6 py-4 font-sans text-xs font-medium tracking-wider transition-colors hover:bg-white hover:text-[#173f34]" href="#section-1">
                  了解学院 <Arrow />
                </a>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 hidden w-[39%] grid-cols-3 border-l border-t border-white/20 bg-[#173f34]/85 backdrop-blur-md lg:grid">
            {[["7", "本科专业"], ["1", "公共教研室"], ["A+", "优势学科"]].map(([value, label]) => (
              <div className="border-r border-white/20 px-8 py-7 last:border-r-0" key={label}>
                <p className="font-serif text-4xl text-[#d7c581]">{value}</p>
                <p className="mt-1 font-sans text-[11px] tracking-widest text-white/60">{label}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="section-1" className="border-b border-[#173f34]/15">
          <div className="mx-auto grid max-w-[1480px] gap-12 px-5 py-24 md:px-10 lg:grid-cols-12 lg:py-32">
            <div className="lg:col-span-3">
              <SectionTitle en="ABOUT US" index="01" title="学院概况" />
            </div>
            <div className="lg:col-span-8 lg:col-start-5">
              <p className="font-serif text-[clamp(2rem,4vw,3.8rem)] leading-[1.32] tracking-[-0.025em]">
                我们以深厚的人文底蕴为根，以开放的艺术视野为翼，建设特色鲜明、国内一流的
                <span className="text-[#a13a2a]">人文艺术人才培养高地</span>。
              </p>
              <div className="mt-14 grid gap-8 border-t border-[#173f34]/20 pt-8 font-sans text-sm leading-7 text-[#43524c] md:grid-cols-3">
                <div>
                  <p className="mb-3 font-serif text-xl font-semibold text-[#173f34]">厚基础</p>
                  <p>强化艺术史论、美学与中华优秀传统文化教育，建立扎实的人文学术根基。</p>
                </div>
                <div>
                  <p className="mb-3 font-serif text-xl font-semibold text-[#173f34]">重交叉</p>
                  <p>连接艺术、设计、文化遗产与产业管理，回应新文科建设的时代命题。</p>
                </div>
                <div>
                  <p className="mb-3 font-serif text-xl font-semibold text-[#173f34]">强实践</p>
                  <p>依托实验室、博物馆与行业基地，让知识在真实文化现场中发生。</p>
                </div>
              </div>
              <a className="arrow-link mt-12" href="#">查看学院简介 <Arrow /></a>
            </div>
          </div>
        </section>

        <section id="section-2" className="bg-[#e9e4d8]">
          <div className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 lg:py-32">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <SectionTitle en="ACADEMIC PROGRAMS" index="02" title="专业设置" />
              <p className="max-w-md font-sans text-sm leading-7 text-[#53615b]">
                七个本科专业与一个公共教研室相互支撑，形成从理论研究、文化传承到创意实践的完整学科生态。
              </p>
            </div>
            <div className="mt-14 grid border-l border-t border-[#173f34]/20 md:grid-cols-2 xl:grid-cols-4">
              {majors.map((major) => (
                <a className="major-card group relative min-h-64 border-b border-r border-[#173f34]/20 p-6 md:p-7" href="#" key={major.name}>
                  <img
                    alt=""
                    aria-hidden="true"
                    className="major-image absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
                    src={major.image}
                  />
                  <span className="major-overlay absolute inset-0 bg-[#102b24]/75 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="font-sans text-[10px] tracking-[0.2em] text-[#a13a2a]">{major.no}</span>
                  <div className="mt-12">
                    <h3 className="font-serif text-2xl font-semibold leading-snug transition-colors group-hover:text-white">{major.name}</h3>
                    <div className="mt-5 space-y-2">
                      {major.tags.map((tag) => (
                        <p className="font-sans text-[11px] leading-5 text-[#596761] transition-colors group-hover:text-white/70" key={tag}>{tag}</p>
                      ))}
                    </div>
                  </div>
                  <Arrow className="absolute right-6 top-6 size-4 -translate-x-2 opacity-0 transition-all group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100" />
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="section-6" className="bg-[#173f34] text-white">
          <div className="mx-auto grid max-w-[1480px] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative min-h-[500px] overflow-hidden lg:min-h-[720px]">
              <img
                alt="中国传统陶俑艺术研究展陈"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                src="https://images.unsplash.com/photo-1763136241763-0801a85b3b35?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=90&w=1400"
              />
              <div className="absolute inset-0 bg-[#173f34]/20" />
              <div className="absolute bottom-0 left-0 bg-[#a13a2a] px-6 py-5 font-sans text-xs tracking-wider">
                文化遗产研究与教学现场
              </div>
            </div>
            <div className="flex flex-col justify-between px-5 py-16 md:px-12 lg:p-16">
              <SectionTitle dark en="TEACHING & RESEARCH" index="03" title="教学与研究" />
              <div className="mt-16">
                <p className="font-serif text-4xl leading-tight md:text-6xl">
                  从课堂到现场，
                  <br />
                  让研究回应真实世界。
                </p>
                <p className="mt-7 max-w-xl font-sans text-sm leading-7 text-white/65">
                  依托文物保护实验教学示范中心、六大实验室与校外实践基地，推进国家社科重大项目、标志性教材建设和文旅智库服务。
                </p>
                <div className="mt-12 grid gap-px bg-white/15 sm:grid-cols-2">
                  {["一流课程展示", "实验与实训中心", "核心科研课题", "智库与社会服务"].map((item) => (
                    <a className="flex items-center justify-between bg-[#173f34] px-5 py-5 font-sans text-xs tracking-wide transition-colors hover:bg-white/10" href="#" key={item}>
                      {item} <Arrow />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section-3" className="mx-auto max-w-[1480px] px-5 py-24 md:px-10 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <SectionTitle en="FACULTY" index="04" title="师资队伍" />
            </div>
            <div className="lg:col-span-9">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="border-t-2 border-[#a13a2a] bg-white p-8 md:p-10">
                  <p className="font-sans text-[10px] tracking-[0.18em] text-[#a13a2a]">名师与学者</p>
                  <p className="mt-8 font-serif text-3xl leading-snug">
                    汇聚特贴专家、“四个一批”人才、泰山学者与行业领军人才。
                  </p>
                  <a className="arrow-link mt-10" href="#">走近学者 <Arrow /></a>
                </div>
                <div className="border-t-2 border-[#d7c581] bg-[#ede8dc] p-8 md:p-10">
                  <p className="font-sans text-[10px] tracking-[0.18em] text-[#8b762e]">卓越团队</p>
                  <p className="mt-8 font-serif text-3xl leading-snug">
                    黄大年式教学团队、省优秀教学团队与青年创新团队协同育人。
                  </p>
                  <a className="arrow-link mt-10" href="#">查看团队 <Arrow /></a>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-y border-[#173f34]/20 py-6">
                <p className="font-sans text-sm text-[#53615b]">按专业与职称查找专任教师、行业导师及客座教授</p>
                <a className="arrow-link" href="#">教师名录 <Arrow /></a>
              </div>
            </div>
          </div>
        </section>

        <section id="section-7" className="border-y border-[#173f34]/15 bg-white">
          <div className="mx-auto grid max-w-[1480px] lg:grid-cols-12">
            <div className="border-b border-[#173f34]/15 px-5 py-20 md:px-10 lg:col-span-4 lg:border-b-0 lg:border-r lg:py-24">
              <SectionTitle en="NEWS & NOTICES" index="05" title="动态与公告" />
              <p className="mt-16 max-w-sm font-serif text-3xl leading-snug">
                关注学院的新近思考、
                <br />
                学术行动与育人成果。
              </p>
              <div className="mt-10 flex gap-5 font-sans text-xs">
                <button className="border-b border-[#a13a2a] pb-2 text-[#a13a2a]">学院要闻</button>
                <button className="pb-2 text-[#53615b]">通知公告</button>
                <button className="pb-2 text-[#53615b]">讲座展讯</button>
              </div>
            </div>
            <div className="px-5 py-10 md:px-10 lg:col-span-8 lg:py-16">
              {notices.map((notice) => (
                <a className="group grid gap-4 border-b border-[#173f34]/15 py-6 first:pt-0 sm:grid-cols-[70px_90px_1fr_auto] sm:items-center" href="#" key={notice.title}>
                  <span className="font-serif text-xl text-[#a13a2a]">{notice.date}</span>
                  <span className="w-fit bg-[#e9e4d8] px-2 py-1 font-sans text-[10px] text-[#53615b]">{notice.type}</span>
                  <span className="font-serif text-lg transition-colors group-hover:text-[#a13a2a] md:text-xl">{notice.title}</span>
                  <Arrow className="hidden size-4 transition-transform group-hover:translate-x-1 sm:block" />
                </a>
              ))}
              <a className="arrow-link mt-10" href="#">浏览全部动态 <Arrow /></a>
            </div>
          </div>
        </section>

        <section id="admissions" className="relative overflow-hidden bg-[#a13a2a] text-white">
          <div className="absolute -right-28 -top-40 size-[520px] rounded-full border border-white/15" />
          <div className="absolute -right-5 -top-16 size-[300px] rounded-full border border-white/15" />
          <div className="relative mx-auto flex max-w-[1480px] flex-col justify-between gap-12 px-5 py-20 md:px-10 lg:flex-row lg:items-end lg:py-28">
            <div>
              <p className="font-sans text-xs tracking-[0.22em] text-white/65">STUDENTS & ADMISSIONS</p>
              <h2 className="mt-5 font-serif text-[clamp(3rem,6vw,6rem)] leading-none">在这里，开启你的创造之路</h2>
              <p className="mt-7 max-w-2xl font-sans text-sm leading-7 text-white/72">
                查看本科生招生、研究生培养方案与导师信息，了解优秀毕业设计、学术竞赛及学生实践成果。
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              <a className="inline-flex items-center gap-8 bg-white px-6 py-4 font-sans text-xs font-medium text-[#a13a2a]" href="#">本科生招生 <Arrow /></a>
              <a className="inline-flex items-center gap-8 border border-white/40 px-6 py-4 font-sans text-xs font-medium" href="#">研究生教育 <Arrow /></a>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="bg-[#122f27] text-white">
        <div className="mx-auto max-w-[1480px] px-5 py-14 md:px-10">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <img
                alt="山东艺术学院人文艺术学院"
                className="h-auto w-[300px]"
                src={schoolLogo}
              />
              <p className="mt-8 max-w-md font-sans text-xs leading-6 text-white/50">
                以人文涵养艺术，以艺术激活传统，培养具有国际视野、创新精神与社会责任的复合型人才。
              </p>
            </div>
            <div className="grid gap-8 font-sans text-xs sm:grid-cols-3 lg:col-span-6 lg:col-start-7">
              <div>
                <p className="footer-title">快速链接</p>
                <a href="#">教务系统</a><a href="#">图书馆</a><a href="#">办事指南</a>
              </div>
              <div>
                <p className="footer-title">联系我们</p>
                <p>学院办公室</p><p>联系电话：0531-00000000</p><p>邮箱：arts@university.edu.cn</p>
              </div>
              <div>
                <p className="footer-title">关注我们</p>
                <p>学院微信公众号</p><p>官方视频号</p><p>校园地址与地图</p>
              </div>
            </div>
          </div>
          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/15 pt-5 font-sans text-[10px] text-white/35 sm:flex-row">
            <p>© 2025 人文艺术学院 版权所有</p>
            <p>网站地图　隐私声明　管理登录</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionTitle({ dark = false, en, index, title }: { dark?: boolean; en: string; index: string; title: string }) {
  return (
    <div>
      <p className={`font-sans text-[10px] tracking-[0.22em] ${dark ? "text-[#d7c581]" : "text-[#a13a2a]"}`}>
        {index} / {en}
      </p>
      <h2 className="mt-4 font-serif text-4xl font-semibold tracking-wide md:text-5xl">{title}</h2>
      <span className={`mt-5 block h-0.5 w-10 ${dark ? "bg-[#d7c581]" : "bg-[#a13a2a]"}`} />
    </div>
  );
}
