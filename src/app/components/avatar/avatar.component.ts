import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  public foto: any;
  public fotoUrl: any;

  constructor() { }
  ngOnInit(){
    this.fotoUrl = localStorage.getItem('avatar');
  }
  async sacarFoto() {
    try {
      this.foto = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      this.fotoUrl = this.foto.dataUrl;
      localStorage.setItem('avatar', this.fotoUrl);
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  

}
