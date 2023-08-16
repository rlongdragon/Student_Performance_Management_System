# 成績管理系統
利用google apps script 以及 google sheet 作為後端，免費網頁架設零成本成績管理系統。

---
# 效果預覽
## 學生端
![](./img/學生成績管理系統操作說明_學生版_1.png)
![](./img/學生成績管理系統操作說明_學生版_2.png)
![](./img/學生成績管理系統操作說明_學生版_3.png)
![](./img/學生成績管理系統操作說明_學生版_4.png)
![](./img/學生成績管理系統操作說明_學生版_5.png)
## 教師端
![](./img/學生成績管理系統操作說明_教師版_1.png)
![](./img/學生成績管理系統操作說明_教師版_2.png)
![](./img/學生成績管理系統操作說明_教師版_3.png)
![](./img/學生成績管理系統操作說明_教師版_4.png)
![](./img/學生成績管理系統操作說明_教師版_5.png)
![](./img/學生成績管理系統操作說明_教師版_6.png)

---

# 流程圖
![專案流程圖](./img/專案流程圖.png)

---
# 建置說明
1. 將[成績管理系統_模板](./src/google_sheet/成績登記管理系統_模板.xlsx)匯入google sheet

2. 建立google apps script 專案<br>
上方工具列 -> 擴充功能 -> Apps Script<br>
![建置GAS步驟_1](./img/建置GAS步驟_1.png)

3. 新增指令碼<br>
![建置GAS步驟_2](./img/建置GAS步驟_2.png)
![建置GAS步驟_3](./img/建置GAS步驟_3.png)

4. 將[function.js](./src/google_apps_script/function.js)內容貼入指令碼編輯器<br>

5. 新增HTML檔案<br>
![建置GAS步驟_4](./img/建置GAS步驟_4.png)
命名檔案名稱為`in`
![建置GAS步驟_5](./img/建置GAS步驟_5.png)

6. 將[in.html](./src/google_apps_script/in.html)內容貼入HTML檔案<br>

7. 部屬為網路應用程式<br>
![建置GAS步驟_6](./img/建置GAS步驟_6.png)
選擇網路應用程式<br>
![建置GAS步驟_7](./img/建置GAS步驟_7.png)
將存取權限設定為「任何人」<br>
![建置GAS步驟_8](./img/建置GAS步驟_8.png)
最後部屬<br>
![建置GAS步驟_9](./img/建置GAS步驟_9.png)
首次部屬會跳出授權畫面，選擇帳號授權即可<br>
![建置GAS步驟_10](./img/建置GAS步驟_10.png)
複製並保存好部屬後的網址備用<br>
![建置GAS步驟_11](./img/建置GAS步驟_11.png)

8. 取得 資料庫 能力分析 帳密 這三個頁面的CSV檔
上方工具列 -> 檔案 -> 共用 > 發布至網路<br>
![建置GAS步驟_12](./img/建置GAS步驟_12.png)
選擇「資料庫」並改成「逗點分隔值(.csv)」後發布<br>
![建置GAS步驟_13](./img/建置GAS步驟_13.png)
![建置GAS步驟_14](./img/建置GAS步驟_14.png)
分別取得 另外兩個頁面的CSV檔連結<br>

9. 填入連結資料<br>
[in.html](./src/web/in.html) 的 22 行 和 [login.js](./src/web/login.js) 的 21 行
 ```
src="your_google_apps_script_web_application_url"
```
`your_google_apps_script_web_application_url`換成第7步驟部屬後的網址<br>

下面填入剛剛取得的csv連結<br>
[student.html](./src/web/student.html) 的 60 行 
```
readTextFile("資料庫的CSV連結");
```
[student.html](./src/web/student.html) 的 293 行 
```
readTextFile_update("能力分析的CSV連結");
```
[student.html](./src/web/student.html) 的 382 行 
```
readTextFile_update("更新日誌的CSV連結");
```

10. 最後由部屬 `/src/web` 資料夾內的檔案即可<br>

---

Copyright © 2022 rlongdragon