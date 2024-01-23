const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const nshapecanvas = document.getElementById("2display");
const ctx2 = nshapecanvas.getContext("2d");
ctx.font = "12px Arial";
class board
{
    constructor(x,y,exist)
    {
        this.x = x * 25 + x * 5 + 5;
        this.y = y * 25 + y * 5 + 5;
        this.bx = x;
        this.by = y;
        this.exist = exist;
        if (this.exist)
        {
            this.color = fallencolor;
        }
        else
        {
            this.color = emptycolor;
        }
    }
    flipExists()
    {
        if (this.exist)
        {
            this.exist = false;
            this.color = emptycolor;
        }
        else
        {
            this.exist = true;
            this.color = fallencolor;
        }
        this.drawBoard();
    }
    getExist()
    {
      return this.exist;
    }
    drawBoard()
    {
        drawCell(this);
    }

}
class cell
{
    constructor(x,y,xsize,ysize,xvel,yvel,color,exist,id)
    {
        this.id = id;
        this.exist = exist;
        this.x = x * 25 + x * 5 + 5;
        this.y = y * 25 + y * 5 + 5;
        this.bx = x;
        this.by = y;
        this.aposition = 1 * x + 10 * y;
        this.xsize = xsize;
        this.ysize = ysize;
        this.xvel = xvel;
        this.yvel = yvel;
        this.color = color;
    }
    tp(x,y)
    {
        let oldcolor = this.color;
        this.color = "white";
        drawCell(this);
        this.color = oldcolor;
        this.x = x * 25 + 5 * x;
        this.y = y * 25 + 5 * y;
        this.bx = x;
        this.by = y;
        drawCell(this);
    }
    move(x,y)
    {
    
        let oldcolor = this.color;
        this.color = trailcolor;
        drawCell(this);
        this.color = oldcolor;
        this.x = this.x + x * 25 + 5 * x;
        this.y = this.y + y * 25 + 5 * y;
        this.bx = this.bx + x;
        this.by = this.by + y;
        drawCell(this);
        
        
    }
    rotate(x,y)
    {
        if(x == 1 && this.xvel == -1 || x == -1 && this.xvel == 1 || y == 1 && this.yvel == -1 || y == -1 && this.yvel == 1)
        {
            this.xvel = this.xvel;
            this.yvel = this.yvel;
        }
        else
        {
        this.xvel = x;
        this.yvel = y;
        }
    }
    getPosition(ax)
    {
        if (ax == 0)
        {
            return this.bx;
        }
        if (ax == 1)
        {
            return this.by;
        }
    }
}

var cell1 = new cell(0,0,25,25,0,1,"blue");
drawCell(cell1);
var shapetype = 1;
var shapetypeb = 1;
var shape = [0];
var shape2 = [0];
var newshape = [0];
var boardArr = [0];
var pause = true;
var points = 0;
var shapeRotation = 1;
var dir = 0;
var fastdown = false;
var IID = NaN;
var shapetypec = RandomInt(1,7);
var fallencolor = "#092529";
var emptycolor = "#292929";
var trailcolor = "#283d40";
var shapecolor = "#105b66";
var outlinecolor = "black";
document.getElementById("body").style.backgroundColor = emptycolor;
setup();
generateShape(0,0,"dis");
generateShape(4,0,"canvas");
var tickID = setInterval(tick,250);
function recolor()
{
  let i = 0;
  while (i != 16)
  {
    shape2[i].color = shapecolor;
    i += 1;
  }
}
function generateShape(x,y,dis)
{
  let oldshape = shape;
  let shapetype2 = -1;
  if (dis == "canvas" || dis == undefined)
  {
    shapetype2 = shapetype;
  }
  else
  {
    shapetype2 = shapetypec * 4 + 1 - 4 ;
  }
    if (shapetype2 == -1)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",false,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x;
        shape2[18] = y;
        shape2[19] = y;
    }
    if (shapetype2 == 1)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",true,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",true,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x + 1;
        shape2[17] = x + 2;
        shape2[18] = y + 1;
        shape2[19] = y + 3;
    }
    if (shapetype2 == 2)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",true,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 2;
        shape2[18] = y + 1;
        shape2[19] = y + 2;
    }
    if (shapetype2 == 3)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",true,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 1;
        shape2[18] = y + 1;
        shape2[19] = y + 3;
    }
    if (shapetype2 == 4)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",false,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",true,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",true,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 2;
        shape2[18] = y + 2;
        shape2[19] = y + 3;
    }
    if (shapetype2 == 5)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",false,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",true,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",true,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",true,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 2;
        shape2[18] = y + 2;
        shape2[19] = y + 3;
    }
    if (shapetype2 == 6)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",false,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",true,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 1;
        shape2[18] = y + 1;
        shape2[19] = y + 3;
    }
    if (shapetype2 == 7)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",false,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",true,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",true,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",true,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 2;
        shape2[18] = y + 2;
        shape2[19] = y + 3;
    }
    if (shapetype2 == 8)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",false,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",true,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 1;
        shape2[18] = y + 1;
        shape2[19] = y + 3;
    }
    if (shapetype2 == 9)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",true,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 1;
        shape2[18] = y ;
        shape2[19] = y + 1;
    }
    if (shapetype2 == 10)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",true,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 1;
        shape2[18] = y ;
        shape2[19] = y + 1;
    }
    if (shapetype2 == 11)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",true,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 1;
        shape2[18] = y ;
        shape2[19] = y + 1;
    }
    if (shapetype2 == 12)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",true,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 1;
        shape2[18] = y ;
        shape2[19] = y + 1;
    }
    if (shapetype2 == 13)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",true,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",false,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",true,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x;
        shape2[18] = y;
        shape2[19] = y + 3;
    }
    if (shapetype2 == 14)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",false,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",true,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",true,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",true,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",true,15);
        shape2[16] = x;
        shape2[17] = x + 3;
        shape2[18] = y + 3;
        shape2[19] = y + 3;
    }
    if (shapetype2 == 15)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",true,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",false,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",true,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x;
        shape2[18] = y;
        shape2[19] = y + 3;
    }
    if (shapetype2 == 16)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",false,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",true,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",true,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",true,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",true,15);
        shape2[16] = x;
        shape2[17] = x + 3;
        shape2[18] = y + 3;
        shape2[19] = y + 3;
    }
    if (shapetype2 == 17)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",true,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",true,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 2;
        shape2[18] = y;
        shape2[19] = y + 1;
    }
    if (shapetype2 == 18)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",true,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x + 1;
        shape2[17] = x + 2;
        shape2[18] = y;
        shape2[19] = y + 2;
    }
    if (shapetype2 == 19)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",true,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",true,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",false,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",true,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 2;
        shape2[18] = y;
        shape2[19] = y + 1;
    }
    if (shapetype2 == 20)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 1;
        shape2[18] = y;
        shape2[19] = y + 2;
    }
    if (shapetype2 == 21)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",true,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",true,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 2;
        shape2[18] = y;
        shape2[19] = y + 1;
    }
    if (shapetype2 == 22)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 1;
        shape2[18] = y;
        shape2[19] = y + 2;
    }
    if (shapetype2 == 23)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",true,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",true,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 2;
        shape2[18] = y;
        shape2[19] = y + 1;
    }
    if (shapetype2 == 24)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 1;
        shape2[18] = y;
        shape2[19] = y + 2;
    }
    if (shapetype2 == 25)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",true,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",true,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 2;
        shape2[18] = y;
        shape2[19] = y + 1;
    }
    if (shapetype2 == 26)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",true,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",false,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",false,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 1;
        shape2[18] = y;
        shape2[19] = y + 2;
    }
    if (shapetype2 == 27)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",true,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",true,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",false,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",false,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 2;
        shape2[18] = y;
        shape2[19] = y + 1;
    }
    if (shapetype2 == 28)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",true,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",false,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",false,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",false,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",false,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",false,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",false,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",false,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",false,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",false,15);
        shape2[16] = x;
        shape2[17] = x + 1;
        shape2[18] = y;
        shape2[19] = y + 2;
    }
    if (shapetype2 == 29)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",true,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",true,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",true,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",true,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",true,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",true,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",true,15);
        shape2[16] = x;
        shape2[17] = x + 3;
        shape2[18] = y;
        shape2[19] = y + 3;
    }
    if (shapetype2 == 30)
    {
      shape2[0] = new cell(x, y, 25, 25, 0, 1, "blue", false, 0);
      shape2[1] = new cell(x + 1, y, 25, 25, 0, 1, "blue", true, 1);
      shape2[2] = new cell(x + 2, y, 25, 25, 0, 1, "blue", true, 2);
      shape2[3] = new cell(x + 3, y, 25, 25, 0, 1, "blue", true, 3);
      shape2[4] = new cell(x, y + 1, 25, 25, 0, 1, "blue", true, 4);
      shape2[5] = new cell(x + 1, y + 1, 25, 25, 0, 1, "blue", true, 5);
      shape2[6] = new cell(x + 2, y + 1, 25, 25, 0, 1, "blue", true, 6);
      shape2[7] = new cell(x + 3, y + 1, 25, 25, 0, 1, "blue", false, 7);
      shape2[8] = new cell(x, y + 2, 25, 25, 0, 1, "blue", true, 8);
      shape2[9] = new cell(x + 1, y + 2, 25, 25, 0, 1, "blue", true, 9);
      shape2[10] = new cell(x + 2, y + 2, 25, 25, 0, 1, "blue", true, 10);
      shape2[11] = new cell(x + 3, y + 2, 25, 25, 0, 1, "blue", true, 11);
      shape2[12] = new cell(x, y + 3, 25, 25, 0, 1, "blue", false, 12);
      shape2[13] = new cell(x + 1, y + 3, 25, 25, 0, 1, "blue", true, 13);
      shape2[14] = new cell(x + 2, y + 3, 25, 25, 0, 1, "blue", false, 14);
      shape2[15] = new cell(x + 3, y + 3, 25, 25, 0, 1, "blue", true, 15);
      shape2[16] = x;
      shape2[17] = x + 3;
      shape2[18] = y;
      shape2[19] = y + 3;
    }
    if (shapetype2 == 31)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",true,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",true,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",true,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",true,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",true,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",true,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",true,15);
        shape2[16] = x;
        shape2[17] = x + 3;
        shape2[18] = y;
        shape2[19] = y + 3;
    }
    if (shapetype2 == 32)
    {
        shape2[0] = new cell(x,y,25,25,0,1,"blue",false,0);
        shape2[1] = new cell(x + 1,y,25,25,0,1,"blue",true,1);
        shape2[2] = new cell(x + 2,y,25,25,0,1,"blue",true,2);
        shape2[3] = new cell(x + 3,y,25,25,0,1,"blue",true,3);
        shape2[4] = new cell(x,y + 1,25,25,0,1,"blue",true,4);
        shape2[5] = new cell(x + 1,y + 1,25,25,0,1,"blue",true,5);
        shape2[6] = new cell(x + 2,y + 1,25,25,0,1,"blue",true,6);
        shape2[7] = new cell(x + 3,y + 1,25,25,0,1,"blue",false,7);
        shape2[8] = new cell(x,y + 2,25,25,0,1,"blue",true,8);
        shape2[9] = new cell(x + 1,y + 2,25,25,0,1,"blue",true,9);
        shape2[10] = new cell(x + 2,y + 2,25,25,0,1,"blue",true,10);
        shape2[11] = new cell(x + 3,y + 2,25,25,0,1,"blue",true,11);
        shape2[12] = new cell(x,y + 3,25,25,0,1,"blue",false,12);
        shape2[13] = new cell(x + 1,y + 3,25,25,0,1,"blue",true,13);
        shape2[14] = new cell(x + 2,y + 3,25,25,0,1,"blue",false,14);
        shape2[15] = new cell(x + 3,y + 3,25,25,0,1,"blue",true,15);
        shape2[16] = x;
        shape2[17] = x + 3;
        shape2[18] = y;
        shape2[19] = y + 3;
    }
    recolor();
    if (dis == "canvas" || dis == undefined)
    {
      shape = shape2;
      drawShape();
    }
    else if (dis == "dis")
    {
      displayshape2();
      shape = oldshape;
    }
}
function drawShape()
{
    let i = 0;
    while (i != 16)
    {
        drawCell(shape[i]);
        i += 1;
    }
}
function displayshape2()
{
  ctx2.fillStyle = outlinecolor;
  ctx2.fillRect(0,0,110,110);
  ctx2.fillStyle = emptycolor;
  ctx2.fillRect(5,5,100,100);
  let x = 5;
  let y = 5;
  let a = 0;
  ctx2.fillStyle = shapecolor;
  while (a != 15)
  {
    if (shape2[a].exist)
    {
      ctx2.fillRect(x,y,25,25);
    }
    a += 1;
    x += 25;
    if (x == 105)
    {
      x = 5;
      y += 25;
    }
  }
}
function smove(x,y)
{
    let a = false;
    try
    {
    a = checkFallShape();
    }
    finally
    {
if (!a)
{
  if (pause)
  {
    if (shape[16] != 0 && x != 1 || shape[17] != 9 && x != -1)
    {
    if (shape[18] != 0 && y != 1 || shape[19] != 19 && y != -1)
    {
    let i = 0;
    let a = true;
    while (i != 16)
    {
        if (shape[i].exist)
        {
        if (!checkMove(x,shape[i].aposition))
        {
            if (a)
            {
                a = false;
            }
        }
    }
        i += 1;
    }
    i = 0;
    if (a)
    {
        while (i != 16)
    {
        shape[i].move(x,y);
        shape[i].aposition = 1 * shape[i].bx + 10 * shape[i].by;
        i += 1;
    }
    shape[16] = shape[16] + x;
    shape[17] = x + shape[17];
    shape[18] = y + shape[18];
    shape[19] = y + shape[19];
    }
    drawShape();
}
    }
    }
}
    }
}
function pause2()
{
  if (pause)
  {
    pause = false;
  }
  else 
  {
    pause = true;
  }
}
function boardFall(mrow)
{
    let i = mrow;
    while (i != 10)
    {
        if (boardArr[i - 10].exist)
        {
            boardArr[i].flipExists();
            boardArr[i - 10].flipExists();
        }
        i -= 1;
    }
}
function id(text,x,y)
{
    ctx.fillStyle = "red";
    ctx.fillText(text,x,y + 15);
}
function checkLose()
{
    
  let i = 0;
  while (i != 29)
  {
    if (boardArr[i].getExist())
    {
        clearInterval(tickID);
      pause = false;
      fallenShape();
      shape = [0];
      document.getElementById("controlls").style.display = "none";
      document.getElementById("controlls2").style.display = "none";
      break;
    }
    i += 1;
  }
}
function checkRows()
{
        let i = 0;
        
        let column = 0;
        let row = 0;
        let inRow = 0;
        let a = 0;
        while (i != 200)
        {
            if (boardArr[i].exist)
            {
                inRow += 1;
            }
            column += 1;
            if (column == 10)
            {
                if (inRow == 10)
                {
                    a = 0;
                    i -= 9;
                    while (a != 10)
                    {
                        boardArr[i].flipExists();
                        i += 1;
                        a += 1;
                    }
                   
                    points += 500;
                    break;
                }
                column = 0;
                row += 1;
                inRow = 0;
            }
            
            
            i += 1;
        }

}
function checkEmptyRows()
{
    let emptyInRow = 0;
    let emptyInRow2 = 0;
    let i2 = 9;
    let column = 0;
    let i = 199;
    let a = 199;
    while (i != 0)
    {
            if (!boardArr[i].exist)
            {
               emptyInRow += 1;
            }
            if (i > 9)
            {
                if (!boardArr[i - 10].exist)
                {
                emptyInRow2 += 1;
                }
            }
            column += 1;
            if (column == 10)
            {
                if (emptyInRow == 10 && emptyInRow2 > 0)
                {
                    a = i + 9;
                    boardFall(a);
                    break;
                }
                column = 0;
                emptyInRow = 0;
                emptyInRow2 = 0;
            }
            if (i == i2)
            {
                i2 += 1;
            }
            i -= 1;
        }
            
}

function checkMove(spaces,a)
{
    let ret = true;
    let i = 0;
    if (a + spaces < 199 && a + spaces > -1)
    {
    while (i != 200)
    {
        
        if (boardArr[a + spaces].exist)
        {
            ret = false;
            break;
        }
        i += 1;
    }
}
else{
    ret = false;
}
    return ret;
}
function checkFallShape()
{
    let ret = false;
    let i = 0;
    while (i != 16)
    {
        if (checkFall(i))
        {
            ret = true;
            break;
        }
        i += 1;
    }
    return ret;
}
function checkFall(id)
{
    let ret = false;
    let i = 0;
    while (i != 200)
    {
      try 
      {
        if (boardArr[i].by == shape[id].by + 1 && boardArr[i].bx == shape[id].bx && boardArr[i].exist && shape[id].exist|| shape[19] == 19)
        {
            ret = true;
            break;
        }
      }
      finally
      {
        i += 1;
      }
    }
    return ret;
}
function fallenShape()
{
    clearInterval(IID);
    fastdown = false;
    let i = 0;
    while (i != 16)
    {
        if (shape[i].exist)
        {
        fallen(i);
        }
        i += 1;
    }
    shapetypeb = shapetypec;
    shapetypec = RandomInt(1,7);
    generateShape(0,0,"dis");
    shapeRotation = 1;
    shapetype = shapetypeb * 4 + shapeRotation - 4;
}
function srotate(dir)
{
  let i = 0;
  if (shapeRotation + dir == 5 || shapeRotation + dir == 0)
  {
    if (shapeRotation + dir == 5)
    {
      shapeRotation = 1;
    }
    else if (shapeRotation + dir == 0)
    {
      shapeRotation = 4;
    }
  
  }
  else 
  {
    shapeRotation += dir;
  }
  shapetype = shapetypeb * 4 + shapeRotation - 4;
  generateShape(shape[0].bx, shape[0].by,"canvas");
  
  i = 0;
      while (i != 15)
      {
        if (shape[i].aposition > 199)
        {
          generateShape(4,0,"canvas");
          break;
        }
        i += 1;
      }
  i = 0;
  while (i != 16)
  {
    if (shape[i].aposition < 200)
    {
    if (boardArr[shape[i].aposition].exist && shape[i].exist || shape[i].bx > 9 && shape[i].exist || shape[i].bx < 0 && shape[i].exist)
    {
      shapeRotation -= dir;
      shapetype = shapetypeb * 4 + shapeRotation - 4;
      generateShape(shape[0].bx, shape[0].by,"canvas");
      
      break;
    }
}
else 
{
    fallenShape();
}
    i += 1;
}
}
function print() 
{
  console.log("__________________");
console.log(shapetype + " shapetype");
console.log(shapetypeb + " shapetypeb");
console.log(shapetypec + " shapetypec");
console.log(shapeRotation + " shapeRotation");
console.log("------------------");

}
function fallen(id)
{
    let i = 0;
    let ret = false;
    boardArr[shape[id].aposition].flipExists(); 
}
function refreshboard()
{
        let i = 0;
        while (i != 200)
        {
            drawCell2(boardArr[i]);
            //id(i.toString(),boardArr[i].x,boardArr[i].y);
            i += 1;
        }
}
const getValueByIndex = (object, index) => {

    return Object.values(object)[index];
    
    };
function getObjectLength(object) {
    let objectLength = Object.keys(object).length; 
    return objectLength;
}
function RandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
function drawCell(cell0)
{
    if (cell0.exist)
    {
    ctx.fillStyle = cell0.color;
    ctx.fillRect(cell0.x, cell0.y, 25, 25);
    }
}
function drawCell3(cell0)
{
  if (cell0.exist)
  {
    ctx2.fillStyle = cell0.color;
    ctx2.fillRect(cell0.x, cell0.y, 25, 25);
  }
}
function drawCell2(cell0)
{
    ctx.fillStyle = cell0.color;
    ctx.fillRect(cell0.x, cell0.y, 25, 25);
}
function cellcheck(x,y)
{
    let ret = false;
        if (typeof(board[x] == "object"))
        {
            ret = true;
        }
    
    return ret;
}
    function setup()
    {   
        document.getElementById("controlls").style.display = "none";
        document.getElementById("controlls2").style.display = "none";
        if (navigator.userAgent.indexOf("Android") != -1 || navigator.userAgent.indexOf("IOS") != -1)
        {
          document.getElementById("pchelp").style.display = "none";
            document.getElementById("controlls").style.display = "block";
            document.getElementById("controlls2").style.display = "block";
            document.getElementById("canvas").style.position = "absolute";
            document.getElementById("canvas").style.left = "10px";
            document.getElementById("canvas").style.top = "15px";
            document.getElementById("points").style.position = "absolute";
            document.getElementById("points").style.top = "610px";
            document.getElementById("2display").style.top = "15px";
            document.getElementById("2display").style.left = "325px";
            document.getElementById("2display").style.position = "absolute";
            document.getElementById("2display").style.width = "50px";
            document.getElementById("2display").style.height = "50px";
            }
    
        
        
        window.addEventListener("keydown", event => {
            if (event.key == "a") {
              smove(-1,0);
            }
          });
          window.addEventListener("keydown", event => {
            if (event.key == "d") {
              smove(1,0);
            }
          });
          window.addEventListener("keydown", event => {
            if (event.key == "s") {
              fastdown = true;
            }
          });
          window.addEventListener("keydown", event => {
            if (event.key == "ArrowLeft") {
              srotate(-1);
            }
          });
          window.addEventListener("keydown", event => {
            if (event.key == "ArrowRight") {
              srotate(1);
            }
          });
          window.addEventListener("keydown", event => {
            if (event.key == "e") {
              pause2();
            }
          });
    let i = 0;
    let a = 1;
    let b = 0;
        ctx.fillStyle = outlinecolor;
        while (a != 12)
        {
        ctx.fillRect(i, 0, 5, 605);
        i += 30;
        a += 1;
        }
        i = 0;
        a = 1;
        while (a != 22)
        {
        ctx.fillRect(0,i, 305, 5);
        i += 30;
        a += 1;
        }
        i = 0;
        a = 0;
        b = 0;
        while (i != 200)
        {
            boardArr[i] = (new board(a,b,false));
            a += 1;
            if (a == 10)
            {
                a = 0;
                b += 1;
            }
            i += 1;
        }
        }
        function fastfall()
        {
            refreshboard();
            drawShape();
            if(checkFallShape() == false)
    {
        smove(0,1);
    }
    else
    {
        clearInterval(IID);
    }
        }
function tick() 
{
  checkLose();
  if(pause)
  {
    document.getElementById("points").innerHTML = points;
    checkRows();
    checkEmptyRows();
    refreshboard();
    drawShape();
    if (fastdown)
    {
        IID = setInterval(fastfall,50);
        fastdown = false;
    }
if(checkFallShape())
    {
        fallenShape();
        generateShape(4,0);
        points += 50;
    }
    smove(0,1);
  }
}