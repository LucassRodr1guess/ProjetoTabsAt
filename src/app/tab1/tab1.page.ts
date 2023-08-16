import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import {NavigationExtras, Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public router:Router,
              public alertController: AlertController,
              public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'CHATGPT',
      lancamento: 'I.A.',
      duracao: 'O ChatGPT é uma avançada ferramenta de inteligência artificial da OpenAI, baseada na arquitetura GPT-3.5. Ele oferece interações naturais por meio de conversas escritas, compreendendo contextos complexos, respondendo a perguntas e gerando texto coerente em uma variedade de tópicos. Sua versatilidade o torna útil para educação, entretenimento e aconselhamento prático. O ChatGPT se destaca pela adaptação a estilos de conversa e pela capacidade de fornecer informações até setembro de 2021, oferecendo uma plataforma poderosa para comunicação e interação.',
      classificacao: 7.1,
      cartaz: 'https://cdn.discordapp.com/attachments/960884773725831228/1138510607319056454/transferir-removebg-preview.png',
      generos: ['Ação', 'Fantasia', 'Aventura'],  
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'DALL-E',
      lancamento: 'I.A.',
      duracao: 'O DALL-E é uma notável conquista em inteligência artificial, desenvolvido pela OpenAI. Baseado na tecnologia GPT-3, o DALL-E possui uma capacidade única e impressionante de gerar imagens a partir de descrições textuais. Combinando a compreensão de linguagem natural com a geração de imagens criativas, o DALL-E é capaz de transformar palavras em ilustrações visualmente expressivas e originais. Ao alimentar o sistema com conceitos e cenários, os usuários podem testemunhar a criação de arte digital impressionante e inovadora, tornando o DALL-E uma ferramenta poderosa para designers, artistas e criativos explorarem novas fronteiras na interseção da linguagem e da visualização.',
      classificacao: 7.1,
      cartaz: 'https://media.discordapp.net/attachments/960884687113449492/1141035097085186108/tstsmall507x507-pad600x600f8f8f8.png?width=662&height=662',
      generos: ['Ação', 'Fantasia', 'Aventura'],  
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: 'Copy.ai',
      lancamento: 'I.A.',
      duracao: 'Copy.ai é uma plataforma de inteligência artificial que redefine a forma como o conteúdo é criado. Alimentado por avançados algoritmos de processamento de linguagem natural, o Copy.ai é projetado para gerar texto de alta qualidade, oferecendo desde títulos envolventes e descrições cativantes até artigos completos. Com a capacidade de entender nuances contextuais e adaptar-se a diferentes estilos de escrita, o Copy.ai é uma ferramenta essencial para escritores, profissionais de marketing e criadores de conteúdo que buscam eficiência e criatividade aprimoradas em suas comunicações. Ao simplificar o processo de redação, o Copy.ai permite que os usuários se concentrem mais na estratégia e na mensagem, elevando o nível da produção de conteúdo de maneira notável.',
      classificacao: 7.1,
      cartaz: 'https://media.discordapp.net/attachments/960884687113449492/1141039247030231071/Copy-AI-1.png?width=662&height=662 ',
      generos: ['Ação', 'Fantasia', 'Aventura'],  
      pagina: '/mortal-kombat',
      favorito: false
    }

    
  ];

  exibirFilme(filme:IFilme){
    const NavigationExtras: NavigationExtras = {state:{paramFilme:filme}};
    this.router.navigate(['filme-detalhe'],NavigationExtras);
  }

  async exibirAlertaFavorito(filme: IFilme) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            filme.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            filme.favorito=true;
            this.apresentarToast(filme);
          }
        }
      ]
    });
    await alert.present();
  }



  async apresentarToast(filme:IFilme) {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'bottom',
      buttons: [
        {
          text: 'Desfazer',
          handler:() =>{
            filme.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }

}
