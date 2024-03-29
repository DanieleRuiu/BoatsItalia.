export class
Advertisment
{
  id:number=0;
  title:string='';
  description:string='';
  price:number=0;

  constructor(stringJson: string){
    const obj = JSON.parse(stringJson);
    this.id = obj.id;
    this.title = obj.title;
    this.description = obj.description;
    this.price = obj.price;
  }
}


