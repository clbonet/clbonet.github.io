// To do: Code in the right color, alinea for bibtex,copy button, css bibtex and abstract

var papers = document.getElementsByClassName("paper")


var dict_papers = {
    "swgf": {
        bibtex:{
            "balise":"article",
            "cite":"bonet2021slicedwasserstein",
            "title":"Sliced-Wasserstein Gradient Flows",
            "author":"Clément Bonet and Nicolas Courty and François Septier and Lucas Drumetz",
            "year":"2021",
            "journal":"arXiv preprint arXiv:2110.10972"
        },
        abstract:"Minimizing functionals in the space of probability distributions can be done with Wasserstein gradient flows. To solve them numerically, a possible approach is to rely on the Jordan-Kinderlehrer-Otto (JKO) scheme which is analogous to the proximal scheme in Euclidean spaces. However, it requires solving a nested optimization problem at each iteration, and is known for its computational challenges, especially in high dimension. To alleviate it, very recent works propose to approximate the JKO scheme leveraging Brenier's theorem, and using gradients of Input Convex Neural Networks to parameterize the density (JKO-ICNN). However, this method comes with a high computational cost and stability issues. Instead, this work proposes to use gradient flows in the space of probability measures endowed with the sliced-Wasserstein (SW) distance. We argue that this method is more flexible than JKO-ICNN, since SW enjoys a closed-form differentiable approximation. Thus, the density at each step can be parameterized by any generative model which alleviates the computational burden and makes it tractable in higher dimensions."
    },
    "swgf_tmlr": {
        bibtex:{
            "balise":"article",
            "cite":"bonet2022efficient",
            "title":"Efficient Gradient Flows in Sliced-Wasserstein Space",
            "author":"Clément Bonet and Nicolas Courty and François Septier and Lucas Drumetz",
            "year":"2022",
            "journal":"Transactions on Machine Learning Research"
        },
        abstract:"Minimizing functionals in the space of probability distributions can be done with Wasserstein gradient flows. To solve them numerically, a possible approach is to rely on the Jordan–Kinderlehrer–Otto (JKO) scheme which is analogous to the proximal scheme in Euclidean spaces. However, it requires solving a nested optimization problem at each iteration, and is known for its computational challenges, especially in high dimension. To alleviate it, very recent works propose to approximate the JKO scheme leveraging Brenier’s theorem, and using gradients of Input Convex Neural Networks to parameterize the density (JKO-ICNN). However, this method comes with a high computational cost and stability issues. Instead, this work proposes to use gradient flows in the space of probability measures endowed with the sliced-Wasserstein (SW) distance. We argue that this method is more flexible than JKO-ICNN, since SW enjoys a closed-form differentiable approximation. Thus, the density at each step can be parameterized by any generative model which alleviates the computational burden and makes it tractable in higher dimensions."
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
    },
    "ssw": {
        bibtex:{
            "balise":"article",
            "cite":"bonet2022spherical",
            "title":"Spherical Sliced-Wasserstein",
            "author":"Clément Bonet and Paul Berg and Nicolas Courty and François Septier and Lucas Drumetz and Minh-Tan Pham",
            "year":"2022",
            "journal":"arXiv preprint arXiv:2206.08780"
        },
        abstract:"Many variants of the Wasserstein distance have been introduced to reduce its original computational burden. In particular the Sliced-Wasserstein distance (SW), which leverages one-dimensional projections for which a closed-form solution of the Wasserstein distance is available, has received a lot of interest. Yet, it is restricted to data living in Euclidean spaces, while the Wasserstein distance has been studied and used recently on manifolds. We focus more specifically on the sphere, for which we define a novel SW discrepancy, which we call spherical Sliced- Wasserstein, making a first step towards defining SW discrepancies on manifolds. Our construction is notably based on closed-form solutions of the Wasserstein distance on the circle, together with a new spherical Radon transform. Along with efficient algorithms and the corresponding implementations, we illustrate its properties in several machine learning use cases where spherical representations of data are at stake: density estimation on the sphere, variational inference or hyperspherical auto-encoders."
    },
    "ssw_iclr":{
        bibtex:{
            "balise":"inproceedings",
            "cite":"bonet2023spherical",
            "title":"Spherical Sliced-Wasserstein",
            "author":"Clément Bonet and Paul Berg and Nicolas Courty and François Septier and Lucas Drumetz and Minh-Tan Pham",
            "year":"2023",
            "booktitle":"The Eleventh International Conference on Learning Representations"
        },
        abstract:"Many variants of the Wasserstein distance have been introduced to reduce its original computational burden. In particular the Sliced-Wasserstein distance (SW), which leverages one-dimensional projections for which a closed-form solution of the Wasserstein distance is available, has received a lot of interest. Yet, it is restricted to data living in Euclidean spaces, while the Wasserstein distance has been studied and used recently on manifolds. We focus more specifically on the sphere, for which we define a novel SW discrepancy, which we call spherical Sliced- Wasserstein, making a first step towards defining SW discrepancies on manifolds. Our construction is notably based on closed-form solutions of the Wasserstein distance on the circle, together with a new spherical Radon transform. Along with efficient algorithms and the corresponding implementations, we illustrate its properties in several machine learning use cases where spherical representations of data are at stake: sampling on the sphere, density estimation on real eath data or hyperspherical auto-encoders."
    },
    "hsw": {
        bibtex:{
            "balise":"article",
            "cite":"bonet2022hyperbolic",
            "title":"Hyperbolic Sliced-Wasserstein via Geodesic and Horospherical Projections",
            "author":"Clément Bonet and Laetitia Chapel and Lucas Drumetz and Nicolas Courty",
            "year":"2022",
            "journal":"arXiv preprint arXiv:2211.10066"
        },
        abstract:"It has been shown beneficial for many types of data which present an underlying hierarchical structure to be embedded in hyperbolic spaces. Consequently, many tools of machine learning were extended to such spaces, but only few discrepancies to compare probability distributions defined over those spaces exist. Among the possible candidates, optimal transport distances are well defined on such Riemannian manifolds and enjoy strong theoretical properties, but suffer from high computational cost. On Euclidean spaces,  sliced-Wasserstein distances, which leverage a closed-form of the Wasserstein distance in one dimension, are more computationally efficient, but are not readily available on hyperbolic spaces. In this work, we propose to derive novel hyperbolic sliced-Wasserstein discrepancies. These constructions use projections on the underlying geodesics either along horospheres or geodesics. We study and compare them on different tasks where hyperbolic representations are relevant, such as sampling or image classification."
    },    
    "hsw_tagml": {
        bibtex:{
            "balise":"inproceedings",
            "cite":"bonet2023hyperbolic",
            "title":"Hyperbolic Sliced-Wasserstein via Geodesic and Horospherical Projections",
            "author":"Clément Bonet and Laetitia Chapel and Lucas Drumetz and Nicolas Courty",
            "year":"2023",
            "organization":"PMLR",
            "booktitle":"Proceedings of 2nd Annual Workshop on Topology, Algebra, and Geometry in Machine Learning (TAG-ML)",
            "pages":"334--370"
        },
        abstract:"It has been shown beneficial for many types of data which present an underlying hierarchical structure to be embedded in hyperbolic spaces. Consequently, many tools of machine learning were extended to such spaces, but only few discrepancies to compare probability distributions defined over those spaces exist. Among the possible candidates, optimal transport distances are well defined on such Riemannian manifolds and enjoy strong theoretical properties, but suffer from high computational cost. On Euclidean spaces,  sliced-Wasserstein distances, which leverage a closed-form of the Wasserstein distance in one dimension, are more computationally efficient, but are not readily available on hyperbolic spaces. In this work, we propose to derive novel hyperbolic sliced-Wasserstein discrepancies. These constructions use projections on the underlying geodesics either along horospheres or geodesics. We study and compare them on different tasks where hyperbolic representations are relevant, such as sampling or image classification."
    },
    "spdsw": {
        bibtex:{
            "balise":"article",
            "cite":"bonet2023sliced",
            "title":"Sliced-Wasserstein on Symmetric Positive Definite Matrices for M/EEG Signals",
            "author":"Clément Bonet and Benoît Malézieux and Alain Rakotomamonjy and Lucas Drumetz and Thomas Moreau and Matthieu Kowalski and Nicolas Courty",
            "year":"2023",
            "journal":"arXiv preprint arXiv:2303.05798"
        },
        abstract:"When dealing with electro or magnetoencephalography records, many supervised prediction tasks are solved by working with covariance matrices to summarize the signals. Learning with these matrices requires the usage of Riemanian geometry to account for their structure. In this paper, we propose a new method to deal with distributions of covariance matrices, and demonstrate its computational efficiency on M/EEG multivariate time series. More specifically, we define a Sliced-Wasserstein distance between measures of symmetric positive definite matrices that comes with strong theoretical guarantees. Then, we take advantage of its properties and kernel methods to apply this discrepancy to brain-age prediction from MEG data, and compare it to state-of-the-art algorithms based on Riemannian geometry. Finally, we show that it is an efficient surrogate to the Wasserstein distance in domain adaptation for Brain Computer Interface applications."
    },
    "spdsw_icml": {
        bibtex:{
            "balise":"inproceedings",
            "cite":"bonet2023sliced",
            "title":"Sliced-Wasserstein on Symmetric Positive Definite Matrices for M/EEG Signals",
            "author":"Clément Bonet and Benoît Malézieux and Alain Rakotomamonjy and Lucas Drumetz and Thomas Moreau and Matthieu Kowalski and Nicolas Courty",
            "booktitle":"International Conference on Machine Learning",
            "year":"2023",
            "organization":"PMLR",
            "pages":"2777--2805"
        },
        abstract:"When dealing with electro or magnetoencephalography records, many supervised prediction tasks are solved by working with covariance matrices to summarize the signals. Learning with these matrices requires the usage of Riemanian geometry to account for their structure. In this paper, we propose a new method to deal with distributions of covariance matrices, and demonstrate its computational efficiency on M/EEG multivariate time series. More specifically, we define a Sliced-Wasserstein distance between measures of symmetric positive definite matrices that comes with strong theoretical guarantees. Then, we take advantage of its properties and kernel methods to apply this discrepancy to brain-age prediction from MEG data, and compare it to state-of-the-art algorithms based on Riemannian geometry. Finally, we show that it is an efficient surrogate to the Wasserstein distance in domain adaptation for Brain Computer Interface applications."
    },
    "usw": {
        bibtex:{
            "balise":"article",
            "cite":"sejourne2023unbalanced",
            "title":"Unbalanced Optimal Transport meets Sliced-Wasserstein",
            "author":"Thibault Séjourné and Clément Bonet and Kilian Fatras and Kimia Nadjahi and Nicolas Courty",
            "year":"2023",
            "journal":"arXiv preprint arXiv:2306.07176"
        },
        abstract:"Optimal transport (OT) has emerged as a powerful framework to compare probability measures, a fundamental task in many statistical and machine learning problems. Substantial advances have been made over the last decade in designing OT variants which are either computationally and statistically more efficient, or more robust to the measures and datasets to compare. Among them, sliced OT distances have been extensively used to mitigate optimal transport's cubic algorithmic complexity and curse of dimensionality. In parallel, unbalanced OT was designed to allow comparisons of more general positive measures, while being more robust to outliers. In this paper, we propose to combine these two concepts, namely slicing and unbalanced OT, to develop a general framework for efficiently comparing positive measures. We propose two new loss functions based on the idea of slicing unbalanced OT, and study their induced topology and statistical properties. We then develop a fast Frank-Wolfe-type algorithm to compute these loss functions, and show that the resulting methodology is modular as it encompasses and extends prior related work. We finally conduct an empirical analysis of our loss functions and methodology on both synthetic and real datasets, to illustrate their relevance and applicability."
    },
    "swgg": {
        bibtex:{
            "balise":"article",
            "cite":"mahey2023fast",
            "title":"Fast Optimal Transport through Sliced Wasserstein Generalized Geodesics",
            "author":"Mahey, Guillaume and Chapel, Laetitia and Gasso, Gilles and Bonet, Clément and Courty, Nicolas",
            "year":"2023",
            "booktitle":"International Conference on Machine Learning",
        },
        abstract:"Wasserstein distance (WD) and the associated optimal transport plan have been proven useful in many applications where probability measures are at stake. In this paper, we propose a new proxy of the squared WD, coined min-SWGG, that is based on the transport map induced by an optimal one-dimensional projection of the two input distributions. We draw connections between min-SWGG and Wasserstein generalized geodesics in which the pivot measure is supported on a line. We notably provide a new closed form for the exact Wasserstein distance in the particular case of one of the distributions supported on a line allowing us to derive a fast computational scheme that is amenable to gradient descent optimization. We show that min-SWGG is an upper bound of WD and that it has a complexity similar to as Sliced-Wasserstein, with the additional feature of providing an associated transport plan. We also investigate some theoretical properties such as metricity, weak convergence, computational and topological properties. Empirical evidences support the benefits of min-SWGG in various contexts, from gradient flows, shape matching and image colorization, among others."
    },
    "swgg_neurips": {
        bibtex:{
            "balise":"inproceedings",
            "cite":"mahey2023fast",
            "title":"Fast Optimal Transport through Sliced Wasserstein Generalized Geodesics",
            "author":"Mahey, Guillaume and Chapel, Laetitia and Gasso, Gilles and Bonet, Clément and Courty, Nicolas",
            "year":"2023",
            "booktitle":"Thirty-seventh Conference on Neural Information Processing Systems"
        },
        abstract:"Wasserstein distance (WD) and the associated optimal transport plan have been proven useful in many applications where probability measures are at stake. In this paper, we propose a new proxy of the squared WD, coined min-SWGG, that is based on the transport map induced by an optimal one-dimensional projection of the two input distributions. We draw connections between min-SWGG and Wasserstein generalized geodesics in which the pivot measure is supported on a line. We notably provide a new closed form for the exact Wasserstein distance in the particular case of one of the distributions supported on a line allowing us to derive a fast computational scheme that is amenable to gradient descent optimization. We show that min-SWGG is an upper bound of WD and that it has a complexity similar to as Sliced-Wasserstein, with the additional feature of providing an associated transport plan. We also investigate some theoretical properties such as metricity, weak convergence, computational and topological properties. Empirical evidences support the benefits of min-SWGG in various contexts, from gradient flows, shape matching and image colorization, among others."
    },
    "thesis": {
        bibtex:{
            "balise":"phdthesis",
            "cite":"bonet2023leveraging",
            "title":"Leveraging Optimal Transport via Projections on Subspaces for Machine Learning Applications",
            "author":"Bonet, Clément",
            "year":"2023",
            "school":"Université de Bretagne Sud"
        },
        abstract:"Optimal Transport has received much attention in Machine Learning as it allows to compare probability distributions by exploiting the geometry of the underlying space. However, in its original formulation, solving this problem suffers from a significant computational burden. Thus, a meaningful line of work consists at proposing alternatives to reduce this burden while still enjoying its properties. In this thesis, we focus on alternatives which use projections on subspaces. The main such alternative is the Sliced-Wasserstein distance, which we first propose to extend to Riemannian manifolds in order to use it in Machine Learning applications for which using such spaces has been shown to be beneficial in the recent years. We also study sliced distances between positive measures in the so-called unbalanced OT problem. Back to the original Euclidean Sliced-Wasserstein distance between probability measures, we study the dynamic of gradient flows when endowing the space with this distance in place of the usual Wasserstein distance. Then, we investigate the use of the Busemann function, a generalization of the inner product in metric spaces, in the space of probability measures. Finally, we extend the subspace detour approach to incomparable spaces using the Gromov-Wasserstein distance."
    },
    "chsw": {
        bibtex:{
            "balise":"article",
            "cite":"bonet2024sliced",
            "title":"Sliced-Wasserstein Distances and Flows on Cartan-Hadamard Manifolds",
            "author":"Clément Bonet and Lucas Drumetz and Nicolas Courty",
            "year":"2024",
            "journal":"arXiv preprint arXiv:2403.06560"
        },
        abstract:"While many Machine Learning methods were developed or transposed on Riemannian manifolds to tackle data with known non Euclidean geometry, Optimal Transport (OT) methods on such spaces have not received much attention. The main OT tool on these spaces is the Wasserstein distance which suffers from a heavy computational burden. On Euclidean spaces, a popular alternative is the Sliced-Wasserstein distance, which leverages a closed-form solution of the Wasserstein distance in one dimension, but which is not readily available on manifolds. In this work, we derive general constructions of Sliced-Wasserstein distances on Cartan-Hadamard manifolds, Riemannian manifolds with non-positive curvature, which include among others Hyperbolic spaces or the space of Symmetric Positive Definite matrices. Then, we propose different applications. Additionally, we derive non-parametric schemes to minimize these new distances by approximating their Wasserstein gradient flows."
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
                    str += ",<br>"+spaces+key+"={"+infos.bibtex[key]+"}"
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
