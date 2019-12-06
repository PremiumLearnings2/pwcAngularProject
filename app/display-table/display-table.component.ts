import { RestApiServiceService } from './../rest-api-service.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-display-table',
  templateUrl: './display-table.component.html',
  styleUrls: ['./display-table.component.css']
})
export class DisplayTableComponent implements OnInit {
  details  = [];
  EDetail: any;
  display = 'none';
  p = 1;
 employeename = '';

  constructor(private restApiService: RestApiServiceService) { }

  DeleteEmp() {
    this.restApiService.DeleteEmp(this.EDetail.id).toPromise().then(rdata => {
      this.ngOnInit();
      console.log(rdata);
      this.onCloseHandled();
    });
  }

   openModal(DataObj: any) {
    this.EDetail = DataObj;
    this.display = 'block';
     }

   onCloseHandled() {

            this.display = 'none';
         }


  ngOnInit() {
    this.restApiService.getEmpData().subscribe((data: any[]) => {
      console.log(data);
      this.details = data;

    });
}

}
