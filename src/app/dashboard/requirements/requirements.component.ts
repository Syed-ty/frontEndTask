import { Component, ViewChild, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResourceService } from '../resource.service';
import { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';
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
     public dialog: MatDialog,
     private service: ResourceService,
      private router: Router,
      public dialogss: MatDialog,
       private sharedService: SharedService,
       private toaster :ToastrService
       ) {
        this.ScarpForm = new FormGroup({
          searchUrl: new FormControl('', [
            Validators.required,
          ]),
        })
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }


onSubmit(){
  this.service.addApi(this.ScarpForm.value).subscribe((res)=>{
    console.log(res,'res');
  })
}



}
