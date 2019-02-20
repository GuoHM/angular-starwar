/**
 * Created by User on 16/2/2019.
 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class Service {

  APIURL = 'https://swapi.co/api/';
  commentURL =  'http://localhost:8080/Comment/';

  constructor(private http: HttpClient) { }

  getCategoriesByURL(url : string){
    return (
      this.http.get(url)
        .toPromise() //Convert the result to a promise
        .then(result => {
          return ({
            results:result['results'],
            n:result['next'],
            p:result['previous'],
            name:result['name']
          })
        })
    )
  }

  getCommentsByCategoryAndName( category:string, name:string){
    return (
      this.http.get(this.commentURL + 'GetComments?category=' + category + '&name=' + name )
        .toPromise() //Convert the result to a promise
        .then(result => {
          return ({
            results:result
          })
        })
    )
  }

  addComment( category:string,name:string,comment:string){
    return(
    this.http.get(this.commentURL+'AddComment?category='+category+'&name='+name+'&comment='+comment)
      .toPromise() //Convert the result to a promise
      .then(result => {
        return ({
          result:result['result']
        })
      })
    )
  }

}

