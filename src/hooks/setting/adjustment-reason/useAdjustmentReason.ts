import useGetAllAdjustmentReasonWithoutPagination from "hooks/querys/setting/adjustmentReason/useGetAllAdjustmentReasonWithoutPagination";
import { useEffect, useState } from "react";

interface IMenuItem {
  id: string;
  value?: string;
}
function useAdjustmentReason() {
  const [adjustmentReason, setAdjustmentReason] = useState<IMenuItem[]>([]);
  const { data: adjustmentReasonResponse } = useGetAllAdjustmentReasonWithoutPagination();

  useEffect(() => {
    if (adjustmentReasonResponse?.data) {
      const response = adjustmentReasonResponse.data.map((item) => {
        return {
          id: String(item.id),
          value: item.name,
        };
      });
      setAdjustmentReason(response);
    }
  }, [adjustmentReasonResponse]);

  return {
    adjustmentReason,
  };
}

export default useAdjustmentReason;