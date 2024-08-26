import { WorkType } from "../../types/responseType";
import apiInstance from "../apiInstance";
import handleError from "../handleError";

/**
 * 전체 농촌 알바 목록을 불러옵니다
 */
export const getJobList = async () => {
  try {
    const res = await apiInstance.get<WorkType[]>(`/jobsList`);

    return res.data;
  } catch (e) {
    handleError(e);
    return null;
  }
};

/**
 * 전체 농촌 봉사 목록을 불러옵니다
 */
export const getVolList = async () => {
  try {
    const res = await apiInstance.get<WorkType[]>(`/volunList`);

    return res.data;
  } catch (e) {
    handleError(e);
    return null;
  }
};

/**
 * 농촌 알바/봉사 글 하나를 조회합니다
 */
export const getDetail = async (id: string) => {
  try {
    const res = await apiInstance.get<WorkType>(`/writeOne/${id}`);

    return res.data;
  } catch (e) {
    handleError(e);
    return null;
  }
};

/**
 * 농촌 알바/봉사 글을 생성합니다
 */

/**
 * 농촌 알바/봉사 글을 삭제합니다
 */
