import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent {
  public foto: any;
  public fotoUrl: any;

  constructor() { }

  async sacarFoto() {
    try {
      this.foto = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri,
        //source: CameraSource.Camera
      });

      this.fotoUrl = this.foto.webPath;
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
  }

  

}
