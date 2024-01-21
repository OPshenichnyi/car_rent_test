import { BtnNavBar, Logo, WraperNavBar } from "./NavBar.styled";

export const NavBar = () => {
  return (
    <nav>
      <WraperNavBar>
        <Logo> CAR-RENT</Logo>
        <ul>
          <li>
            <BtnNavBar to="/catalog">Catalog</BtnNavBar>
          </li>
          <li>
            <BtnNavBar to="/catalog/favorites">Favorites</BtnNavBar>
          </li>
        </ul>
      </WraperNavBar>
    </nav>
  );
};
