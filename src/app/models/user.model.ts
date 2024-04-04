
export class User{

  id:number=0;
  token:string='';
  username:string='';

  constructor(jsonString:string | null){
    if(jsonString != null){
      let user = JSON.parse(jsonString)
      this.id=user.id;
      this.token=user.token;
      this.username=user.username
    }

  }

}
