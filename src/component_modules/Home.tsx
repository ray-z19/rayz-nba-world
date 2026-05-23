import { Page } from "./Page"

import pageStyles from "../css_modules/Page.module.css"

import homeBanner from "../assets/sas-v-okc.jpg"

const Home = () => {
  return (
    <Page content={
      <div className={pageStyles["page"]}>
        <img src={homeBanner} alt="" style={{width: "1000px", margin: "50px 0px"}} />
      </div>
    }/>
  )
}

export { Home }