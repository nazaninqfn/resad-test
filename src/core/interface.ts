import { AxiosResponse } from "axios";

export interface IApiCaller {
  api: (arg: any) => Promise<any>;
  apiArguments?: any;
  onSuccess?: (arg: AxiosResponse) => void;
  onError?: (arg: any) => void;
  onEnd?: () => void;
  onStart?: () => void;
  toastMessage?: boolean;
  onErrorMessage?: string | null | string;
  onSuccessMessage?: string | null | string;
}

export interface IUser {
  id?: number,
  image?: string,
  nikname?: string,
  job?: string,
  active?: boolean,
  createdAt?:string
}


export interface IGuarding {
  user?: IUser,
  lastPresence?: string,
  postJob?: string,
  address?: string,
  phone?: string,
}

export interface IManitor {
  averageTime?: string,
  allResiver?: number,
  upsertExit?: string,
  countShift?: number,
  loadShift?: number,
  persnol?: IUser[]
}


export interface IDuty {
  id?: number,
  title?: string,
  time?: string
}


export interface IDuties {
  dutiesTitle?: string,
  users?: IUser[],
  duties?: IDuty[]
}

export interface IManagmentClient {
  users?: IUser[]
}

export interface IUserPanel {
  panelList?: IUser[]
  lastCreatedPanel?: IUser[]
}
