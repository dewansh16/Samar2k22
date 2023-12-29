import styled from "styled-components";
const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 40px;
  right: 20px;
  z-index: 101;
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "white" : "white")};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;
const Burger = ({ open, setOpen }) => {
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};
export default Burger;