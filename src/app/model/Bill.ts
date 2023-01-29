export class Bill{

    title:string;
    description?:string = "";
    status?:string = "";
    active?:boolean = true;
    keyWords?:string[] = [];
    date:string = "";
    votes:number; 

    constructor(title:string, date:string){
        this.title=title;
        this.date = date;
        this.votes = 1;
    }

}