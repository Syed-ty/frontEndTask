import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceService } from '../resource.service';
import { ToastrService } from 'ngx-toastr';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit,AfterViewInit {
  urls:any = [];
  constructor(
    private service: ResourceService,
     private router: Router,
      private toast: ToastrService,
      private cdr: ChangeDetectorRef
      ) {

 }


  sharedData : any;
  TypographyArray:any[] = [];
  themesArray:any[] = [];
  selectedImageSrc: any;

    ngOnInit(){

    }

    ngAfterViewInit() {
        this.sharedData = JSON.parse(localStorage.getItem('WebsiteDetails') as string);
        this.TypographyArray = this.sharedData?.typography;
        this.themesArray = this.sharedData?.themesOfLogo;
        this.selectedImageSrc = this.sharedData?.logooFWebsite;
        this.cdr.detectChanges();
    }


    showLoadingIndicator:Boolean = false;

    onFileSelected(event: any) {
      this.showLoadingIndicator = true;
      const file: File = event.target.files[0];
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImageSrc = e.target.result;
        let obj ={
          "selectedFile":this.selectedImageSrc
        }
  this.service.EditApi(this.sharedData?._id,obj).subscribe((res)=>{
    if (!res.err) {
      this.showLoadingIndicator=false;
      this.toast.success(res.message);
      localStorage.clear();
      localStorage.removeItem('WebsiteDetails');
      this.cdr.detectChanges();
      this.themesArray= res.response.themesOfLogo;
      localStorage.setItem('WebsiteDetails',JSON.stringify(res.response));
    } else {
      this.toast.error(res.message);
    }
  }, err => {
    if (err.status) {
      this.showLoadingIndicator = false;
      this.toast.error(err.error.message);
    } else {
      this.showLoadingIndicator= false;
      this.toast.error("CONNECTION_ERROR");
    }
  });
      };
      reader.readAsDataURL(file);
    }



}
