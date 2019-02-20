import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Item } from '../model'
import { Service } from '../service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input() currentURL:string;
  @Input() currentPage:string;
  @Input() detail: object;
  @Input() category:string;
  @Input() name:string;
  @Input() id:number;
  @Input() comments: string[] = [];

  constructor(private service: Service,private dialog: MatDialog) { }

  ngOnInit() {
    console.info(this.currentURL);
  }

  back() {
    this.detail=null;
  }

  addComment(form: NgForm) {
    this.service.addComment(this.category,this.name,form.value['comment']).then(result => {
      const dialogRef = this.dialog.open(SuccessPopup);
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './success.popup.html'
})
export class SuccessPopup {

  constructor(public dialogRef: MatDialogRef<SuccessPopup>) {
  }

  onNoClick(): void {
    this.dialogRef.close();
    window.location.reload();
  }
}

export class GoBack{
  constructor(public goBack:Object){}
}
