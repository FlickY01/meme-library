export interface Meme {
    readonly id: number;
    title: string;
    imageUrl: string;
    likes: number;
    link?: string;
}
  
export interface MemeFormData {
    title: string;
    imageUrl: string;
    likes: number;
    link?: string;
}
  
export interface MemeValidationErrors {
    title?: string;
    imageUrl?: string;
    likes?: string;
    link?: string;
}
  
export enum MemeViewMode {
    TABLE = 'table',
    LIST = 'list'
}