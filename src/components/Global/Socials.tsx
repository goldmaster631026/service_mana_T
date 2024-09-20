import { memo, useMemo, type FC } from "react";
import { Twitter } from "@mui/icons-material";
import { FacebookRounded } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import Social from "./Social";
import { Bounce } from "react-reveal";
import { useResponsive } from "../../hooks/useResponsive";

const Socials: FC<SocialsProps> = (props) => {
  const { section } = props;

  const [
    tablet,
    miniLaptop,
    laptop,
    mobile,
    smallMobile,
    catMiniLaptop,
    desktop,
    newArrMobile,
    largeTablet,
  ] = useResponsive();

  const socialsData: SocialProps[] = useMemo(() => {
    return [
      {
        name: "twitter",
        link: "https://twitter.com",
        icon: (
          <Twitter
            fontSize={section == "footer" ? `medium` : "small"}
            className={`text-[${section == "footer" ? "#FF3C78" : "#315BFF"}] `}
          />
        ),
      },
      {
        name: "facebook",
        link: "https://facebook.com",
        icon: (
          <FacebookRounded
            fontSize={section == "footer" ? `medium` : "small"}
            className={`text-[${section == "footer" ? "#FF3C78" : "#315BFF"}] `}
          />
        ),
      },
      {
        name: "instagram",
        link: "https://instagram.com",
        icon: (
          <Instagram
            fontSize={section == "footer" ? `medium` : "small"}
            className={`text-[${section == "footer" ? "#FF3C78" : "#315BFF"}] `}
          />
        ),
      },
    ];
  }, []);

  return (
    <Bounce left duration={1000}>
      <div
        className="w-full h-[20%] flex items-center justify-center gap-3"
        style={{
          justifyContent: `${
            section == "subscriptions" && mobile
              ? "flex-end"
              : section == "footer" && mobile
              ? "flex-start"
              : "center"
          }`,
          paddingRight: `${
            section == "subscriptions" && mobile ? "2rem" : "0"
          }`,
          alignItems: `${
            section == "subscriptions" && mobile ? "flex-end" : "center"
          }`,
        }}
      >
        {socialsData.map((socialData) => {
          const { link, name, icon } = socialData;
          return (
            <Social
              key={link}
              link={link}
              name={name}
              icon={icon}
              section={section}
            />
          );
        })}
      </div>
    </Bounce>
  );
};

export default memo(Socials);
