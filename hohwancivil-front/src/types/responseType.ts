export interface WorkType {
  id: string;
  location: string;
  isClosed: boolean;
  title: string;
  startDate: string;
  endDate: string;
  details: string;
  salary: number;
  personnel: number;
  species: string;
  workingHour: number;
  contact: string;
  mealSleep: string;
}

export interface UserType {
  name: string;
  phoneNumber: string;
}

export interface mypageResponseType {
  user: UserType;
  userWrites: WorkType[];
  relatedWrites: WorkType[];
}

export interface jobListResponseType {
  jobList: WorkType[];
}

export interface volunListResponseType {
  volunList: WorkType[];
}
