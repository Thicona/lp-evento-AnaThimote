import { useEffect, useRef } from "react";

// Para testar o redesenho proporcional, basta alterar qualquer valor abaixo e salvar:
const dados = [
  { rotulo: "Pratos Doces", valor: 120 },
  { rotulo: "Salgados", valor: 85 },
  { rotulo: "Bebidas", valor: 45 },
];

function Grafico() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Limpa o canvas antes de desenhar
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Pega o maior valor do array para calcular a proporção das barras
    const maior = Math.max(...dados.map((d) => d.valor));

    ctx.font = "bold 14px sans-serif";
    ctx.textBaseline = "middle";

    dados.forEach((item, i) => {
      const largura = (item.valor / maior) * 220; // A maior barra sempre terá 220px
      const y = 25 + i * 50; // Espaçamento vertical de 50px entre cada barra
      const altura = 28;

      // 1. Cor da barra (verde musgo do festival)
      ctx.fillStyle = "#065f46";

      // 2. Desenha a barra começando em x = 115
      ctx.fillRect(115, y, largura, altura);

      // 3. Cor escura para escrever o rótulo à esquerda (x = 10)
      ctx.fillStyle = "#451a03";
      ctx.fillText(item.rotulo, 10, y + altura / 2);

      // 4. Escreve o valor numérico logo após o fim da barra
      ctx.fillStyle = "#b91c1c";
      ctx.fillText(item.valor, 115 + largura + 10, y + altura / 2);
    });
  }, []);

  return (
    <section className="px-6 py-16 max-w-2xl mx-auto">
      <div className="bg-[#f2e6d6]/60 border border-orange-200/60 rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-extrabold text-emerald-800">
          Ingressos vendidos por categoria
        </h2>

        <canvas
          ref={canvasRef}
          width={390}
          height={180}
          role="img"
          aria-label="Gráfico de barras horizontais mostrando ingressos vendidos: Pratos Doces com 120, Salgados com 85 e Bebidas com 45."
          className="mt-4 max-w-full bg-white rounded-xl p-2 border border-orange-100"
        />
      </div>
    </section>
  );
}

export default Grafico;