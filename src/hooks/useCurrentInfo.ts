import { useCallback } from "react";
// SWR 보관용 구분키
export const CURRENT_INFO_KEY='/health-info'

export const useCurrentInfo = () => {
    // 현재 좌표정보를 SWR에 저장
const setCurrentInfo=useCallback(()=>{
    // SWR 업데이트
},[])

// 저장된 좌표를 SWR에 지우기
const clearCurrentInfo=useCallback(()=>{
    // SWR 초기화
},[])
    return {setCurrentInfo,clearCurrentInfo};

};
