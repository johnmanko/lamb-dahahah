import { LabmdaRequestModel } from "./lambda-request.model";

export interface BucketObjectSummaryObjectModel {
    /**
     * Last modified date: "2025-03-06T17:48:23+00:00"
     */
    lastModified: string | Date; 
    /**
     * Size in bytes: 20746
     */
    size: number;
    /**
     * 
     */
    key: string;
}

export interface BucketObjectSummaryModel extends LabmdaRequestModel{
    bucket: string;
    prefix: string;
    objects: BucketObjectSummaryObjectModel[];
}
