function datacopy(sheetID) {

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();
  var range = sheet.getRange("E3");
  var sheetID = range.getValue();

  copyValues(sheetID); 
}


function copyValues(sheetID) {
  var ss_copyTo = SpreadsheetApp.getActiveSpreadsheet();
  var ss_copyFrom = SpreadsheetApp.openById(sheetID);
  var sheet_copyFrom = ss_copyFrom.getSheetByName('DATA');
  var sheet_copyTo = ss_copyTo.getSheetByName('DATA');
 
  var copyValue = sheet_copyFrom.getRange('C6:E999').getValues();
  sheet_copyTo.getRange('C6:E999').setValues(copyValue);
 
  var copyValue = sheet_copyFrom.getRange('F6:G999').getValues();
  sheet_copyTo.getRange('F6:G999').setValues(copyValue);

  var copyValue = sheet_copyFrom.getRange('J6:K999').getValues();
  sheet_copyTo.getRange('J6:K999').setValues(copyValue);

  var copyValue = sheet_copyFrom.getRange('N6:O999').getValues();
  sheet_copyTo.getRange('N6:O999').setValues(copyValue);

  var copyValue = sheet_copyFrom.getRange('R6:S999').getValues();
  sheet_copyTo.getRange('R6:S999').setValues(copyValue);
}