// 설치용 최소 서비스워커 (오프라인 저장 없이 항상 최신 파일을 사용)
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
