import "./seasonDisplay.css";
import React from 'react';

const seasonConfig = {
    summer: {
        text: "Let's hit the beach.",
        iconName: "sun"
    },
    winter: {
        text: "Brrrr...it's time for some chili.",
        iconName: "snowflake"
    }

}

function getSeason(lat,month){
    if(month > 2 && month < 9){
      return  lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }
}

const SeasonDisplay = (props)=>{
    const season = getSeason(props.latty,new Date().getMonth());
    const {text, iconName} = seasonConfig[season];


    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left ${iconName} massive icon`}></i>
            <h1>{text}</h1>
            <i className={`icon-right ${iconName} massive icon`}></i>
        </div>
    )
}

export default SeasonDisplay;