import { HttpClient } from '@angular/common/http';
import { RestApiServiceService } from './../rest-api-service.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  @ViewChild('alert', { static: true }) alert: ElementRef;
  @ViewChild('AddEMPLOYEE', { static: true }) AddEMPLOYEE: ElementRef;
  myObj: any;
  myEditData: any;
  id: number;
  message: string;
  constructor(private restApiService: RestApiServiceService, private route: ActivatedRoute, private location: Location) { }
  EmpForm = new FormGroup({
    name: new FormControl(''),
    salary: new FormControl(''),
    age: new FormControl(''),
  });
  EmpFormUpdate = new FormGroup({
    name: new FormControl(''),
    salary: new FormControl(''),
    age: new FormControl(''),
  });
  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    if (this.id !== 0) {
    this.getUpdateEmp();
    }
  }
  getUpdateEmp(): void {
    const id = +this.route.snapshot.paramMap.get('id');
   // if (id != null) {
    this.AddEMPLOYEE.nativeElement.classList.add('AddEMPLOYEE');
    this.restApiService.getUpdateEmp(id).toPromise().then(rdata => {
      this.myEditData = rdata;
     // console.log('this is update data' + this.myEditData.id);
      console.log(rdata);
    });
 // }
  }



  onAddSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.EmpForm.value);
    this.myObj = JSON.stringify(this.EmpForm.value);
    this.restApiService.setEmpData(this.myObj).toPromise().then(rdata => {
      console.log(rdata);
    });
    console.warn(this.myObj);
    this.EmpForm.reset();
    this.message = 'Record Created Successfully';
    this.alert.nativeElement.classList.remove('displayHide');
    this.alert.nativeElement.classList.add('show');
  }
  onUpdateSubmit() {
    // TODO: Use EventEmitter with form value
    // console.warn(this.EmpFormUpdate.value);
    this.myObj = JSON.stringify(this.EmpFormUpdate.value);
    this.restApiService.setUpdateEmpData(this.myObj, this.myObj.id).toPromise().then(rdata => {
      console.log(rdata);
    });
    // console.warn(this.myObj);
    this.EmpFormUpdate.reset();
    this.message = 'Record Updated Successfully';
    this.alert.nativeElement.classList.remove('displayHide');
    this.alert.nativeElement.classList.add('show');
  }
  closeAlert() {
    this.alert.nativeElement.classList.remove('show');
    this.alert.nativeElement.classList.add('displayHide');
  }

}
