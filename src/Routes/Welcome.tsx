import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { defaultState, nameState } from "../atoms";

interface IForm {
  name: string;
}

const Wrapper = styled.div`
  background-color: white;
  height: 100vh;
  width: 100vw;
  /* display: flex;
  justify-content: center; */
`;
const Phrase = styled(motion.h1)`
  font-size: 1000%;
  font-weight: 600;
  margin-top: 7%;
`;
const WelcomName = styled(motion.h2)`
  font-size: 100%;
  font-weight: 400;
`;
function Welcome() {
  const name = localStorage.getItem("name");
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IForm>();
  useEffect(() => {
    if (typeof name === "string") {
      setTimeout(() => navigate("/todo"), 2000);
    }
  }, []);
  const onValid = (data: IForm) => {
    localStorage.setItem("name", data["name"]);
    navigate("/todo");
  };
  return (
    <Wrapper>
      <Phrase>Welcome</Phrase>
      {name === undefined ? (
        <>
          <WelcomName>What's your name?</WelcomName>
          <form onSubmit={handleSubmit(onValid)}>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder={"Write your name"}
            />
          </form>
        </>
      ) : (
        <WelcomName>{name}</WelcomName>
      )}
    </Wrapper>
  );
}

export default Welcome;
