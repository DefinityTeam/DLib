// @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0
DLib = {};

/**
 * Create a box
 * @param {Object} options - Box options
 * @param {string} options.title - Title of box
 * @param {string} options.text - Box text
 * @param {string} options.titleType - The tag used for the title
 * @param {string} options.textType - The tag used for the text
 * @param {boolean} options.breakAfterTitle - If there should be a <br> after the title
 * @param {(string|false)} options.linkTo - Where the box should link to, if anything
 * @param {boolean} options.expands - If the box should expand on hover
 * @param {(string|false)} options.id - What the id of the box should be, if any
 * @param {(string|false)} options.expandedTitle - What the title of the box should change to on expansion, if anything
 * @param {(string|false)} options.expandedText - What the text of the box should change to on expansion, if anything 
 */
DLib.createBox = ({title, text, titleType='h3', textType='span', breakAfterTitle=false, linkTo=false, container='body', expands=false, id=false, expandedTitle=false, expandedText=false}) => {
    box = '';
    box += linkTo ? `<a href="${linkTo}">` : ``;
    box += expands ? `<div ${id ? 'id="' + id + '"' : ''} class="genericLinkBoxExpandable">` : `<div class="genericLinkBox">`;
    box += `<${titleType} ${id ? 'id="' + id + 'Title"' : ''}>${title}</${titleType}>${breakAfterTitle ? '<br>' : ''}`;
    box += `<${textType} ${id ? 'id="' + id + 'Text"' : ''}>${text}</${textType}>`;
    box += `</div>`;
    box += linkTo ? `</a>` : ``;

    document.getElementsByTagName(container)[0].innerHTML += box;
    
    id && expands && expandedTitle && expandedText ? (
        document.getElementById(id).onmouseenter = () => {document.getElementById(id + 'Title').innerHTML = expandedTitle;document.getElementById(id + 'Text').innerHTML = expandedText},
        document.getElementById(id).onmouseleave = () => {document.getElementById(id + 'Title').innerHTML = title,document.getElementById(id + 'Text').innerHTML = text}
    ) : null;


    //return box;
}


/**
 * Create a cookie
 * @param {string} name - The name of the cookie
 * @param {string} value - The cookie's value
 * @param {number} expire - In how many seconds should the cookie expire
 */
DLib.createCookie = (name, value, expire=31536000) => {
    document.cookie = `${name}=${value};secure;max-age=${expire};same-site=lax;`;
};

/**
 * Delete a cookie
 * @param {string} name - The cookie to delete 
 */
DLib.deleteCookie = (name) => {
    document.cookie = `${name}="";max-age=0;`;
}
// @license-end
