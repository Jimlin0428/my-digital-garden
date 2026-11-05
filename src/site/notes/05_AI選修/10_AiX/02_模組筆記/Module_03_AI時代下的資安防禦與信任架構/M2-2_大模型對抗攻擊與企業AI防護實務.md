---
{"dg-publish":true,"permalink":"/05-ai/10-ai-x/02/module-03-ai/m2-2-ai/","tags":["對抗攻擊","紅隊演練","企業防禦","TrustworthyAI"],"dg-note-properties":{"類別":"課程筆記","課程名稱":"[[05_AI選修/10_AiX/_AiX MOC|AiX 課程總覽]]","模組編號":"Module 2","模組名稱":"AI時代下的資安防禦與信任架構","章節編號":"M2-2","主題":"大模型對抗攻擊與企業AI防護實務 (Adversarial Attacks & Enterprise AI Defense)","對應週次":"Week 5 (2026-10-13)","狀態":"🟢 已完成","tags":["對抗攻擊","紅隊演練","企業防禦","TrustworthyAI"]}}
---


# M2-2 大模型對抗攻擊與企業AI防護實務

> [!abstract] 導讀與對接
> - **上級地圖**：[[05_AI選修/10_AiX/_AiX MOC\|_AiX MOC]]
> - **進度看板**：[[05_AI選修/10_AiX/00_課程導航與進度/progress_📊 課程與筆記進度追蹤\|progress_📊 課程與筆記進度追蹤]]
> - **核心概念庫**：[[98_商業概念庫/ai-red-teaming_AI紅隊演練與安全評估\|AI_Red_Teaming_AI紅隊演練與安全評估]]、[[98_商業概念庫/Prompt_Injection_提示詞注入與越獄防護\|Prompt_Injection_提示詞注入與越獄防護]]
> - **實務案例**：[[05_AI選修/10_AiX/01_AI技術與實務案例庫/Case_Security_LLM越獄與提示詞注入攻擊實務\|Case_Security_LLM越獄與提示詞注入攻擊實務]]

---

## 🎯 1. 越獄攻擊技術 (Jailbreaking Techniques)

- **情境虛構與角色扮演 (Role-playing / DAN)**：指令誘導模型扮演「不受倫理拘束的無限制實體」。
- **密碼學與編碼混淆 (Base64 / ROT13 / 多語言切換)**：利用低資源語言或編碼繞過模型內建的安全過濾器。
- **對抗後綴 (Adversarial Suffixes - GCG 攻擊)**：透過演算法生成特定的無意義字元後綴，直接操控模型底層權重激活，高概率破壞防線。

---

## ⚔️ 2. AI 紅隊演練 (AI Red Teaming) 機制

企業上線關鍵 AI 系統前，必須組織攻防演練：
1. **設定威脅邊界**：定義系統的資產敏感級別（HR 資料、客戶金融帳戶、智慧財產代碼）。
2. **模擬攻擊情境**：
   - 模擬內部員工嘗試提取薪資機密。
   - 模擬外部黑客利用客服 Agent 觸發未授權退款。
3. **安全漏洞評估與修補**：依 CVSS-AI 風險等級修復提示詞防護層與 API 授權邊界。

---

## 🛡️ 3. 企業建置信任架構 (Trust & Safety Framework)

- **最小權限原則 (Least Privilege)**：Agent 只賦予特定只讀或白名單操作。
- **Dual-LLM 架構**：主模型負責生成，第二個審計模型 (Guard LLM) 專責監控與即時攔截違規輸出。
- **完整審計日誌 (Audit Trail)**：記錄完整的 Prompt、思考過程 (CoT) 與外部工具呼叫紀錄，以供鑑識與追溯。
