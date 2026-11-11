---
{"dg-publish":true,"permalink":"/home/","title":"PMBA 核心專業選修知識庫","tags":["gardenEntry"],"dg-note-properties":{"title":"PMBA 核心專業選修知識庫"}}
---


# 📚 PMBA 核心專業選修知識庫
> **National Taiwan University · Professional MBA Knowledge Portal**  
> 國立臺灣大學 PMBA 主題選修核心知識樞紐 · 雙軌高階商業決策動態體系

> [!ABSTRACT] 💡 數位花園定位與全景導航 (Executive Abstract)
> 本知識庫為 PMBA 兩大旗艦主題選修課程之數位知識中樞，架構上貫通**「微觀新創財務與能耐（Micro / Firm）」**與**「中層產業結構與資本市場（Meso / Industry）」**，打通從商業模式創新、精實假說驗證、財務三表動態聯動、外部融資需求（EFN）、創投與私募股權（VC/PE），到產業中層結構（SCP）、波特五力、價值體系、技術 S 曲線、Top-Down 資產配置與企業內在價值估算之完整商管決策閉環。

---

## 🏛️ 知識庫架構總覽：微觀創能 $\times$ 中層產業雙軌模型

```mermaid
flowchart LR
    classDef main fill:#1e293b,stroke:#3b82f6,stroke-width:2px,color:#fff
    classDef c10 fill:#064e3b,stroke:#10b981,stroke-width:1.5px,color:#fff
    classDef c12 fill:#1e3a8a,stroke:#60a5fa,stroke-width:1.5px,color:#fff
    classDef bridge fill:#78350f,stroke:#f59e0b,stroke-width:1.5px,color:#fff

    subgraph C10 ["🚀 10_創業與企業財務策略 (微觀能耐 / 企業內創)"]
        direction TB
        C10_M1["模組一：創新思維與商業模式<br/>(Timmons / BMC / 7 Powers)"]
        C10_M2["模組二：產品創新、財務預測與股權<br/>(PMF / EFN 模型 / VC Term Sheet)"]
        C10_M1 --> C10_M2
    end

    subgraph CoreBridge ["⚖️ 商業核心對接樞紐"]
        direction TB
        Surplus["價值楔子與超額租金<br/>WTP - Cost = ROIC > WACC"]
        Moat["永續競爭優勢與護城河<br/>(動態能耐 × 互補體系)"]
        Surplus <--> Moat
    end

    subgraph C12 ["📊 12_產業分析與投資策略 (中層結構 / 資本評價)"]
        direction TB
        C12_M1["模組一：總論與結構架構<br/>(Meso 定位 / 景氣循環 / 五力分析)"]
        C12_M2["模組二：產業內與產業間分析<br/>(垂直價值體系 / 聚落 / 價值網)"]
        C12_M3["模組三：產業演化與動態轉型<br/>(生命週期 / S曲線 / 破壞式創新)"]
        C12_M4["模組四：產業投資策略與實務<br/>(Top-Down 配置 / DCF 評價 / 財報對標)"]
        C12_M5["模組五：實務專題與論文對接<br/>(半導體講座 / 投研實戰 / 論文方法)"]
        C12_M1 --> C12_M2 --> C12_M3 --> C12_M4 --> C12_M5
    end

    C10 <=====> CoreBridge <=====> C12

    class C10_M1,C10_M2 c10
    class C12_M1,C12_M2,C12_M3,C12_M4,C12_M5 c12
    class Surplus,Moat bridge
```

---

## 🧭 主題選修旗艦課程全景導航

### 🚀 課程一：10_創業與企業財務策略 (Entrepreneurship & Corporate Financial Strategy)

> [!NOTE] 📌 課程核心定位與進度狀態
> - **核心宗旨**：打通「好點子 $\rightarrow$ 好事業 $\rightarrow$ 好公司 $\rightarrow$ 好投資」的商業化轉譯路徑，整合商業模式設計、價值主張、精實產品驗證、新創動態財務預測與創投/私募股權決策。
> - **進度狀態**：**全課程兩大模組共 15 篇深度精深筆記已 100% 建置沉澱完成**。
>   - **Module 1 (W01~W04 創新思維與商業模式)**：10 篇核心筆記完全就緒。
>   - **Module 2 (W05~W08 產品創新、財務預測與股權策略)**：5 篇進階筆記全數就緒。

#### 1. 課程導航、總經時事與個案實務樞紐
| 樞紐分類 | 導航筆記連結 | 核心內容與分析焦點 |
| :--- | :--- | :--- |
| 🗺️ **課程總覽地圖** | [[_創業與企業財務策略 MOC]] | 全課程知識地圖、模組索引、思考架構與概念卡片對接體系 |
| 🧠 **全景心智圖導航** | [[mindmap_創業與企業財務策略_心智圖導航]] | 視覺化心智圖階層架構，掌握創業家精神至資本市場之邏輯流 |
| 🌐 **創投總經時事庫** | [[macro_資本市場與創投總經時事]] | 美債殖利率、FOMC 利率政策、HLW 自然利率模型、日圓套利平倉、AI 算力逆價差 |
| 🏢 **新創融資案例庫** | [[cases_新創與企業融資案例庫]] | Airbnb、藍河科技 Blue River、奇異 GE、友達/群創 FOPLP、台積電 vs 鴻海財務結構 |

#### 2. 模組一：創新思維與商業模式 (Module 1, 10 篇)
| 模組編號 | 核心課題與筆記名稱 | 經典理論與決策工具箱 |
| :--- | :--- | :--- |
| **M1-1** | [[M1-1_創業本質與創業家精神]] | 熊彼得創造性破壞、Timmons 創業三要素、肥尾分佈與非對稱回報理論 |
| **M1-2** | [[M1-2_白板決策鏈與財務價值三角]] | 資本傳導鏈、生命週期投融資矩陣、Gordon 模型、杜邦三因子、AV/EPV/GV 估值模型 |
| **M1-3** | [[M1-3_數位新經濟與精實創業方法論]] | 五大新經濟與科技引擎、MVP/PMF/Pivot 精驗閉環、Steve Blank 顧客開發模型 |
| **M1-4** | [[M1-4_創意思考工具與設計思考方法]] | 水平思考法、六頂思考帽、Drucker 創新七來源、Design Thinking EDIPT × 兩全思維 |
| **M1-5** | [[M1-5_創業構想發展與兩階段可行性評估]] | 創業機會八步驟、初步評估 8 大問題、深入評估 5 大維度、STP 與 AIO 生活型態畫像 |
| **M1-6** | [[M1-6_創業觀念模式與商業計畫書審查]] | Timmons / Bruyat / Dollinger / 劉謝四大模式、BP 審查六維度、TAM/SAM/SOM 估算 |
| **M1-7** | [[M1-7_創新策略思維與平衡計分卡架構]] | As-Is $\rightarrow$ To-Be 差距模型、平衡計分卡 BSC 四構面因果鏈與 KPI 落地、競爭優勢四基石 |
| **M1-8** | [[M1-8_企業內部資源理論與動態能耐矩陣]] | 資源基礎理論 RBV、VRIO 檢驗矩陣、動態能耐三部曲 (Sensing/Seizing/Transforming) |
| **M1-9** | [[M1-9_商業模式畫布架構與價值主張設計]] | BMC 九大要素與四大導向、感知淨價值方程式、Showrooming、RFM/CLV 單位經濟學 |
| **M1-10**| [[M1-10_七大市場力量與商業戰略價值公式]]| 7 Powers 七大市場力量解構、商模到戰略躍遷、價值公式 $\text{Value} = \text{規模} \times \text{力量}$ |

#### 3. 模組二：產品創新、財務預測與股權融資 (Module 2, 5 篇)
| 模組編號 | 核心課題與筆記名稱 | 經典理論與決策工具箱 |
| :--- | :--- | :--- |
| **M2-1** | [[M2-1_精實產品開發與服務創新驗證]] | 精實假說驗證閉環、四大 MVP 類型、PMF 金字塔、Sean Ellis 40% 指標、Cohort 留存、CCC 推導 |
| **M2-2** | [[M2-2_產品組合策略與品牌權益管理]] | Kotler 產品層次同心圓、Aaker 品牌權益、CBBE 品牌共鳴金字塔、行銷 7.0、Ansoff 矩陣 |
| **M2-3** | [[M2-3_創業行銷策略與全能屋模型]] | 全能屋 Omnihouse CI-EL vs PI-PM、5D 動態 $\rightarrow$ 4C 場域、PDB 競爭力、J-Curve 跨越 |
| **M2-4** | [[M2-4_新創財務預測與外部融資需求模型]]| 財務三表動態聯動、銷售百分比法、外部融資需求 EFN 方程式、內部/永續成長率、Runway 矩陣 |
| **M2-5** | [[M2-5_創業投資與私募股權運作機制]] | VC/PE 基金週期、募資階段 Seed~IPO、Cap Table 股權稀釋模型、Term Sheet 核心防禦條款 |

---

### 📊 課程二：12_產業分析與投資策略 (Industry Analysis & Investment Strategy)

> [!NOTE] 📌 課程核心定位與進度狀態
> - **核心宗旨**：介於「宏觀總體經濟（Macro）」與「微觀個別企業（Micro）」之間的中層產業分析樞紐（Meso-level Analysis），貫通結構分析（SCP）、波特五力、市場空間、垂直價值體系、產業演化動態與資本市場投資評價。
> - **進度狀態**：**全課程五大模組共 20 篇核心筆記與架構地圖已 100% 完整建置**。
>   - **Module 1 (總論與結構架構)**：8 篇核心筆記完全就緒。
>   - **Module 2 (產業內與產業間分析)**：3 篇垂直體系、聚落與價值網競合筆記完全就緒。
>   - **Module 3 (產業演化與動態轉型)**：2 篇生命週期與全球化轉型筆記完全就緒。
>   - **Module 4 (產業投資策略與實務)**：3 篇評價估值、資產配置與財報分析筆記完全就緒。
>   - **Module 5 (實務專題與期末整合)**：4 篇半導體業師、實戰投研、論文對接與決策心法完全就緒。

#### 1. 課程導航、總體經濟與個案實務樞紐
| 樞紐分類 | 導航筆記連結 | 核心內容與分析焦點 |
| :--- | :--- | :--- |
| 🗺️ **課程總覽地圖** | [[_產業分析與投資策略 MOC]] | 全課程中層定位地圖、16 週學習里程碑與核心樞紐架構 |
| 📊 **進度追蹤看板** | [[progress_📊 課程與筆記進度追蹤]] | 全課程五大模組筆記與核心商管工具進度追蹤儀表板 |
| 🧠 **全景心智圖導航** | [[mindmap_產業分析與投資策略_心智圖導航]] | 產業分析方法論與決策工具箱全景心智圖架構 |
| 📐 **M1 模組架構圖** | [[M1_模組架構心智圖]] | 模組一總論與架構專屬心智圖解析 |
| 🌐 **總體經濟時事庫** | [[macro_總體經濟與課前時事]] | 四階傳導模型、Fed 利率走勢與 Core PCE、美債殖利率、歐盟 CBAM 碳關稅 |
| 🏢 **產業企業案例庫** | [[cases_企業與產業案例庫]] | 台積電技術寡占、鴻海規模經濟、中租-KY 信用利差、廣達/緯創 AI 伺服器雙軌轉型 |

#### 2. 五大模組核心知識晶體 (Modules 1 ~ 5, 20 篇)

##### 🔹 模組一：總論與結構架構 (Module 1, Intra-Industry Analysis, 8 篇)
- 📑 **M1-1 產業分析本質與中層定位**：[[M1-1_產業分析本質與中層定位]]  
  *(中層 Meso 樞紐、政府/企業/投資人三大視角、Porter 替代性定義 vs NAICS 官方分類、產業動態模糊化、標準分析六步驟)*
- 📑 **M1-2 三大景氣循環與資本評價邏輯**：[[M1-2_三大景氣循環與資本評價邏輯]]  
  *(基欽存貨 3~4 年、朱格拉設備 7~10 年、康波長波 20~30 年、廣達 10 年時間序列分析、DCF 內在價值三要素、Hurdle Rate)*
- 📑 **M1-3 產業獲利結構差異與十大經典理論**：[[M1-3_產業獲利結構差異與十大經典理論]]  
  *(鴻海/台積電/中租跨產業獲利驅動因子、實體通路對標統一超/全家/寶雅 41% ROE、十大經典理論地圖全覽)*
- 📑 **M1-4 台灣產業發展歷程與決策工具箱**：[[M1-4_台灣產業發展歷程與決策工具箱]]  
  *(台灣戰後七大升級浪潮、互補性策略聯盟網絡護城河、專案立項七大檢核問句、PMBA 碩士論文 20~50 頁實戰對接指南)*
- 📑 **M1-5 波特五力分析與量化架構**：[[M1-5_波特五力分析與量化架構]]  
  *(五力深層驅動因子、Baumol 可競爭市場定價、CR4/HHI 市場集中度量化、台灣製藥單一買方體制實證、反制五力四大戰略)*
- 📑 **M1-6 產業分析模式與九大分析工具矩陣**：[[M1-6_產業分析模式與九大分析工具矩陣]]  
  *(九大經典分析矩陣完整映射、外部環境與內部能力適配、分析工具選用決策樹)*
- 📑 **M1-7 產業市場空間與策略群組**：[[M1-7_產業市場空間與策略群組]]  
  *(TAM/SAM/SOM 三層市場空間界定、策略群組地圖 SGM 繪製實務、移動障礙 Mobility Barriers、同儕競爭空白區辨識)*
- 📑 **M1-8 商業生態系與平台網絡**：[[M1-8_商業生態系與平台網絡]]  
  *(商業生態系結構特徵、Keystone 主導者 vs Niche 利基者 vs Dominator 支配者、雙邊市場網絡效應、平台包夾防禦策略)*

##### 🔹 模組二：產業內與產業間分析 (Module 2, Inter-Industry Analysis, 3 篇)
- 📑 **M2-1 產業垂直價值體系**：[[M2-1_產業垂直價值體系]]  
  *(內部價值鏈延伸至跨產業垂直價值體系、微笑曲線 Smile Curve 利潤池分佈、自製 Make vs 外購 Buy、交易成本理論 TCE)*
- 📑 **M2-2 產業聚落與地理生態**：[[M2-2_產業聚落與地理生態]]  
  *(波特鑽石模型四大關鍵要素、新竹科學園區與台灣高科技聚落綜效、地理鄰近性與隱性知識外溢效應)*
- 📑 **M2-3 產業價值網與競合分析**：[[M2-3_產業價值網與競合分析]]  
  *(Brandenburger 價值網 Value Net 架構、互補品 Complementors 的正和博弈、PARTS 賽局戰略架構實務)*

##### 🔹 模組三：產業演化與動態轉型 (Module 3, Evolution & Transformation, 2 篇)
- 📑 **M3-1 產業生命週期與技術 S 曲線**：[[M3-1_產業生命週期與技術S曲線]]  
  *(產業生命週期各階段策略取捨、Foster 技術 S 曲線與不連續性、主導設計 Dominant Design 確立與跨越鴻溝 Chasm 模型)*
- 📑 **M3-2 產業發展轉型戰略與全球化動態**：[[M3-2_產業發展轉型戰略與全球化動態]]  
  *(企業轉型雙軌矩陣、破壞式創新防禦機制、全球化地緣政治供應鏈重組、台灣半導體與電子業全球布局戰略)*

##### 🔹 模組四：產業投資策略與實務 (Module 4, Investment Strategies, 3 篇)
- 📑 **M4-1 產業評價與估值基石**：[[M4-1_產業評價與估值基石]]  
  *(相對估值法 P/E、P/B、EV/EBITDA 之產業適用性、絕對估值 DCF 敏感度分析、成長股 PEG 模型與價值股安全邊際)*
- 📑 **M4-2 產業投資策略與資產配置**：[[M4-2_產業投資策略與資產配置]]  
  *(Top-Down 由上而下投資哲學、美林投資時鐘與四象限資產輪動、防禦型 vs 週期型產業配置、產業多空對沖策略)*
- 📑 **M4-3 財務報表與產業績效評析**：[[M4-3_財務報表與產業績效評析]]  
  *(三表穿透式產業對標分析、杜邦五因子拆解各產業 ROE 來源、營運資本管理與自由現金流 FCF 質量檢驗)*

##### 🔹 模組五：實務專題與期末整合 (Module 5, Capstone & Integration, 4 篇)
- 📑 **M5-1 業師講座半導體分析**：[[M5-1_業師講座半導體分析]]  
  *(台灣半導體晶圓代工、IC 設計與先進封裝生態鏈深度拆解、地緣政治與算力基建展望)*
- 📑 **M5-2 業師講座產業投資實務**：[[M5-2_業師講座產業投資實務]]  
  *(機構投資人拜訪調研框架、賣方研究報告解讀、資本市場實戰投研覆盤)*
- 📑 **M5-3 期末報告與論文對接指南**：[[M5-3_期末報告與論文對接指南]]  
  *(PMBA 產業分析期末實戰報告架構、碩士論文研究問題提煉與研究方法適配指引)*
- 📑 **M5-4 全課程總結與決策心法**：[[M5-4_全課程總結與決策心法]]  
  *(全課程 20 篇核心知識晶體串聯、高階經理人產業洞察與戰略決策心法總結)*

---

## 💡 98_商業概念庫 (Commercial Concept Library)

> [!TIP] 🧠 核心商業分析架構與理論卡片精選索引
> 商業概念庫收錄 700+ 份標準原子化卡片，以下為兩門選修課程高頻穿透引用之經典理論與模型索引（均已嚴格核對實體檔名）：

- ⚙️ **戰略分析與競爭結構**：
  - [[PESTEL分析|PESTEL 分析 (PESTEL Framework)]] ｜ [[bo-te-five-forces-analysis_波特五力分析|波特五力分析 (Porter's Five Forces)]] ｜ [[competitive-matrix_競爭矩陣|競爭矩陣 (Competitive Matrix)]] ｜ [[key-success-factors-ksf_關鍵成功因素|關鍵成功因素 (KSF)]] ｜ [[strategic-planning_策略規劃|策略規劃 (Strategic Planning)]] ｜ [[business-ecosystem_商業生態系|商業生態系 (Business Ecosystem)]] ｜ [[platform-envelopment_平台包夾|平台包夾 (Platform Envelopment)]] ｜ [[two-sided-market_雙邊市場|雙邊市場 (Two-Sided Market)]] ｜ [[BCG_Matrix_波士頓矩陣與動態現金流|波士頓矩陣 (BCG Matrix)]] ｜ [[GE_McKinsey_Matrix_通用奇異矩陣|通用奇異矩陣 (GE-McKinsey Matrix)]] ｜ [[TAM|總體潛在市場 (TAM)]] ｜ [[SAM|可服務市場 (SAM)]] ｜ [[SOM|可獲取市場 (SOM)]] ｜ [[forward-integration_前向整合|前向整合 (Forward Integration)]] ｜ [[backward-integration_後向整合|後向整合 (Backward Integration)]] ｜ [[merger-acquisition-integration_併購後整合|併購後整合 (PMI)]] ｜ [[enterprise-m-and-a_企業併購|企業併購 (M&A)]] ｜ [[industry-life-cycle_產業生命週期|產業生命週期 (ILC)]] ｜ [[cyclical-industry_週期性產業|週期性產業 (Cyclical Industry)]] ｜ [[strategic-leadership_策略領導力|策略領導力 (Strategic Leadership)]] ｜ [[VRIO架構|VRIO 資源基礎架構]] ｜ [[SWOT分析|SWOT 與 TOWS 矩陣]] ｜ [[cost-leadership-strategy_成本領導策略|成本領導策略]] ｜ [[differentiation-strategy_差異化策略|差異化策略]] ｜ [[focused-strategy_集中化策略|集中化策略 (隱形冠軍)]] ｜ [[market-leadership-zhe_市場領導者|市場領導者]] ｜ [[market_市場挑戰者|市場挑戰者]] ｜ [[market-2_市場跟隨者|市場跟隨者]] ｜ [[market-niche_市場利基者|市場利基者]] ｜ [[market-concentration_市場集中度|市場集中度 (HHI)]] ｜ [[network-effects_網絡效應|網絡效應 (梅特卡夫定律)]]

- 🚀 **創業創新與行銷管理**：
  - [[Entrepreneurial_Marketing_創業行銷|創業行銷 (Entrepreneurial Marketing)]] ｜ [[Omnihouse_全能屋模型 Omnihouse Model|全能屋模型 (Omnihouse Model)]] ｜ [[Marketing_Creativity_行銷創意生產力|行銷創意生產力 (Marketing Creativity)]] ｜ [[brand-equity_品牌權益|品牌權益 (Brand Equity)]] ｜ [[stay-at-home-economy_宅經濟|宅經濟 (Stay-at-Home Economy)]] ｜ [[cap-table_股權結構表 Cap Table|股權結構表 (Cap Table)]] ｜ [[term-sheet_投資意向書 Term Sheet|投資意向書 (Term Sheet)]] ｜ [[product-life-cycle_產品生命週期|產品生命週期 (PLC)]] ｜ [[corporate-life-cycle_企業生命週期|企業生命週期 (Corporate Life Cycle)]] ｜ [[entrepreneurial-life-cycle_創業生命週期|創業生命週期 (Entrepreneurial Life Cycle)]] ｜ [[situational-leadership-theory_情境領導理論|情境領導 (Situational Leadership)]] ｜ [[transformational-leadership_轉換型領導|轉換型領導 (Transformational Leadership)]] ｜ [[transactional-leadership_交易型領導|交易型領導 (Transactional Leadership)]] ｜ [[servant-leadership_僕人式領導|僕人式領導 (Servant Leadership)]] ｜ [[authentic-leadership_真誠領導|真誠領導 (Authentic Leadership)]] ｜ [[Lewin三階段模型|Lewin 三階段變革模型]] ｜ [[Kotter變革八步驟|Kotter 變革八步驟]] ｜ [[learning-organization_學習型組織|學習型組織 (The Fifth Discipline)]] ｜ [[change-management_變革管理|變革管理 (ADKAR)]] ｜ [[matrix-organization_矩陣型組織|矩陣型組織]] ｜ [[Mintzberg管理者角色|Mintzberg 管理者角色]] ｜ [[POLC職能|POLC 四大職能]] ｜ [[organization-review-mechanism_組織覆盤機制|組織覆盤機制 (AAR)]] ｜ [[MVP最小可行產品|最小可行產品 (MVP)]] ｜ [[customer-development_客戶開發|客戶開發 (Customer Dev)]] ｜ [[customer_顧客體驗旅程|顧客體驗旅程 (CJM)]] ｜ [[STP分析|STP 行銷策略分析]] ｜ [[marketing-myopia_行銷近視症|行銷近視症]] ｜ [[marketing-4p-mix_行銷4P|行銷 4P 與 4C 組合]] ｜ [[customer-brand-equity_顧客基礎品牌權益|品牌權益金字塔 (CBBE)]] ｜ [[customer-loyalty_顧客忠誠度|顧客忠誠度 (NPS)]] ｜ [[brand-strategy_多品牌策略|多品牌架構 (Brand Architecture)]] ｜ [[brand-10_品牌延伸|品牌延伸]] ｜ [[brand-dilution_品牌稀釋|品牌稀釋防禦]] ｜ [[brand-3_品牌識別|品牌識別 (Aaker Model)]] ｜ [[brand-7_聯名品牌|聯名品牌 (Co-branding)]] ｜ [[brand-2_成分品牌|成分品牌 (Ingredient Branding)]] ｜ [[value-proposition_價值主張|價值主張畫布 (VPC)]] ｜ [[perception_知覺圖|知覺定位圖 (Perceptual Map)]]

- 💰 **財務估值與資本市場**：
  - [[EPV_盈餘能力價值模型 Earnings Power Value|盈餘能力價值模型 (EPV)]] ｜ [[SOTP_零件加總估值法 Sum of the Parts|零件加總估值法 (SOTP)]] ｜ [[Backwardation_AI算力逆價差|AI 算力逆價差 (Backwardation)]] ｜ [[dcf_現金流量折現法|現金流量折現法 (DCF)]] ｜ [[wacc_加權平均資本成本|加權平均資本成本 (WACC)]] ｜ [[ROIC_投入資本報酬率 Return on Invested Capital|投入資本報酬率 (ROIC)]] ｜ [[dupont-analysis_杜邦分析法|杜邦分析法 (DuPont Analysis)]] ｜ [[sustainable-growth-rate_永續成長率|永續成長率 (SGR)]] ｜ [[unit-economics-model_單位經濟模型|單位經濟模型 (Unit Economics)]] ｜ [[pvgo_成長機會現值|成長機會現值 (PVGO)]] ｜ [[real-options_實質選擇權|實質選擇權 (Real Options)]] ｜ [[diluted-eps_稀釋後每股盈餘|稀釋後每股盈餘 (Diluted EPS)]] ｜ [[pe-ratio_本益比|本益比 (P/E Ratio)]] ｜ [[davis-double-whammy_戴維斯雙殺效應|戴維斯雙殺 (Davis Double Whammy)]] ｜ [[DOL_營運槓桿|營運槓桿度 (DOL)]] ｜ [[financial-leverage_財務槓桿|財務槓桿度 (DFL)]] ｜ [[degree-of-total-leverage-dtl_總槓桿|總槓桿度 (DTL)]] ｜ [[financial-structure_財務結構|財務結構 (Financial Structure)]] ｜ [[capital-structure_資本結構|資本結構 (Capital Structure)]] ｜ [[theory-7_權衡理論|權衡理論 (Trade-off Theory)]] ｜ [[enterprise-value_企業價值|企業價值 (EV)]] ｜ [[company-value_公司內在價值|公司內在價值 (Company Value)]] ｜ [[dividend-policy_股利政策|股利政策 (Dividend Policy)]] ｜ [[dividend-irrelevance-theory_股利無關論|股利無關論 (Dividend Irrelevance)]] ｜ [[merger-acquisition_併購綜效|併購綜效 (M&A Synergies)]] ｜ [[acquisition-premium_收購溢價|收購溢價 (Acquisition Premium)]] ｜ [[sunk-cost_沉沒成本|沉沒成本 (Sunk Cost)]] ｜ [[opportunity-cost_機會成本|機會成本 (Opportunity Cost)]] ｜ [[cash-flow-statement_現金流量表|現金流量表 (Cash Flow Statement)]] ｜ [[insolvency-with-profit_黑字倒閉|黑字倒閉 (Profitable Insolvency)]] ｜ [[cash-flow-ratio_現金流量比率|現金流量比率 (Cash Flow Ratio)]] ｜ [[cash-pao-dao_現金跑道|現金跑道 (Cash Runway)]] ｜ [[inventory-3_存貨周轉率|存貨周轉率 (ITR)]] ｜ [[total-assets_總資產周轉率|總資產周轉率 (TATR)]] ｜ [[fixed-assets_固定資產周轉率|固定資產周轉率 (FATR)]] ｜ [[interest-coverage-ratio_利息保障倍數|利息保障倍數 (TIE)]] ｜ [[receivable-3_應收帳款周轉率|應收帳款周轉率 (RTR)]] ｜ [[long-term-capital-to-fixed-assets-ratio_長期資金佔不動產廠房及設備比率|長期資金佔固定資產比率]] ｜ [[DER|負債權益比 (DER)]] ｜ [[financial-cost_財務危機成本|財務危機成本 (Altman Z-Score)]] ｜ [[direct-bankruptcy-cost_直接破產成本|直接破產成本]] ｜ [[indirect-bankruptcy-cost_間接破產成本|間接破產成本]] ｜ [[balance-sheet_資產負債表|資產負債表 (Balance Sheet)]] ｜ [[liability-cost_負債成本|負債成本]] ｜ [[off-balance-sheet-liabilities_表外負債|表外負債 (IFRS 16)]] ｜ [[leverage-acquisition_槓桿收購|槓桿收購 (LBO)]] ｜ [[IFRS 15 客戶合約收入|IFRS 15 客戶合約收入]] ｜ [[accounting-equation_會計恆等式|會計恆等式]] ｜ [[risk-return_風險與報酬權衡|CAPM 與證券市場線 (SML)]] ｜ [[internal-rate-of-return-2_修正內部報酬率|修正內部報酬率 (MIRR)]] ｜ [[financial-derivatives_衍生性金融商品|衍生性金融商品]] ｜ [[options_選擇權|選擇權理論 (Black-Scholes)]] ｜ [[risk-management_金融風險管理|金融風險管理 (VaR 模型)]] ｜ [[top-down-investing_由上而下投資法|美林投資時鐘]] ｜ [[alpha-excess-return_超額報酬|超額報酬 (Alpha vs. Beta)]]

- 🌐 **宏觀環境分析與產業格局**：
  - [[macro-environment-analysis_總體環境分析|總體環境分析 (PESTEL)]] ｜ [[macroeconomic-triangle_總體經濟三角|蒙代爾三元悖論 (Trilemma)]] ｜ [[scenario-planning_情境規劃|殼牌情境規劃 (Scenario Planning)]] ｜ [[political-environment_政治環境|政治環境與地緣風險]] ｜ [[economic-environment_經濟環境|經濟環境與景氣循環]] ｜ [[socio-demographic-environment_社會人口環境|社會文化與人口結構]] ｜ [[technological-environment_技術環境|技術環境與 S 曲線]] ｜ [[natural-environment_自然環境|自然環境與氣候風險]] ｜ [[regulatory-environment_法規環境|法規監管與合規治理]] ｜ [[startup-environment_創業環境|新創生態系 (Isenberg 6支柱)]] ｜ [[economic-moat_經濟護城河|經濟護城河 (Morningstar 5來源)]] ｜ [[globalization_全球化|全球化與慢球化 (Slowbalization)]] ｜ [[global-outsourcing_全球外包|全球外包與近岸友岸重組]] ｜ [[industry-analysis_產業分析|產業分析與 SCP 範式]] ｜ [[industry-structure_產業結構|四種市場結構 (完全競爭至獨佔)]] ｜ [[industry-concentration_產業集中度|產業集中度 (CR4 & HHI 指數)]]

- 👥 **組織行為、動機激勵與領導權力**：
  - [[intrinsic-vs-extrinsic-motivation_內在激勵與外在激勵|內在激勵與自我決定論 (SDT)]] ｜ [[achievement-motivation_成就動機|麥克利蘭三大需求理論 (nAch)]] ｜ [[bases-of-social-power_權力基礎|法蘭西與雷文五大權力基礎]] ｜ [[equity-theory_公平理論|亞當斯公平理論與組織正義]] ｜ [[goal-setting-theory_目標設定理論|洛克目標設定理論與 OKR]] ｜ [[path-goal-theory_路徑目標理論|豪斯路徑-目標權變領導]] ｜ [[job-enrichment_工作豐富化|工作豐富化與工作特性模型 (JCM)]] ｜ [[job-satisfaction_工作滿意度|工作滿意度與組織公民行為 (OCB)]] ｜ [[legitimate-power_法定權|法定權與組織權威邊界]] ｜ [[reward-power_獎賞權|獎賞權與激勵相容]] ｜ [[coercive-power_強制權|強制權與恐懼文化火爐原則]] ｜ [[expert-power_專家權|專家權與無權力的影響力]] ｜ [[power-distance_權力距離|霍夫斯泰德權力距離 (PDI)]] ｜ [[job-enlargement_工作擴大化|工作擴大化 (水平擴展)]] ｜ [[job-rotation_工作輪調|工作輪調與通才領導力]] ｜ [[founding-team_創始團隊|創始團隊黃金鐵三角]] ｜ [[entrepreneurship-team_創業家與團隊|創業團隊動態股權成熟 (Vesting)]] ｜ [[startup-team_創業團隊|新創團隊演化 (Tuckman 5階段)]]

- 🛠️ **精實營運、流程再造與品質控制**：
  - [[corporate-process_企業流程再造|企業流程再造 (BPR)]] ｜ [[quality-management_全面品質管理|全面品質管理與六標準差 (TQM)]] ｜ [[process-management_流程管理|流程管理與限制理論 (TOC)]] ｜ [[capacity-expansion_產能擴張|產能擴張時機矩陣]] ｜ [[operational-planning_作業性規劃|作業性規劃與關鍵路徑 (CPM)]] ｜ [[lean-startup_精實創業|精實創業方法論 (Lean Startup)]] ｜ [[control-process_控制流程|管理控制四步閉環]] ｜ [[control-6_前饋控制|前饋控制 (事前預防)]] ｜ [[control_即時控制|即時控制 (豐田安燈系統)]] ｜ [[control-5_回饋控制|回饋控制 (事後覆盤)]] ｜ [[control-7_控制職能|POLC 控制職能雙螺旋]] ｜ [[control-2_控制幅度|控制幅度與組織扁平化]] ｜ [[control-4_官僚控制|官僚控制與科層理性]] ｜ [[control-3_宗族控制|宗族控制與高信任文化 (Netflix)]] ｜ [[internal-control-2_內部控制|COSO 內部控制整合架構]] ｜ [[control-cost_控制成本與效益|控制成本與效益權衡分析]]

- 📊 **會計成本要素、財報分析比率與稅盾價值**：
  - [[income-statement_損益表|綜合損益表結構與盈餘品質分析]] ｜ [[comparative-financial-statement-analysis_比較財務報表分析|比較財務報表分析 (水平/垂直/趨勢)]] ｜ [[common-size-analysis_同型百分比分析|同型百分比分析 (結構性損益拆解)]] ｜ [[cost-of-goods-sold_營業成本|營業成本結構與邊際貢獻]] ｜ [[cost-2_銷貨成本|銷貨成本計量 (COGS & 存貨流轉)]] ｜ [[cost-value_成本與淨變現價值孰低法|成本與淨變現價值孰低法 (LCM 存貨跌價)]] ｜ [[operating-revenue_營業收入|營業收入認列 (IFRS 15 五步法)]] ｜ [[operating-expenses_營業費用|營業費用控管 (SGA & 營運槓桿)]] ｜ [[non-operating-income-expenses_營業外收支|營業外收支與盈餘持續性分析]] ｜ [[rd-expense_研發費用|研發費用資本化 vs 費用化]] ｜ [[rd-expense-ratio_研發費用率|研發費用率與創新強度對標]] ｜ [[bad-debt-expense-ratio_壞帳費用率|壞帳費用率與信用風險減損 (ECL 模型)]] ｜ [[cash-zhe-kou-cost_現金折扣成本|現金折扣隱含年化資金成本 (2/10 net 30)]] ｜ [[cost_等額年成本法|等額年成本法 (EAC 不等年限設備選型)]] ｜ [[financial-2_財務報表附註|財務報表附註與審計暗號穿透]] ｜ [[depreciation-methods_折舊方法|折舊方法與資產攤銷策略 (直線/DDB/數量)]] ｜ [[depreciation-tax-shield_折舊稅盾|折舊稅盾與資本預算現金流效益]] ｜ [[tax-shield_稅盾|企業稅盾總綱與價值創造機制 (MM定理)]] ｜ [[interest-tax-shield_利息稅盾|利息稅盾與負債融資效益 (WACC優化)]] ｜ [[equity-2_權益法|長期股權投資權益法與實質影響力會計]]

- 💡 **創業機會辨識、商業模式驗證與盡職調查**：
  - [[entrepreneurial-opportunity_創業機會|創業機會辨識與機會評價 (Timmons模型)]] ｜ [[entrepreneurship_創業|創業管理本質與組織創業機制 (Stevenson模型)]] ｜ [[entrepreneurship-spirit_創業精神|創業精神維度與創業導向 (EO 5維度)]] ｜ [[entrepreneurship-2_連續創業家|連續創業家認知機制與網絡資本]] ｜ [[entrepreneur-traits_創業者特質|創業者心理特質與效果邏輯 (Effectuation)]] ｜ [[entrepreneurial-capability_創業能力|創業動態能力與新創組織賦能 (Sensing/Seizing/Transforming)]] ｜ [[entrepreneurial-risk_創業風險|創業風險本質與雙重失誤決策 (沉船 vs 錯失良機)]] ｜ [[ideation-process_創意發想|創意發想程序與設計思考價值成型 (雙鑽石模型)]] ｜ [[business-feasibility-analysis_商業可行性分析|商業可行性分析與四維評估框架 (Gatekeeping)]] ｜ [[business-model-validation_商業模式驗證|商業模式驗證與假說驅動精實循環 (Sean Ellis 40%)]] ｜ [[business-model-pivot_商業模式軸轉|商業模式軸轉架構與十種軸轉路徑]] ｜ [[business-growth-stage_興業階段|新創企業生命週期階段與早熟擴張陷阱]] ｜ [[elevator-pitch_電梯簡報|電梯簡報說服架構與高衝擊融資表達 (5步黃金骨架)]] ｜ [[due-diligence_盡職調查|投資盡職調查與全維度風險穿透架構 (QoE/FDD/LDD/CDD)]] ｜ [[enterprise-value-evaluation_企業價值評估|企業價值評估模型與早期新創定價 (VC/Berkus/Scorecard)]] ｜ [[resource-bricolage_資源拼湊|創業資源拼湊理論與逆境破局行動 (Baker & Nelson)]] ｜ [[resource-integration_資源整合|企業資源整合與生態系協同機制 (Sirmon資源編排)]]

- 🏛️ **資本市場結構、金融定價理論與股利學派**：
  - [[capital-market_資本市場|資本市場架構與長期資產配置功能]] ｜ [[market-3_初級市場|初級市場承銷機制與資本形成 (IPO/SPO/競價拍賣)]] ｜ [[market-5_次級市場|次級市場微觀結構與流動性定價 (訂單驅動 vs 報價驅動)]] ｜ [[market-4_貨幣市場|貨幣市場工具運作與流動性調度 (T-Bills/CP/Repo)]] ｜ [[wan-mei-capital-market_完美資本市場|完美資本市場假說與金融基準參照系 (PCM/MM基準)]] ｜ [[convertible-corporate-bonds_可轉換公司債|可轉換公司債評價架構與發行策略 (債底+買權)]] ｜ [[capital-3_資本公積|資本公積會計本質與權益重組限制 (資本維持原則)]] ｜ [[capital_資本利得|資本利得定價機制與股東總報酬拆解 (TSR/戈登模型)]] ｜ [[theory-6_啄食順序理論|啄食順序理論與資訊不對稱融資階梯 (內部>負債>股權)]] ｜ [[theory-4_鳥在手理論|鳥在手理論與股利確定性溢價 (林中二鳥 vs 手中一鳥)]] ｜ [[theory-5_稅差理論|稅差理論與股東客戶群效應 (資本利得避稅優勢)]] ｜ [[theory-3_買賣權平價理論|買賣權平價理論與無套利合成定價 (Put-Call Parity)]] ｜ [[stock-split_股票分割|股票分割機制與微觀流動性信號 (拆股/反向分割)]] ｜ [[treasury-stock_庫藏股票|庫藏股票會計本質與資本回購策略 (股東權益抵銷)]] ｜ [[company-value_公司內在價值|公司內在價值定價邏輯與安全邊際框架 (DCF/巴菲特估值)]] ｜ [[ex-dividend-date_除息交易日|除息交易日機制與稅務除權除息定價 (填息 vs 貼息)]]

---

## 🏷️ 知識庫標籤與導航索引

- **全站主要目錄**：`04_主題選修/10_創業與企業財務策略` ｜ `04_主題選修/12_產業分析與投資策略` ｜ `98_商業概念庫`
- **學程主題標籤**：`#PMBA` `#主題選修` `#創業管理` `#企業財務策略` `#產業分析` `#投資策略` `#商業概念庫` `#DigitalGarden`
