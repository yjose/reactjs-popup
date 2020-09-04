import React from 'react';
let firstRender = true;
const loadAds = () => {
  if (firstRender) firstRender = false;
  else {
    const carbon_container = document.getElementById('carbon_container');
    if (carbon_container) {
      carbon_container.innerHTML = '';
      const script = document.createElement('script');
      script.setAttribute('async', '');
      script.setAttribute('type', 'text/javascript');
      script.setAttribute(
        'src',
        '//cdn.carbonads.com/carbon.js?serve=CK7D52QE&placement=react-popupelazizicom'
      );
      script.setAttribute('id', '_carbonads_js');
      carbon_container.appendChild(script);
    }
  }
};
export default () => {
  React.useEffect(() => {
    loadAds();
  }, []);
  return <div id="carbon_container"></div>;
};
