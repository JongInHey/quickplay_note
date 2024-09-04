import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorMode,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
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
          <Text fontSize="18px" fontWeight="700">
            QuickPlay_Note
          </Text>
        </Link>
      </Box>
      <Box>
        <Text fontSize="20px" fontWeight="700" cursor="pointer">
          <HamburgerIcon onClick={onOpen} />
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader opacity="0.7">
            <Flex justifyContent="space-between">
              무엇을 해볼까요?
              <Box onClick={toggleColorMode}>
                {colorMode === "light" ? (
                  <>
                    <Text fontSize="14px" textAlign="center" opacity="0.5">
                      라이트모드
                    </Text>
                    <Box
                      w="70px"
                      h="30px"
                      borderRadius="20px"
                      bg="gray.400"
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-start"
                      cursor="pointer"
                    >
                      <Box
                        ml={1}
                        w="30px"
                        h="30px"
                        bg="#fff"
                        borderRadius="50%"
                      />
                    </Box>
                  </>
                ) : (
                  <>
                    <Text fontSize="14px" textAlign="center" opacity="0.5">
                      다크모드
                    </Text>
                    <Box
                      w="70px"
                      h="30px"
                      borderRadius="20px"
                      bg="#1df57f"
                      display="flex"
                      alignItems="center"
                      justifyContent="flex-end"
                      cursor="pointer"
                    >
                      <Box
                        mr={1}
                        w="30px"
                        h="30px"
                        bg="white"
                        borderRadius="50%"
                      />
                    </Box>
                  </>
                )}
              </Box>
            </Flex>
          </ModalHeader>

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
