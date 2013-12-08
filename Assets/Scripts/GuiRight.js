
var buttonTex : Texture2D;
var buttonTex1 : Texture2D;
var buttonTex2 : Texture2D;
var buttonTex3 : Texture2D;
var buttonTex4 : Texture2D;



function Start()
{
   
}

function OnGUI () {
	// Make a background box
	//GUILayout.Box  (testNormal);
	
	//resizes gui to 720 x 480
	GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,new Vector3(Screen.width / 720.0f, Screen.height / 480.0f, -1));

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	if (GUI.RepeatButton (Rect (655,10,50,50), GUIContent(buttonTex, "BACK")))
		Debug.Log("you clicked Back");
		
	
	// Make the second button.
	if (GUI.RepeatButton (Rect (585,10,50,50), GUIContent(buttonTex1, "UPGRADE")))
		Debug.Log("you clicked Upgrade");
	
	// Make the second button.
	if (GUI.RepeatButton (Rect (515,10,50,50), GUIContent(buttonTex2, "SELL"))) 
		Debug.Log("you clicked Sell");

	// Make the second button.
	if (GUI.RepeatButton (Rect (445,10,50,50), GUIContent(buttonTex3, "BUILD TURRET")))
		Debug.Log("you clicked Build Turret");
		
	
	//Make the second button.
	if (GUI.RepeatButton (Rect (375,10,50,50), GUIContent(buttonTex4, "TRAIN UNITS"))) 
		Debug.Log("you clicked Train Units");
	
	
	GUI.Label (Rect (373,80,100,60), GUI.tooltip);
	
	//GUI.Button (Rect (Screen.width - 100,0,100,50), "Top-right");
}
