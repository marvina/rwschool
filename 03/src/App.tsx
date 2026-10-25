import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

// 学院精选真实学术展陈、文献特藏与田野考察影像
const curatedImages = {
  gallery: "./hero-exhibition.jpg",
  archive: "./field-library.jpg",
  folkField: "./research-folk-art.jpg",
  installation: "https://images.unsplash.com/photo-1541753866388-0b3c701627d3?auto=format&fit=crop&w=1600&q=88",
  digitalMedia: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1600&q=86",
}

interface ResearchItem {
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
}

const researchItems: ResearchItem[] = [
  {
    id: "01",
    code: "KEY-2026-01",
    title: "黄河流域民间手工艺调查与数字化活化图录",
    category: "国家重点课题",
    dept: "黄河流域民间艺术研究所",
    year: "2025 - 2026",
    leader: "民间美术与文化遗产研究所团队",
    role: "国家社科基金艺术学重点项目",
    medium: "全流域田野测绘、口述史口述影音文献、全景数字图谱（八卷本）",
    summary: "历时五年深入沿黄九省区传统手工艺聚落，抢救性建档记录濒危手工艺门类，提出基于活态传承的现代造物转化与乡村文化振兴实施框架。",
    image: curatedImages.folkField,
  },
  {
    id: "02",
    code: "PUB-2026-04",
    title: "中国古代造物思想与器物制度考论",
    category: "学术文献专著",
    dept: "艺术史论系",
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
    category: "乡村在地振兴",
    dept: "艺术设计学系",
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
    category: "实验展演与计算媒介",
    dept: "跨媒介艺术与计算交互重点实验室",
    year: "2026",
    leader: "跨媒介与数字艺术重点实验室团队",
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
    status: "席位预约开启",
  },
  {
    no: "02",
    series: "国家社科重点课题阶段汇报会",
    date: "2026.04.25",
    time: "09:30 - 12:00",
    title: "黄河文化带手工艺遗存抢救性测绘与数字谱系建构",
    speaker: "许文清 教授",
    speakerTitle: "院学术委员会主任 / 博士生导师 / 国务院特贴专家",
    location: "学院三楼视觉文献特藏室",
    status: "学术席位开放",
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
    status: "全网同步直播",
  },
]

const facultyList = [
  {
    name: "许文清",
    tag: "学术委员会主任",
    title: "二级教授 / 博士生导师",
    role: "国务院政府特殊津贴专家 / 国家社科基金艺术学评审专家",
    direction: "设计艺术学理论、艺术批评史、中华造物思想",
    works: "主编《中国现代设计史论》《形式之后》，主持国家社科重大课题",
  },
  {
    name: "陈立言",
    tag: "当代空间艺术中心负责人",
    title: "特聘教授 / 博士生导师",
    role: "中国美协设计艺委会委员 / 国际空间策展人",
    direction: "展示与展陈空间设计、跨媒介环境装置、当代策展实践",
    works: "威尼斯双年展特约研究学者，主持全国美展展陈空间总体设计",
  },
  {
    name: "林见深",
    tag: "史论学科带头人",
    title: "教授 / 博士生导师",
    role: "视觉文化与文献研究所所长 / 山东省教学名师",
    direction: "中国古代画论、工艺美术史学史、非遗文献考证",
    works: "著有《物象与心境：中国艺术史的阐释维》《齐鲁手工艺考》",
  },
  {
    name: "莫维安",
    tag: "数字媒体艺术专业主任",
    title: "副教授 / 青年拔尖人才",
    role: "泰山学者青年专家 / 智能计算艺术实验室负责人",
    direction: "智能人机交互、算法生成艺术、文化遗产数字孪生",
    works: "作品参展 SIGGRAPH、ISEA，获多项国家计算机软件著作权",
  },
]

// 3D 摄像机与世界各章节空间坐标配置 (Camera Ledger)
const cameraKeyframes = [
  {
    // Chapter 0: 序章 · 齐鲁造物之灵光 (Threshold)
    pos: new THREE.Vector3(0, 2.6, 11.5),
    target: new THREE.Vector3(0, 1.2, 0),
    fogDensity: 0.016,
    lightIntensity: 1.1,
  },
  {
    // Chapter 1: 探索 · 四大特色学科与前沿实验室 (Ateliers)
    pos: new THREE.Vector3(-3.8, 3.4, 3.0),
    target: new THREE.Vector3(-1.8, 1.4, -4.5),
    fogDensity: 0.018,
    lightIntensity: 1.25,
  },
  {
    // Chapter 2: 沉浸 · 教学科研与国家重点成果 (Archive)
    pos: new THREE.Vector3(4.2, 2.2, -6.5),
    target: new THREE.Vector3(1.2, 1.0, -13.0),
    fogDensity: 0.02,
    lightIntensity: 1.3,
  },
  {
    // Chapter 3: 思辨 · 齐鲁艺文学术名家讲坛 (Agora)
    pos: new THREE.Vector3(0, 6.2, -15.5),
    target: new THREE.Vector3(0, 2.0, -23.5),
    fogDensity: 0.017,
    lightIntensity: 1.4,
  },
  {
    // Chapter 4: 荟萃 · 师资名师与学术矩阵 (Faculty)
    pos: new THREE.Vector3(-3.2, 2.8, -25.0),
    target: new THREE.Vector3(0, 1.6, -30.5),
    fogDensity: 0.018,
    lightIntensity: 1.2,
  },
  {
    // Chapter 5: 启航 · 2026 招考指南与官方校务 (Horizon)
    pos: new THREE.Vector3(0, 7.8, -35.0),
    target: new THREE.Vector3(0, 4.5, -52.0),
    fogDensity: 0.014,
    lightIntensity: 1.5,
  },
]

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const [currentChapter, setCurrentChapter] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedResearch, setSelectedResearch] = useState<ResearchItem | null>(null)
  const [activeAtelier, setActiveAtelier] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // 1. Scene & Renderer Setup
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x07090e)
    scene.fog = new THREE.FogExp2(0x07090e, 0.016)

    let renderer: THREE.WebGLRenderer | null = null
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        powerPreference: "high-performance",
        alpha: false,
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.05
    } catch (err) {
      console.warn("WebGL not available in environment, graceful fallback active:", err)
      return
    }

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      42,
      window.innerWidth / window.innerHeight,
      0.1,
      120
    )
    camera.position.copy(cameraKeyframes[0].pos)
    camera.lookAt(cameraKeyframes[0].target)

    // 3. Lighting System
    const ambientLight = new THREE.AmbientLight(0x1a2233, 0.8)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xfff3d6, 1.5)
    keyLight.position.set(12, 20, 15)
    scene.add(keyLight)

    const blueFillLight = new THREE.DirectionalLight(0x38bdf8, 0.8)
    blueFillLight.position.set(-15, 10, -10)
    scene.add(blueFillLight)

    const amberPointLight = new THREE.PointLight(0xf59e0b, 2.5, 30)
    amberPointLight.position.set(0, 3, 0)
    scene.add(amberPointLight)

    // 4. Spatial Geometry & World Construction
    const worldRoot = new THREE.Group()
    scene.add(worldRoot)

    // A. 悬浮造物星轨金环 (Celestial Armillary Craft Rings)
    const ringGroup = new THREE.Group()
    ringGroup.position.set(0, 1.8, 0)
    worldRoot.add(ringGroup)

    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      metalness: 0.9,
      roughness: 0.25,
      wireframe: false,
    })
    const ringGeo1 = new THREE.TorusGeometry(3.6, 0.045, 16, 120)
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1)
    ringGroup.add(ring1)

    const ringGeo2 = new THREE.TorusGeometry(2.8, 0.035, 16, 100)
    const ring2 = new THREE.Mesh(ringGeo2, ringMat1)
    ring2.rotation.x = Math.PI / 3
    ringGroup.add(ring2)

    const ringGeo3 = new THREE.TorusGeometry(2.0, 0.03, 16, 80)
    const ring3 = new THREE.Mesh(ringGeo3, ringMat1)
    ring3.rotation.y = Math.PI / 4
    ringGroup.add(ring3)

    // 核心多面体结晶 (Central Craft Crystal)
    const crystalGeo = new THREE.IcosahedronGeometry(1.2, 0)
    const crystalMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.85,
      roughness: 0.15,
      wireframe: true,
      emissive: 0x0284c7,
      emissiveIntensity: 0.35,
    })
    const crystal = new THREE.Mesh(crystalGeo, crystalMat)
    ringGroup.add(crystal)

    const coreSphereGeo = new THREE.SphereGeometry(0.55, 24, 24)
    const coreSphereMat = new THREE.MeshStandardMaterial({
      color: 0xfef08a,
      emissive: 0xfbbf24,
      emissiveIntensity: 1.2,
      roughness: 0.3,
    })
    const coreSphere = new THREE.Mesh(coreSphereGeo, coreSphereMat)
    ringGroup.add(coreSphere)

    // B. 波澜起伏的齐鲁山水大地格栅 (Reflecting Undulating Terrain Plane)
    const terrainGeo = new THREE.PlaneGeometry(120, 120, 64, 64)
    terrainGeo.rotateX(-Math.PI / 2)
    terrainGeo.translate(0, -1.8, -20)

    const posAttr = terrainGeo.attributes.position
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i)
      const z = posAttr.getZ(i)
      // 细微高低起伏模拟齐鲁丘陵与黄河微波
      const y = Math.sin(x * 0.1) * Math.cos(z * 0.08) * 0.9 + Math.sin(z * 0.15) * 0.4
      posAttr.setY(i, y)
    }
    terrainGeo.computeVertexNormals()

    const terrainMat = new THREE.MeshStandardMaterial({
      color: 0x0a101b,
      roughness: 0.4,
      metalness: 0.8,
      wireframe: true,
    })
    const terrainMesh = new THREE.Mesh(terrainGeo, terrainMat)
    worldRoot.add(terrainMesh)

    // C. 四大学科立构神殿 (Atelier Spatial Monoliths)
    const monolithsGroup = new THREE.Group()
    monolithsGroup.position.set(-2, 0, -5)
    worldRoot.add(monolithsGroup)

    // 1. 艺术设计学系：张拉悬浮晶格柱
    const designGeo = new THREE.BoxGeometry(1.6, 4.2, 1.6)
    const designMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.25,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: true,
    })
    const designMesh = new THREE.Mesh(designGeo, designMat)
    designMesh.position.set(-2.5, 1.5, 0)
    monolithsGroup.add(designMesh)

    // 2. 跨媒介艺术实验室：生成式动态拓扑环
    const interGeo = new THREE.TorusKnotGeometry(1.1, 0.28, 90, 16)
    const interMat = new THREE.MeshStandardMaterial({
      color: 0x10b981,
      emissive: 0x059669,
      emissiveIntensity: 0.35,
      metalness: 0.7,
      roughness: 0.25,
      wireframe: true,
    })
    const interMesh = new THREE.Mesh(interGeo, interMat)
    interMesh.position.set(3.2, 2.2, -2)
    monolithsGroup.add(interMesh)

    // 3. 艺术史论系：古典八角文献石碑
    const historyGeo = new THREE.CylinderGeometry(1.1, 1.3, 4.8, 8)
    const historyMat = new THREE.MeshStandardMaterial({
      color: 0xd97706,
      emissive: 0xb45309,
      emissiveIntensity: 0.2,
      metalness: 0.8,
      roughness: 0.35,
      wireframe: true,
    })
    const historyMesh = new THREE.Mesh(historyGeo, historyMat)
    historyMesh.position.set(-3.5, 1.6, -7)
    monolithsGroup.add(historyMesh)

    // 4. 黄河民间艺术研究所：流动水波弧拱
    const riverGeo = new THREE.TorusGeometry(2.4, 0.45, 16, 60, Math.PI)
    const riverMat = new THREE.MeshStandardMaterial({
      color: 0xea580c,
      emissive: 0xc2410c,
      emissiveIntensity: 0.3,
      metalness: 0.85,
      roughness: 0.3,
      wireframe: true,
    })
    const riverMesh = new THREE.Mesh(riverGeo, riverMat)
    riverMesh.rotation.z = Math.PI
    riverMesh.position.set(2.8, 2.0, -8)
    monolithsGroup.add(riverMesh)

    // D. 悬浮展陈光柱群与思辨论坛 (Agora Forum Columns)
    const agoraGroup = new THREE.Group()
    agoraGroup.position.set(0, 0, -22)
    worldRoot.add(agoraGroup)

    const columnMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x0284c7,
      emissiveIntensity: 0.4,
      metalness: 0.8,
      roughness: 0.2,
      wireframe: true,
    })

    for (let c = 0; c < 6; c++) {
      const angle = (c / 6) * Math.PI * 2
      const radius = 5.5
      const colMesh = new THREE.Mesh(
        new THREE.CylinderGeometry(0.25, 0.3, 7.5, 12),
        columnMat
      )
      colMesh.position.set(
        Math.cos(angle) * radius,
        2.5,
        Math.sin(angle) * radius
      )
      agoraGroup.add(colMesh)
    }

    // E. 空间悬浮星尘微粒 (Cosmic Floating Stardust Particles)
    const particlesCount = 750
    const particlePositions = new Float32Array(particlesCount * 3)
    const particleColors = new Float32Array(particlesCount * 3)

    for (let p = 0; p < particlesCount; p++) {
      particlePositions[p * 3] = (Math.random() - 0.5) * 50
      particlePositions[p * 3 + 1] = Math.random() * 18 - 2
      particlePositions[p * 3 + 2] = (Math.random() - 0.5) * 80 - 15

      // 混合金色与天青星尘
      if (Math.random() > 0.5) {
        particleColors[p * 3] = 0.95
        particleColors[p * 3 + 1] = 0.8
        particleColors[p * 3 + 2] = 0.3
      } else {
        particleColors[p * 3] = 0.3
        particleColors[p * 3 + 1] = 0.75
        particleColors[p * 3 + 2] = 0.95
      }
    }

    const particlesGeo = new THREE.BufferGeometry()
    particlesGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    )
    particlesGeo.setAttribute(
      "color",
      new THREE.BufferAttribute(particleColors, 3)
    )

    const particlesMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    })

    const particleSystem = new THREE.Points(particlesGeo, particlesMat)
    worldRoot.add(particleSystem)

    // 5. Scroll Conductor & Smooth Camera Travel
    let exactProgress = 0
    let smoothProgress = 0
    let mouseX = 0
    let mouseY = 0
    let targetMouseX = 0
    let targetMouseY = 0

    const handlePointerMove = (e: MouseEvent) => {
      targetMouseX = (e.clientX / window.innerWidth) * 2 - 1
      targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener("mousemove", handlePointerMove)

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener("resize", handleResize)

    // 6. Animation Render Loop
    let animationFrameId = 0
    let lastTime = performance.now()

    const animate = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1)
      lastTime = time

      // 计算滚动进度 (Native Scroll -> Normalized Progress 0 to 5)
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      )
      const currentY = window.scrollY || window.pageYOffset || 0
      exactProgress = (currentY / maxScroll) * (cameraKeyframes.length - 1)

      // 阻尼平滑插值 (Exponential Damping)
      smoothProgress += (exactProgress - smoothProgress) * (1 - Math.exp(-5.0 * dt))
      setScrollProgress(smoothProgress)

      const activeIndex = Math.min(
        cameraKeyframes.length - 1,
        Math.max(0, Math.floor(smoothProgress + 0.35))
      )
      setCurrentChapter(activeIndex)

      // 解析摄像机两关键帧
      const segmentIdx = Math.min(
        cameraKeyframes.length - 2,
        Math.max(0, Math.floor(smoothProgress))
      )
      const localT = smoothProgress - segmentIdx

      const kfA = cameraKeyframes[segmentIdx]
      const kfB = cameraKeyframes[segmentIdx + 1] || kfA

      // 摄像机位置与朝向平滑插值
      const currentPos = new THREE.Vector3().lerpVectors(kfA.pos, kfB.pos, localT)
      const currentTarget = new THREE.Vector3().lerpVectors(
        kfA.target,
        kfB.target,
        localT
      )

      // 鼠标平滑视差晃动 (Subtle Parallax)
      mouseX += (targetMouseX - mouseX) * 0.05
      mouseY += (targetMouseY - mouseY) * 0.05
      currentPos.x += mouseX * 0.45
      currentPos.y += mouseY * 0.35

      camera.position.copy(currentPos)
      camera.lookAt(currentTarget)

      // 动态雾气与光照插值
      const currentFog = THREE.MathUtils.lerp(
        kfA.fogDensity,
        kfB.fogDensity,
        localT
      )
      scene.fog.density = currentFog

      // 3D 几何常态微动
      ringGroup.rotation.y += 0.004
      ring2.rotation.z += 0.003
      ring3.rotation.x += 0.002
      crystal.rotation.x += 0.005
      crystal.rotation.y += 0.007

      designMesh.rotation.y += 0.006
      interMesh.rotation.x += 0.008
      interMesh.rotation.y += 0.006
      historyMesh.rotation.y += 0.003
      riverMesh.rotation.z += 0.004

      agoraGroup.rotation.y += 0.0015

      // 粒子缓缓升腾
      particleSystem.rotation.y += 0.0004

      renderer.render(scene, camera)
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("mousemove", handlePointerMove)
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
      if (renderer) {
        renderer.dispose()
      }
      scene.clear()
    }
  }, [])

  const scrollToChapter = (index: number) => {
    const sections = document.querySelectorAll(".scroll-story-chapter")
    if (sections[index]) {
      sections[index].scrollIntoView({ behavior: "smooth" })
    }
  }

  const chapters = [
    { title: "序章 · 齐鲁造物", subtitle: "以文化人 · 艺文相长" },
    { title: "系部 · 四大工坊", subtitle: "国家一流专业 · 软科A+" },
    { title: "成果 · 国家重点", subtitle: "国家社科课题 · 出版基金" },
    { title: "讲坛 · 齐鲁艺文", subtitle: "思想锋芒 · 名家对话" },
    { title: "师资 · 学术矩阵", subtitle: "国家特贴专家 · 泰山学者" },
    { title: "启航 · 2026招考", subtitle: "本硕招生 · 官方校务" },
  ]

  return (
    <div className="threejs-scroll-world-app">
      {/* 实时 WebGL 3D 空间画布 */}
      <canvas ref={canvasRef} className="threejs-viewport-canvas" />

      {/* 顶部悬浮常驻通透导航 */}
      <header className="celestial-hud-masthead">
        <div className="hud-masthead-inner">
          <div className="hud-brand-lockup">
            <a href="#chapter-0" onClick={() => scrollToChapter(0)}>
              <img
                src="./college-logo.png"
                alt="山东工艺美术学院 人文艺术学院"
                className="celestial-college-logo"
              />
            </a>
            <div className="hud-motto-pill">
              <span>国家级一流本科专业</span>
              <span className="dot-sep">·</span>
              <span>软科中国大学专业排名 A+</span>
            </div>
          </div>

          {/* 实时章节指示与一键直达 */}
          <nav className="hud-chapter-stepper">
            {chapters.map((chap, idx) => (
              <button
                key={idx}
                className={`stepper-node ${currentChapter === idx ? "active" : ""}`}
                onClick={() => scrollToChapter(idx)}
                title={`${chap.title} - ${chap.subtitle}`}
              >
                <span className="node-idx">0{idx + 1}</span>
                <span className="node-title">{chap.title}</span>
              </button>
            ))}
          </nav>

          <div className="hud-action-col">
            <button
              className="btn-hud-admissions"
              onClick={() => scrollToChapter(5)}
            >
              <span>2026 招考指南</span>
              <span className="arrow-sym">↗</span>
            </button>
          </div>
        </div>
      </header>

      {/* 右侧垂直进度导引条 */}
      <aside className="celestial-progress-rail" aria-hidden="true">
        <div className="rail-track">
          <div
            className="rail-thumb"
            style={{ height: `${Math.min(100, Math.max(8, (scrollProgress / 5) * 100))}%` }}
          />
        </div>
        <div className="rail-caption">
          <span>CHAPTER 0{currentChapter + 1}</span>
          <span className="rail-pct">{Math.round((scrollProgress / 5) * 100)}%</span>
        </div>
      </aside>

      {/* 网页主体：按真实文档流布局的滚动章节 (DOM Story) */}
      <div className="scroll-story-container">
        {/* ================= CHAPTER 0: 序章 · 齐鲁文脉与造物灵光 ================= */}
        <section className="scroll-story-chapter chapter-hero" id="chapter-0">
          <div className="chapter-content-card glass-panel hero-panel">
            <div className="hero-kicker-strip">
              <span className="kicker-badge">SHANDONG CRAFT &amp; HUMANITIES</span>
              <span className="kicker-date">2026年春季学期 · 第8教学周</span>
            </div>

            <h1 className="hero-monumental-title">
              <span className="title-row-white">以文化人 · 艺文相长</span>
              <span className="title-row-gold">守正拓新 · 知行合一</span>
            </h1>

            <div className="hero-academic-lead">
              立足齐鲁深厚文脉，涵育当代造物思想。建设兼具中华文化底蕴与当代国际视野的一流艺术设计人文高地。
            </div>

            <p className="hero-desc-paragraph">
              人文艺术学院现设艺术设计学系与艺术史论系，建有黄河流域传统工艺与现代设计文化研究中心、跨媒介艺术与非遗活化重点实验室。以深厚文脉为根基，直面当代技术变革，培养具备扎实学术素养、敏锐批判意识与前沿创新能力的复合型艺术设计与史论拔尖人才。
            </p>

            {/* 四格核心硬实力办学指标 */}
            <div className="hero-metrics-deck">
              <div className="metric-cell">
                <span className="metric-val text-gold">全国 A+</span>
                <span className="metric-label">软科专业排名顶尖评级</span>
              </div>
              <div className="metric-cell">
                <span className="metric-val">2 个</span>
                <span className="metric-label">国家级一流本科专业点</span>
              </div>
              <div className="metric-cell">
                <span className="metric-val">100%</span>
                <span className="metric-label">专任教师高职及博士比</span>
              </div>
              <div className="metric-cell">
                <span className="metric-val">50+ 项</span>
                <span className="metric-label">国家社科重点及省部课题</span>
              </div>
            </div>

            <div className="hero-action-row">
              <button
                className="btn-celestial-primary"
                onClick={() => scrollToChapter(1)}
              >
                <span>探索四大前沿工坊与系部</span>
                <span className="arrow-down">↓</span>
              </button>
              <button
                className="btn-celestial-outline"
                onClick={() => scrollToChapter(5)}
              >
                <span>2026 招考报考指南</span>
                <span className="arrow-sym">↗</span>
              </button>
            </div>
          </div>
        </section>

        {/* ================= CHAPTER 1: 系部 · 四大特色学科与前沿实验室 ================= */}
        <section className="scroll-story-chapter chapter-departments" id="chapter-1">
          <div className="chapter-content-card glass-panel wide-panel">
            <div className="panel-header-line">
              <div className="panel-tag">ACADEMIC ATELIERS &amp; LABS</div>
              <h2 className="panel-title">学科设置与教学系部</h2>
              <p className="panel-lead">
                构建“设计理论深度 + 史论典籍根基 + 跨媒介先锋实验 + 黄河非遗在地活化”四位一体的拔尖育人矩阵。
              </p>
            </div>

            <div className="ateliers-interactive-matrix">
              {/* 1. 艺术设计学系 */}
              <div
                className={`atelier-item-card ${activeAtelier === 0 ? "focused" : ""}`}
                onClick={() => setActiveAtelier(0)}
              >
                <div className="atelier-top">
                  <span className="atelier-code">MAJOR CODE: 130501</span>
                  <span className="atelier-badge badge-gold">软科全国 A+ · 国家一流专业</span>
                </div>
                <h3 className="atelier-name">艺术设计学系</h3>
                <p className="atelier-desc">
                  立足深厚人文底蕴与现代设计实践，培养面向文化战略、设计管理、信息与交互体验、文化遗产数字化传播的高级复合型创新人才。
                </p>
                <div className="atelier-directions">
                  <span className="dir-tag">文化战略与设计策划</span>
                  <span className="dir-tag">信息与界面交互体验</span>
                  <span className="dir-tag">生活方式文创研发</span>
                  <span className="dir-tag">现代设计文化批评</span>
                </div>
                <div className="atelier-footer">
                  <span>授予学位：艺术学学士 / 艺术学硕士 / 艺术专业硕士 (MFA)</span>
                </div>
              </div>

              {/* 2. 跨媒介艺术与计算交互重点实验室 */}
              <div
                className={`atelier-item-card ${activeAtelier === 1 ? "focused" : ""}`}
                onClick={() => setActiveAtelier(1)}
              >
                <div className="atelier-top">
                  <span className="atelier-code">LAB-INTERMEDIA</span>
                  <span className="atelier-badge badge-cyan">前沿交叉重点实验室</span>
                </div>
                <h3 className="atelier-name">跨媒介艺术与计算交互实验室</h3>
                <p className="atelier-desc">
                  聚焦人工智能生成艺术（AIGC）、沉浸式空间视听、动态数据可视化及人机协同创作，探索科技与东方美学的共生边界。
                </p>
                <div className="atelier-directions">
                  <span className="dir-tag">生成式计算艺术</span>
                  <span className="dir-tag">多通道空间声场</span>
                  <span className="dir-tag">数字孪生虚实共生</span>
                  <span className="dir-tag">气候环境感知装置</span>
                </div>
                <div className="atelier-footer">
                  <span>学术支撑：年度国际新媒体艺术展映与计算工坊</span>
                </div>
              </div>

              {/* 3. 艺术史论系 */}
              <div
                className={`atelier-item-card ${activeAtelier === 2 ? "focused" : ""}`}
                onClick={() => setActiveAtelier(2)}
              >
                <div className="atelier-top">
                  <span className="atelier-code">MAJOR CODE: 130101</span>
                  <span className="atelier-badge badge-gold">国家级一流本科专业</span>
                </div>
                <h3 className="atelier-name">艺术史论系</h3>
                <p className="atelier-desc">
                  依托齐鲁文化资源，深耕中国古代造物制度史、手工艺文献考据与现代艺术批评，强化典籍研读与实地考察双重功底。
                </p>
                <div className="atelier-directions">
                  <span className="dir-tag">中国工艺美术史</span>
                  <span className="dir-tag">视觉文化与当代批评</span>
                  <span className="dir-tag">器物考古文献学</span>
                  <span className="dir-tag">艺术策展与博物馆学</span>
                </div>
                <div className="atelier-footer">
                  <span>重点出版物：《中国工艺史料集成》《齐鲁手工艺考》</span>
                </div>
              </div>

              {/* 4. 黄河流域民间艺术研究所 */}
              <div
                className={`atelier-item-card ${activeAtelier === 3 ? "focused" : ""}`}
                onClick={() => setActiveAtelier(3)}
              >
                <div className="atelier-top">
                  <span className="atelier-code">HERITAGE-RESEARCH</span>
                  <span className="atelier-badge badge-amber">省级重点人文社科基地</span>
                </div>
                <h3 className="atelier-name">黄河流域民间艺术研究所</h3>
                <p className="atelier-desc">
                  致力于沿黄九省区民间美术田野考察、抢救性非遗建档与现代在地转化，将高校学术资源深度投入乡村振兴与社会美育实践。
                </p>
                <div className="atelier-directions">
                  <span className="dir-tag">黄河手工艺田野测绘</span>
                  <span className="dir-tag">乡村在地设计介入</span>
                  <span className="dir-tag">非遗数字化图谱</span>
                  <span className="dir-tag">传统造物实物标本</span>
                </div>
                <div className="atelier-footer">
                  <span>支撑平台：全流域手工艺文献实物标本库</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= CHAPTER 2: 成果 · 国家重大科研与学术展陈 ================= */}
        <section className="scroll-story-chapter chapter-research" id="chapter-2">
          <div className="chapter-content-card glass-panel wide-panel">
            <div className="panel-header-line">
              <div className="panel-tag">CURATORIAL ARCHIVE &amp; RESEARCH</div>
              <h2 className="panel-title">教学科研与学术展陈成果</h2>
              <p className="panel-lead">
                把论文写在祖国大地上，以高水平科研项目与先锋艺术创作回应时代命题。
              </p>
            </div>

            <div className="research-curation-grid">
              {researchItems.map((item) => (
                <div
                  key={item.id}
                  className="research-artifact-card"
                  onClick={() => setSelectedResearch(item)}
                >
                  <div className="artifact-image-viewport">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="artifact-thumb"
                      loading="lazy"
                    />
                    <div className="artifact-code">{item.code}</div>
                  </div>

                  <div className="artifact-info-wrap">
                    <div className="artifact-role-line">
                      <span className="role-chip">{item.role}</span>
                      <span className="year-text">{item.year}</span>
                    </div>

                    <h3 className="artifact-title">{item.title}</h3>
                    <div className="artifact-team">{item.leader} · {item.dept}</div>
                    <p className="artifact-medium">{item.medium}</p>

                    <div className="artifact-click-prompt">
                      <span>查阅学术详报与成果鉴定报告</span>
                      <span className="prompt-arrow">→</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 学术成果详报浮层 (Dossier Modal) */}
        {selectedResearch && (
          <div
            className="spatial-dossier-overlay"
            onClick={() => setSelectedResearch(null)}
          >
            <div
              className="spatial-dossier-box"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="dossier-top">
                <span className="dossier-code-num">{selectedResearch.code} · 学术档案详报</span>
                <button
                  className="btn-dossier-dismiss"
                  onClick={() => setSelectedResearch(null)}
                  aria-label="关闭窗口"
                >
                  ✕
                </button>
              </div>

              <div className="dossier-grid">
                <div className="dossier-visual">
                  <img
                    src={selectedResearch.image}
                    alt={selectedResearch.title}
                    className="dossier-img"
                  />
                </div>
                <div className="dossier-content">
                  <div className="dossier-tag">{selectedResearch.role}</div>
                  <h3 className="dossier-heading">{selectedResearch.title}</h3>

                  <div className="dossier-meta-list">
                    <div className="meta-item">
                      <span className="meta-k">项目承担团队：</span>
                      <span className="meta-v">{selectedResearch.leader}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-k">成果周期：</span>
                      <span className="meta-v">{selectedResearch.year}</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-k">媒介规制：</span>
                      <span className="meta-v">{selectedResearch.medium}</span>
                    </div>
                  </div>

                  <div className="dossier-summary-box">
                    <div className="summary-title">学术价值与内容摘要：</div>
                    <p className="summary-text">{selectedResearch.summary}</p>
                  </div>

                  <button
                    className="btn-close-dossier"
                    onClick={() => setSelectedResearch(null)}
                  >
                    返回展陈长廊
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= CHAPTER 3: 讲坛 · 齐鲁艺文学术名家讲坛 ================= */}
        <section className="scroll-story-chapter chapter-lectures" id="chapter-3">
          <div className="chapter-content-card glass-panel wide-panel">
            <div className="panel-header-line">
              <div className="panel-tag">FORUMS &amp; DISCOURSE</div>
              <h2 className="panel-title">齐鲁艺文学术名家讲坛</h2>
              <p className="panel-lead">
                汇聚全国艺术学理论、设计界权威学者与前沿创作者，打造兼具思想锋芒与学术广度的对话阵地。
              </p>
            </div>

            <div className="lectures-celestial-list">
              {lectureList.map((item) => (
                <div key={item.no} className="lecture-celestial-row">
                  <div className="lecture-date-col">
                    <span className="lecture-date-main">{item.date}</span>
                    <span className="lecture-time-sub">{item.time}</span>
                  </div>

                  <div className="lecture-core-col">
                    <div className="lecture-series-chip">{item.series}</div>
                    <h3 className="lecture-topic-heading">{item.title}</h3>
                    <div className="lecture-scholar-info">
                      <span className="scholar-strong">{item.speaker}</span>
                      <span className="scholar-desc">{item.speakerTitle}</span>
                    </div>
                    <div className="lecture-hall-info">学术会场：{item.location}</div>
                  </div>

                  <div className="lecture-action-col">
                    <span className="lecture-status-tag">{item.status}</span>
                    <button
                      className="btn-reserve-seat"
                      onClick={() => scrollToChapter(5)}
                    >
                      <span>预约入场指南</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CHAPTER 4: 师资 · 学术委员会与名师矩阵 ================= */}
        <section className="scroll-story-chapter chapter-faculty" id="chapter-4">
          <div className="chapter-content-card glass-panel wide-panel">
            <div className="panel-header-line">
              <div className="panel-tag">ACADEMIC LEADERSHIP</div>
              <h2 className="panel-title">师资队伍与学术委员会</h2>
              <p className="panel-lead">
                汇聚国务院特殊津贴专家、泰山学者、教育部教指委委员、全国美展评委等具有全国影响力的名师名家。
              </p>
            </div>

            <div className="faculty-celestial-grid">
              {facultyList.map((f, idx) => (
                <div key={idx} className="faculty-scholar-box">
                  <div className="scholar-tag-top">
                    <span className="scholar-num">FELLOW 0{idx + 1}</span>
                    <span className="scholar-domain">{f.tag}</span>
                  </div>

                  <h3 className="scholar-name">{f.name}</h3>
                  <div className="scholar-academic-title">{f.title}</div>
                  <div className="scholar-admin-role">{f.role}</div>

                  <div className="scholar-divider-line"></div>

                  <div className="scholar-research-direction">
                    <span className="label">主要研究领域：</span>
                    <p className="desc">{f.direction}</p>
                  </div>

                  <div className="scholar-publications">
                    <span className="label">代表性著述与成果：</span>
                    <p className="desc">{f.works}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CHAPTER 5: 启航 · 2026 招考指南与官方校务 ================= */}
        <section className="scroll-story-chapter chapter-admissions" id="chapter-5">
          <div className="chapter-content-card glass-panel wide-panel admissions-panel">
            <div className="admissions-top-center">
              <div className="panel-tag">ADMISSIONS &amp; TALENT DEVELOPMENT 2026</div>
              <h2 className="panel-title">2026 年度本科生与研究生招考报考指南</h2>
              <p className="panel-lead">
                热忱欢迎热爱中华优秀传统造物文化、具备敏锐艺术观察力与批判性思考能力的青年学者与学子报考人文艺术学院。
              </p>
            </div>

            <div className="admissions-pathways-grid">
              <div className="pathway-card">
                <div className="pathway-header">
                  <span className="pathway-badge">本科高考招生</span>
                  <h3 className="pathway-name">本科生统考招生专业</h3>
                </div>
                <p className="pathway-summary">
                  面向全国招收艺术设计学（软科全国A+）、艺术史论专业本科生。实行全程导师制、创新工作坊与田野考察育人机制。
                </p>
                <ul className="pathway-links">
                  <li><a href="#chapter-0">2026 艺术设计学专业本科招生计划与章程 ↗</a></li>
                  <li><a href="#chapter-0">2026 艺术史论专业高考报考指南及录取分数 ↗</a></li>
                  <li><a href="#chapter-0">历年各省份录取分数线与毕业生就业质量报告 ↗</a></li>
                </ul>
              </div>

              <div className="pathway-card">
                <div className="pathway-header">
                  <span className="pathway-badge badge-accent">研究生教育</span>
                  <h3 className="pathway-name">硕士研究生与科研流动</h3>
                </div>
                <p className="pathway-summary">
                  招收艺术学学术学位（设计历史与理论、艺术批评方向）及艺术专业硕士（MFA，文创策划与展示设计方向）。设有科研创新基金。
                </p>
                <ul className="pathway-links">
                  <li><a href="#chapter-0">2026 硕士研究生初试统考大纲与专业参考书目 ↗</a></li>
                  <li><a href="#chapter-0">推荐免试优秀应届本科生攻读硕士研究生办法 ↗</a></li>
                  <li><a href="#chapter-0">青年学者科研流动站与访问学者招募公告 ↗</a></li>
                </ul>
              </div>
            </div>

            <div className="admissions-download-strip">
              <a href="#chapter-0" className="btn-download-brochure">
                <span>下载 2026 人文艺术学院招生简章完整版 (PDF)</span>
                <span className="download-icon">↓</span>
              </a>
              <div className="admissions-hotline">
                <span>招生咨询热线：0531-89626000（教务办）</span>
              </div>
            </div>

            {/* 规范官方高校底栏 */}
            <footer className="celestial-official-footer">
              <div className="footer-brand-line">
                <img
                  src="./college-logo.png"
                  alt="山东工艺美术学院 人文艺术学院"
                  className="footer-logo-img"
                />
                <span className="footer-motto-quote">
                  “以文化人，艺文相长；守正拓新，知行合一”
                </span>
              </div>

              <div className="footer-columns-deck">
                <div className="footer-col">
                  <h4>校区驻地与联络</h4>
                  <p>地址：山东省济南市长清区大学科技园大学路1号</p>
                  <p>邮政编码：250300</p>
                  <p>学院办公室：0531-89626000</p>
                  <p>教学科研办公室：0531-89626001</p>
                  <p>官方邮箱：sha_office@sdada.edu.cn</p>
                </div>

                <div className="footer-col">
                  <h4>特色系部与平台</h4>
                  <p>艺术设计学系（国家级一流专业 / 软科全国A+）</p>
                  <p>艺术史论系（国家级一流本科专业）</p>
                  <p>跨媒介艺术与计算交互重点实验室</p>
                  <p>黄河流域民间艺术研究所</p>
                </div>

                <div className="footer-col">
                  <h4>校内学术与管理通道</h4>
                  <p><a href="#chapter-0">山东工艺美术学院官网 (sdada.edu.cn)</a></p>
                  <p><a href="#chapter-0">教务综合管理系统</a></p>
                  <p><a href="#chapter-0">研究生处 / 研究生培养</a></p>
                  <p><a href="#chapter-0">图书馆数字资源与知网文献镜像</a></p>
                </div>
              </div>

              <div className="footer-copyright-row">
                <span>版权所有 © 2026 山东工艺美术学院 人文艺术学院 · 官方网站改版方案三（三维空间叙事版）</span>
                <span>鲁ICP备05002166号 · 鲁公网安备 37011302000001号</span>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </div>
  )
}
