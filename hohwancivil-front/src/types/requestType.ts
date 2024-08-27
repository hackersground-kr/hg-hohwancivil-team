export interface requestId {
  id: string;
}

export interface userAddRequestType {
  name: string;
  phoneNumber: string;
}

export interface writeAddRequestType {
  title: string;
  species: string;
  startDate: string;
  endDate: string;
  personnel: number;
  salary: number;
  contact: string;
  mealSleep: string;
  workingHour: number;
  location: string;
  details: string;
  isClosed: boolean;
}

export interface userApplyRequestType {
  name: string;
  phoneNumber: string;
  pr: string;
}
