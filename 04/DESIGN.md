---
name: "SDADA School of Humanities and Arts - Scheme 03"
description: "Minimalist Architectural Editorial Design System for SDADA"
colors:
  primary: "#141416"
  secondary: "#3D3D44"
  muted: "#52525A"
  canvas: "#FAF9F6"
  card: "#FFFFFF"
  card-subtle: "#F5F4F0"
  dark-surface: "#161618"
  dark-surface-elevated: "#222226"
  vermilion: "#B83A2E"
  accent-green: "#2D5A27"
  border-hairline: "rgba(20, 20, 22, 0.10)"
  border-strong: "rgba(20, 20, 22, 0.85)"
typography:
  display:
    fontFamily: '"Songti SC", "SimSun", "Noto Serif SC", "STSong", "Baskerville", Georgia, serif'
    fontSize: "clamp(2.3rem, 3.8vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 1.15
  heading:
    fontFamily: '"Songti SC", "SimSun", "Noto Serif SC", "STSong", "Baskerville", Georgia, serif'
    fontSize: "1.75rem"
    fontWeight: 700
    lineHeight: 1.3
  body:
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif'
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.85
  mono:
    fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace'
    fontSize: "0.75rem"
    fontWeight: 600
rounded:
  none: "0px"
  sm: "2px"
  md: "4px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  xxl: "48px"
---

# Design System

<!-- impeccable:design-schema 1 -->

## Overview

山东工艺美术学院人文艺术学院（方案04：高定极简典雅风）设计规范。融合中国深厚造物哲思与现代国际顶级艺术双年展刊物编排体系，采用 100% 流体 12 栏建筑网格，以极度克制的黑白灰矿物底色与温润的朱红印信形成视觉张力，彻底打破高校官网千篇一律的卡片盒与 AI 模板味。

## Colors

- **Canvas Ground**: `#FAF9F6`（象牙羊皮纸底色，温润雅致，消减白屏眩光）
- **Card Ground**: `#FFFFFF` / `#F5F4F0`（次级画布与轻微色块承托）
- **Dark Surface**: `#161618` / `#222226`（研究生拔尖培养与沉浸式区域）
- **Primary Ink**: `#141416`（深邃焦墨，主标题与重要操作）
- **Secondary Ink**: `#3D3D44`（正文与叙事副标题，对比度达 8.8:1，远超 WCAG AA 4.5:1）
- **Muted Label**: `#52525A`（辅助信息与元数据，对比度达 5.8:1）
- **Cultural Vermilion**: `#B83A2E`（齐鲁造物朱红原色印鉴与强调标识）

## Typography

- **Display / Heading**: 宋体与古典衬线家族 (`"Songti SC", "Noto Serif SC", Georgia, serif`)，承载院训、学科方向与学术文脉；
- **Body & Controls**: 高清现代无衬线体 (`-apple-system, "PingFang SC", sans-serif`)，字距松弛自如，行高 1.7~1.85，确保长时间阅读舒适度；
- **Tabular / Telemetry**: 等宽系统字体 (`ui-monospace, "SF Mono", monospace`)，专用于学术代码、年份与编号。

## Layout

- **12 栏建筑基准网格**：100% 全宽流体，各栏宽度动态均分，辅以极轻的 1px 发丝竖向轴线 (`rgba(20, 20, 22, 0.06)`)，彻底消除沉重封闭的横向网格割裂；
- **非对称节奏**：
  - Hero 7:5 杂志画卷（左侧巨幅学术现场，右侧学术主章与报考导引）
  - 学术纪事 8:4 焦点流（左侧长篇图文特写，右侧快讯分发清单）
  - 学科矩阵 4:8 案卷（左侧 8 大专业导航轴，右侧展开式深度培养案卷）
  - 招生通道 6:6 双材质对撞（炭黑研究生学术区 + 骨白本科卓越通道）。

## Elevation & Depth

- **拒绝生硬阴影**：不使用无模糊硬块阴影或花哨渐变彩色发光，所有阴影均为低不透明度微弥散羽化（`box-shadow: 0 16px 44px rgba(20, 20, 22, 0.08)`）；
- **材质分层**：通过纯白、羊皮灰白与炭黑之间的纯色块交替构筑深度。

## Shapes

- 极简微圆角（`border-radius: 2px`），保留印刷品切页与建筑构件的利落切割感；
- 避免过度圆润的“胶囊按钮”与高浮雕气泡。

## Components

- **Anchor Gallery**：16:10 巨幅展陈大图容器，内置底端典雅渐变铭牌与舒适编辑切换器；
- **Archival Stamp**：方形朱红古风印章，搭载国家一流专业建设点学术档案编号；
- **Accolade Card**：微调浅灰底色结合左侧墨线，用于软科 A+ 顶尖学科背书；
- **Action Buttons**：带圆形单向微箭头的导引链接，悬停时产生柔和横向位移与色彩反转。

## Do's and Don'ts

### Do
- 始终保持文字对比度在 4.5:1（大字 3:1）以上；
- 依靠版面留白与字号跳跃自然区分层级，多留出垂直呼吸空间；
- 保持图片独立唯一，准确对应学术与学科情境。

### Don't
- 严禁在标题前添加 `01 / TOPIC` 或 `VOL.XX` 等 AI 眉标标签（Kickers）；
- 严禁使用 SaaS 式的大数字指标卡片组堆砌在首屏；
- 严禁使用未加约束的呼吸闪烁状态点；
- 严禁在页面各处复用同一张照片。
