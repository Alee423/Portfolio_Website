import { Tag } from "./Tag";

export interface project{
    id:number;
    name:string;
    summary:string;
    description:string;
    pictures:string[];
    tags:Tag[];
    projectLink: string;
}