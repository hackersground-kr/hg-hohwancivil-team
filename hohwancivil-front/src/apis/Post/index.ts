import { AxiosRequestConfig } from "axios";
import { WorkType } from "../../types/responseType";
import apiInstance from "../apiInstance";
import handleError from "../handleError";
import {
  userAddRequestType,
  writeAddRequestType,
} from "../../types/requestType";

/**
 * 전체 농촌 알바 목록을 불러옵니다
 */
export const getJobList = async () => {
  try {
    const res = await apiInstance.get<WorkType[]>(`/api/jobsList`);

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
    const res = await apiInstance.get<WorkType[]>(`/api/volunList`);

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
    const res = await apiInstance.get<WorkType>(`/api/writeOne/${id}`);

    return res.data;
  } catch (e) {
    handleError(e);
    return null;
  }
};

/**
 * 농촌 알바/봉사 글을 생성합니다
 */
export const createPost = async (
  body: writeAddRequestType,
  config: AxiosRequestConfig = {}
): Promise<WorkType> => {
  const res = await apiInstance.post(`/api/write`, body, { ...config });

  return res.data;
};

/**
 * 농촌 알바/봉사 글을 삭제합니다
 */
export const deletePost = async (postId: string) => {
  try {
    await apiInstance.delete(`/api/write/${postId}`, {
      data: {
        id: postId,
      },
    });

    return true;
  } catch (e) {
    handleError(e);
    return false;
  }
};

/**
 * 농촌 알바/봉사에 지원합니다
 */
export const createApply = async (
  body: userAddRequestType,
  config: AxiosRequestConfig = {}
): Promise<WorkType> => {
  const res = await apiInstance.post(`/api/apply`, body, { ...config });

  return res.data;
};
