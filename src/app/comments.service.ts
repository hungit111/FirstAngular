import { Injectable } from '@angular/core';
import { Comment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }
  getListCommentByPostId(id :string){
  let returnVal : Comment[];
      if(id=="1"){
          returnVal = [
            {
                name: "Hung",
                title: "Greate post",
                content: "This is content of greate title"
            },
            {
                name: "Minh",
                title: "Ok post",
                content: "This is content of ok title"
            },
            {
                name: "Chinh",
                title: "Bad post",
                content: "This is content of bad title"
            }

          ]                    
      }
      else
      {
          
      }
      return returnVal;
  }
}
