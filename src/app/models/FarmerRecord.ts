export class FarmerRecord {
  GvtId: number;
  LnRecId: number;
  OwnerNm: string;
  DOB: number;
  Location:string;
  AreaOfLand:number;
  NoSeedReq:number;
  bank: Bank;
  preMutationSketch: string;
  isFarmerRecApproved : boolean;
  eid:number;
  constructor() { }

}

export class Bank {
  AcNo: number;
  AdhrNo: number;
  MblNm: number;
  Addr: string;
  constructor() { }
}
