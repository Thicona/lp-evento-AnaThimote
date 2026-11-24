const CACHE = "lp-v2";

// Instalação: guarda a página inicial e ativa o SW imediatamente
self.addEventListener("install", (evento) => {
  self.skipWaiting();
  evento.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(["/", "/index.html"]))
  );
});

// Ativação: assume o controle das abas abertas e limpa caches antigos
self.addEventListener("activate", (evento) => {
  evento.waitUntil(
    caches.keys().then((chaves) =>
      Promise.all(
        chaves
          .filter((chave) => chave !== CACHE)
          .map((chave) => caches.delete(chave))
      )
    ).then(() => self.clients.claim())
  );
});

// Toda requisição: tenta a rede e salva no cache; se estiver offline, usa o cache
self.addEventListener("fetch", (evento) => {
  if (evento.request.method !== "GET") return;
  // Ignora extensões do Chrome ou requisições externas que não sejam http/https
  if (!evento.request.url.startsWith("http")) return;

  evento.respondWith(
    fetch(evento.request)
      .then((resposta) => {
        // Só salva no cache se a resposta for válida
        if (resposta && resposta.status === 200) {
          const copia = resposta.clone();
          caches.open(CACHE).then((cache) => cache.put(evento.request, copia));
        }
        return resposta;
      })
      .catch(async () => {
        const cached = await caches.match(evento.request);
        return cached || Response.error();
      })
  );
});