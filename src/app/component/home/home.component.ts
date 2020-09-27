import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService} from '../../_services/common.service';
import { environment } from '../../../environments/environment';
import { Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  itemForm: FormGroup;
  products = [];
  listStatus = false;
  showForm = false;

  constructor( private formbuilder: FormBuilder, private common: CommonService, private router: Router) { }

  ngOnInit() {
    this.showForm = true;
    this.itemForm = this.formbuilder.group({
      name: ['',[Validators.required]],
      price: ['',[Validators.required]],
      description: ['',[Validators.required]],
      image: ['',[]]
    })
       this.getInfo(environment.API_ITEM_LIST);

  }

  getInfo(url){
    this.listStatus = false;
    this.common.getData(url).subscribe((res:any)=>{
      this.products = res.items;
      this.listStatus = true;
    });
  }


  postInfo(url, postObject){
    this.common.postInfo(url,postObject).subscribe((res:any)=>{
    this.getInfo(environment.API_ITEM_LIST);
  });
}


  deleteProduct(id){
    let url = `${environment.API_ITEM_DELETE}/${id}`;
    this.common.deleteProdut(url).subscribe((res:any)=>  {
      this.getInfo(environment.API_ITEM_LIST);
    });
  }

 submit(){
  let tempObject:any = {};
  tempObject.name = this.itemForm.get('name').value;
  tempObject.price = this.itemForm.get('price').value;
  tempObject.description = this.itemForm.get('description').value;
  tempObject.image = this.itemForm.get('image').value;
  this.postInfo(environment.API_ITEM_UPLOAD,tempObject);
  this.showForm = false;
    setTimeout(() => {
      this.itemForm.reset();
      this.showForm = true;
    });
 }


 displayDetails(id){

   this.router.navigate(['/itemdetails', id]);

 }

}
