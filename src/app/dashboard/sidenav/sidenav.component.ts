import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceService } from '../resource.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  urls:any = [];
  constructor(
    private service: ResourceService,
     private router: Router,
      private toast: ToastrService
      ) {
      //  this.ScarpForm = new FormGroup({
      //    searchUrl: new FormControl('', [
      //      Validators.required,
      //    ]),
      //  })
 }


  sharedData : any;
  TypographyArray:any[] = [];
  themesArray:any[] = [];
    ngOnInit(){
     this.sharedData = JSON.parse(localStorage.getItem('WebsiteDetails') as string);
     console.log(this.sharedData,'fgh')
     this.TypographyArray = this.sharedData?.typography;
     this.themesArray = this.sharedData?.themesOfLogo
    }

    onSelectFile(event:any) {
      if (event.target.files && event.target.files[0]) {
          var filesAmount = event.target.files.length;
          for (let i = 0; i < filesAmount; i++) {
                  var reader = new FileReader();

                  reader.onload = (event:any) => {
                    console.log(event.target.result);
                     this.urls.push(event.target.result);
                  }

                  reader.readAsDataURL(event.target.files[i]);
          }
      }
    }


}
