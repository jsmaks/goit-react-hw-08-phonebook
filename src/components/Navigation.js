import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { authSelectors } from "../redux/auth";

const styles = {
  link: {
    display: "inline-block",
    textDecoration: "none",
    padding: 12,
    fontWeight: 700,
    color: "#2A363B",
  },
  activeLink: {
    color: "#ff9800",
  },
};

const Navigation = ({ isAuthenticated }) => (
  <nav>
    <NavLink exact to="/" style={styles.link} activeStyle={styles.activeLink}>
      Главная
    </NavLink>
    {isAuthenticated && (
      <NavLink
        to="/contacts"
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Контакты
      </NavLink>
    )}
  </nav>
);
const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.getAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
