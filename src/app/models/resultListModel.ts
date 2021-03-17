import { ResultModel } from "./ResultModel";

export interface ResultListModel<T> extends ResultModel{
    data:T[]
}
