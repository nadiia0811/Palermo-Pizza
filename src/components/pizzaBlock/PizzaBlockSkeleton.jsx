import React from "react";
import ContentLoader from "react-content-loader";

const PizzaBlockSkeleton = () => (
    
   /*  <ContentLoader className="pizza-block"
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        
    >
        <circle cx="134" cy="136" r="125" /> 
        <rect x="0" y="279" rx="10" ry="10" width="280" height="23" /> 
        <rect x="0" y="326" rx="10" ry="10" width="280" height="88" /> 
        <rect x="0" y="436" rx="10" ry="10" width="95" height="30" /> 
        <rect x="125" y="427" rx="24" ry="24" width="152" height="45" />
    </ContentLoader> */

    <ContentLoader className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    
  >
    <circle cx="128" cy="128" r="128" /> 
    <rect x="0" y="279" rx="5" ry="5" width="280" height="25" /> 
    <rect x="0" y="316" rx="5" ry="5" width="280" height="88" /> 
    <rect x="0" y="433" rx="5" ry="5" width="95" height="30" /> 
    <rect x="145" y="419" rx="20" ry="20" width="130" height="45" />
  </ContentLoader>
  
)

export default PizzaBlockSkeleton;