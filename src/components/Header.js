import { HamburgerIcon, QuestionIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Container
      maxW="450px"
      w="100%"
      h="50px"
      pos="fixed"
      left="50%"
      top="0"
      zIndex={99}
      transform="translateX(-50%)"
      p="10px 20px 15px"
      bg="#463f3a"
      color="#fff"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Box>
        <Link to={"/"}>
          <Text fontSize="22px" fontWeight="700">
            QuickPlay_Note
          </Text>
        </Link>
      </Box>
      <Box>
        <Text fontSize="22px" fontWeight="700" cursor="pointer">
          <HamburgerIcon onClick={onOpen} />
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader opacity="0.7">무엇을 해볼까요?</ModalHeader>
          <ModalCloseButton />
          <ModalBody mt={3}>
            <VStack
              alignItems="flex-start"
              fontSize="22px"
              fontWeight="700"
              spacing={4}
            >
              <Link to={"/"} onClick={onClose}>
                <Text>홈</Text>
              </Link>
              <Link to={"/minigame/0"} onClick={onClose}>
                <Text>TicTacToe</Text>
              </Link>
              <Link to={"/minigame/1"} onClick={onClose}>
                <Text>반응속도 테스트</Text>
              </Link>
              <Link to={"/note"} onClick={onClose}>
                <Text>메모장</Text>
              </Link>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button variant="outline" onClick={onClose}>
              닫기
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};
