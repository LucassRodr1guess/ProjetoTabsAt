import { Component, OnInit } from '@angular/core';
import {IAtores} from 'src/app/model/IAtores';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atores-detalhes',
  templateUrl: './atores-detalhes.page.html',
  styleUrls: ['./atores-detalhes.page.scss'],
})
export class AtoresDetalhesPage implements OnInit {
  atores:any;

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params =>{
      const getNav = this.router.getCurrentNavigation();
      if (getNav?.extras.state) {
        this.atores = getNav.extras.state['paramAtores'];
      }
    });
  }

}
