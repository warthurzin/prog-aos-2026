import "dotenv/config";
import cors from "cors";
import express from "express";

const app = express();
const port = process.env.PORT ?? 3000;
app.use(cors());

app.get("/random", (req, res) => {
  const numero = Math.floor(Math.random() * 100) + 1;
  res.send(`Número aleatório: ${numero}`);
});

app.get("/dado", (req, res) => {
  const face = Math.floor(Math.random() * 6) + 1;
  res.send(`Você tirou: ${face}`);
});

const citacoes = [
  {
    autor: "Albert Einstein",
    citacao: "A imaginação é mais importante que o conhecimento.",
  },
  {
    autor: "Albert Einstein",
    citacao:
      "A vida é como andar de bicicleta. Para manter o equilíbrio, você deve continuar se movendo.",
  },
  {
    autor: "Isaac Newton",
    citacao: "Se eu vi mais longe, foi por estar sobre os ombros de gigantes.",
  },
  {
    autor: "Isaac Newton",
    citacao: "O que sabemos é uma gota, o que ignoramos é um oceano.",
  },
  {
    autor: "Marie Curie",
    citacao:
      "Nada na vida deve ser temido, somente compreendido. Agora é hora de compreender mais para temer menos.",
  },
  {
    autor: "Marie Curie",
    citacao: "Seja menos curioso sobre pessoas e mais curioso sobre ideias.",
  },
  {
    autor: "Charles Darwin",
    citacao:
      "Não é o mais forte que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças.",
  },
  {
    autor: "Charles Darwin",
    citacao:
      "A ignorância mais frequentemente gera confiança do que o conhecimento.",
  },
  {
    autor: "Nikola Tesla",
    citacao:
      "O presente é deles; o futuro, pelo qual eu realmente trabalhei, é meu.",
  },
  {
    autor: "Nikola Tesla",
    citacao:
      "Se você quer descobrir os segredos do universo, pense em termos de energia, frequência e vibração.",
  },
  {
    autor: "Stephen Hawking",
    citacao: "A inteligência é a capacidade de se adaptar à mudança.",
  },
  {
    autor: "Stephen Hawking",
    citacao:
      "Por mais difícil que a vida possa parecer, há sempre algo que você pode fazer e ter sucesso.",
  },
  {
    autor: "Richard Feynman",
    citacao:
      "Se você acha que entende a mecânica quântica, é porque não entende a mecânica quântica.",
  },
  {
    autor: "Richard Feynman",
    citacao:
      "O primeiro princípio é que você não deve enganar a si mesmo — e você é a pessoa mais fácil de enganar.",
  },
  { autor: "Galileu Galilei", citacao: "E no entanto ela se move." },
  {
    autor: "Galileu Galilei",
    citacao: "A matemática é o alfabeto com o qual Deus escreveu o universo.",
  },
  { autor: "Carl Sagan", citacao: "Somos feitos de poeira de estrelas." },
  {
    autor: "Carl Sagan",
    citacao:
      "Em algum lugar, algo incrível está esperando para ser descoberto.",
  },
  { autor: "Louis Pasteur", citacao: "O acaso favorece a mente preparada." },
  {
    autor: "Niels Bohr",
    citacao:
      "Se você não ficou chocado com a mecânica quântica, é porque não a entendeu.",
  },
  {
    autor: "Max Planck",
    citacao:
      "A ciência não pode resolver o mistério final da natureza. Isso porque, em última análise, somos parte do mistério que estamos tentando resolver.",
  },
  {
    autor: "Erwin Schrödinger",
    citacao:
      "A consciência não pode ser contabilizada em termos de física e química.",
  },
  { autor: "James Watson", citacao: "O segredo da vida é o DNA." },
  {
    autor: "Ada Lovelace",
    citacao: "A imaginação é a faculdade da descoberta, por excelência.",
  },
  {
    autor: "Alan Turing",
    citacao:
      "Às vezes são as pessoas que ninguém imagina que possam fazer algo que fazem as coisas que ninguém consegue imaginar.",
  },
  {
    autor: "Lise Meitner",
    citacao: "A ciência torna as pessoas honestas consigo mesmas.",
  },
  {
    autor: "Rosalind Franklin",
    citacao:
      "A ciência e a vida cotidiana não podem e não devem ser separadas.",
  },
  {
    autor: "Dmitri Mendeleev",
    citacao: "Não há nada mais prático do que uma boa teoria.",
  },
  {
    autor: "Werner Heisenberg",
    citacao:
      "O que observamos não é a natureza em si, mas a natureza exposta ao nosso método de questionamento.",
  },
  {
    autor: "Blaise Pascal",
    citacao: "O coração tem razões que a própria razão desconhece.",
  },
];

app.get("/citacoes", (req, res) => {
  const indice = Math.floor(Math.random() * citacoes.length);
  res.send(citacoes[indice]);
});

app.listen(port, () => console.log("Servidor rodando na porta " + port));

export default app;
