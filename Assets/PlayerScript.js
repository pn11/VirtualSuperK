#pragma strict

var rb: Rigidbody;

function Start () {
	rb = GetComponent.<Rigidbody>();
//	Debug.Log("hello world");
}

function Update () {
	var x : float = Input.GetAxis("Horizontal");
	var z : float = Input.GetAxis("Vertical");

	if (Input.GetButton("Fire1") || Input.GetKey("left ctrl") || Input.GetKey("left alt")){ 
	//https://docs.unity3d.com/ScriptReference/Transform.Rotate.html
		transform.Rotate(z*1.0, x*1.0, 0);
	}
	else if (Input.GetKey("left shift")){ 
		transform.Translate(0, z*1.0, 0);
	}
	else {
		transform.Translate(x*1.0, 0, z*1.0);
	}
	
	if (Input.GetKeyUp(KeyCode.O)){
		startPos();
	}


//	if (Input.GetButtonUp("Jump")){

//		Debug.Log("jumped!");
}


function startPos(){
	transform.position = Vector3(0,1,0);
	transform.rotation = Quaternion.identity;
	rb.velocity = Vector3(0,0,0);
	rb.angularVelocity = Vector3(0,0,0);
}