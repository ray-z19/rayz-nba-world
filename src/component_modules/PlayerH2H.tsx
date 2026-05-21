import { Page } from "./Page"

import pageStyles from "../css_modules/Page.module.css"

const PlayerH2H = () => {
  return (
    <Page content={<div className={pageStyles["page"]}>Player H2H</div>}/>
  )
}

export { PlayerH2H }