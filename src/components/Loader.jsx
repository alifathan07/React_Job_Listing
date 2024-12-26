import React from 'react'
import BounceLoader from "react-spinners/BounceLoader"; // Correct import for BounceLoader

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
function Loader({loading}) {
  return (
    <BounceLoader
    color="#2646a6"
    cssOverride={override}
    
    speedMultiplier={1}
    loading={loading}
    
    size={150}
    aria-label="Loading Spinner"
    data-testid="loader"


  />
  )
}

export default Loader
