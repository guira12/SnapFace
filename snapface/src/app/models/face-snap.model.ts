export interface FaceSnap{
    id: number;
    title: string;
    description: string;
    createdDate: Date;
    snaps: number; // delight
    imageUrl: string;
    location?:string; // la localisation des snap est optionnel "selon le choix de l'utilisateur"
}