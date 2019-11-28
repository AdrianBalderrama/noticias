import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
 
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input() noticia: Article;
  

  constructor(private iab: InAppBrowser,private actionSheetCtrl: ActionSheetController) {

   }

  ngOnInit() {

  }
  //abrir noticia on browser
  abrirNoticia(){
    const browser = this.iab.create(this.noticia.url, '_system');
   // console.log('Noticia:',this.noticia.url);
  }


  async lanzarMenu(){   
    const actionSheet = await this.actionSheetCtrl.create({
      
      buttons: [{
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Share clicked');
        }
      },  {
        text: 'Favoritos',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        cssClass: 'action-dark',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
  }

