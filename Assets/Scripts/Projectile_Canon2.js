#pragma strict


var myRange : float = 100;
var myExplosion : GameObject;
var myTarget : Transform;
var mySpeed : float = 50;

var damageAmount : float = 50;

private var myDist : float;

function Update () {
	
	
	transform.Translate(Vector3.forward * Time.deltaTime * mySpeed);
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