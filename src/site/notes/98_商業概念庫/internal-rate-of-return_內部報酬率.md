---
{"dg-publish":true,"permalink":"/98/internal-rate-of-return/","tags":["商業概念","資本預算","財務管理","公司理財","PMBA"],"dg-note-properties":{"aliases":["內部報酬率","Internal Rate of Return","IRR","內部收益率"],"tags":["商業概念","資本預算","財務管理","公司理財","PMBA"]}}
---


# 內部報酬率 (Internal Rate of Return, IRR)

> **【核心定義與概念導航】**
> **內部報酬率（Internal Rate of Return, IRR）** 是指使投資專案在未來生命週期內所產生的**全部現金淨流入折現現值總和，剛好等於期初初始投資成本時的折現率**。換言之，IRR 就是**使專案淨現值恰好為零（$\text{NPV} = 0$）的損益平衡折現率**。它代表了專案本質所內生的年化報酬率百分比。

---

## 1. 核心數理模型與決策準則

$$\sum_{t=1}^{T} \frac{\text{CF}_t}{(1 + \text{IRR})^t} - I_0 = 0 \iff \text{NPV}(\text{IRR}) = 0$$

- **決策法則**：
  - 若 $\mathbf{\text{IRR} > \text{WACC}}$（門檻回報率 Hurdle Rate） $\implies$ **接受專案**。
  - 若 $\mathbf{\text{IRR} < \text{WACC}}$ $\implies$ **否決專案**。

---

## 2. IRR 的三大內在缺陷與「費雪交叉點 (Fisher's Rate)」
儘管高階經理人偏好百分比回報率（直觀易溝通），但 IRR 在以下情境中存在致命失真：
1. **再投資報酬率假設缺陷**：IRR 假設專案產生的現金流能以「高昂的 IRR 自身利率」再投資，高估了高報酬專案的真實收益（修正內部報酬率 MIRR 即為解決此缺陷而生）。
2. **多重根問題（Multiple IRRs）**：若專案現金流在生命週期中多次變更正負號（非常規現金流，如礦場中期大規模環境復原支出），IRR 依笛卡爾符號法則將出現多個有效數學解，導致決策無所適從。
3. **互斥專案規模與時間序列排序衝突**：當小專案（投資 1 萬賺 100%）與大專案（投資 1 億賺 40%）互斥時，IRR 會錯誤推薦小專案，而 NPV 則能正確引導選擇為股東創造 4,000 萬財富的大專案。
   - **費雪交叉點（Fisher's Intersection）**：當折現率低於費雪交叉利率時，NPV 與 IRR 出現衝突，經理人必須**無條件服從 NPV 準則**！

---

## 3. 核心概念關聯地圖
- **最高裁判**：[[98_商業概念庫/NPV_淨現值法 _Net Present Value\|NPV_淨現值法 _Net Present Value]] · 排序衝突時的終極裁決準則
- **現金計量**：[[98_商業概念庫/zeng-e-cash-flow_增額現金流量\|zeng-e-cash-flow_增額現金流量]] · 驅動 IRR 方程式求解的底層現金流
- **回本分析**：[[98_商業概念庫/payback-period_回收期間法\|payback-period_回收期間法]] · 資本預算多維評估漏斗
- **全景架構**：[[98_商業概念庫/capital-budgeting_資本預算\|capital-budgeting_資本預算]] · 資本預算決策工具全景圖譜
- **導航總覽**：[[home\|home]] · 全球 PMBA 知識庫總導航主頁面