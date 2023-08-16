function doPost(e) {
  var postData = e.postData.contents;
  var requestData = JSON.parse(postData);

  var username = requestData.username;
  var password = requestData.password;

  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("帳密");
  var data = sheet.getRange("A:B").getValues();
  var responseText;

  for (var i = 0; i < data.length; i++) {
    if (data[i][0] == username && data[i][1] == password) {
      responseText = (i + 1).toString();
      break;
    }
  }

  if (!responseText) {
    responseText = "null";
  }

  return ContentService.createTextOutput(responseText)
    .setMimeType(ContentService.MimeType.TEXT);
}

function doGet() {
  var html = HtmlService.createTemplateFromFile("in");
  var check = html.evaluate();
  var show = check.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return show;
}

function numTOabc(num){
  var str = ""
  while (num > 0){
    var m = num % 26;
    if(m == 0){
      m = 26;
    }
    str = String.fromCharCode(m + 64) + str;
    num = (num - m) / 26;
  }
  return str;
}

function appendClounm(sheet_name, data) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(sheet_name);

  last_clounm = sheet.getLastColumn()
  sheet.getRange(1, last_clounm + 1).setValue(`=IF(${numTOabc(last_clounm+1)}2,COUNTIF($B$2:${numTOabc(last_clounm+1)}2,TRUE)&"T",FALSE)`)
  sheet.getRange(2, last_clounm + 1).setValue(`=IF(${numTOabc(last_clounm+1)}3>='成績查詢'!$J$12,TRUE,FALSE)`)
  for (i = 1; i <= data.length; i++) {
    sheet.getRange(i+2, last_clounm + 1).setValue(data[i - 1])
  }
}

function test(){
  x = numTOabc(8)
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ws = ss.getSheetByName("帳號庫");
  ws.getRange(2,1).setValue(x)
}

function addData(cloData) {
  var currentDate = new Date();
  cloData.splice(0, 0, currentDate);
  appendClounm("資料庫", cloData)
}


function clean_data() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName("成績查詢");
  sheet.getRange(8, 6).setValue("");
}

function RowColor() {
  var range = SpreadsheetApp.getActiveRange();
  var cols = range.getNumColumns();
  var rows = range.getNumRows();
  for (var y = 1; y <= rows; y++) {
    for (var x = 1; x <= cols; x++) {
      var cell = range.getCell(y, x);
      if ((y % 2) == 0) {
        cell.setBackgroundColor("#a6e79e");  // 偶數行顏色
      }
      else {
        cell.setBackgroundColor("#caffc4");  // 奇數行顏色
      }
    }
  }
}