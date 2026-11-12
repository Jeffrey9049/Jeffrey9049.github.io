Lan-jun Jeffrey Chang · GitHub Pages 個人學術網站（2026-11 更新）

網址：https://jeffrey9049.github.io/

首頁：index.html
研究：research.html
論文：publications.html
手語研究：sign-language.html
主樣式：styles.css
照片：profile.png、tsl-ml-teaching.png

上傳方法：
1. 將本 ZIP 解壓縮。
2. 前往 GitHub Repository：Jeffrey9049/Jeffrey9049.github.io。
3. 選 Add file -> Upload files。
4. 將所有 HTML、CSS、favicon.svg 和兩張 PNG 照片上傳到 Repository 根目錄。
   請確認照片與 index.html 在同一個目錄。
5. 按 Commit changes，待 GitHub Pages 部署後重新整理網址。
6. 舊檔 portrait-placeholder.svg 可保留，也可刪除；本版不再使用。

注意：本版沒有 GitHub 導覽連結、沒有 Related Research 導流區塊、沒有公開電話號碼。
工作、授課、學歷和期刊 DOI 已參照用戶先前 CV 的內容整理。
研究興趣不等於已發表成果；語意通訊等屬研究方向。


=== 手語頁面與軟體下載區（新增）===
Sign Language 頁新增：
- Motivation（連結手語專業與 AI、降低技術門檻）
- 你上傳的 ML/AI 教學照片
- Software Tools：Landmark Studio 與 Sign Language ML Studio

重要：這個 ZIP 只有網站，不包含兩個大型程式的安裝檔。
為了避免讓訪客點到失效的下載連結，兩個下載位置先顯示 Windows download — coming soon。

正式開放下載的方法：
1. 建議在你的 GitHub repository 使用 Releases（而非把大型 EXE 直接放入網站 repo）。
2. 發布 Landmark Studio、ML Studio 的 Windows 安裝檔（.exe 或 .zip）到 Releases。
3. 複製每個 Release 資產的「直接下載 URL」。
4. 打開 sign-language.html，在兩段 software-item 裡找到註解所指的：
   <span class="download-unavailable" ...>Windows download — coming soon</span>
   改成：
   <a class="download-link" href="實際下載URL" target="_blank" rel="noopener noreferrer">Download for Windows</a>
5. 刪除或改寫 Software Tools 最後的「Download packages ...」提示，提交變更。

如果你提供兩個實際的檔案或公開下載 URL，就可以把兩個待發布按鈕改成真正可下載的按鈕。
請勿使用自造的網址，否則訪客會遇到 404。


=== 手語人物建模研究（新增）===
Sign Language > Current Work 新增「Sign Language Avatar Modeling and Motion Reconstruction」，說明影片與 Landmark 轉成數位角色動作、手指/手形/掌向/遮擋等研究挑戰。註明仍在原型研究階段，不表示已推出可用的工具。
