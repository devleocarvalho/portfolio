const perguntas = [
  {
    texto: "O paciente está em coma profundo, com rigidez de descerebração ou aspecto moribundo?",
    opcoes: [
      {
        texto: "Sim",
        grau: "V",
        mortalidade: "70 - 100%",
        descricao: "Coma profundo, rigidez de descerebração ou aspecto moribundo."
      },
      { texto: "Não", proxima: 1 }
    ]
  },
  {
    texto: "O paciente apresenta sopor moderado a profundo ou hemiparesia moderada a severa?",
    opcoes: [
      {
        texto: "Sim",
        grau: "IV",
        mortalidade: "60 - 70%",
        descricao: "Sopor moderado a profundo ou hemiparesia moderada a severa."
      },
      { texto: "Não", proxima: 2 }
    ]
  },
  {
    texto: "O paciente está letárgico, confuso ou com déficit focal moderado?",
    opcoes: [
      {
        texto: "Sim",
        grau: "III",
        mortalidade: "10 - 15%",
        descricao: "Sopor leve, letargia, confusão ou déficit focal moderado."
      },
      { texto: "Não", proxima: 3 }
    ]
  },
  {
    texto: "O paciente apresenta cefaleia moderada a severa e rigidez de nuca com possível comprometimento de nervos cranianos?",
    opcoes: [
      {
        texto: "Sim",
        grau: "II",
        mortalidade: "5 - 10%",
        descricao: "Cefaleia moderada a severa, rigidez de nuca com comprometimento de nervos cranianos."
      },
      { texto: "Não", proxima: 4 }
    ]
  },
  {
    texto: "O paciente está consciente, estável, mas com déficit neurológico estabelecido?",
    opcoes: [
      {
        texto: "Sim",
        grau: "Ia",
        mortalidade: "2 - 5%",
        descricao: "Sem comprometimento de consciência, estável, mas com déficit neurológico estabelecido."
      },
      { texto: "Não", proxima: 5 }
    ]
  },
  {
    texto: "O paciente está assintomático, apenas com cefaleia leve ou rigidez de nuca?",
    opcoes: [
      {
        texto: "Sim",
        grau: "I",
        mortalidade: "1 - 2%",
        descricao: "Assintomático, cefaleia leve ou rigidez de nuca."
      },
      { texto: "Não", proxima: 6 }
    ]
  },
  {
    texto: "O aneurisma foi diagnosticado incidentalmente, sem sintomas e ainda não roto?",
    opcoes: [
      {
        texto: "Sim",
        grau: "0",
        mortalidade: "0%",
        descricao: "Aneurisma assintomático não roto, diagnosticado incidentalmente."
      },
      {
        texto: "Não",
        grau: "Indeterminado",
        mortalidade: "Reavalie os dados clínicos.",
        descricao: "Não foi possível classificar com os dados fornecidos."
      }
    ]
  }
];

let etapa = 0;

function mostrarPergunta() {
  const pergunta = perguntas[etapa];
  const divPergunta = document.getElementById("pergunta");
  const divBotoes = document.getElementById("botoes");
  const divResultado = document.getElementById("resultado");

  divResultado.innerHTML = "";
  divPergunta.innerText = pergunta.texto;
  divBotoes.innerHTML = "";

  pergunta.opcoes.forEach(opcao => {
    const botao = document.createElement("button");
    botao.className = "btn btn-primary btn-opcao";
    botao.innerText = opcao.texto;
    botao.onclick = () => {
      if (opcao.grau !== undefined) {
        mostrarResultado(opcao.grau, opcao.mortalidade, opcao.descricao);
      } else {
        etapa = opcao.proxima;
        mostrarPergunta();
      }
    };
    divBotoes.appendChild(botao);
  });
}

function mostrarResultado(grau, mortalidade, descricao) {
  const divPergunta = document.getElementById("pergunta");
  const divBotoes = document.getElementById("botoes");
  const divResultado = document.getElementById("resultado");

  divPergunta.innerHTML = "";
  divBotoes.innerHTML = "";

  divResultado.innerHTML = `
    <h4>Resultado Final: Grau ${grau}</h4>
    <p><strong>Quadro clínico:</strong> ${descricao}</p>
    <p><strong>Mortalidade perioperatória:</strong> ${mortalidade}</p>
  `;
}

// Inicializar
window.onload = mostrarPergunta;
