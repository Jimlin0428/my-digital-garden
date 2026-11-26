---
{"dg-publish":true,"permalink":"/98/cash-pao-dao/","tags":["商業概念","新創融資","流動性管理","現金燃燒率","財務規劃","PMBA"],"dg-note-properties":{"aliases":["現金跑道","Cash Runway","跑道長度","現金燃燒期","Runway"],"tags":["商業概念","新創融資","流動性管理","現金燃燒率","財務規劃","PMBA"]}}
---


# 現金跑道 (Cash Runway & Burn Rate Architecture)

> **【核心決策摘要】**
> **現金跑道（Cash Runway）** 是創業投資（VC）、新創企業（Startups）與高成長虧損公司在財務規劃與流動性管理中最重要的**生存倒數計時指標**。現金跑道衡量在**沒有任何新增外部股權融資或債務借貸注入的前提下，企業依靠帳面上現有的現金及約當現金儲備，還能以當前的「淨現金燃燒率（Net Burn Rate）」維持正常運營多少個月**。在創業財務決策中，**6 個月為極端危險的破產警戒線**，**12 至 18 個月則為標準的安全健康跑道**。管理層必須嚴格監控跑道長度，並在跑道剩下 6~9 個月時即刻啟動下一輪融資或斷然推動組織精簡（RIF）以延長跑道。

---

## 1. 核心計算公式與變數解構 (Formula & Components)

$$\text{Cash Runway (Months)} = \frac{\text{現有可用現金及約當現金 (Cash \& Cash Equivalents)}}{\text{每月淨現金燃燒率 (Monthly Net Burn Rate)}}$$

其中：
$$\text{Monthly Net Burn Rate} = \text{每月現金總支出 (Gross Burn)} - \text{每月現金總收入 (Cash Inflows)}$$

```mermaid
flowchart TD
    classDef c_blue fill:#1e3a5f,stroke:#60a5fa,stroke-width:2px,color:#ffffff;
    classDef c_green fill:#143823,stroke:#4ade80,stroke-width:2px,color:#ffffff;
    classDef c_amber fill:#3d2806,stroke:#fbbf24,stroke-width:2px,color:#ffffff;
    classDef c_purple fill:#3b1d54,stroke:#c084fc,stroke-width:2px,color:#ffffff;
    classDef c_red fill:#5c1d24,stroke:#f87171,stroke-width:2px,color:#ffffff;
    N0_0["現金跑道生存光譜與預警線"]:::c_blue
```

---

## 2. 延長現金跑道的四大戰略槓桿 (Extending the Runway)

當外部融資環境降溫（資本寒冬）時，CEO 必須在跑道跌破警戒線前主動拉動四大槓桿：

1. **精簡非核心專案與人力成本（RIF / Cost Rationalization）**：
   人事成本通常佔新創企業每月 Gross Burn 的 60%~70%。及時凍結招聘、合併重複職能、裁撤無法在短期內驗證市場需求的邊緣專案。
2. **加速營收變現與縮短收款期（Aggressive Cash Collection）**：
   對給予即時現金付訖的客戶提供 3%~5% 的現金折扣；將年訂閱制客戶的付款條件由月付改為年繳預付，換取即時大額現金注入。
3. **推遲非必要資本支出（Defer Non-Essential CapEx）**：
   轉向輕資產運營模式，將自建伺服器改為雲端按需計費（AWS/Azure），租賃辦公設備而非買斷。
4. **過渡性融資安排（Bridge Loan / SAFE / Convertible Notes）**：
   在正式大輪次股權融資到位前，向既有股東爭取可轉換公司債或未來股權簡單協議（SAFE），爭取 3 至 6 個月的關鍵時間窗口。

---

## 3. 關聯概念與延伸閱讀 (Cross References)

- [[98_商業概念庫/insolvency-with-profit_黑字倒閉\|insolvency-with-profit_黑字倒閉]]：跑道斷裂引發的致命流動性休克。
- [[98_商業概念庫/cash-flow-statement_現金流量表\|cash-flow-statement_現金流量表]]：新創生命週期中 OCF 為負、仰賴 FCF 續命的特徵。
- [[98_商業概念庫/cash-budget_現金預算\|cash-budget_現金預算]]：每月與每週滾動監控現金燃燒與跑道精確度的工具。
- [[98_商業概念庫/cash-ratio_現金比率\|cash-ratio_現金比率]]：極限抗風險的現金儲備比例。
- [[98_商業概念庫/sustainable-growth-rate_永續成長率\|sustainable-growth-rate_永續成長率]]：新創高速擴張超越自身造血能力的約束模型。
- [[home\|home]]：PMBA 知識庫首頁與模組導航。