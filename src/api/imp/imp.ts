import { ApiResult, GET, PUT } from "..";

export interface SimpleSeriesParams {
    currentPage: number;
    pageSize: number;
    institutionIds: any;
    modality: any;
    sliceRange: any;
    bodyPartIds: any;
    patientSex: any;
    scanTypeIds: any;
    organIds: any;
}

export interface SimpleSeriesItem {
    records: [],
    total: number,
    size: number,
    current: number,
    pages: number
}

export interface SeriesItem {
    seriesNumber: string
    seriesUid: string
    seriesDescription: string,
    modality: string,
    pixelSpacing: string,
    sliceThickness: number,
    row: number,
    columns: number,
    instanceNum: number,
    patientAge: string
    seriesAt: string
    institutionName: string
    patientNumber: string
    patientName: string
    patientSex: string
    shapeInfo: string
    sliceInfo: string
    // bodyPart: number[],
    // scanType: number[]
    bodyPart: number,
    scanType: number
}

export interface UpdateImpDimensionParams {
    seriesId: string,
    operates: any
}

export interface SeriesLabelItem {
    id: string,
    fileName: string,
    fileLocation: string,
    createdAt: string,
    organId: number[],
    isLabelEdit: boolean
}

export interface SeriesInstanceItem {
    id: number,
    instanceNumber: number
    instanceUid: string
    sliceLocation: number
    imageUrl: string
}

export async function fetchSimpleSeries(params: SimpleSeriesParams): Promise<ApiResult<SimpleSeriesItem>> {
    return await GET('/imp/series', params);
}

export async function fetchSeries(seriesId: string): Promise<ApiResult<SeriesItem>> {
    return await GET(`/imp/series/${seriesId}`);
}

export async function updateImpBodyPartApi(params: UpdateImpDimensionParams) {
    return await PUT("/imp/bodyPart", params);
}

export async function updateImpScanTypeApi(params: UpdateImpDimensionParams) {
    return await PUT("/imp/scanType", params);
}

export async function getSeriesLabelApi(seriesId: string): Promise<ApiResult<SeriesLabelItem[]>> {
    return await GET(`/imp/label/${seriesId}`, null);
}

export async function updateLabelOrganApi(params: any) {
    return await PUT("/imp/labelOrgan", params);
}

export async function fetchSeriesInstance(seriesId: string): Promise<ApiResult<SeriesInstanceItem[]>> {
    return await GET(`/imp/instance/${seriesId}`, null);
}

