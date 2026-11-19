---
{"dg-publish":true,"permalink":"/98/npv-net-present-value/","tags":["商業概念","資本預算","財務管理","企業評價","PMBA"],"dg-note-properties":{"aliases":["淨現值法","Net Present Value","NPV","淨現值準則","NPV Rule"],"tags":["商業概念","資本預算","財務管理","企業評價","PMBA"]}}
---


# 淨現值法 (Net Present Value, NPV)

> **【核心決策摘要】**
> **淨現值法（Net Present Value, NPV）** 是現代金融學與公司理財中**至高無上、無可撼動的資本預算與投資決策黃金標準**。其定義為：**投資專案在未來生命週期內所產生的全部增額現金淨流入，經過專案風險相應的資本成本（WACC）折現後的現值總額，減去期初初始投資成本後的淨差額**。淨現值直接衡量了採納該專案將為企業股東**創造的絕對財富增量（Absolute Wealth Creation）**。淨現值法具備「價值可加性（Value Additivity）」與「符合股東財富最大化目標」的完美數學性質，徹底碾壓並超越了回收期間法（PBP）與內部報酬率法（IRR）的內在缺陷。

---

## 1. 核心數理模型與決策法則 (The NPV Rule)

$$\text{NPV} = \sum_{t=1}^{T} \frac{\text{CF}_t}{(1 + k)^t} - I_0$$

其中：
- $\text{CF}_t$：第 $t$ 期之[[98_商業概念庫/zeng-e-cash-flow_增額現金流量\|增額現金流量]]。
- $k$：該專案相應風險調整後的要求回報率（[[98_商業概念庫/wacc_加權平均資本成本\|wacc_加權平均資本成本]]）。
- $I_0$：期初初始資本支出與營運資金投資。
- $T$：專案預期經濟存續年限。

### 1.1 經理人決策準則（The NPV Decision Rule）
- **獨立專案（Independent Projects）**：
  - $\mathbf{\text{NPV} > 0}$：**堅決接受**（專案收益率超越資本成本，為股東創造超額財富）。
  - $\mathbf{\text{NPV} < 0}$：**堅決否決**（專案收益率低於資金成本，將摧毀企業實體價值）。
  - $\mathbf{\text{NPV} = 0}$：**損益平衡**（專案回報剛好等於資本成本，不增不減股東價值）。
- **互斥專案（Mutually Exclusive Projects）**：
  - 在所有 $\text{NPV} > 0$ 的備選專案中，**無條件選擇 $\text{NPV}$ 絕對金額最大的專案**（而非 IRR 最高或回本最快的專案）。

---

## 2. 為什麼 NPV 是唯一的完美裁判？四大理論支柱
1. **考慮了全部現金流**：絕不武斷設定截斷點（徹底消除 [[98_商業概念庫/payback-period_回收期間法\|payback-period_回收期間法]] 的 Cut-off Bias）。
2. **充分反映貨幣時間價值與風險定價**：每一期的現金流皆按市場資本成本 $k$ 進行嚴格貼現。
3. **價值可加性（Value Additivity）**：$\text{NPV}(A + B) = \text{NPV}(A) + \text{NPV}(B)$。企業可以獨立評估各事業部專案，合併後的總價值剛好等於各專案 NPV 之和。這是 IRR 所完全不具備的優良性質。
4. **真實的再投資假設**：NPV 假設未來的現金流再投資於企業的「資本成本 WACC」（務實合理）；而 IRR 盲目假設未來現金流能以極高的「專案 IRR 本身」再投資（嚴重脫離現實）。

---

## 3. 核心概念關聯地圖
- **核心計量**：[[98_商業概念庫/zeng-e-cash-flow_增額現金流量\|zeng-e-cash-flow_增額現金流量]] · 輸入 NPV 模型的純淨現金流來源
- **資本成本**：[[98_商業概念庫/wacc_加權平均資本成本\|wacc_加權平均資本成本]] · NPV 折現公式中的分母折現率基準
- **回本對照**：[[98_商業概念庫/discounted-payback-period_折現回收期間法\|discounted-payback-period_折現回收期間法]] · 折現回本期與 NPV > 0 之等價定理
- **方法對抗**：[[98_商業概念庫/internal-rate-of-return_內部報酬率\|internal-rate-of-return_內部報酬率]] · 費雪交叉點下 NPV 與 IRR 的排序衝突
- **全景架構**：[[98_商業概念庫/capital-budgeting_資本預算\|capital-budgeting_資本預算]] · 資本預算決策全景導航
- **導航總覽**：[[home\|home]] · 全球 PMBA 知識庫總導航主頁面