import { Component, ViewChild, OnInit } from '@angular/core';
import { ResourceService } from '../resource.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  ScarpForm!: FormGroup;

  constructor(
     private service: ResourceService,
      private router: Router,
       private toast: ToastrService,
       private route: ActivatedRoute
       ) {
        this.ScarpForm = new FormGroup({
          searchUrl: new FormControl('', [
            Validators.required,
          ]),
        })
  }

  ngOnInit(): void {
    const routeData = this.router.url;
     if(routeData === '/dashboard/screen1'){
      localStorage.clear();
      localStorage.removeItem('WebsiteDetails');
     }
  }

  ngAfterViewInit() {
  }




  showLoadingIndicator:Boolean = false
onSubmit(){
  this.showLoadingIndicator = true
  this.service.addApi(this.ScarpForm.value).subscribe((res)=>{
    if (!res.err) {
      this.showLoadingIndicator=false
      this.toast.success(res.message);
      localStorage.setItem('WebsiteDetails',JSON.stringify(res.response));
      this.ScarpForm.reset();
      this.router.navigateByUrl('/dashboard/screen2')
    } else {
      this.toast.error(res.message);
    }
  }, err => {
    if (err.status) {
      this.showLoadingIndicator = false
      this.toast.error(err.error.message);
    } else {
      this.showLoadingIndicator= false;
      this.toast.error("CONNECTION_ERROR");
    }
  });
   }


}
