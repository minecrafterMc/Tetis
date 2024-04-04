document.getElementById("speed").style.display = "none";
document.getElementById("time").style.display = "none";
document.getElementById("custom").style.display = "none";
document.getElementById("featured").style.display = "none";
document.getElementById("customeditor").style.display = "none";
function openfeatured()
{
  document.getElementById("custom").style.display = "none";
  document.getElementById("time").style.display = "none";
  document.getElementById("featured").style.display = "block";
  document.getElementById("speed").style.display = "none";
  document.getElementById("customeditor").style.display = "none";
}
function openspeed()
{
  document.getElementById("custom").style.display = "none";
  document.getElementById("time").style.display = "none";
  document.getElementById("featured").style.display = "none";
  document.getElementById("speed").style.display = "block";
  document.getElementById("customeditor").style.display = "none";
}
function opentime()
{
  document.getElementById("custom").style.display = "none";
  document.getElementById("time").style.display = "block";
  document.getElementById("speed").style.display = "none";
  document.getElementById("featured").style.display = "none";
  document.getElementById("customeditor").style.display = "none";
}
function opencustom()
{
  document.getElementById("custom").style.display = "block";
  document.getElementById("time").style.display = "none";
  document.getElementById("speed").style.display = "none";
  document.getElementById("featured").style.display = "none";
  document.getElementById("customeditor").style.display = "block";
}
function openall()
{
  document.getElementById("custom").style.display = "block";
  document.getElementById("time").style.display = "block";
  document.getElementById("speed").style.display = "block";
  document.getElementById("featured").style.display = "block";
  document.getElementById("customeditor").style.display = "block";
}
function closeall()
{
  document.getElementById("custom").style.display = "none";
  document.getElementById("time").style.display = "none";
  document.getElementById("featured").style.display = "none";
  document.getElementById("speed").style.display = "none";
  document.getElementById("customeditor").style.display = "none";
}
function openFileSelector()
{
  let input = document.createElement('input');
input.type = 'file';
input.onchange = e => { 
   let file = e.target.files[0]; 
   var reader = new FileReader();
   reader.readAsText(file,'UTF-8');
   reader.onload = readerEvent => {
      let content = readerEvent.target.result;
      startFromFile(content,false);
   }

}

input.click();
}
function startFromFile(gamedata,comp)
{
  sessionStorage.setItem("gamedata",gamedata);
  sessionStorage.setItem("comp",comp);
  location.href = "5min.html";
}
function startcustommode(time,speed,name,lives,multi,pointpenalty,timepenalty,comp)
{
  sessionStorage.setItem("gamedata",JSON.stringify(
    {
    "name": name,
    "time": time,
    "updateTimer": speed,
    "lives": lives,
    "multi": multi,
    "ppenalty": pointpenalty,
    "tpenalty": timepenalty,
    "colors": [
  {
    "name": "default",
    "shapecolor": "#fc0303",
    "emptycolor": "#039dfc",
    "trailcolor": "#0877ff",
    "fallencolor": "#ababab",
    "textcolor": "white"

},
  {
    "name": "ocean",
    "shapecolor": "cyan",
    "emptycolor": "darkblue",
    "trailcolor": "lightblue",
    "fallencolor": "grey",
    "textcolor": "white"
},
  {
    "name": "blue light mode",
    "shapecolor": "cyan",
    "emptycolor": "white",
    "trailcolor": "lightblue",
    "fallencolor": "grey",
    "textcolor": "blue"
},
  {
    "name": "ultra dark mode",
    "shapecolor": "darkgrey",
    "emptycolor": "black",
    "trailcolor": "grey",
    "fallencolor": "lightgrey",
    "textcolor": "white"
},
  {
    "name": "matrix",
    "shapecolor": "green",
    "emptycolor": "black",
    "trailcolor": "lime",
    "fallencolor": "darkgreen",
    "textcolor": "white"
},
  {
    "name": "blue dark mode",
    "shapecolor": "darkblue",
    "emptycolor": "black",
    "trailcolor": "blue",
    "fallencolor": "grey",
    "textcolor": "white"
},
  {

    "name": "amogus",
    "shapecolor": "red",
    "emptycolor": "grey",
    "trailcolor": "grey",
    "fallencolor": "white",
    "textcolor": "white"
},
  {

    "name": "1.5",
    "shapecolor": "#105b66",
    "emptycolor": "#292929",
    "trailcolor": "#283d40",
    "fallencolor": "#092529",
    "textcolor": "white"
}
],
    "blocks": [
        [
            false,false,false,false,false,true,false,false,false,true,true,false,false,true,false,false,1,2,1,3
        ],
        [
            false,false,false,false,false,true,false,false,false,true,true,false,false,true,false,false,1,2,1,3
        ],
        [
            false,false,false,false,false,true,false,false,true,true,true,false,false,false,false,false,0,2,1,2
        ],
        [
            false,false,false,false,false,true,false,false,true,true,false,false,false,true,false,false,0,1,1,3
        ],
        [
            false,false,false,false,false,false,false,false,true,true,true,false,false,true,false,false,0,2,2,3
        ],
        [
            false,false,false,false,false,false,false,false,false,true,true,false,true,true,false,false,0,2,2,3
        ],
        [
            false,false,false,false,true,false,false,false,true,true,false,false,false,true,false,false,0,1,1,3
        ],
        [
            false,false,false,false,false,false,false,false,false,true,true,false,true,true,false,false,0,2,2,3
        ],
        [
            false,false,false,false,true,false,false,false,true,true,false,false,false,true,false,false,0,1,1,3
        ],
         [
            true,true,false,false,true,true,false,false,false,false,false,false,false,false,false,false,0,1,0,1
        ],
        [
            true,true,false,false,true,true,false,false,false,false,false,false,false,false,false,false,0,1,0,1
        ],
        [
            true,true,false,false,true,true,false,false,false,false,false,false,false,false,false,false,0,1,0,1
        ],
        [
            true,true,false,false,true,true,false,false,false,false,false,false,false,false,false,false,0,1,0,1
        ],
        [
            true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,0,0,0,3
        ],
        [
            false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,0,3,3,3
        ],
        [
            true,false,false,false,true,false,false,false,true,false,false,false,true,false,false,false,0,0,0,3
        ],
        [
            false,false,false,false,false,false,false,false,false,false,false,false,true,true,true,true,0,3,3,3
        ],
        [
            true,false,false,false,true,true,true,false,false,false,false,false,false,false,false,false,0,2,0,1
        ],
        [
            false,true,true,false,false,true,false,false,false,true,false,false,false,false,false,false,1,2,0,2
        ],
        [
            true,true,true,false,false,false,true,false,false,false,false,false,false,false,false,false,0,2,0,1
        ],
        [
            false,true,false,false,false,true,false,false,true,true,false,false,false,false,false,false,0,1,0,2
        ],
        [
            true,true,false,false,false,true,true,false,false,false,false,false,false,false,false,false,0,2,0,1
        ],
        [
            false,true,false,false,true,true,false,false,true,false,false,false,false,false,false,false,0,1,0,2
        ],
        [
            true,true,false,false,false,true,true,false,false,false,false,false,false,false,false,false,0,2,0,1
        ],
        [
            false,true,false,false,true,true,false,false,true,false,false,false,false,false,false,false,0,1,0,2
        ],
        [
            false,false,true,false,true,true,true,false,false,false,false,false,false,false,false,false,0,2,0,1
        ],
        [
            true,false,false,false,true,false,false,false,true,true,false,false,false,false,false,false,0,1,0,2
        ],
        [
            true,true,true,false,true,false,false,false,false,false,false,false,false,false,false,false,0,2,0,1
        ],
        [
            true,true,false,false,false,true,false,false,false,true,false,false,false,false,false,false,0,1,0,2
        ]
    ],
    "enableMods": false,
    "tick": "",
    "onLoad": "",
    "onBlockFall": "",
    "onDeath": ""
}));
  
  sessionStorage.setItem("comp", comp);
  window.location.href = '5min.html';
}
if (sessionStorage.getItem("colorid") == undefined)
{
  sessionStorage.setItem("colorid", 0);
}