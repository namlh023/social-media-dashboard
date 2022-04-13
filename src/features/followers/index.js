import iconFacebook from "../../assets/images/icon-facebook.svg";
import iconInstagram from "../../assets/images/icon-instagram.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconYoutube from "../../assets/images/icon-youtube.svg";
import iconUp from "../../assets/images/icon-up.svg";
import iconDown from "../../assets/images/icon-down.svg";
import { StyledCardPrimary, StyledListCard } from "../card/styled";
import { StyledFollower } from "./styled";
import { Flex } from "../helpers/styled";

const followers = [
  {
    id: 1,
    type: "facebook",
    icon: iconFacebook,
    name: "@nathanf",
    followers: "1987",
    today: 12,
  },
  {
    id: 2,
    type: "twitter",
    icon: iconTwitter,
    name: "@nathanf",
    followers: "1044",
    today: 99,
  },
  {
    id: 3,
    type: "instagram",
    icon: iconInstagram,
    name: "@realnathanf",
    followers: "11k",
    today: 1099,
  },
  {
    id: 4,
    type: "youtube",
    icon: iconYoutube,
    name: "Nathan F.",
    followers: "8239",
    today: -144,
  },
];

export default function Follower() {
  return (
    <StyledFollower>
      <StyledListCard>
        {followers.map((f) => (
          <StyledCardPrimary as="li" key={f.id} type={f.type}>
            <Flex jc="space-between" direction="column" gap="24px">
              <Flex className="header" gap="10px">
                <img src={f.icon} alt="" aria-hidden="true" />
                <p className="name">{f.name}</p>
              </Flex>
              <Flex direction="column" gap="10px">
                <h2 className="h2-like">{f.followers}</h2>
                <p className="p-like">FOLLOWERS</p>
              </Flex>
              <Flex gap="6px">
                <img
                  src={f.today > 0 ? iconUp : iconDown}
                  alt=""
                  aria-hidden="true"
                />
                <p>{Math.abs(f.today)} Today</p>
              </Flex>
            </Flex>
          </StyledCardPrimary>
        ))}
      </StyledListCard>
    </StyledFollower>
  );
}
