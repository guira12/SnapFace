import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';
import { Router } from '@angular/router';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  // rendre possible l'injection depuis l'exterieure à l'aide du decorateur
  @Input() faceSnap!:FaceSnap;

  textButtonSnap!:String;

  // service injection
  constructor(private faceSnapsService:FaceSnapsService,
              private router: Router){}
  

  ngOnInit(){
    this.textButtonSnap = "Snaper"
  }
  
  onRedirect():void{
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
  }

}
