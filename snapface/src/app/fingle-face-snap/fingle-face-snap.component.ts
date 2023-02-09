import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fingle-face-snap',
  templateUrl: './fingle-face-snap.component.html',
  styleUrls: ['./fingle-face-snap.component.scss']
})
export class FingleFaceSnapComponent {

  faceSnap!:FaceSnap;

  textButtonSnap!:String;

  // service injection
  constructor(private faceSnapsService:FaceSnapsService,
              private route: ActivatedRoute ){}
  

  ngOnInit(){
    this.textButtonSnap = "Snaper"
    // on cast avec + pour avoir un type number car sans le + on aura un string
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }
  
  onSnap(){
    if(this.textButtonSnap === "désnaper"){ // si deja snapé
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "unsnap"); // appelle au service pour snapper(liker)
      this.textButtonSnap = "Snaper"
    }else{ // si pas encore snapé
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,"snap"); // appelle au service pour snapper(liker)
      this.textButtonSnap = "désnaper"
    }
    
  }
}
