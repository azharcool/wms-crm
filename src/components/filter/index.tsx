import { Box, SelectChangeEvent, Stack } from "@mui/material";
import DateRangePickerFull from "components/date-range-picker-full";
import moment from "moment";
import { useFetchLeadSources } from "pages/admin/settings/screens/lead-source/query/useFetchLeadSources";
import { useFetchLeadStatuses } from "pages/admin/settings/screens/lead-status/query/useFetchLeadStatuses";
import {
  IFilterType,
  IHandleFilterUrl,
} from "pages/user/contacts/components/TableToolBar";
import { IMenuItem } from "pages/user/contacts/components/contact-form/optionData";
import { useEffect, useState } from "react";
import { dateFormatter } from "utils";
import Select from "./Select";
import { camp } from "./filterdata";

export interface DateRange {
  startDate: string;
  endDate: string;
  key: string;
}

interface IFilterState {
  campaign: string;
  stage: string;
  source: string;
  tag: string;
  files: string;
}

interface IFilter {
  handlefilterUrl?: IHandleFilterUrl;
}

function Filter(props: IFilter) {
  const { handlefilterUrl } = props;
  const [filter, setFilter] = useState<IFilterState>({
    campaign: "",
    stage: "",
    source: "",
    tag: "",
    files: "",
  });
  const [leadStatus, setLeadStatus] = useState<IMenuItem[]>([]);
  const [leadSource, setLeadSource] = useState<IMenuItem[]>([]);
  const [dateRange, setDateRange] = useState<DateRange>();
  const [isVisible, setIsVisible] = useState(false);
  const { data: leadStatuses } = useFetchLeadStatuses(0, 0, false);
  const { data: leadSources } = useFetchLeadSources(0, 0, false);

  const handleCampaign = (e: SelectChangeEvent) => {
    setFilter({ ...filter, campaign: e.target.value });
  };
  const handleStage = (e: SelectChangeEvent) => {
    const id = e.target.value.split(",")[0];
    setFilter({ ...filter, stage: e.target.value });

    if (handlefilterUrl) {
      handlefilterUrl(id, "leadstatusid");
    }
  };

  const handleClear = (name: keyof IFilterState, type?: IFilterType) => {
    setFilter({ ...filter, [name]: "" });
    if (handlefilterUrl && type) {
      handlefilterUrl("", type);
    }
  };

  const handleSource = (e: SelectChangeEvent) => {
    const id = e.target.value.split(",")[0];
    setFilter({ ...filter, source: e.target.value });

    if (handlefilterUrl) {
      handlefilterUrl(id, "leadsourceid");
    }
  };

  const handleTag = (e: SelectChangeEvent) => {
    setFilter({ ...filter, tag: e.target.value });
  };
  const handleFile = (e: SelectChangeEvent) => {
    setFilter({ ...filter, files: e.target.value });
  };
  const handleDateRange = (e: any) => {
    // setDateRange(e);
    setIsVisible((state) => !state);
  };

  useEffect(() => {
    const leadStatusOption: any = [];
    leadStatuses?.data?.map((item: any) => {
      return leadStatusOption.push({
        id: item?.id,
        value: item?.leadStatusName,
      });
    });
    setLeadStatus(leadStatusOption);
  }, [leadStatuses]);

  useEffect(() => {
    const leadSourceOption: any = [];
    leadSources?.data?.map((item: any) => {
      return leadSourceOption.push({
        id: item?.id,
        value: item?.leadSourceName,
      });
    });
    setLeadSource(leadSourceOption);
  }, [leadSources]);

  const menuItems = [
    {
      id: 1,
      value: "item",
    },
  ];

  const onChange = (ranges: DateRange) => {
    setDateRange(ranges);
    const startDate = moment(ranges.startDate).format("YYYY-MM-DD");
    const endDate = moment(ranges.endDate).format("YYYY-MM-DD");
    const rangesStr = `${startDate}&${endDate}`;
    if (handlefilterUrl) {
      handlefilterUrl(rangesStr, "From");
    }
  };

  const startDateFormat = dateRange?.startDate
    ? dateFormatter(dateRange?.startDate, true)
    : "From ";

  const endDateFormat = dateRange?.startDate
    ? dateFormatter(dateRange?.endDate, true)
    : "To";

  return (
    <Stack direction="column" marginTop={2} rowGap={2}>
      <Stack direction="row" gap={4} width="100%">
        <Select
          handleChange={handleCampaign}
          menuItems={camp}
          name="filtercampaign"
          placeholder="Select Campaign"
          selectValue={filter?.campaign}
          onClear={() => {
            handleClear("campaign");
          }}
        />
        <Select
          handleChange={handleTag}
          menuItems={menuItems}
          name="filterTag"
          placeholder="Select Tag"
          selectValue={filter?.tag}
          onClear={() => {
            handleClear("tag");
          }}
        />
      </Stack>

      <Stack direction="row" gap={4} width="100%">
        <Select
          hasValues
          handleChange={handleStage}
          menuItems={leadStatus}
          name="filterStage"
          placeholder="Select Stage"
          selectValue={filter?.stage}
          onClear={() => {
            handleClear("stage", "leadstatusid");
          }}
        />
        <Select
          handleChange={handleFile}
          menuItems={menuItems}
          name="filterFile"
          placeholder="Select Files"
          selectValue={filter?.files}
          onClear={() => {
            handleClear("files");
          }}
        />
      </Stack>

      <Stack direction="row" gap={4} width="100%">
        <Select
          hasValues
          handleChange={handleSource}
          menuItems={leadSource}
          name="filterSource"
          placeholder="Select Source"
          selectValue={filter?.source}
          onClear={() => {
            handleClear("source", "leadsourceid");
          }}
        />
        <Select
          isInput
          handleChange={() => {}}
          handleFocus={handleDateRange}
          name="dateRange"
          placeholder="Select Date"
          selectValue={`${startDateFormat} - ${endDateFormat}`}
          onClear={() => {
            setDateRange(undefined);
            if (handlefilterUrl) {
              handlefilterUrl("", "From");
            }
          }}
        />
        <Box
          sx={{
            display: isVisible ? "block" : "none",
            position: "absolute",
            zIndex: "999",
          }}
          onMouseLeave={() => {
            setIsVisible(false);
          }}
        >
          <DateRangePickerFull handleChange={onChange} />
        </Box>
      </Stack>
    </Stack>
  );
}

export default Filter;
