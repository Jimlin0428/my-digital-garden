---
{"dg-publish":true,"permalink":"/05-ai/10-ai-x/01-ai/case-legal-ai/","tags":["案例研究","智財訴訟","FairUse","合規風險"],"dg-note-properties":{"類別":"實務案例","課程名稱":"[[05_AI選修/10_AiX/_AiX MOC|AiX 課程總覽]]","案例編號":"Case-03","主題":"生成式 AI 訓練資料合理使用與著作權商業訴訟判例 (Generative AI Copyright Lawsuit Analysis)","對應模組":"Module 3","對應章節":"[[M3-1_生成式AI智慧財產權與著作權爭議解析]]、[[M3-2_企業AI責任歸屬、資料合規與監管框架]]","狀態":"🟢 已完成","tags":["案例研究","智財訴訟","FairUse","合規風險"]}}
---


# Case 3: 生成式 AI 訓練資料合理使用與著作權商業訴訟判例

> [!abstract] 導讀與對接
> - **上級地圖**：[[05_AI選修/10_AiX/_AiX MOC\|_AiX MOC]]
> - **關聯筆記**：[[05_AI選修/10_AiX/02_模組筆記/Module_04_AI應用之法律、倫理與合規治理/M3-1_生成式AI智慧財產權與著作權爭議解析\|M3-1_生成式AI智慧財產權與著作權爭議解析]]、[[05_AI選修/10_AiX/02_模組筆記/Module_04_AI應用之法律、倫理與合規治理/M3-2_企業AI責任歸屬、資料合規與監管框架\|M3-2_企業AI責任歸屬、資料合規與監管框架]]
> - **核心概念**：[[98_商業概念庫/Copyright_AI_生成式AI著作權與侵權判定\|Copyright_AI_生成式AI著作權與侵權判定]]、[[98_商業概念庫/AI_Governance_企業AI治理與風險框架\|AI_Governance_企業AI治理與風險框架]]

---

## ⚖️ 1. 指標訴訟案例：New York Times vs. OpenAI & Microsoft

紐約時報（NYT）於美國聯邦法院起訴 OpenAI 與微軟，指控其未經許可爬取數百萬篇版權新聞文章用於模型訓練。
- **原告主張 (NYT)**：
  1. OpenAI 實施了未經授權的大規模複製（Direct Copyright Infringement）。
  2. 透過特定提示詞，ChatGPT 能逐字輸出（Memorization & Regurgitation）整篇付費牆內的報導，直接瓜分了 NYT 訂閱市場。
- **被告抗辯 (OpenAI)**：
  1. 模型訓練屬於「轉化性使用 (Transformative Fair Use)」，目的在於學習語言結構與概念，而非複製品傳播。
  2. 逐字輸出屬於罕見的對抗性提示詞誘導（Prompt Hack），不代表正常使用行為。

---

## 🏛️ 2. 司法裁判焦點與商業影響

- **市場替代效應 (Market Substitution)**：若 AI 輸出直接取代原著之商業市場，合理使用抗辯極難成立。
- **授權協議風潮 (Licensing Agreements)**：訴訟爆發後，引發了大型科技巨頭（如 OpenAI、Google）與出版商（如 Axel Springer、News Corp、Reddit）的大規模內容授權簽約潮。

---

## 📋 3. 企業決策者合規指引

1. **資料清洗與來源合法性審查**：企業微調自有大模型時，必須保存訓練資料之合法授權證明或開源商用授權 (Apache 2.0 / MIT)。
2. **檢索增強生成 (RAG) 之版權邊界**：RAG 快取與索引企業內部文檔合法，但對外部公開網頁進行爬取索引時，須遵守 `robots.txt` 與網站服務條款 (ToS)。
3. **商業保證條款 (IP Indemnification)**：選購企業版 AI 軟體時，應優先選擇具備侵權法律補償保障的供應商。
