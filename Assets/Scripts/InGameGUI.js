#pragma strict

//Placement Plane Items
var placementPlanesRoot : Transform;
var hoverMat : Material;
var PlacementLayerMask: LayerMask;
private var originalMat: Material;
private var lastHitObj: GameObject;
//

//Build Selection Items
var onColor : Color;
var offColor : Color;
var allStructures : GameObject[];
//var buildBtnGraphics : 
//var buildBtnGraphics : UISlicedSprite[];
var structureIndex : int =0;
//


///////////////////////////////////

var buttonTex : Texture2D;
var buttonTex1 : Texture2D;
var buttonTex2 : Texture2D;
var buttonTex3 : Texture2D;
var buttonTex4 : Texture2D;

///////////////////////////////////

//Turrets
var turretCosts : int[];


///////////////////////////////////

var levelMaster : LevelMaster;

function Start () 
{

	//connect to level master
	levelMaster = GameObject.FindWithTag("LevelMaster").GetComponent(LevelMaster);

	//reset the structure index and refresh GUI
	structureIndex = 0;
	//UpdateGUI();
}

function Update()
{
	var ray = Camera.main.ScreenPointToRay (Input.mousePosition);
	var hit : RaycastHit;
	if(Physics.Raycast (ray, hit, 1000, PlacementLayerMask))
	{
		if(lastHitObj)
			{
				lastHitObj.renderer.material = originalMat;
			}
			
			lastHitObj = hit.collider.gameObject;
			originalMat = lastHitObj.renderer.material;
			lastHitObj.renderer.material = hoverMat;
			//Debug.Log("you selected something");
			
	}
	else
	{
		if(lastHitObj)
		{
		lastHitObj.renderer.material = originalMat;
		lastHitObj = null;
		}
	}
	
	//drop turrets on click
	if(Input.GetMouseButtonDown(0)&& lastHitObj && turretCosts[structureIndex]<= levelMaster.goldCount)//left mouse clicked and there is a last hit obj
	{
		if(lastHitObj.tag == "Open_PlacementPlane")//tag is placement plane open
		{
			//drop chosen structure at tiles position and rotation of 0
			var newStructure  :GameObject = Instantiate(allStructures[structureIndex], lastHitObj.transform.position, Quaternion.identity);
			//set random rotation
			//newStructure.transform.localEulerAngles.y = (Random.Range(0,360));
			//set tile tag to taken
			lastHitObj.tag = "Taken_PlacementPlane";
			
			levelMaster.goldCount -= turretCosts[structureIndex];
		}
		
		
	}
	
}


function OnGUI () {
	// Make a background box
	//GUILayout.Box  (testNormal);
	
	//resizes gui to 720 x 480
	GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,new Vector3(Screen.width / 720.0f, Screen.height / 480.0f, -1));

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.RepeatButton (Rect (655,10,50,50), GUIContent(buttonTex, "BACK"))){
		Debug.Log("you clicked Back");
		structureIndex = 4;}
	
	// Make the second button.
	if (GUI.RepeatButton (Rect (585,10,50,50), GUIContent(buttonTex1, "UPGRADE"))){
		Debug.Log("you clicked Upgrade");
		structureIndex = 3;}
	
	// Make the second button.
	if (GUI.RepeatButton (Rect (515,10,50,50), GUIContent(buttonTex2, "SELL"))){
		Debug.Log("you clicked Sell");
		structureIndex = 2;}
		GUI.Label(Rect (525,60,100,60), "$100");

	// Make the second button.
	if (GUI.RepeatButton (Rect (445,10,50,50), GUIContent(buttonTex3, "BUILD TURRET"))){
		Debug.Log("you clicked Build Turret");
		structureIndex = 1;}
		GUI.Label(Rect (458,60,100,60), "$50");
	
	//Make the second button.
	if (GUI.RepeatButton (Rect (375,10,50,50), GUIContent(buttonTex4, "TRAIN UNITS"))){
		Debug.Log("you clicked Train Units");
		structureIndex = 0;}
		GUI.Label(Rect (388,60,100,60), "$50");
	
	
	GUI.Label (Rect (373,80,100,60), GUI.tooltip);
	
	//GUI.Button (Rect (Screen.width - 100,0,100,50), "Top-right");
}


//called whenever a structure is clicked on
function SetBuildChoice(btnObj : GameObject)
{
	//when button is clicked send along their GameObject as a parameter to btnObj^
	var btnName : String = btnObj.name;
	
	//set index based on which button pressed
	if(btnName == "BtnCannon")
	{
		structureIndex = 0;
	}
	else if(btnName == "btn_Missile")
	{
		structureIndex = 1;
	}
	else if(btnName == "btn_Mine")
	{
		structureIndex = 2;
	}

	//UpdateGUI();
}






