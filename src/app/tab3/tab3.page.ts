import { Component } from '@angular/core';
import { IAtores } from '../model/IAtores';
import {NavigationExtras, Router} from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(public router:Router,
              public alertController: AlertController,
              public toastController: ToastController) {}
  listaAtores: IAtores[] = [
    {
      nome: 'Uber',
      DataDeNascimento: 'A Uber é uma líder global em aplicativos de transporte, conectando passageiros a motoristas independentes para viagens mais convenientes. A plataforma oferece opções variadas de veículos, facilitando solicitações, rastreamento e pagamentos eletrônicos. Priorizando a segurança, a Uber verifica motoristas e fornece recursos de compartilhamento de viagem. Com foco na mobilidade urbana, a Uber também introduziu viagens compartilhadas para reduzir congestionamentos e poluição. Sua tecnologia avançada otimiza rotas e impacta positivamente a forma como as pessoas se movem nas cidades.',
      LocalDeNascimento: 'Transporte',
      cartaz: 'https://cdn.discordapp.com/attachments/1044250932692647976/1138841794252116038/transferir_1.png',
      pagina: '/uber',
      favorito: false
    },
    {
      nome: 'Cabify',
      DataDeNascimento: 'A Cabify é uma plataforma de transporte que conecta passageiros a motoristas particulares, oferecendo viagens convenientes e personalizadas. Com um toque no aplicativo, os usuários podem solicitar carros confortáveis e seguros, rastrear o trajeto em tempo real e realizar pagamentos eletrônicos de forma fácil. A Cabify enfatiza a qualidade do serviço e a segurança, proporcionando uma opção moderna para deslocamentos urbanos.',
      LocalDeNascimento: 'Transporte',
      cartaz: 'https://media.discordapp.net/attachments/960884687113449492/1141385940733001828/lREUZkuiP2BdHzLkveqwQU7SffC_KXNppzz_y8loFZDnWIj9ktcb5wYepWTyWrt2airY.png?width=662&height=662',
      pagina: '/uber',
      favorito: false
    },
    {
      nome: '99',
      DataDeNascimento: 'A 99 Táxi é um aplicativo de transporte que facilita a solicitação de táxis com praticidade. Através do aplicativo, os passageiros podem pedir táxis com rapidez, monitorar o progresso da viagem em tempo real e efetuar pagamentos eletrônicos de maneira simples. A 99 Táxi oferece uma opção confiável e familiar para se deslocar nas cidades.',
      LocalDeNascimento: 'Transporte',
      cartaz: 'https://media.discordapp.net/attachments/960884687113449492/1141395070625525801/i635929.png?width=662&height=662',
      pagina: '/uber',
      favorito: false
    }

   
  ];
  exibirAtores(ator:IAtores){
    const NavigationExtras: NavigationExtras = {state:{paramAtores:ator}};
    this.router.navigate(['atores-detalhes'],NavigationExtras);
  }
  async exibirAlertaFavorito(ator: IAtores) {
    const alert = await this.alertController.create({

      header: 'Meus Favoritos',
      message: 'Deseja realmente favoritar o ator?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            ator.favorito=false;
          }
        }, {
          text: 'Sim, favoritar.',
          handler: () => {
            ator.favorito=true;
            this.apresentarToast(ator);
          }
        }
      ]
    });
    await alert.present();
  }



 async apresentarToast(ator:IAtores) {
    const toast = await this.toastController.create({
      message: 'Ator adicionado aos favoritos...',
      duration: 2000,
      color: 'success',
      position: 'bottom',
      buttons: [
        {
          text:'Desfazer',
          handler: ()=>{
            ator.favorito=false;
          }
        }
      ]
    });
    toast.present();
  }
}
