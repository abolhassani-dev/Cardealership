<?php
/**
 * بک‌اند ذخیره پاسخ‌های پرسشنامه — یک فایل، بدون دیتابیس.
 * آپلود روی هر هاست PHP (نسخه 7+). پاسخ‌ها در answers-store.json کنار همین فایل ذخیره می‌شود.
 * API (همان پروتکل صفحه پرسشنامه):
 *   GET  → [["key","valueJson"], ...]
 *   POST → body: {"items":[{"k":"...","v":"..."}]}  →  {"ok":true,"n":N}
 */

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') { http_response_code(204); exit; }

$file = __DIR__ . '/answers-store.json';

$fp = fopen($file, 'c+');
if ($fp === false) { http_response_code(500); echo json_encode(['ok' => false, 'err' => 'cannot open store']); exit; }
flock($fp, LOCK_EX);
$raw = stream_get_contents($fp);
$data = $raw ? json_decode($raw, true) : [];
if (!is_array($data)) $data = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $body = json_decode(file_get_contents('php://input'), true);
    $n = 0;
    if (isset($body['items']) && is_array($body['items'])) {
        foreach ($body['items'] as $it) {
            if (isset($it['k'], $it['v']) && is_string($it['k']) && is_string($it['v'])
                && strlen($it['k']) < 200 && strlen($it['v']) < 30000 && count($data) < 5000) {
                $data[$it['k']] = $it['v'];
                $n++;
            }
        }
        ftruncate($fp, 0);
        rewind($fp);
        fwrite($fp, json_encode($data, JSON_UNESCAPED_UNICODE));
        fflush($fp);
    }
    flock($fp, LOCK_UN); fclose($fp);
    echo json_encode(['ok' => true, 'n' => $n]);
} else {
    flock($fp, LOCK_UN); fclose($fp);
    $out = [];
    foreach ($data as $k => $v) $out[] = [$k, $v];
    echo json_encode($out, JSON_UNESCAPED_UNICODE);
}
