import { Component, OnInit, ViewChild,Input } from '@angular/core';
import { Service } from '../service';
import { ActivatedRoute,Router } from '@angular/router';
import { DetailComponent } from '../detail/detail.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
  listitems: string[] = [];
  commentList: string[] = [];
  previousPage: string;
  nextPage: string;
  @Input() currentURL: string;
  @Input() currentPage: number;
  results: object[] = [];
  selectedItem: object;
  clickDetail: boolean = false;
  @Input() category: string;
  name: string;
  id:number;
  @ViewChild(DetailComponent) child;

  constructor(private activateRoute: ActivatedRoute, private service: Service, private router: Router) { }

  ngOnInit() {
    this.listitems=[];
    console.info(this.currentURL);
    this.category = this.activateRoute.snapshot.params.category;
    if(this.currentURL==null){
      this.currentURL = this.activateRoute.snapshot.params.url;
    }
    if( this.currentPage==null){
      this.currentPage = 1;
    }
    this.service.getCategoriesByURL(this.currentURL ).then(result => {
      this.nextPage = result.n;
      this.previousPage = result.p;
      this.results = result['results'];
      const w = result['results'];
      for (let i in w){
        this.listitems.push(w[i].name);
      }
    });
  }

  goToPreviousPage(){
    this.currentURL = this.previousPage;
    this.currentPage--;
    this.listitems=[];
    this.service.getCategoriesByURL(this.previousPage).then(result => {
      this.nextPage = result.n;
      this.previousPage = result.p;
      this.results = result['results'];
      const w = result['results'];
      for (let i in w){
        this.listitems.push(w[i].name);
      }
    });
  }

  goToNextPage(){
    this.currentURL = this.nextPage;
    this.currentPage++;
    this.listitems=[];
    this.service.getCategoriesByURL(this.nextPage).then(result => {
      this.nextPage = result.n;
      this.previousPage = result.p;
      this.results = result['results'];
      const w = result['results'];
      for (let i in w){
        this.listitems.push(w[i].name);
      }
    });
  }

  showDetails(index: number, name: string) {
    this.selectedItem = this.results[index];
    this.id = (this.currentPage-1)*10+index;
    console.info(this.id);
    this.name = name;
    this.service.getCommentsByCategoryAndName(this.category,name).then(result => {
      const w=result.results;
      for (let i in w){
        this.commentList.push(w[i].comment);
      }
    });
  }

}
