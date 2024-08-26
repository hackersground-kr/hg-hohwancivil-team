import {
  Button,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Spacer,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { RxAvatar } from "react-icons/rx";
import { IoMenuOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
//import { useState } from 'react';
/**
 * todo
 * 로그인한 유저인지..
 * + 좀 더 이쁘게 꾸미기
 * 상단 고정 + 라우터 레이아웃..
 */

const Header = () => {
  //const [isUser, setIsUser] = useState(false);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current) {
      navigate(`/keyword?search=${inputRef.current.value}`);
      inputRef.current.value = "";
    }
  };

  return (
    <HStack
      backgroundColor="white"
      zIndex={3}
      style={{
        width: "100vw",
        height: "5.5rem",
        borderBottom: "1px solid #D4D4D4",
        position: "fixed",
        top: "0",
      }}
    >
      <HStack>
        <Button
          _hover="transparent"
          backgroundColor="transparent"
          marginLeft={isLargerThan768 ? "2rem" : ".5rem"}
          fontSize={isLargerThan768 ? "1.5rem" : "1rem"}
          onClick={() => navigate("/")}
        >
          의성으로 오농
        </Button>
        <form onSubmit={handleSubmit}>
          <InputGroup marginLeft={isLargerThan768 ? "2rem" : "1rem"}>
            <Input placeholder="검색어를 입력하세요" ref={inputRef} />
            <InputRightElement width={isLargerThan768 ? "2rem" : "1rem"}>
              <Button type="submit">
                <Icon color="gray.300" fontSize="1.8rem" as={IoSearch} />
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
      </HStack>
      <Spacer />
      {isLargerThan768 ? (
        <HStack spacing={3} marginRight="1rem">
          <Button
            _hover="transparent"
            leftIcon={<AiOutlineUserAdd size={25} />}
            iconSpacing={1}
            onClick={() => navigate("/upload/work")}
            backgroundColor="transparent"
          >
            <Text style={{ marginLeft: ".5rem" }} fontSize="1.2rem">
              모집하기
            </Text>
          </Button>
          <Popover>
            <PopoverTrigger>
              <Button
                _hover="transparent"
                leftIcon={<RxAvatar size={25} />}
                iconSpacing={1}
                backgroundColor="transparent"
              >
                <Text fontSize="1.2rem">마이</Text>
              </Button>
            </PopoverTrigger>
            <Portal>
              <PopoverContent
                backgroundColor="white"
                borderRadius="1rem"
                border="1px solid #F0F0F0"
                zIndex={10}
                p={5}
                w="15rem"
              >
                <PopoverArrow />
                <PopoverCloseButton />
                <Button
                  onClick={() => navigate("/mypage/:userId")}
                  backgroundColor="white"
                >
                  마이페이지
                </Button>
                <Button onClick={() => navigate("/")} backgroundColor="white">
                  로그아웃
                </Button>
              </PopoverContent>
            </Portal>
          </Popover>
        </HStack>
      ) : (
        <Popover>
          <PopoverTrigger>
            <Button
              _hover="transparent"
              leftIcon={<IoMenuOutline size={25} />}
              iconSpacing={1}
              backgroundColor="transparent"
            >
              <Text fontSize="1rem"></Text>
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent
              backgroundColor="white"
              borderRadius="1rem"
              border="1px solid #F0F0F0"
              zIndex={10}
              p={5}
              w="90%"
            >
              <PopoverArrow />
              <PopoverCloseButton />
              <Button
                onClick={() => navigate("/upload/work")}
                backgroundColor="transparent"
              >
                모집하기
              </Button>
              <Button
                onClick={() => navigate("/mypage/:userId")}
                backgroundColor="white"
              >
                마이페이지
              </Button>
              <Button onClick={() => navigate("/")} backgroundColor="white">
                로그아웃
              </Button>
            </PopoverContent>
          </Portal>
        </Popover>
      )}
    </HStack>
  );
};

export default Header;
