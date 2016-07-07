#pragma strict
var pmt : Transform;
//http://www-sk.icrr.u-tokyo.ac.jp/sk/detector/
// height = 41.4 m
// diameter = 39.3 m
// radius = 39.3/2 = 19.65
// circumference = 39.3*3.14
// 39.3*3.14/0.7 ~ 175 PMTs? --> 180 for simplicity
function Start () {
	sidePMTs();
}

function Update () {

}

function sidePMTs(){
	var n : int = 0;
	var theta : float = 0;
	var x : float = 0;
	var z : float = 0;
	for (theta = 0; theta<180; theta++){
		x = 19 * Mathf.Cos(2.0*theta*2.0*3.14/180.0);
		z = 19 * Mathf.Sin(2.0*theta*2.0*3.14/180.0);
		for (n=0; n<60; n++){
			var position = Vector3(x,0.7*n+1,z);
			Instantiate(pmt, position, transform.rotation);
		}
	}
}

