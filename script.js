// Each name should be in the format "Stu1, Stu2, and Stu3" with an optional URL
var names = [
	["Bea", "https://docs.google.com/presentation/d/173BJBwXTvMLLH8QJlZjux2Mkqmm5uBqmDPeIsEH88OY/present#slide=id.p"],
	["Dane", "/DPolchinFinalPresentation.pdf"],
	["Lucas", "https://docs.google.com/presentation/d/1NmHtbrdH-Om72ex8WrN3kvNUPgS8IA1xC-Uwp_UUKvs/present#slide=id.p"],
    ["Ryler", "https://docs.google.com/presentation/d/1pbTjVbDtXVu4P3TL-UmZTsTI7CWdyrW2HmCtiehCM-g/present#slide=id.p"]
];

var gridWidth = 4;
var gridHtml = "";
var idx = 0;

makeGrid();

function generateCard(names, imageName, altText, url)
{
    return '<div class="card text-center"> <div class="card-body"> <h5 class="card-title">'
    + names
    + '</h5> <p class="card-text"> <a href="'
    + url
    + '" target="_blank" rel="noopener noreferrer"> <img src="images/'
    + imageName
    + '" alt="'
    + altText
    + '" class="screenshots"> </a> </p> </div> </div>';
}

function makeCard() {
    if (idx >= names.length) return;
    var name = names[idx];
    var fileUrl = "";
    if (name.constructor === Array) {
    	name = names[idx][0];
    	fileUrl = names[idx][1];
    }
    var file = name.replaceAll(" ","").replaceAll(",","").replace("and","");
    var imageName = file + ".png"
    
    if (fileUrl != "") file = fileUrl;
    var card = generateCard(name, imageName, name, file);
    gridHtml += card; //not elegant, but it works
    
    idx++;
}


function makeGrid() {
    
    for (var i = 0; i < names.length; i++) {
        if (i % gridWidth == 0) {
            gridHtml += '<div class="row">';
        }
        gridHtml += '<div class="col-md-3 p-3">';
        makeCard();
        gridHtml += '</div>';
        if (i % gridWidth == (gridWidth - 1)) {
            gridHtml += '</div>';
        }
    }
    
    if (names.length % gridWidth != 0) {
        gridHtml += '</div>';
    }
    
    document.getElementById("grid").innerHTML += gridHtml;
    
}
