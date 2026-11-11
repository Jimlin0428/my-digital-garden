---
{"dg-publish":true,"permalink":"/98/discounted-cash-flow/","tags":["商業概念","財務估值","折現現金流","貨幣時間價值","公司理財","PMBA"],"dg-note-properties":{"aliases":["折現現金流量","Discounted Cash Flow","DCF 模型"],"tags":["商業概念","財務估值","折現現金流","貨幣時間價值","公司理財","PMBA"]}}
---


# 折現現金流量 (Discounted Cash Flow, DCF)

> **【核心導流與概念摘要】**
> **折現現金流量（Discounted Cash Flow, DCF）** 是公司財務與資本市場中最核心的內在價值（Intrinsic Value）評價方法。其核心哲學奠基於「**任何資產的內在價值，均等於其在未來存續期間內所能產生的所有自由現金流量，以反映該現金流風險之適當折現率（WACC 或必要報酬率）折算至今日的現值總和**」。
>
> 完整深入的 DCF 理論推導、FCFF/FCFE 兩階段模型、終值（Terminal Value）計算與敏感度分析，請直接參閱旗艦核心卡片：
> 🔗 **[[98_商業概念庫/dcf_現金流量折現法\|DCF 現金流量折現法 (Discounted Cash Flow Analysis)]]**

---

## 核心通則公式

$$V_0 = \sum_{t=1}^N \frac{\text{CF}_t}{(1 + r)^t} + \frac{\text{Terminal Value}_N}{(1 + r)^N}$$

- $\text{CF}_t$：未來第 $t$ 期的預期現金流量（企業自由現金流 FCFF 或股權自由現金流 FCFE）。
- $r$：反映投資風險的機會成本折現率（通常為加權平均資本成本 [[98_商業概念庫/wacc_加權平均資本成本\|WACC]] 或權益成本 $K_e$）。
- $\text{Terminal Value}$：預測期後之永續年金終值，依戈登模型（Gordon Growth Model）計算：$TV_N = \frac{\text{CF}_{N+1}}{r - g}$。

---

## 關聯概念與延伸閱讀
- [[98_商業概念庫/dcf_現金流量折現法\|dcf_現金流量折現法]]：完整 DCF 估值體系、兩階段模型與高階實務。
- [[98_商業概念庫/enterprise-free-cash-flow-liang_企業自由現金流量\|enterprise-free-cash-flow-liang_企業自由現金流量]]：DCF 估值之核心分子。
- [[98_商業概念庫/wacc_加權平均資本成本\|wacc_加權平均資本成本]]：DCF 估值之核心分母折現率。
- [[98_商業概念庫/NPV_淨現值法 _Net Present Value\|NPV_淨現值法 _Net Present Value]]：DCF 哲學在專案資本預算決策之應用。
- [[home\|home]]：PMBA 知識庫首頁與模組導航。