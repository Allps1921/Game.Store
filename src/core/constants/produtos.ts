import type Produto from "../produto/produto";

const produtos: Produto [] = [
 {
   id: 1,
   nome: "Mouse Gamer RGB",
   descricao: "Mouse de alta precisão com sensor óptico de 16.000 DPI e iluminação RGB customizável.",
   marca: "Logitech",
   modelo: "G502 HERO",
   imagem: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.logitechg.com%2Fpt-br%2Fproducts%2Fgaming-mice%2Fg502-hero-gaming-mouse.html&psig=AOvVaw10h0VdmSaWUiKPtkO9dnT4&ust=1728100009934000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPDO6qzo84gDFQAAAAAdAAAAABAE",
   videoReview: "https://www.youtube.com/watch?v=ZcC-LinGe2s",
   nota: 4.8,
   tags: ["mouse", "gamer", "RGB", "alta precisão"],
   especificacoes: {
     peso: "121g",
     conectividade: "Cabo USB",
     sensibilidade: "16.000 DPI",
     botoesProgramaveis: 11,
     tempoDeResposta: "1 ms"
   }
 },
 {
   id: 2,
   nome: "Teclado Mecânico Gamer",
   descricao: "Teclado mecânico com switches Cherry MX e iluminação RGB por tecla.",
   marca: "Corsair",
   modelo: "K70 RGB MK.2",
   imagem: "https://assets.corsair.com/image/upload/f_auto,q_auto/v1/akamai/pdp/k70-rgb-mk2/img/interest-keyboard-front.png",
   videoReview: "https://www.youtube.com/watch?v=coQPr8P25lU",
   nota: 4.7,
   tags: ["teclado", "mecânico", "RGB", "switches Cherry MX"],
   especificacoes: {
     tipoDeSwitch: "Cherry MX Red",
     conectividade: "USB",
     iluminacao: "RGB",
     teclasProgramaveis: "Sim",
     tempoDeResposta: "1 ms"
   }
 },
 {
   id: 3,
   nome: "Headset Gamer 7.1",
   descricao: "Headset com som surround 7.1, microfone retrátil e almofadas de memória.",
   marca: "Razer",
   modelo: "Kraken 7.1 V2",
   imagem: "https://m.media-amazon.com/images/S/aplus-media/vc/ab6a8efb-615c-4150-9a1c-f44edcf8bee5._CR0,0,900,1200_PT0_SX300__.jpg",
   videoReview: "https://www.youtube.com/watch?v=weXERQ1pBDk",
   nota: 4.6,
   tags: ["headset", "gamer", "7.1", "microfone"],
   especificacoes: {
     tipoDeSom: "Surround 7.1",
     microfone: "Retrátil",
     conectividade: "USB",
     driver: "50mm",
     peso: "322g"
   }
 },
 {
   id: 4,
   nome: "Monitor Gamer UltraWide",
   descricao: "Monitor UltraWide com resolução de 3440x1440 e taxa de atualização de 144Hz.",
   marca: "LG",
   modelo: "34GL750-B",
   imagem: "https://www.lg.com/content/dam/channel/wcms/sa_en/images/monitors/34gl750-b_ami_emgf_sa_en_c/gallery/N01_D01.jpg",
   videoReview: "https://www.youtube.com/watch?v=cgTF02WC62c",
   nota: 4.9,
   tags: ["monitor", "gamer", "ultrawide", "144Hz"],
   especificacoes: {
     resolucao: "3440x1440",
     tamanho: "34 polegadas",
     taxaDeAtualizacao: "144Hz",
     tempoDeResposta: "1 ms",
     tipoDePainel: "IPS"
   }
 }
]


export default produtos;