import { LabmdaRequestModel } from "./lambda-request.model";

export interface LogEventModel {
    timestamp: number;
    message: string;
    ingestionTime: number;
}

export interface LogreadResultModel extends LabmdaRequestModel{
    regexPattern: string, 
    regexType: string, 
    original: LogEventModel[],
    augmented: LogEventModel[]
}