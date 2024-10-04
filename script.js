const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPergunta = document.querySelector('.caixa-pergunta');
const caixaAlternativa = document.querySelector('.caixa-alternativa');
const caixaResultado = document.querySelector('.caixa-resultado');

const perguntas = [//abre a lista de objetos (itens)
    {//abre o item
        enunciado: "Você gosta da Inteligência Artificial?",
        alternativas: [{
            texto: "Sim",
            afirmação: "Afirmação da alternativa 1"
        },
        {
            texto: "Não",
            afirmação: "Afirmação da alternativa"
        }
        ]
    },
    {
        enunciado: "voce usa IA frequentemente"
        alternativas: [{
            texto: "Quem sabe...",
            afirmação: "Afirmação da alternativa 1"
        },
        {
            texto:"Talvez",
            afirmação:"Afirmação da alternativa 2"
        }
        ]
    },
    {
        enunciado: "voce usa IA nos seus estudos",
        alternativas: [{
            texto: "Sim",
            afirmação: "Afirmação da alternativa 1"
        },
        {
            texto: "Não",
            afirmação: "Afirmação da alternativa"
        }
        ]
    }
]
let posicao = 0;
let perguntaAtual;


function mostraPergunta() {
    if(posicao>=perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[posicao];
    caixaPergunta.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click",  ()=> respostasselecionadas(alternativa));
        caixaAlternativa.appendChild(botaoAlternativas);
    }
}
function respostasSelecionadas(opcaoSelecionada) {
    const afirmacoes= opcaoSelecionada.afirmação;
    respostas =afirmação
    posicao++;
    mostraPergunta();
}
function mostraPergunta(){
    caixaPergunta.textContent = "daquia 10 anos";
}
mostraPergunta()
    
