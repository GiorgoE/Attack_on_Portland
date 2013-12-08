var buttonTex : Texture2D;
var buttonTex1 : Texture2D;


function Start () {
	
}

function OnGUI () {

    GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,new Vector3(Screen.width / 720.0f, Screen.height / 480.0f, 1)); 
	// Make a background box
	//GUILayout.Box  (testNormal);
	

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	GUI.Box (Rect (10,10,50,50), buttonTex);
	GUI.Label (Rect (18,60,45,20), "25567 ");

	// Make the second button.
	GUI.Box (Rect (75,10,50,50), buttonTex1);
	GUI.Label (Rect (83,60,45,20), "53251 ");
}

