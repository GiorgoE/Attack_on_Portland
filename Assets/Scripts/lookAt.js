#pragma strict

var mySpeed : float = 0.01;
var myRange : float = 100;

var myTarget : Transform;





function Update () {
	
	
	transform.Translate(Vector3.forward * Time.deltaTime * mySpeed);
    transform.LookAt(myTarget);

    
	
}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag == "Enemy"){
		myTarget = other.gameObject.transform;
	}
}

