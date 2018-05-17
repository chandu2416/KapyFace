import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FarmerRecord } from '../models/FarmerRecord';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ManageFarmerRecordService {

  constructor(private http: Http) { }

  // API: GET /FarmerRecords/:GvtId
  public getFarmerRecordsByGvtId(GvtId: number) : Observable<any> {
    console.log("Inside getFarmerRecordsByGvtId method in manageFarmerRecord service");
    return this.http.get('/manageFarmerRecord/api/getFarmerRecordsByGvtId/'+GvtId) 
    .map(res => res.json() );
  }

    // API: GET /FarmerRecords/:LnRecId
  public getLandRecordsByLnRecId(LnRecId: number) : Observable<any> {
      console.log("Inside getLandRecordsByLnRecId method in manageFarmerRecord service");
      return this.http.get('/manageFarmerRecord/api/getLandRecordsByLnRecId/'+LnRecId) 
      .map(res => res.json() );
  }

  // API: POST /FarmerRecords/FarmerRecords
  public addFarmerRecordKapy(farmerRecord: FarmerRecord){
    console.log("Inside addFarmerRecordKapy method in manageFarmerRecord service");
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/manageFarmerRecord/api/addFarmerRecordKapy', JSON.stringify(farmerRecord), { headers: headers })
      .map(res => res.json());     
  }


    // API: POST /landRecords/landRecord[]
  public updateFarmerApprovedRecords(farmerRecord: FarmerRecord[]){
      console.log("Inside updateFarmerApprovedRecords method in manageFarmerRecord service");
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      return this.http.post('/manageFarmerRecord/api/updateFarmerRecordApprovedStatus', JSON.stringify(farmerRecord), { headers: headers })
        .map(res => res.json());     
    }
}
