import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

export const Main = styled.div`
  margin: 80px 0;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
`;

export const AlertWrapper = styled.div`
  border-radius: 16px;
  border: 1px solid #ebecf0;
  padding: 20px;
  margin: 30px 100px;
  flex-direction: row;
  display: flex;
  max-width: max-content;
`;

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IconWrapperSuccess = styled(IconWrapper)`
  background-color: #25a77b;
`;
export const IconWrapperWarning = styled(IconWrapper)`
  background-color: #fbad37;
`;
export const IconWrapperInfo = styled(IconWrapper)`
  background-color: #ee1c38;
`;
export const IconWrapperError = styled(IconWrapper)`
  background-color: #223ad3;
`;

export const AlertInnerWrapper = styled.div`
  max-width: 244px;
  padding-left: 16px;
`;

export const AlertTitle = styled.h3`
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.05px;
  padding-bottom: 8px;
  margin: 0;
  color: #05060a;
  font-weight: 700;
`;

export const AlertContent = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.05px;
  margin: 0;
  color: #05060a;
`;

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  color: #fff;
`;
