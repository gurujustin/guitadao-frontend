import GuitaIcon from "../../assets/icons/guita-nav-header.svg";
import "./notfound.scss";

export default function NotFound() {
  return (
    <div id="not-found">
      <div className="not-found-header">
        <a href="https://guitadao.finance" target="_blank">
          <img className="branding-header-icon" src={GuitaIcon} alt="GuitaDAO" />
        </a>

        <h2 style={{ textAlign: "center" }}>Page not found</h2>
      </div>
    </div>
  );
}
