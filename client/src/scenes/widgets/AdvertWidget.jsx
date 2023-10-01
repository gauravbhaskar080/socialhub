import { Typography, useTheme } from "@mui/material";
import { BASE_URL } from "api";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`${BASE_URL}/assets/giphy.gif`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Web Wizards</Typography>
        <Typography color={medium}>
          <a
            href="www.webwizardsagency.com"
            target="_blank"
            style={{ textDecoration :"none" , color:"grey"}}
          >
            webwizardsagency.com
          </a>
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Your Network, Your Community, Your World.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
