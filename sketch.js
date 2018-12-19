let points, current;
let last = 0,x =0;
let c = 0;
let n = 3;
let para = document.querySelector('.para');
let more = document.querySelector('#left');
let less = document.querySelector('#right');
let saveLast = false;
let lastButton = document.querySelector('#down');
lastButton.onclick = function(){saveLast?saveLast=false:saveLast=true; makePoints();};
	

more.onclick = function(){n++; makePoints();};
less.onclick = function(){n--; makePoints();};
function makePoints(){
    points = [];
  
  	for(let i = 0; i < n; i++){
    	let angle = PI/4+(i*TWO_PI/n);
        let p = new Point(width/2+200*cos(angle), 
            			height/2+200*sin(angle));
        points.push(p);
    };
    
    current = new Point(width/2, height/2);
    
    background(160);
    fill(255);
    for(let i = 0; i<points.length; i++){
        points[i].draw(10);
    };
}
	
	

function setup() {
    color = {
        0:[255,0,0],
        1:[0,255,0],
        2:[0,0,255]
    };
    createCanvas(innerWidth, innerHeight);
    noStroke();
    makePoints();
    
}

function draw() {
    for(let i = 0; i < 100; i++){
	
        //while (x==last){      //dont repeat the same point
        x = floor(random(points.length)); 
        //}
	    
	if(saveLast){while(x==last){ x = floor(random(points.length)); }}
	    
        current.x -= (current.x-points[x].x)/2;
        current.y -= (current.y-points[x].y)/2;

        fill(255);
        current.draw();
        last = x;

        para.innerHTML = c++;

        }
}

//function mousePressed(){for(let i = 0;i<points.length;i++){let p = points[i];if(mouseX<=p.x+10 && mouseX>=p.x-10 && mouseY<=p.y+10 && mouseY>=p.y-10){}}
// }
	

class Point{
	constructor(x, y){
		this.x = x;
		this.y = y;
		this.selected=false;
		
	}
	draw(r=1){
        fill(color[x%3]);
        if(r!=1) fill(255);
        ellipse(this.x, this.y, r, r);
	}
}

