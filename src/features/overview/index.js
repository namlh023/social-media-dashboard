import { StyledCard, StyledListCard } from "../card/styled";
import { StyledOverview } from "./styled";
import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconYoutube from "../../assets/images/icon-youtube.svg";
import iconUp from "../../assets/images/icon-up.svg";
import iconDown from "../../assets/images/icon-down.svg";
import { Flex } from "../helpers/styled";

const overviews = [
  {
    id: 1,
    icon: iconFacebook,
    type: "Page Views",
    number: "87",
    percent: 3,
  },
  {
    id: 2,
    icon: iconFacebook,
    type: "Likes",
    number: "52",
    percent: -2,
  },
  {
    id: 3,
    icon: iconInstagram,
    type: "Likes",
    number: "5462",
    percent: 2257,
  },
  {
    id: 4,
    icon: iconInstagram,
    type: "Profile Views",
    number: "52k",
    percent: 1375,
  },
  {
    id: 5,
    icon: iconTwitter,
    type: "Retweets",
    number: "117",
    percent: 303,
  },
  {
    id: 6,
    icon: iconTwitter,
    type: "Likes",
    number: "507",
    percent: 553,
  },
  {
    id: 7,
    icon: iconYoutube,
    type: "Likes",
    number: "107",
    percent: -19,
  },
  {
    id: 8,
    icon: iconYoutube,
    type: "Total Views",
    number: "1407",
    percent: -12,
  },
];

export default function Overview() {
  return (
    <StyledOverview>
      <h3 className="h3-like">Overview - Today</h3>
      <StyledListCard $padding="16px">
        {overviews.map((o) => {
          return (
            <StyledCard key={o.id} as="li" $height="0px">
              <Flex $direction="column" $ai="stretch" $gap="48px">
                <Flex $jc="space-between">
                  <p className="p-like">{o.type}</p>
                  <img src={o.icon} alt="" aria-hidden="true" />
                </Flex>
                <Flex $jc="space-between">
                  <p className="number">{o.number}</p>
                  <Flex $gap="6px">
                    <img
                      src={o.percent > 0 ? iconUp : iconDown}
                      alt=""
                      aria-hidden="true"
                    />
                    <p className={o.percent > 0 ? "up" : "down"}>
                      {Math.abs(o.percent)}%
                    </p>
                  </Flex>
                </Flex>
              </Flex>
            </StyledCard>
          );
        })}
      </StyledListCard>
    </StyledOverview>
  );
}
