import { Component } from '@angular/core';
import { ISeries } from '../model/ISerie';
import {NavigationExtras, Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public router:Router,
    public alertController: AlertController,
    public toastController: ToastController) {}

  listaSeries: ISeries[] = [
    {
      nome: 'BoaConsulta',
      lancamento: 'Saúde e Bem estar',
      temporadas: 'O aplicativo BoaConsulta é uma solução conveniente para agendar consultas médicas. Com alguns toques, os usuários podem encontrar e marcar compromissos com uma variedade de profissionais de saúde, acompanhar horários disponíveis e receber lembretes úteis. O BoaConsulta simplifica o processo de agendamento médico, proporcionando acesso rápido e organizado aos serviços de saúde.',
      classificacao: 8.3,
      cartaz: 'https://media.discordapp.net/attachments/960884687113449492/1141398150964326420/sa_1zgs104qmPF1GZ2pzsTsKa8fcBVVotZLkGTWSOZMXXfAhZUEcjYLsAWWDSSm6asw.png?width=662&height=662',
      generos: ['Comédia', 'Crime'],
      pagina: '/Brooklyn-Nine-Nine',
      favorito: false
    },
    {
      nome: 'Sleep Time',
      lancamento: 'Saúde e Bem estar',
      temporadas: 'O aplicativo Sleep Time é uma ferramenta valiosa para melhorar a qualidade do sono. Com recursos avançados de rastreamento e análise, ele monitora seus padrões de sono, oferecendo insights sobre a duração e a eficiência do descanso. Além disso, o Sleep Time oferece alarmes inteligentes que acordam você no momento ideal, durante uma fase de sono leve, para um despertar mais revigorante. Com essa abordagem personalizada, o aplicativo ajuda a otimizar seus hábitos de sono e promover um sono mais restaurador.',
      classificacao: 8.3,
      cartaz: 'https://media.discordapp.net/attachments/960884687113449492/1141399580542517339/UPpgtxoGK7JtjgYxY1d9lYzkCMmJ8GsgqRokDATeLPC60J4xZ-2VhMC4Os8ji0qqd0.png?width=662&height=662',
      generos: ['Comédia', 'Crime'],
      pagina: '/Brooklyn-Nine-Nine',
      favorito: false
    },
    {
      nome: ' Einstein Vacinas',
      lancamento: 'Saúde e Bem estar',
      temporadas: 'O aplicativo Einstein Vacinas é uma ferramenta útil para gerenciar e agendar vacinas de forma conveniente. Ele oferece informações sobre as vacinas recomendadas, permite agendar horários para imunizações e envia lembretes importantes. Com o Einstein Vacinas, você pode acompanhar seu calendário de vacinação e cuidar da saúde de forma prática e organizada.',
      classificacao: 8.3,
      cartaz: 'https://media.discordapp.net/attachments/960884687113449492/1141400032243896360/5b5xmcAAAAAElFTkSuQmCC.png?width=662&height=662',
      generos: ['Comédia', 'Crime'],
      pagina: '/Brooklyn-Nine-Nine',
      favorito: false
    }
  ];

  exibirSerie(serie:ISeries){
    const NavigationExtras: NavigationExtras = {state:{paramSerie:serie}};
    this.router.navigate(['serie-detalhe'],NavigationExtras);
  }

  async exibirAlertaFavorito(serie: ISeries) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar a serie?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            serie.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            serie.favorito=true;
            this.apresentarToast(serie);
          }
        }
      ]
    });
    await alert.present();
  }



 async apresentarToast(serie:ISeries) {
    const toast = await this.toastController.create({
      message: 'Serie adicionada aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'bottom',
      buttons: [
        {
          text: 'Desfazer',
          handler:() =>{
            serie.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }
}
