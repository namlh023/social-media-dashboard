import { StyledHeader, StyledText, StyledTitle } from "./styled";

export default function Header() {
  return (
    <StyledHeader>
      <div>
        <StyledTitle>Social Media Dashboard</StyledTitle>
        <StyledText>Total Followers: 23,004</StyledText>
      </div>
      <div>
        <StyledText>Dark Mode</StyledText>
      </div>
    </StyledHeader>
  );
}
