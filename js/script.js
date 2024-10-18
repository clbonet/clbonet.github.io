// To do: Code in the right color, alinea for bibtex,copy button, css bibtex and abstract

var papers = document.getElementsByClassName("paper");


for (var i=0; i<papers.length; i++) {
    let infos = dict_papers[papers[i].id]
    let txt_abstract = papers[i].getElementsByClassName("txt_abstract")[0]
    let link = papers[i].getElementsByClassName("link")[0]
    let txt_bibtex = papers[i].getElementsByClassName("txt_bibtex")[0]
    
    papers[i].getElementsByClassName("bibtex")[0].addEventListener("click", function() {        
            let str = "@"+infos.bibtex["balise"]+"{"+infos.bibtex["cite"]

            spaces = ""
//             for (var k=0; k<infos.bibtex["balise"].length; k++) {
            for (var k=0; k<4; k++) {
                spaces += "&nbsp;"
            }

            for (key in infos.bibtex) {
                if (key!="cite" && key!="balise" && key!="title") {
                    str += ",<br>"+spaces+key+"={"+infos.bibtex[key]+"}"
                }
                if (key=="title") {
                    str += ",<br>"+spaces+key+"={{"+infos.bibtex[key]+"}}"
                }
            }
            str += "<br>}"
            
            // copy_button = "<div class='copy' id='copy_button'><a class='btn btn-outline-secondary btn-sm'>Copy</a></div>"
            
            copy_button = "<div class='copy' id='copy_button'><a class='btn btn-outline-secondary btn-sm'><svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-copy' viewBox='0 0 16 16'>  <path fill-rule='evenodd' d='M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z'/> </svg> </a></div>"

            str_html = str + copy_button

            const bibtexText = str.replace(/<br>/g, '\n').replace(/&nbsp;/g, ' ');
            
            // str_html = str
            
            if (txt_bibtex.innerHTML=="") {
                txt_bibtex.innerHTML = str_html
                txt_bibtex.style.padding = "5px"
                txt_bibtex.style.backgroundColor = "white"
                txt_bibtex.style.marginTop = "5px"
                
                document.getElementById("copy_button").addEventListener("click", function() {
                    navigator.clipboard.writeText(bibtexText)
                })
            }
            else {
                txt_bibtex.innerHTML = ""
                txt_bibtex.style.padding = "0px"
                txt_bibtex.style.marginTop = "0px"
            }
        }
    )
    
    papers[i].getElementsByClassName("abstract")[0].addEventListener("click", function() {
            if (txt_abstract.innerHTML=="") {
                txt_abstract.innerHTML = infos.abstract
                txt_abstract.style.padding = "5px"
                txt_abstract.style.backgroundColor = "white"
//                 link.style.paddingBottom = "10px"
//                 txt_abstract.style.marginTop = "5px"
            }
            else {
                txt_abstract.innerHTML = ""
                txt_abstract.style.padding = "0px"
//                 txt_abstract.style.marginTop = "5px"
//                 link.style.paddingBottom = "0px"
            }
        }
    )
}
