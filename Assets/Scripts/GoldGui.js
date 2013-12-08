var doWindow0 = true;

private var leafOffset;
private var frameOffset;
private var skullOffset;

private var RibbonOffsetX;
private var FrameOffsetX;
private var SkullOffsetX;
private var RibbonOffsetY;
private var FrameOffsetY;
private var SkullOffsetY;

private var WSwaxOffsetX;
private var WSwaxOffsetY;
private var WSribbonOffsetX;
private var WSribbonOffsetY;
	
private var spikeCount;

// This script will only work with the Necromancer skin
var mySkin : GUISkin;

private var windowRect0 = Rect (500, 140, 350, 250);

private var scrollPosition : Vector2;
private var HroizSliderValue = 0.5;
private var VertSliderValue = 0.5;
private var ToggleBTN = false;

function AddSpikes(winX)
{
	spikeCount = Mathf.Floor(winX - 152)/22;
	GUILayout.BeginHorizontal();
	GUILayout.Label ("", "SpikeLeft");//-------------------------------- custom
	for (i = 0; i < spikeCount; i++)
        {
			GUILayout.Label ("", "SpikeMid");//-------------------------------- custom
        }
	GUILayout.Label ("", "SpikeRight");//-------------------------------- custom
	GUILayout.EndHorizontal();
}

function FancyTop(topX)
{
	leafOffset = (topX/2)-64;
	frameOffset = (topX/2)-27;
	skullOffset = (topX/2)-20;
	GUI.Label(new Rect(leafOffset, 18, 0, 0), "", "GoldLeaf");//-------------------------------- custom	
	GUI.Label(new Rect(frameOffset, 3, 0, 0), "", "IconFrame");//-------------------------------- custom	
	GUI.Label(new Rect(skullOffset, 12, 0, 0), "", "Skull");//-------------------------------- custom	
}

function WaxSeal(x,y)
{
	WSwaxOffsetX = x - 120;
	WSwaxOffsetY = y - 115;
	WSribbonOffsetX = x - 114;
	WSribbonOffsetY = y - 83;
	
	GUI.Label(new Rect(WSribbonOffsetX, WSribbonOffsetY, 0, 0), "", "RibbonBlue");//-------------------------------- custom	
	GUI.Label(new Rect(WSwaxOffsetX, WSwaxOffsetY, 0, 0), "", "WaxSeal");//-------------------------------- custom	
}

function DeathBadge(x,y)
{
	RibbonOffsetX = x;
	FrameOffsetX = x+3;
	SkullOffsetX = x+10;
	RibbonOffsetY = y+22;
	FrameOffsetY = y;
	SkullOffsetY = y+9;
	
	GUI.Label(new Rect(RibbonOffsetX, RibbonOffsetY, 0, 0), "", "RibbonRed");//-------------------------------- custom	
	GUI.Label(new Rect(FrameOffsetX, FrameOffsetY, 0, 0), "", "IconFrame");//-------------------------------- custom	
	GUI.Label(new Rect(SkullOffsetX, SkullOffsetY, 0, 0), "", "Skull");//-------------------------------- custom	
}


function DoMyWindow0 (windowID : int) 
{
	// use the spike function to add the spikes
	// note: were passing the width of the window to the function
		AddSpikes(windowRect0.width);

		GUILayout.BeginVertical();
		//GUILayout.Space(8);
		//GUILayout.Label("", "Divider");//-------------------------------- custom
        //GUILayout.Label("Standard Label");
		//GUILayout.Label("Short Label", "ShortLabel");//-------------------------------- custom
		//GUILayout.Label("", "Divider");//-------------------------------- custom
		//GUILayout.Button("Standard Button");
		GUILayout.Button("Short Button", "ShortButton");//-------------------------------- custom
		GUILayout.Button("Short Button", "ShortButton");//-------------------------------- custom
		//GUILayout.Label("", "Divider");//-------------------------------- custom
		ToggleBTN = GUILayout.Toggle(ToggleBTN, "This is a Toggle Button");
		//GUILayout.Label("", "Divider");//-------------------------------- custom
		//GUILayout.Box("This is a textbox\n this can be expanded by using \\n");
		//GUILayout.TextField("This is a textfield\n You cant see this text!!");
        //GUILayout.TextArea("This is a textArea\n this can be expanded by using \\n");
		GUILayout.EndVertical();
		
		// Make the windows be draggable.
		GUI.DragWindow (Rect (0,0,10000,10000));
}

function OnGUI ()
{
GUI.skin = mySkin;

if (doWindow0)
	windowRect0 = GUI.Window (0, windowRect0, DoMyWindow0, "");
	//now adjust to the group. (0,0) is the topleft corner of the group.
	GUI.BeginGroup (Rect (0,0,100,100));
	// End the group we started above. This is very important to remember!
	GUI.EndGroup ();
	

}