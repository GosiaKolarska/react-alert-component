import {
  faCheckCircle,
  faXmarkCircle,
  faInfoCircle,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

import {
  Main,
  AlertWrapper,
  AlertContent,
  AlertInnerWrapper,
  AlertTitle,
  IconWrapperInfo,
  IconWrapperError,
  IconWrapperSuccess,
  IconWrapperWarning,
  StyledFontAwesomeIcon
} from "./AlertStyles";

export default function AlertComponent() {
  return (
    <Main>
      <AlertWrapper>
        <IconWrapperSuccess>
          <StyledFontAwesomeIcon icon={faCheckCircle} />
        </IconWrapperSuccess>
        <AlertInnerWrapper>
          <AlertTitle>Basic alert title</AlertTitle>
          <AlertContent>
            This is a message that displays a brief important message to the
            user
          </AlertContent>
        </AlertInnerWrapper>
      </AlertWrapper>

      <AlertWrapper>
        <IconWrapperWarning>
          <StyledFontAwesomeIcon icon={faXmarkCircle} />
        </IconWrapperWarning>
        <AlertInnerWrapper>
          <AlertTitle>Basic alert title</AlertTitle>
          <AlertContent>
            This is a message that displays a brief important message to the
            user
          </AlertContent>
        </AlertInnerWrapper>
      </AlertWrapper>

      <AlertWrapper>
        <IconWrapperInfo>
          <StyledFontAwesomeIcon icon={faInfoCircle} />
        </IconWrapperInfo>
        <AlertInnerWrapper>
          <AlertTitle>Basic alert title</AlertTitle>
          <AlertContent>
            This is a message that displays a brief important message to the
            user
          </AlertContent>
        </AlertInnerWrapper>
      </AlertWrapper>

      <AlertWrapper>
        <IconWrapperError>
          <StyledFontAwesomeIcon icon={faExclamationCircle} />
        </IconWrapperError>
        <AlertInnerWrapper>
          <AlertTitle>Basic alert title</AlertTitle>
          <AlertContent>
            This is a message that displays a brief important message to the
            user
          </AlertContent>
        </AlertInnerWrapper>
      </AlertWrapper>
    </Main>
  );
}
