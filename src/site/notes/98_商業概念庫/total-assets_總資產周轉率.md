---
{"dg-publish":true,"permalink":"/98/total-assets/","tags":["商業概念","財務比率","杜邦分析","資產效率","經營效能","PMBA"],"dg-note-properties":{"aliases":["總資產周轉率","Total Asset Turnover","總資產週轉率","TAT","杜邦分析周轉率"],"tags":["商業概念","財務比率","杜邦分析","資產效率","經營效能","PMBA"]}}
---


# 總資產周轉率 (Total Asset Turnover & DuPont Efficiency Architecture)

> **【核心決策摘要】**
> **總資產周轉率（Total Asset Turnover, TATR）** 是公司理財中衡量企業**整體資產規模（包含全部流動資產與長期固定資產）轉化為營業收入的綜合營運效率指標**。其計算方式為以**營業收入除以平均資產總額**。總資產周轉率是世界級財務分析範式——**[[98_商業概念庫/dupont-analysis_杜邦分析法\|杜邦分析法（DuPont Analysis）]]的三大核心支柱之一**。總資產周轉率揭示了企業在特定商業模式下的「資產吸水程度與變現節奏」，成功界定出「**薄利多銷型（高周轉、低毛利）**」與「**高毛利寡售型（低周轉、高毛利）**」兩種截然不同的商業競爭哲學。

---

## 1. 核心公式與杜邦三因子架構 (Formula & DuPont Decomposition)

$$\text{Total Asset Turnover} = \frac{\text{營業收入 (Revenue)}}{\text{平均資產總額 (Average Total Assets)}} = \frac{\text{Revenue}}{\frac{\text{期初資產} + \text{期末資產}}{2}}$$

```mermaid
flowchart TD
    classDef c_blue fill:#1e3a5f,stroke:#60a5fa,stroke-width:2px,color:#ffffff;
    classDef c_green fill:#143823,stroke:#4ade80,stroke-width:2px,color:#ffffff;
    classDef c_amber fill:#3d2806,stroke:#fbbf24,stroke-width:2px,color:#ffffff;
    classDef c_purple fill:#3b1d54,stroke:#c084fc,stroke-width:2px,color:#ffffff;
    classDef c_red fill:#5c1d24,stroke:#f87171,stroke-width:2px,color:#ffffff;
    N0_0["杜邦分析法 （DuPont Analysis） 三大支柱核心公式<br/>股東權益報酬率 （ROE） = 淨利率 （Margin） × 總資產周轉率 （TAT） × 權益乘數 （EM）<br/>$$\frac{\text{Net Income}}{\text{Equity}} = \frac{\text{Net Income}}{\text{Revenue}} \times \frac{\text{Revenue}}{\text{Assets}} \times \frac{\text{Assets}}{\text{Equity}}$$<br/>• 支柱 1：淨利率 （Profit Margin） ──▶ 反映【產品定價權與成本控制力】<br/>• 支柱 2：總資產周轉率 （Asset Turnover） ──▶ 反映【資產運用效率與營運節奏】<br/>• 支柱 3：權益乘數 （Equity Multiplier） ──▶ 反映【財務槓桿與資本結構】"]:::c_blue
```

---

## 2. 兩種極致商業模式對照：薄利多銷 vs. 暴利低周轉 (Business Models)

| 商業模式類型 | 總資產周轉率 (TAT) | 銷售淨利率 (Margin) | 代表企業與產業 | 核心競爭優勢 |
| :--- | :---: | :---: | :--- | :--- |
| **薄利多銷型**<br>(High Turnover, Low Margin) | **極高**<br>($2.0 \sim 3.5$) | **極低**<br>($2\% \sim 5\%$) | **Costco、沃爾瑪、鴻海富士康** | 極致供應鏈效率、高坪效、零庫存滯留、規模經濟採購 |
| **高毛利寡售型**<br>(Low Turnover, High Margin) | **偏低**<br>($0.4 \sim 0.8$) | **極高**<br>($25\% \sim 40\%$) | **愛馬仕 (Hermès)、法拉利、微軟** | 無可替代的品牌光環、專利技術壟斷、高客戶轉換成本 |

---

## 3. 關聯概念與延伸閱讀 (Cross References)

- [[98_商業概念庫/dupont-analysis_杜邦分析法\|dupont-analysis_杜邦分析法]]：總資產周轉率之母架構。
- [[98_商業概念庫/inventory-3_存貨周轉率\|inventory-3_存貨周轉率]]：流動資產周轉核心子指標。
- [[98_商業概念庫/fixed-assets_固定資產周轉率\|fixed-assets_固定資產周轉率]]：長期資產周轉核心子指標。
- [[98_商業概念庫/sustainable-growth-rate_永續成長率\|sustainable-growth-rate_永續成長率]]：周轉率提升對永續成長率 SGR 的乘數效應。
- [[home\|home]]：PMBA 知識庫首頁與模組導航。