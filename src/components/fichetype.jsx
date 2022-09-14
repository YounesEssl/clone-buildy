import "./fichetype.css"


function Fiche({firsttext, title, title2, title3, content, content2, content3, content4,taille}) {
    return (
    <div id="fichecontainer" style={{width: taille}}>
        <div id="firstcontainer">
            <div id="stick"></div>
            <p id="firsttext">{firsttext}</p>
        </div>
        <h1>{title} <br/> {title2} <br/> {title3}</h1>
        <p id="contentbold">{content}</p>
        <p><strong>{content2}</strong>  {content3} <br/>{content4}</p>
    </div>
    )
}


export default Fiche