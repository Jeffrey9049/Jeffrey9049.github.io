Lan-Jun Jeffrey Chang — 學術網站雙語軟體下載更新（2026-11-18）
====================================================

這份網站版本以 Cloudflare Web Analytics 已啟用的版本為基礎，沒有加入先前討論但決定不採用的瀏覽器自我排除功能。

【更新重點】
- Landmark Studio 更新為 v1.2.0，Windows 英文版、繁體中文版各一個下載入口。
- Sign Language ML Studio 更新為 v0.8.0，Windows 英文版、繁體中文版各一個下載入口。
- 已同步修改 Software、Sign Language 與兩個獨立的軟體介紹頁。
- 保留 Taiwan Sign Language Recognition 線上展示、CV/學術資訊、個人照片、LinkedIn、Email、Cloudflare Web Analytics。
- 下載網址直接寫入 HTML，JavaScript 也會從 software-links.js 更新網址。即使 JavaScript 被封鎖，按鈕也能使用本版所附的下載網址。

【四個下載來源】
Landmark Studio v1.2.0 — English:
https://github.com/Jeffrey9049/Jeffrey9049.github.io/releases/download/2/SignLanguage-Landmark--1.2.0.exe
Landmark Studio v1.2.0 — 繁體中文:
https://github.com/Jeffrey9049/Jeffrey9049.github.io/releases/download/V1.1.2/Landmarkzh-1.2.0.exe
Sign Language ML Studio v0.8.0 — English:
https://github.com/Jeffrey9049/Jeffrey9049.github.io/releases/download/1/SignLanguage-ML-0.8.0.exe
Sign Language ML Studio v0.8.0 — 繁體中文:
https://github.com/Jeffrey9049/Jeffrey9049.github.io/releases/download/v0%2C4%2C1/mlzh-0.8.0.exe

【快速更新網站】
1. 解壓縮 ZIP，進入解壓縮資料夾。
2. 在 https://github.com/Jeffrey9049/Jeffrey9049.github.io 點 Add file → Upload files。
3. 將資料夾「內部」的網站檔案拖入 Repository 根目錄，覆蓋同名檔案，Commit changes。
4. 等 Pages 更新後，確認：
   https://jeffrey9049.github.io/software.html
   https://jeffrey9049.github.io/landmark-studio.html#download
   https://jeffrey9049.github.io/ml-studio.html#download
   https://jeffrey9049.github.io/sign-language.html#software

【如果只上傳修改的檔案】
software.html / sign-language.html / landmark-studio.html / ml-studio.html /
software-links.js / software-buttons.js / styles.css

【未來要更新版本或下載連結】
建議同時修改 software-links.js 的版本號及 URL。HTML 裡也保留當時發布版本的可直接下載連結作備援，未來更新版本可同步替換 HTML 連結。

【注意】
- GitHub Releases 上的檔案是使用你提供的網址，不保證遠端伺服器已能成功提供檔案；請實際點擊下載確認。
- 保留了網址中的大小寫、雙連字號與 %2C（逗號編碼），切勿直接改寫 Release 標籤。
- 不需獨立 GPU 是工具的設計目標；實際效果仍取決於電腦配備與資料量。
- ZIP 內不含 EXE 安裝檔；訪客透過網頁按鈕至 GitHub Releases 下載。
