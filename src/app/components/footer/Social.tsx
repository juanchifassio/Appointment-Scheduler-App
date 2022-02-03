import { FC } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { ButtonGroup, IconButton } from "@chakra-ui/react";

const SocialMedia = () => {
  return (
    <ButtonGroup variant="ghost" color="gray.600">
      <IconButton
        as="a"
        href="https://github.com/juanchifassio/Appointment-Scheduler-App"
        aria-label="Instagram"
        isRound={true}
        target="_blank"
        icon={<FaGithub fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/juan-martin-fassio-b012b0154/"
        aria-label="Linkedin"
        isRound={true}
        target="_blank"
        icon={<FaLinkedinIn fontSize="20px" />}
      />
    </ButtonGroup>
  );
};

export default SocialMedia;
