---
{"dg-publish":true,"permalink":"/98/sustainable-growth-rate/","tags":["商業概念","財務管理","公司理財","成長戰略","PMBA"],"dg-note-properties":{"aliases":["永續成長率","Sustainable Growth Rate","SGR","內生可持續成長率","希金斯成長模型"],"tags":["商業概念","財務管理","公司理財","成長戰略","PMBA"]}}
---


# 永續成長率 (Sustainable Growth Rate, SGR)

> **【核心決策摘要】**
> **永續成長率（Sustainable Growth Rate, SGR）** 是由美國財務學者羅伯特·希金斯（Robert C. Higgins）提出的經典量化模型，定義為：**在「不增發新股以稀釋股權（No Equity Dilution）」且「維持現有財務槓桿（資本結構）與營運效率不變」的嚴格前提下，企業完全依賴內部盈餘累積所能支撐的最大年銷售營收成長率**。SGR 揭示了企業財務政策與策略增長之間的微觀動態平衡。當企業的實際營收成長率遠高於 SGR 時，企業將陷入嚴重的**「成長失血陷阱（Overtrading）」**；反之若實際成長率遠低於 SGR，則代表**「資本效率低下與現金沉澱」**。

---

## 1. 核心數理模型與杜邦拆解 (Mathematical Modeling & DuPont Linkage)

### 1.1 希金斯 SGR 經典計算公式

$$\text{SGR} = \text{ROE} \times b = \text{ROE} \times (1 - \text{Payout Ratio})$$

考慮期初權益基數的精準動態公式為：

$$\text{SGR} = \frac{\text{ROE} \times b}{1 - \text{ROE} \times b}$$

其中：
- $\text{ROE}$：股東權益報酬率（Return on Equity）。
- $b$：保留盈餘率（Retention Ratio），即 $1 - \text{股利發放率 (Dividend Payout Ratio)}$。

### 1.2 杜邦分析法四驅模型（The 4 Drivers of SGR）
將 ROE 透過杜邦分析法拆解為營運效率、資產利用與財務政策四大維度：

$$\text{SGR} = \underbrace{\frac{\text{Net Income}}{\text{Sales}}}_{\text{淨利率 (Profitability)}} \times \underbrace{\frac{\text{Sales}}{\text{Assets}}}_{\text{資產周轉率 (Efficiency)}} \times \underbrace{\frac{\text{Assets}}{\text{Equity}}}_{\text{權益乘數 (Leverage)}} \times \underbrace{(1 - \text{PR})}_{\text{留存政策 (Plowback)}}$$

```
                          ┌────────────────────────────┐
                          │   驅動永續成長率的四大槓桿 │
                          └─────────────┬──────────────┘
                                        ▼
    ┌───────────────────┬───────────────┴───────────────┬───────────────────┐
    ▼                   ▼                               ▼                   ▼
【1. 營業淨利率】       【2. 總資產周轉率】             【3. 財務槓桿乘數】 【4. 盈餘留存率】
 • 產品定價權與成本控制  • 供應鏈與營運資金周轉速度      • 舉債容量與財務結構  • 股利政策與分紅決策
 • 改善路徑：價值定位    • 改善路徑：精益生產、縮短CCC   • 改善路徑：適度舉債  • 改善路徑：降低配息率
```

---

## 2. 實戰動態失衡診斷與經理人治理對策 (Managing Growth Imbalances)

```mermaid
flowchart TD
    A["實際銷售成長率 (Actual Growth, g) vs. 永續成長率 (SGR)"] --> B{"對比診斷結果"}
    B -->|實際成長 g >> SGR (高速失血過熱)| C["【現金赤字危機：Overtrading】<br>營運資金追加與固定資產投資耗盡現金"]
    B -->|實際成長 g << SGR (增長遲緩滯脹)| D["【資本過剩危機：Cash Trapped】<br>大量充沛現金無處可去，拖累 ROE"]

    C --> E["管理對策：<br>1. 降低配息率 (提高盈餘留存 b)<br>2. 提高定價以擴大利潤率<br>3. 外包非核心製造以加速資產周轉<br>4. 增發新股或提高負債槓桿"]
    D --> F["管理對策：<br>1. 大幅提高股息發放率或庫藏股買回<br>2. 尋找高潛力正 NPV 併購標的<br>3. 償還昂貴債務優化資本結構"]
```

---

## 3. 核心概念關聯地圖
- **股利聯動**：[[dividend-payout-ratio_股利發放率]] · 決定留存比例 $b$ 的直接源頭
- **核心政策**：[[dividend-policy_股利政策]] · 企業平衡增長與股東現金回報的頂層框架
- **盈利驅動**：[[dupont-analysis_杜邦分析法]] · 拆解 ROE 對 SGR 的底層運作機制
- **資本結構**：[[capital-structure_資本結構]] · 負債權益乘數對成長上限的調控
- **導航總覽**：[[home]] · 全球 PMBA 知識庫總導航主頁面