// eslint-disable-next-line import/no-extraneous-dependencies
import { makeStyles } from "@material-ui/core/styles";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import palette from "theme/palette";

interface IChat {
  id: number | string;
  name: string;
  text: string;
  date: string;
  number: string | number;
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "flex-end",
    gap: 12,
    marginTop: "1rem",
  },
  chatHead: {
    backgroundColor: palette.info.lightBg,
    padding: "1rem",
    borderRadius: "10px 10px 10px 0px  ",
    width: "94%",
    position: "relative",
    "&::before": {
      content: '""',
      position: "absolute",
      bottom: 0,
      left: "-7px",
      //   backgroundColor: palette.info.lightBg,
      borderLeft: "10px solid transparent",
      borderRight: "10px solid transparent",
      borderBottom: `10px solid ${palette.info.lightBg}`,
    },
  },
  bottomText: { paddingTop: "0.3rem", color: palette.text.muted },
});

const chatData: IChat[] = [
  // {
  //   id: 1,
  //   name: "Sa",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti placeat accusantium illum laborum iure consectetur explicabo rem facere est recusandae. Cupiditate nostrum perspiciatis nulla delectus exercitationem commodi eligendi sint facilis!",
  //   date: "Jan 12,2023, 02:00 PM",
  //   number: "+911234567890",
  // },
];

function Chats() {
  const classes = useStyles();
  return (
    <Stack>
      {chatData?.map((item: IChat) => {
        return (
          <Stack>
            <Box className={`${classes.container}`}>
              <Box>
                <Avatar>{item?.name}</Avatar>
              </Box>
              <Box>
                <Box className={`${classes.chatHead}`}>
                  <Typography sx={{ fontSize: { xs: "1rem", xl: "1.2rem" } }}>
                    {item?.text}
                  </Typography>
                </Box>
                <Box
                  sx={{ paddingTop: "0.3rem", color: palette.text.secondary }}
                >
                  <Typography
                    sx={{ color: palette.text.muted }}
                    variant="body2"
                  >
                    <b>{item.date}</b>. sent from <b>{item.number}</b>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Stack>
        );
      })}
      {chatData.length === 0 && (
        <Typography sx={{ textAlign: "center" }}>No data found</Typography>
      )}
    </Stack>
  );
}

export default Chats;
