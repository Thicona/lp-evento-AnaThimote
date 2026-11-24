import { useState } from "react";

function BotaoLembrete() {
  const [mensagem, setMensagem] = useState("");

  async function ativarLembrete() {
    // 1. Verifica se a API de Notificações existe no navegador do usuário
    if (!("Notification" in window)) {
      setMensagem("Este navegador não aceita notificações.");
      return;
    }

    // 2. Abre o pop-up do navegador pedindo permissão e aguarda a escolha
    const permissao = await Notification.requestPermission();

    // 3. Confere se o usuário aceitou ("granted"). Se negou ou fechou, encerra aqui
    if (permissao !== "granted") {
      setMensagem("Você não permitiu as notificações.");
      return;
    }

    // 4. Aguarda o Service Worker (sw.js) estar ativo e pronto
    const registro = await navigator.serviceWorker.ready;

    // 5. Dispara a notificação nativa usando o Service Worker
    await registro.showNotification("Festival Sabores da Alta Paulista", {
      body: "Lembrete ativado! O festival acontece de 4 a 6 de junho de 2027, das 11h às 22h, em Osvaldo Cruz/SP.",
      icon: "/icone-192.png",
    });

    // 6. Atualiza o estado para exibir a confirmação visual logo abaixo do botão
    setMensagem("Lembrete ativado!");
  }

  return (
    <div className="mt-4 flex flex-col items-center">
      <button
        type="button"
        onClick={ativarLembrete}
        className="inline-flex items-center gap-2 rounded-full border-2 border-[#0B5D38] bg-transparent px-6 py-2.5 text-sm font-semibold text-[#0B5D38] transition-colors hover:bg-[#0B5D38] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0B5D38] focus:ring-offset-2 cursor-pointer"
      >
        <span>🔔</span>
        <span>Me lembre do evento</span>
      </button>

      {mensagem && (
        <p
          role="status"
          className="mt-2.5 rounded-lg bg-[#0B5D38]/10 px-4 py-1.5 text-sm font-medium text-[#0B5D38]"
        >
          {mensagem}
        </p>
      )}
    </div>
  );
}

export default BotaoLembrete;