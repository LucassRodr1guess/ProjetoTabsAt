import { Component } from '@angular/core';
import { IFilme } from '../model/IFilme';
import {NavigationExtras, Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss']
})
export class Tab1Page {

  constructor(public router:Router,
              public alertController: AlertController,
              public toastController: ToastController) {}

  listaFilmes: IFilme[] = [
    {
      nome: 'YNAB (You Need A Budget)',
      lancamento: 'Finanças',
      duracao: 'YNAB é um aplicativo de gerenciamento financeiro que vai além do simples rastreamento de gastos. Ele adota uma abordagem única de orçamentação, onde cada dólar é atribuído a uma categoria específica. Com YNAB, você cria um orçamento detalhado, definindo prioridades e metas financeiras claras. A ferramenta ajuda a eliminar o ciclo de pagamento de contas de um mês para o outro, oferecendo controle total sobre seus gastos. O aplicativo incentiva a tomada de decisões conscientes, garantindo que você está gastando dinheiro apenas onde é mais importante para você. Além disso, a interface intuitiva e os recursos educativos tornam o YNAB uma escolha poderosa para quem busca uma mudança duradoura na gestão de dinheiro.',
      classificacao: 7.1,
      cartaz: 'https://media.discordapp.net/attachments/960884687113449492/1141407062346170418/3670OMYEbgCVyV1fGdkErGmYIpLtQ7_70LPcXKRQCjfbd819VzSk3b5rYVcQ8aOoCAM.png?width=662&height=662',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: ' Robinhood',
      lancamento: 'Finanças',
      duracao: 'Robinhood é uma plataforma de investimento que democratizou o acesso ao mercado de ações. Com operações sem comissões, ela torna o investimento acessível a todos, desde iniciantes até investidores experientes. O aplicativo oferece uma interface elegante e fácil de usar, permitindo comprar e vender ações, ETFs, criptomoedas e mais, tudo com alguns toques na tela. Com gráficos em tempo real e notícias do mercado, o Robinhood fornece informações cruciais para auxiliar suas decisões de investimento. Sua abordagem descomplicada é ideal para quem deseja começar a investir, mas também oferece ferramentas avançadas para quem busca diversificar e expandir seu portfólio.',
      classificacao: 7.1,
      cartaz: 'https://media.discordapp.net/attachments/960884687113449492/1141407466706456606/AvskXj8XyJCewAAAABJRU5ErkJggg.png?width=281&height=281',
      generos: ['Ação', 'Fantasia', 'Aventura'],
      pagina: '/mortal-kombat',
      favorito: false
    },
    {
      nome: ' Personal Capital',
      lancamento: 'Finanças',
      duracao: 'O Personal Capital é uma solução abrangente que vai além do rastreamento de despesas. Além de ajudar você a gerenciar suas finanças diárias, o aplicativo foca em metas financeiras maiores, como aposentadoria e investimentos. Ele permite que você visualize todas as suas contas e investimentos em um só lugar, fornecendo uma visão holística de sua situação financeira. Além disso, oferece ferramentas de planejamento de aposentadoria, análise de alocação de ativos e até mesmo consultoria financeira humana para contas maiores. Com gráficos e relatórios detalhados, o Personal Capital é uma escolha sólida para quem busca uma compreensão mais profunda de sua saúde financeira e quer planejar um futuro financeiro sólido.',
      classificacao: 7.1,
      cartaz: 'https://media.discordapp.net/attachments/960884687113449492/1141407812442931312/qllS3Y8XEjQAAAABJRU5ErkJggg.png?width=662&height=662',
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
