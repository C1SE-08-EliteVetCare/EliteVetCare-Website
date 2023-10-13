import * as request from "../utils/httpRequest";

const PROVINCES_ENDPOINT = '/province';

export const getProvinces = async () => {
  try {
    return await request.getAddress(PROVINCES_ENDPOINT, {});
  } catch (error) {
    return error
  }
};

const DISTRICT_ENDPOINT = '/province/district/'
export const getDistrict = async (idProvince) => {
  try {
    return await request.getAddress(`${DISTRICT_ENDPOINT}${idProvince}`, {});
  } catch (error) {
    return error
  }
};

const WARD_ENDPOINT = '/province/ward/'
export const getWard = async (idDistrict) => {
  try {
    return await request.getAddress(`${WARD_ENDPOINT}${idDistrict}`, {});
  } catch (error) {
    return error
  }
};
