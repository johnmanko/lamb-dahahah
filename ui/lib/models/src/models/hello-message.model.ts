import { LabmdaRequestModel } from "./lambda-request.model";

export interface HelloMessageModel extends LabmdaRequestModel{
    translation: string;
    language: string;
}