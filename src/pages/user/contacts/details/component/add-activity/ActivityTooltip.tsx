import {
  ButtonGroup,
  FormControl,
  FormHelperText,
  Tooltip,
} from "@mui/material";
import Button from "@mui/material/Button";
import palette from "theme/palette";

interface IProps {
  handleActivitySelect?: (id: number) => void;
  error?: boolean;
  helperText?: string;
  values?: any;
  activities?: any[];
}

function ActivityToolTip(props: IProps) {
  const { handleActivitySelect, error, helperText, values, activities } = props;

  return (
    <FormControl error={error}>
      <ButtonGroup
        sx={{
          marginBottom: "1rem",
          "& button": {
            padding: "8px",
          },
        }}
      >
        {activities &&
          activities?.map((item: any) => {
            return (
              <Tooltip title="Call">
                <Button
                  sx={{
                    backgroundColor:
                      values.activityTypeId === item.id
                        ? palette.info.dark
                        : palette.info.main,
                  }}
                  variant="contained"
                  onClick={() => handleActivitySelect?.(item.id)}
                >
                  {item.activityTypeName}
                </Button>
              </Tooltip>
            );
          })}
        <FormHelperText>{helperText}</FormHelperText>
      </ButtonGroup>
    </FormControl>
  );
}

export default ActivityToolTip;
