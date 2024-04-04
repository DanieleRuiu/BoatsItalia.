export class
Advertisment
{
  id:number=0;
  title:string='';
  description:string='';
  price:number=0;
  category: string='';
  email: string='';

  constructor(stringJson: string | null){
    if(stringJson!=null){
      const obj = JSON.parse(stringJson);
      this.id = obj.id;
      this.title = obj.title;
      this.description = obj.description;
      this.price = obj.price;
      this.category = obj.category
      this.email = obj.email
    }

  }
}


