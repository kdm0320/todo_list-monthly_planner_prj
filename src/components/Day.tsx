import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 700px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 3fr);
`;

function Day() {
  return <div>Day</div>;
}

export default Day;
