#pragma strict
/*
import Pathfinding;

var tankTurret : Transform;
var tankBody : Transform;
var tankCompass : Transform;
var turnSpeed : float = 10;

var targetPosition : Vector3; // destination position
var seeker : Seeker; //seeker component, aids pathbuilding
var controller : CharacterController; //character controller component
var path : Path; //holds path
var speed : float = 100;
var nextWaypointDistance : float = 3.0; //min dist travelled to next way point
private var currentWaypoint : int = 0; // index of current waypoint


function Start () {

targetPosition = GameObject.FindWithTag("GroundTargetObject").transform.position;
GetNewPath();

}

function GetNewPath () {
	
	Debug.Log("getting new path!");
	seeker.StartPath(transform.position, targetPosition, OnPathComplete); //tell seeker to determine
	
	
}

function OnPathComplete(newPath : Path)() //new path is sent over as "newPath" . type of path
{	
	if(!GetNewPath.error)
	{	
		
		path = newPath;
		currentWayPoint = 0; //now that we have new path make sure to start at first waypoint.
	}	
}

function FixedUpdate()
{	
	if (path == null)
	{
		return;
	}
	if(currentWaypoint >= path.vectorPath.Length) // reached end of path?
	{
		return;
	}
	
	//find direction of next waypoint
	var dir : Vector3 = (path.vectorPath[currentWaypoint]-Transform.position).normalized;
	
	//find an amount based on speed direction and delta time to move
	dir *= speed * Time.fixedDeltaTime;
	
	//move!
	controller.SimpleMove (dir);
	
	//rotate to face next waypoint
	//
	
	
	
}
*/






