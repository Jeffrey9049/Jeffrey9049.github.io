Lan-Jun Jeffrey Chang 學術網站 — Sign Language Recognition 展示更新
==========================================================

網站入口：https://jeffrey9049.github.io/

這次的更新：
1. sign-language.html：新增「Online Recognition System」研究展示區塊，連到
   https://tsl-collective.comljchang.chatgpt.site/recognize
2. software.html：兩套 Windows APP 標示輕量化、CPU-friendly、不需獨立顯示卡。
3. landmark-studio.html、ml-studio.html：加強硬體需求與無程式背景使用者的設計理念。
4. software-links.js：已直接填入您提供的兩個 GitHub Releases EXE 下載網址：
   Landmark Studio 1.1.2
   https://github.com/Jeffrey9049/Jeffrey9049.github.io/releases/download/V1.1.2/CCU-Sign-Language-Landmark-Extractor-Portable-1.1.2.exe
   Sign Language ML Studio 0.7.0
   https://github.com/Jeffrey9049/Jeffrey9049.github.io/releases/download/v0%2C4%2C1/CCU-Sign-Language-ML-Studio-Portable-0.7.0.exe
5. styles.css：新增辨識系統介紹的版面樣式。

【如何上線】
1. 將 ZIP 解壓縮。
2. 開啟 https://github.com/Jeffrey9049/Jeffrey9049.github.io
3. 按 Add file → Upload files。
4. 把解壓縮資料夾「裡面」的所有檔案上傳到 Repository 根目錄，覆蓋原本同名檔案。
5. Commit changes；GitHub Pages 部署後檢查：
   https://jeffrey9049.github.io/sign-language.html#recognition-demo
   https://jeffrey9049.github.io/software.html
   https://jeffrey9049.github.io/landmark-studio.html
   https://jeffrey9049.github.io/ml-studio.html

【後續維護】
- 兩個 EXE 下載連結都由 software-links.js 統一控制。
- 手語線上辨識系統是「研究展示」，不在 software-links.js。
  它的網址直接寫在 sign-language.html 的 Online Recognition System 區塊。
- 下載連結均依照您提供的公開網址設定，這次未能從外部確認下載伺服器可用性。
- 輕量化、免獨立 GPU 是設計定位；實際執行速度依 CPU、影片解析度、資料量等而不同。
- 本 ZIP 包含靜態網站檔案與圖片，不含 EXE 本體；下載會連到 GitHub Releases。
- 未公開研究原始碼、私人影片或研究資料不應放進公開 Repository。
