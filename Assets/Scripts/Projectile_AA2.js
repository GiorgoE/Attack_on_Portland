#pragma strict


var myRange : float = 100;
var myExplosion : GameObject;
var myTarget : Transform;

var damageAmount : float = 25;

private var myDist : float;

function Update () {
	
	
	
    //transform.LookAt(myTarget);

    
	
}

function OnTriggerEnter(other : Collider){
	if(other.gameObject.tag == "Enemy"){
		
		Explode();
		myTarget = other.gameObject.transform;
		other.gameObject.SendMessage("TakeDamage", damageAmount, SendMessageOptions.DontRequireReceiver);
		
	}
}

function Explode()
{
	Instantiate(myExplosion, transform.position, Quaternion.identity);
	Destroy(gameObject);
}