import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService {
    faceSnaps:FaceSnap[] = [
        {
          id: 0,
          title:"naruto",
          description:"Naruto Uzumaki peronnage principal du manga Naruto",
          createdDate:new Date(),
          snaps:100,
          imageUrl:"https://flxt.tmsimg.com/assets/p11944294_b_v9_ab.jpg",
          location:"201, rue des nouilles, pays du feu 38000"
        },
        {
          id: 1,
          title:"Livy",
          description:"ceci est la photo de Livy dans attack on titans",
          createdDate:new Date(),
          snaps:10,
          imageUrl:"https://w0.peakpx.com/wallpaper/29/649/HD-wallpaper-levi-ackerman-anime-attack-on-titan.jpg"
        }
  
      ];
    
    // pour avoir tout les FaceSnap en tableau
    getAllFaceSnaps():FaceSnap[]{
      return this.faceSnaps
    }
  
    // renvoie le premier faceSnap avec l'id trouvé(clé)
    // attention ne traite pas l'exception peut renvoyer undifined
    getFaceSnapById(id:number){
      const res = this.faceSnaps.find(element => element.id === id);
      if(res){
        return res;
      }
      else{
        throw new Error("faceSnap avec id introuvable");
      }
    }

    // service pour incrementer ou decrementer selon l'argument type (literal type)

    snapFaceSnapById(idSnap:number, type:"snap" | "unsnap"):void{
      const snapObj = this.getFaceSnapById(idSnap);
      // si snap incrementer si pas snap donc unsnap (car literal type) donc decrementer
      type=="snap" ? snapObj.snaps++ : snapObj.snaps-- ;
    }

}