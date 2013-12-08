#pragma strict

var mySpeed : float = 0.01;
var myRange : float = 100;

private var myDist : float;

function Update () {
	transform.Translate(Vector3.forward * Time.deltaTime * mySpeed);
	myDist += Time.deltaTime * mySpeed;
	if(myDist >= myRange)
		Destroy(gameObject);

}