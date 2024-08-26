import { mypageResponseType } from "../../types/responseType";
import apiInstance from "../apiInstance";
import handleError from "../handleError";

/**
 * 마이페이지 정보를 불러옵니다
 */
export const getMyPage = async (id: string) => {
  try {
    const res = await apiInstance.get<mypageResponseType>(`/myPage/${id}`);

    return res.data;
  } catch (e) {
    handleError(e);
    return null;
  }
};
