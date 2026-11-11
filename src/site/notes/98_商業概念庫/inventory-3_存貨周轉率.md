---
{"dg-publish":true,"permalink":"/98/inventory-3/","tags":["商業概念","財務比率","營運資金","供應鏈管理","杜邦分析","PMBA"],"dg-note-properties":{"aliases":["存貨周轉率","Inventory Turnover","存貨週轉率","ITR","Inventory Turnover Ratio"],"tags":["商業概念","財務比率","營運資金","供應鏈管理","杜邦分析","PMBA"]}}
---


# 存貨周轉率 (Inventory Turnover Ratio & Working Capital Velocity)

> **【核心決策摘要】**
> **存貨周轉率（Inventory Turnover Ratio, ITR）** 是衡量企業在特定會計期間內，**存貨轉化為銷售收入的循環頻率與庫存去化速度**的最核心營運效率指標。其以**銷貨成本（COGS）除以平均存貨餘額**。存貨周轉率高，代表產品暢銷、資金佔用少、存貨跌價與報廢風險低；周轉率低，則警示企業可能面臨**產品滯銷、存貨跌價損失積累、以及營運資金被庫存吞噬的流動性危機**。存貨周轉率直接決定了[[98_商業概念庫/cash-switching-cycle_現金轉換週期\|現金轉換週期（CCC）]]中的「存貨周轉天數（DSI）」，更是[[98_商業概念庫/dupont-analysis_杜邦分析法\|杜邦分析法]]中「總資產周轉率」的最關鍵驅動因子之一。

---

## 1. 核心公式與計算防呆規範 (Formula & Calculation Rules)

$$\text{Inventory Turnover} = \frac{\text{銷貨成本 (Cost of Goods Sold, COGS)}}{\text{平均存貨 (Average Inventory)}} = \frac{\text{COGS}}{\frac{\text{期初存貨} + \text{期末存貨}}{2}}$$

$$\text{存貨週轉天數 (DSI)} = \frac{365}{\text{Inventory Turnover}} = \frac{\text{平均存貨}}{\text{COGS}} \times 365$$

```
                   ┌─────────────────────────────────────────────────────────┐
                   │             存貨周轉率分子分母正確性對照                │
                   └────────────────────────────┬────────────────────────────┘
                                                ▼
       ┌────────────────────────────────────────┴────────────────────────────────────────┐
       ▼ 正確規範：採用【銷貨成本 (COGS)】     ▼ 常見錯誤：採用【營業收入 (Revenue)】    │
    • 存貨按歷史成本 (Cost) 計價入帳          • 營業收入包含銷售毛利加價 (Mark-up)       │
    • 分子分母計價基礎一致 (Cost-to-Cost)     • 虛增分子，人為誇大周轉率 20%~50%         │
    • 真實反映存貨被實體銷耗的速度            • 扭曲跨產業庫存管理效率比較               │
```

---

## 2. 存貨周轉率高低的雙刃劍權衡 (The Strategic Trade-Off)

| 指標表現 | 戰略優勢 (Pros) | 潛在隱患與代價 (Cons) |
| :--- | :--- | :--- |
| **周轉率極高**<br>(DSI 極短) | • 資金佔用極小，[[net-working-capital_淨營運資金|淨營運資金（NWC）]]極度精簡<br>• 倉儲租金、保險與搬運成本最低<br>• 幾乎零[[inventory-2_存貨跌價損失|存貨跌價損失]]與過期報廢風險 | • 安全庫存不足，隨時面臨缺貨斷供（Stockout）<br>• 失去大批量採購折扣（Volume Discounts）<br>• 緊急追單與急件物流推升運輸成本 |
| **周轉率過低**<br>(DSI 嚴重拉長) | • 現貨供應充足，隨時滿足客戶即時下單<br>• 批量生產壓低單件固定製造費用分攤<br>• 防禦上游原物料通膨漲價之囤貨效益 | • 巨額現金鎖死在倉庫，引發[[insolvency-with-profit_黑字倒閉|黑字倒閉]]<br>• 跌價減損提列重創毛利率<br>• 掩蓋生產排程混亂與品質良率缺陷 |

---

## 3. 關聯概念與延伸閱讀 (Cross References)

- [[inventory-turnover-tian-shu_存貨週轉天數]]：存貨周轉率的天數轉譯指標（DSI）。
- [[inventory-2_存貨跌價損失]]：庫存週轉不靈時之會計減損提列。
- [[cash-switching-cycle_現金轉換週期]]：存貨天數、應收天數與應付天數的現金循環模型。
- [[dupont-analysis_杜邦分析法]]：資產周轉率驅動 ROE 之分解。
- [[home]]：PMBA 知識庫首頁與模組導航。