import { useContext } from "react";
import { StyledLine, StyledHeader, StyledText, StyledTitle } from "./styled";
import Switch from "../../uiKit/switch";
import useWindowSize from "../../hooks/useWindowSize";
import { ThemeContext } from "../../contexts/context";

export default function Header() {
  const { width } = useWindowSize();
  const { isDarkTheme, setIsDarkTheme } = useContext(ThemeContext);

  const handleToggle = () => setIsDarkTheme(!isDarkTheme);

  return (
    <StyledHeader>
      <div className="title">
        <StyledTitle>Social Media Dashboard</StyledTitle>
        <StyledText>Total Followers: 23,004</StyledText>
      </div>
      {width <= 922 && <StyledLine />}
      <div className="mode">
        <StyledText>Dark Mode</StyledText>
        <Switch checked={isDarkTheme} onChange={handleToggle} />
      </div>
    </StyledHeader>
  );
}
