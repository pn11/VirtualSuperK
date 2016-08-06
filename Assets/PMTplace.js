#pragma strict
var pmt : Transform;
//http://www-sk.icrr.u-tokyo.ac.jp/sk/detector/
// height = 41.4 m
// diameter = 39.3 m
// radius = 39.3/2 = 19.65
// circumference = 39.3*3.14
// 39.3*3.14/0.7 ~ 175 PMTs? --> 180 for simplicity

var height : float = 40; 
var radius : float = 19;

function Start () {
	sidePMTs();
	topPMTs();
	bottomPMTs();
}

function Update () {

}

function sidePMTs(){
	var n : int = 0;
	var theta : float = 0;
	var x : float = 0;
	var z : float = 0;
	for (theta = 0; theta<180; theta++){
		x = radius * Mathf.Cos(2.0*theta*2.0*3.14/180.0);
		z = radius * Mathf.Sin(2.0*theta*2.0*3.14/180.0);
		for (n=0; n<59; n++){
			var position = Vector3(x,0.7*n+1,z);
			Instantiate(pmt, position, transform.rotation);
		}
	}
}

function topPMTs(){
	var width : int = 0;
	var depth : int = 0;
	var x : float = 0;
	var z : float = 0;
	var y : float = height;
	y = 38;
	for (width = 0; width<59; width++){
		for (depth = 0; depth<59; depth++){
			x = -radius + 0.35 + 0.7*width;
			z = -radius + 0.35 + 0.7*depth;
			if (x*x+z*z < radius*radius){
				var position = Vector3(x,y,z);
				Instantiate(pmt, position, transform.rotation);
			}
		}
	}
}


function bottomPMTs(){
	var width : int = 0;
	var depth : int = 0;
	var x : float = 0;
	var z : float = 0;
	var y : float = height;
	y = 0;
	for (width = 0; width<59; width++){
		for (depth = 0; depth<59; depth++){
			x = -radius + 0.35 + 0.7*width;
			z = -radius + 0.35 + 0.7*depth;
			if (x*x+z*z < radius*radius){
				var position = Vector3(x,y,z);
				Instantiate(pmt, position, transform.rotation);
			}
		}
	}
}
