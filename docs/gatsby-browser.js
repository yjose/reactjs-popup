/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

let firstRender = true;
exports.onRouteUpdate = ({ location }) => {
	if (firstRender) firstRender = false
	else {
		const carbon_container = document.getElementById('carbon_container');
		carbon_container.innerHTML = ''
		 const  script = document.createElement('script');
		 script.setAttribute('async', '');
		 script.setAttribute('type', 'text/javascript');
		 script.setAttribute('src', '//cdn.carbonads.com/carbon.js?serve=CK7D52QE&placement=react-popupelazizicom');
		 script.setAttribute('id', '_carbonads_js');
		 carbon_container.appendChild(script);
	}
}
