import React, { useState } from "react";
import { Container, H3, P, Socials, H4, SuccessContainer } from "./styles";
import Form from "../Form";
import { ReactComponent as Happy } from "./happy_face.svg";
import { ReactComponent as Instagram } from "./icon_instagram.svg";
import { ReactComponent as Facebook } from "./icon_facebook.svg";
import { ReactComponent as Twitter } from "./icon_twitter.svg";

const ModalInner = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSuccess = () => {
    setShowSuccess(true);
  };

  const Input = () => (
    <Container>
      <H3>Sign up</H3>
      <P>
        Join our newsletter to be notified of when pre-release tickets for our
        first ever world tour go on sale
      </P>
      <Form handleSuccess={handleSuccess} />
    </Container>
  );

  const Success = ({ handleSuccess }) => (
    <SuccessContainer>
      <Happy />
      <H4>Yay we're so excited</H4>
      <P>
        We hope you are too. In the meantime you can follow us on social media
        to keep up to date.
      </P>
      <Socials>
        <Instagram />
        <Twitter />
        <Facebook />
      </Socials>
    </SuccessContainer>
  );

  return showSuccess ? <Success /> : <Input handleSuccess={handleSuccess} />;
};

export default ModalInner;
