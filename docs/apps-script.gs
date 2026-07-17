/**
 * بک‌اند ذخیره پاسخ‌های پرسشنامه روی Google Sheet
 * نحوه راه‌اندازی: docs/product-decisions.md یا پیام حمیدرضا را ببینید.
 * دیپلوی به‌صورت Web App با دسترسی "Anyone".
 */

const SHEET_NAME = 'answers';

function getSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(['key', 'value', 'updatedAt']);
  }
  return sh;
}

// خواندن همه پاسخ‌ها — خروجی: [["key","valueJson"], ...]
function doGet() {
  const sh = getSheet_();
  const rows = sh.getDataRange().getValues();
  const out = [];
  for (let i = 1; i < rows.length; i++) {
    if (rows[i][0]) out.push([String(rows[i][0]), String(rows[i][1])]);
  }
  return ContentService.createTextOutput(JSON.stringify(out))
    .setMimeType(ContentService.MimeType.JSON);
}

// ذخیره/به‌روزرسانی پاسخ‌ها — ورودی: {"items":[{"k":"...","v":"..."}]}
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const body = JSON.parse(e.postData.contents);
    const items = body.items || [];
    const sh = getSheet_();
    const rows = sh.getDataRange().getValues();
    const index = {};
    for (let i = 1; i < rows.length; i++) index[String(rows[i][0])] = i + 1;
    items.forEach(function (it) {
      const row = [it.k, it.v, new Date()];
      if (index[it.k]) sh.getRange(index[it.k], 1, 1, 3).setValues([row]);
      else { sh.appendRow(row); index[it.k] = sh.getLastRow(); }
    });
    return ContentService.createTextOutput(JSON.stringify({ ok: true, n: items.length }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}
