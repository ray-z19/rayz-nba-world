import pageStyles from "../css_modules/Page.module.css"
import textStyles from "../css_modules/Text.module.css"
import imageStyles from "../css_modules/Image.module.css"

import nbaLogo from "../assets/nba-logo_brandlogos.net_ipeky.png"

const Home = () => {
  return (
    <>
      <div className={pageStyles["header"]}>
        <div className={pageStyles["header-logo"]}>
          <h2
            className={textStyles["header-logo"]}
            style={{background: "linear-gradient(to bottom right, #C9082A 50%, #1D428A 50%)"}}>
              <b>RAY-Z's</b>
          </h2>
          <img src={nbaLogo} alt="" className={imageStyles["header-logo"]}/>
          <h2
            className={textStyles["header-logo"]}
            style={{background: "linear-gradient(to bottom left, #C9082A 50%, #1D428A 50%)"}}>
              <b>World</b>
          </h2>
        </div>
        
      </div>
      <div className={pageStyles["page"]}></div>
      <div className={pageStyles["footer"]}></div>
    </>
  )
}

export { Home }