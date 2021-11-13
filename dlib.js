// @license magnet:?xt=urn:btih:8e4f440f4c65981c5bf93c76d35135ba5064d8b7&dn=apache-2.0.txt Apache-2.0
DLib = {};
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
// @license-end
