import imgLogo from "../../assets/Logo.svg";
import { HeaderContainer } from "./styles";
import Image from "next/image";
import { Cart } from "../Cart";

export function Header() {
  return (
    <HeaderContainer>
      <Image src={imgLogo} alt="Logo" />
      <Cart />
    </HeaderContainer>
  );
}
