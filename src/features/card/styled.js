import styled from "styled-components";

export const StyledCard = styled.div`
  background-color: ${({ theme }) => theme.cardBg};
  width: 100%;
  max-width: ${(props) => props.width || "400px"};
  min-height: ${(props) => props.height || "216px"};
  padding: ${(props) => props.padding || "30px"};

  @media (min-width: 992px) {
    max-width: ${(props) => props.width || "255px"};
  }
`;

export const StyledCardPrimary = styled(StyledCard)`
  border-top-width: 5px;
  border-top-style: solid;
  border-radius: 5px;
  border-top-color: ${(props) => {
    switch (props.type) {
      case "facebook":
        return props.theme.facebook;
      case "twitter":
        return props.theme.twitter;
      case "instagram":
        return props.theme.instagram;
      default:
        return props.theme.youtube;
    }
  }};
`;

export const StyledListCard = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: ${(props) => props.gap || "16px"}; ;
`;
