Lan-Jun Jeffrey Chang 學術個人網站：Software / Landmark Studio / Sign Language ML Studio
============================================================
網站：https://jeffrey9049.github.io/

本版在原有 4 頁（Home、Research、Publications、Sign Language）之外，新增：
  software.html         兩套軟體的總覽
  landmark-studio.html  Landmark Studio 獨立介紹頁
  ml-studio.html        Sign Language ML Studio 獨立介紹頁
  software-links.js     兩套軟體下載網址與版本的唯一設定檔
  software-buttons.js   依設定啟用下載按鈕（無依賴）

此外，已在所有頁面的導覽列加入 Software，並修改 Sign Language 的 Software 區塊。
原有大頭照、教學照片、研究頁和論文資訊保留。

【發布網站】
1. 解壓 ZIP 檔，不要把 ZIP 本身上傳到 GitHub Pages。
2. 到 https://github.com/Jeffrey9049/Jeffrey9049.github.io
3. Add file → Upload files
4. 將本資料夾內的所有 .html、.css、.js、favicon.svg 和 PNG 圖片上傳到 repository 根目錄。
5. Commit changes，等待 GitHub Pages 部署。
6. 檢查 /software.html、/landmark-studio.html 和 /ml-studio.html。

【如何正式啟用下載：必須已有公開、可用的程式安裝檔】
建議把已測試的 Windows 安裝檔 (.exe/.zip) 作為 GitHub Release 資產發布。
(可以放在網站的 Repository Releases；也可以放另一個專門發布軟體的 PUBLIC repository。
 研究原始碼可繼續保留在私人 Repository。)

A. 在 GitHub Repository 的 Releases → Draft a new release。
B. 建立 release tag (例如 landmark-v1.0.0) 和說明。
C. 在 Assets 上傳「可安裝或可執行的程式檔」，並 Publish release。
D. 複製該程式資產的直接下載連結 (browser download URL)。
E. 打開網站的 software-links.js，依照下面格式填入兩個連結：

window.SCHOLAR_SOFTWARE_RELEASES = {
  landmark: {
    url: "https://github.com/OWNER/REPO/releases/download/TAG/LANDMARK_FILE.zip",
    version: "v1.0.0"
  },
  ml: {
    url: "https://github.com/OWNER/REPO/releases/download/TAG/ML_FILE.zip",
    version: "v0.4.1"
  }
};

F. 儲存 software-links.js 並 Commit。
G. 三個頁面上的下載按鈕會自動啟用，不需要修改 HTML。

注意：以上 URL 只是格式範例，不能在沒有實際 Release 的情況下直接使用。
目前程式下載網址欄位為空，所以網站會誠實顯示「Download not yet available」。
若程式版本/系統需求/使用畫面已確認，可進一步填入各軟體頁面的文字描述。

【發布前建議檢查】
- 確保檔案無病毒、通過 Windows 安裝測試。
- 如有收集資料或需連網，清楚揭露資料流向及使用限制。
- 對研究資料與安裝檔分別確認授權與是否可公開。
- 不要把 API keys、私有模型、未授權影片、未發表資料集放在公開 Repository。
- 舊版軟體是否公開提供，由作者自行決定；網站不會假設舊版即為正式版本。

【你的 APP 可以放在哪裡？具體建議】
推薦方案：上傳到 GitHub Releases（不直接將大型 EXE/ZIP 放進網站的 git 檔案清單）。
方案一：在現有的 Jeffrey9049.github.io（Public）Repository 裡建立 Releases。
方案二：另建一個 Public Repository，例：sign-language-software-downloads，只放 README 與 Release 安裝檔，無須上傳私人原始碼。
如果兩套程式需要分開維護版本，也可以各用一個 Public 發布專用 Repository。
每個 Release 附件必須小於 2 GiB（GitHub 官方限制）；大於此大小需改用其他檔案代管或適當分割發行。
請勿用 Private Repository 的 Release 當作對外公開下載，訪客通常沒有權限。
軟體的 exe/zip 應先在另一台乾淨的 Windows 電腦測試，提供版本、操作說明、檔案雜湊和注意事項。
如果 Windows 顯示未知發行者/SmartScreen 警告，不應鼓勵使用者直接關閉所有防護；應檢查簽章、安全性與發行者資訊。
正式發布後，請複製該 Release 附件的「Copy link address」，貼入 software-links.js。
