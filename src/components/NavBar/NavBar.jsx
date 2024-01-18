import { BtnNavBar, Logo, WraperNavBar } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <nav>
      <WraperNavBar>
        <Logo> APP-RETURN-PACK</Logo>
        <ul>
          <li>
            <BtnNavBar to="/client">Client List</BtnNavBar>
          </li>
          <li>
            <BtnNavBar to="/product">Product List</BtnNavBar>
          </li>
          <li>
            <BtnNavBar to="/pack">Pack List</BtnNavBar>
          </li>
          <li>
            <BtnNavBar to="/order">Order List</BtnNavBar>
          </li>
          <li>
            <BtnNavBar to="/completed">Completed operation</BtnNavBar>
          </li>
        </ul>
        <ul>
          <li>
            <BtnNavBar>Register</BtnNavBar>
          </li>
          <li>
            <BtnNavBar>LogIn</BtnNavBar>
          </li>
        </ul>
      </WraperNavBar>
    </nav>
  );
};
