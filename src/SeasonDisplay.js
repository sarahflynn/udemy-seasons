import React from 'react';

const seasonConfig = {
  summer: {
    message: "Let's hit the beach",
    img: 'http://icons.iconarchive.com/icons/dapino/beach/256/sun-icon.png',
    alt: 'sun'
  },
  winter: {
    message: "Burr, it's chilly",
    img:
      'http://icons.iconarchive.com/icons/psdblast/flat-christmas/256/snowflake-icon.png',
    alt: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { message, img, alt} = seasonConfig[season];

  return (
    <div>
      <img src={img} alt={alt} />
      <h1>{message}</h1>
      <img src={img} alt={alt} />
    </div>
  );
};

export default SeasonDisplay;
