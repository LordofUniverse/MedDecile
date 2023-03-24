let spearclicker = document.getElementById("speartitle");
let spearvisibility = document.getElementById("spearbox");
let cordsclicker = document.getElementById("cordstitle");
let cordsvisibility = document.getElementById("cordsbox");
let distilclicker = document.getElementById("distiltitle");
let distilvisibility = document.getElementById("distilbox");
let submodlibclicker = document.getElementById("submodlibtitle");
let submodlibvisibility = document.getElementById("submodlibbox");
let imagechanger = document.getElementById("rightimg");
let linkchanger = document.getElementById("linkchanger");

spearclicker.onclick = function() {
    spearclicker.style.backgroundColor = "black";
    spearclicker.style.color = "white";
    submodlibclicker.style.backgroundColor = "transparent";
    submodlibclicker.style.color = "black";
    cordsclicker.style.backgroundColor = "transparent";
    cordsclicker.style.color = "black";
    distilclicker.style.backgroundColor = "transparent";
    distilclicker.style.color = "black";

    document.getElementById("container2title").innerHTML = "SPEAR";
    document.getElementsByClassName("boxtext")[0].innerHTML = "<b>S</b>emi-su<b>P</b>ervised d<b>A</b>ta p<b>R</b>ogramming (SPEAR) is a Python library that aims to reduce data labeling efforts through the use of data programming, which is a machine learning technique that involves generating training data programmatically instead of manually labeling it. The library implements several recent approaches in data programming, including ImplyLoss, and Learning to Reweight, allowing for more efficient and scalable data processing. In addition to data labeling, SPEAR integrates semi-supervised approaches for training and inference, which enable the use of both labeled and unlabeled data for model training, further reducing the reliance on labeled data. By using SPEAR, users can take advantage of state-of-the-art approaches for data programming and semi-supervised learning to reduce the cost and effort of data labeling while still achieving high model accuracy. ";

    imagechanger.src = "images/SPEAR Logo.svg";
    imagechanger.style.width = "300px";
    imagechanger.style.height = "150px";

    linkchanger.href = "https://github.com/decile-team/spear";

}

submodlibclicker.onclick = function() {
    submodlibclicker.style.backgroundColor = "black";
    submodlibclicker.style.color = "white";
    spearclicker.style.backgroundColor = "transparent";
    spearclicker.style.color = "black";
    cordsclicker.style.backgroundColor = "transparent";
    cordsclicker.style.color = "black";
    distilclicker.style.backgroundColor = "transparent";
    distilclicker.style.color = "black";

    document.getElementById("container2title").innerHTML = "SUBMODLIB";
    document.getElementsByClassName("boxtext")[0].innerHTML = "<b>Submod</b>ular optimization <b>lib</b>rary (SUBMODLIB) is a mathematical framework used to select the most informative subset of data from massive datasets in a computationally efficient way. By leveraging the structure of submodular functions, which capture diminishing returns properties of data subsets, submodular optimization algorithms can quickly identify the most informative subset of data that can represent the whole dataset. This approach has been applied to various tasks, such as feature selection, document summarization, and active learning, resulting in more efficient and scalable data processing. ";

    imagechanger.src = "images/submodlib.png";
    imagechanger.style.width = "300px";
    imagechanger.style.height = "200px";

    linkchanger.href = "https://github.com/decile-team/submodlib";

}

cordsclicker.onclick = function() {
    cordsclicker.style.backgroundColor = "black";
    cordsclicker.style.color = "white";
    spearclicker.style.backgroundColor = "transparent";
    spearclicker.style.color = "black";
    submodlibclicker.style.backgroundColor = "transparent";
    submodlibclicker.style.color = "black";
    distilclicker.style.backgroundColor = "transparent";
    distilclicker.style.color = "black";

    document.getElementById("container2title").innerHTML = "CORDS";
    document.getElementsByClassName("boxtext")[0].innerHTML = "Reduce end to end training time from days to hours and hours to minutes using coresets and data selection. <b>COR</b>esets and <b>D</b>ata <b>S</b>election (CORDS) implements a number of state-of-the-art data subset selection algorithms and coreset algorithms. Some of the algorithms currently implemented with CORDS include: GLISTER, GradMatchOMP, GradMatchFixed, CRAIG, SubmodularSelection, RandomSelection., etc";

    imagechanger.src = "images/Cords_Icon.png";
    imagechanger.style.width = "400px";
    imagechanger.style.height = "240px";

    linkchanger.href = "https://github.com/decile-team/cords";

}

distilclicker.onclick = function() {
    distilclicker.style.backgroundColor = "black";
    distilclicker.style.color = "white";
    spearclicker.style.backgroundColor = "transparent";
    spearclicker.style.color = "black";
    cordsclicker.style.backgroundColor = "transparent";
    cordsclicker.style.color = "black";
    submodlibclicker.style.backgroundColor = "transparent";
    submodlibclicker.style.color = "black";

    document.getElementById("container2title").innerHTML = "DISTIL";
    document.getElementsByClassName("boxtext")[0].innerHTML = "<b>D</b>eep d<b>I</b>ver<b>S</b>ified in<b>T</b>eractive <b>L</b>earning (DISTIL) is a PyTorch-based library that contains multiple cutting-edge active learning algorithms, allowing for faster and more efficient training with minimal modifications. The library provides an easy way to insert active learning selection into existing training loops, leading to high model performance with less labeled data. For those seeking to reduce labeling costs, DISTIL is a recommended solution for optimi zing data usage.";

    imagechanger.src = "images/Distil_Icon.png";
    imagechanger.style.width = "400px";
    imagechanger.style.height = "240px";

    linkchanger.href = "https://github.com/decile-team/distil";

}