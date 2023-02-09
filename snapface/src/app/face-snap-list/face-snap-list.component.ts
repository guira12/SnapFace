import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.services';
@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent {

  faceSnapsArray !: FaceSnap[];

  constructor(private faceSnapsService:FaceSnapsService){

  }
  ngOnInit() {
    this.faceSnapsArray = this.faceSnapsService.getAllFaceSnaps();
  }
}
