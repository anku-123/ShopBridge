import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { CommonService} from '../../_services/common.service';
import { environment } from '../../../environments/environment';




@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  product:any = {};
  listStatus = false;

  constructor( private router: Router, private common: CommonService) { }

  ngOnInit() {
    let current_url = this.router.url;
    let id = current_url.substring(current_url.length - 1);
    let screen_api = `${environment.API_ITEM_LIST}/${id}`;
    this.getInfo(screen_api);


  }

  getInfo(url){
    this.listStatus = false;
    this.common.getData(url).subscribe((res:any)=>{
      this.product = res;
      this.listStatus = true;
    });
  }


}
