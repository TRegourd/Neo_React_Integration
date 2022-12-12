import { createTheme } from "@mui/material";
import { blue, red } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "filter" },
          style: {
            borderColor: "#111434",
            border: `2px solid  `,
          },
        },
        {
          props: { variant: "card" },
          style: {
            backgroundColor: "#e7b100",
            color: "white",
          },
        },
      ],
    },
  },
});

export default theme;
