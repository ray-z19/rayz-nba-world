import nbaLogo from "../assets/National_Basketball_Association_logo.svg.png"

const Home = () => {
  return (
    <>
      <div style={{display: "flex", padding: "10px", backgroundColor: "#C9082A"}}>
        <img src={nbaLogo} alt="" style={{height: "10vh"}}/>
      </div>
      <div style={{height: "80vh", backgroundColor: "#FFFFFF"}}></div>
      <div style={{height: "10vh", backgroundColor: "#1D428A"}}></div>
    </>
  )
}

export { Home }