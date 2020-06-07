import React from "react";

export function Demo({ cssClass, title }) {
    return <h1 class={cssClass}>{title}</h1>
}



// ReactDOM.render(
//     <Demo cssClass="brittle" title="Not so good" />,
//     document.getElementById('root')
// )