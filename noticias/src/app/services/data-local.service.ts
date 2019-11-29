import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[]=[];
  constructor(private storage: Storage, public toastController: ToastController) { 
    this.cargarFavoritos();

  }

  async toastMe(message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1700
    });
    toast.present();
  }

  guardarNoticia(noticia: Article){

    const existe = this.noticias.find( noti => noti.title === noticia.title );

   if (!existe) {
      this.noticias.unshift(noticia);
      this.storage.set('favoritos', this.noticias );
      this.toastMe("Agregado a Favoritos")
    } else{
    console.log('Noticia repetida:', this.noticias)
    this.toastMe("Ya estaba en Favoritos")
      
  }
  }
  

  async cargarFavoritos(){
 const favoritos = await this.storage.get('favoritos');
 if(favoritos){
  this.noticias = favoritos;
}
  }

  borrarNoticia(noticia:Article){
    this.noticias = this.noticias.filter(noti=> noti.title !== noti.title);
    this.storage.set('favoritos', this.noticias );
    this.toastMe("Eliminado de Favoritos")
  }
}
