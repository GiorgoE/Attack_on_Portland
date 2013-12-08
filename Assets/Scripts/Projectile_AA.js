#pragma strict

var mySpeed : float = 0.01;
var myRange : float = 100;
var myExplosion : GameObject;
var myTarget : Transform;

var myDamageAmount : float = 25;

private var myDist : float;

function Update () {

	
	transform.Translate(Vector3.forward * Time.deltaTime * mySpeed);
	myDist += Time.deltaTime * mySpeed;
	if(myDist >= myRange)
		
		if(myTarget)
		{
			
			transform.LookAt(myTarget);
		}
		else
		{
			Explode();
		}

}

function OnTriggerEnter(other : Collider)
{
	if(other.gameObject.tag == "Enemy")
	{
		Explode();
		other.gameObject.SendMessage("Take Damage", myDamageAmount, SendMessageOptions.DontRequireReceiver);
		myTarget = other.gameObject.transform;
	}
}

function Explode()
{
	Instantiate(myExplosion, transform.position, Quaternion.identity);
	//Destroy(gameObject);
}