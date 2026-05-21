import { Page } from "./Page"

import pageStyles from "../css_modules/Page.module.css"

const Home = () => {
  return (
    <Page content={<div className={pageStyles["page"]}>Home</div>}/>
  )
}

export { Home }