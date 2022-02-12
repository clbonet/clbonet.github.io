// To do: Code in the right color, alinea for bibtex,copy button, css bibtex and abstract

var papers = document.getElementsByClassName("paper")


var dict_papers = {
    "swgf": {
        bibtex:{
            "balise":"misc",
            "cite":"bonet2022slicedwasserstein",
            "title":"Sliced-Wasserstein Gradient Flows",
            "author":"Clément Bonet and Nicolas Courty and François Septier and Lucas Drumetz",
            "year":"2022",
            "eprint":"2110.10972",
            "archivePrefix":"arXiv",
            "primaryClass":"cs.LG"
        },
        abstract:"Minimizing functionals in the space of probability distributions can be done with Wasserstein gradient flows. To solve them numerically, a possible approach is to rely on the Jordan-Kinderlehrer-Otto (JKO) scheme which is analogous to the proximal scheme in Euclidean spaces. However, it requires solving a nested optimization problem at each iteration, and is known for its computational challenges, especially in high dimension. To alleviate it, very recent works propose to approximate the JKO scheme leveraging Brenier's theorem, and using gradients of Input Convex Neural Networks to parameterize the density (JKO-ICNN). However, this method comes with a high computational cost and stability issues. Instead, this work proposes to use gradient flows in the space of probability measures endowed with the sliced-Wasserstein (SW) distance. We argue that this method is more flexible than JKO-ICNN, since SW enjoys a closed-form differentiable approximation. Thus, the density at each step can be parameterized by any generative model which alleviates the computational burden and makes it tractable in higher dimensions."
    },
    "subspace_arxiv": {
        bibtex:{
            "balise":"misc",
            "cite":"bonet2021subspace",
            "title":"Subspace Detours Meet Gromov-Wasserstein",
            "author":"Clément Bonet and Nicolas Courty and François Septier and Lucas Drumetz",
            "year":"2021",
            "eprint":"2110.10932",
            "archivePrefix":"arXiv",
            "primaryClass":"cs.LG"
        },
        abstract:"In the context of optimal transport methods, the subspace detour approach was recently presented by Muzellec and Cuturi (2019). It consists in building a nearly optimal transport plan in the measures space from an optimal transport plan in a wisely chosen subspace, onto which the original measures are projected. The contribution of this paper is to extend this category of methods to the Gromov-Wasserstein problem, which is a particular type of transport distance involving the inner geometry of the compared distributions. After deriving the associated formalism and properties, we also discuss a specific cost for which we can show connections with the Knothe-Rosenblatt rearrangement. We finally give an experimental illustration on a shape matching problem."
    },
    "subspace_mdpi": {
        bibtex:{
            "balise":"article",
            "cite":"bonet2021subspace",
            "title":"Subspace Detours Meet Gromov--Wasserstein",
            "author":"Bonet, Cl{\'e}ment and Vayer, Titouan and Courty, Nicolas and Septier, Fran{\c{c}}ois and Drumetz, Lucas",
            "journal":"Algorithms",
            "volume":"14",
            "number":"12",
            "pages":"366",
            "year":"2021",
            "publisher":"Multidisciplinary Digital Publishing Institute"
        },
        abstract:"In the context of optimal transport (OT) methods, the subspace detour approach was recently proposed by Muzellec and Cuturi. It consists of first finding an optimal plan between the measures projected on a wisely chosen subspace and then completing it in a nearly optimal transport plan on the whole space. The contribution of this paper is to extend this category of methods to the Gromov–Wasserstein problem, which is a particular type of OT distance involving the specific geometry of each distribution. After deriving the associated formalism and properties, we give an experimental illustration on a shape matching problem. We also discuss a specific cost for which we can show connections with the Knothe–Rosenblatt rearrangement."
    }
}


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
                if (key!="cite" && key!="balise") {
                    str += ",<br>"+spaces+"{"+infos.bibtex[key]+"}"
                }
            }
            str += "<br>}"
            
//             copy_button = "<div class='copy' id='copy_button'><a class='btn btn-outline-secondary btn-sm'>Copy</a></div>"
//             str_html = str + copy_button
            str_html = str
            
            if (txt_bibtex.innerHTML=="") {
                txt_bibtex.innerHTML = str_html
                txt_bibtex.style.padding = "5px"
                txt_bibtex.style.backgroundColor = "white"
                txt_bibtex.style.marginTop = "5px"
                
//                 document.getElementById("copy_button").addEventListener("click", function() {
//                     navigator.clipboard.writeText(str)
//                 })
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
                txt_abstract.style.marginTop = "5px"
            }
            else {
                txt_abstract.innerHTML = ""
                txt_abstract.style.padding = "0px"
                txt_abstract.style.marginTop = "5px"
//                 link.style.paddingBottom = "0px"
            }
        }
    )
}
