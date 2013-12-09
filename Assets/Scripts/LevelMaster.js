#pragma strict
//globals
static var playerDamage = 0;

//states
var waveActive : boolean = false;
var spawnEnemies : boolean = false;

//player vars
var healthCount : int = 10;
//var scoreCount : int = 0;

//Gui stuff
//var waveText : UILabel;
//var healthText : UILabel;
//var scoreText : UILabel;

var buttonTex : Texture2D;
var buttonTex1 : Texture2D;
var buttonTex2 : Texture2D;
var buttonTex3 : Texture2D;

var goldCount : int = 200; 
var scoreCount : int = 0; 




//define wave specific vars
var waveLevel : int = 0;
var difficultyMultiplier : float = 1.0;
var waveLength : float = 30.0;
var intermissionTime : float = 5.0;
private var waveEndTime : float = 0;

//enemy variables

var enemyPrefabs : GameObject[];
var enemySpawns: Transform;
private var enemySpawnPoints : Transform[];
var respawnMinBase : float = 3.0;
var respawnMaxBase : float = 10.0;
private var respawnMin : float = 3.0;
private var respawnMax : float = 10.0;
var respawnInterval : float = 2.5;
var enemyCount : int = 0;
private var lastSpawnTime : float = 0;





function Start () 
{
	enemySpawnPoints = new Transform[enemySpawns.childCount];
	var i : int = 0;
	for(var theSpawnPoint : Transform in enemySpawns)
	{
		enemySpawnPoints[i] = theSpawnPoint;
		i++;
	}
	
	SetNextWave(); // setup next wave vars (difficulty, time, speed etc,
	StartNewWave();
	
}

function Update () 
{
/*
	scoreText.text = scoreCount;
	goldText.Text = goldCount;
	
	if(Time.time >= nextFlyerSpawnTime)
	{
		SpawnFlyer();
	}
*/

if(waveActive)
{
	if(Time.time >= waveEndTime)
	{
		spawnEnemies = false;
		
		if(enemyCount <= 0)
		{
			FinishWave(); //end this wave
		}
	}
	
	if(spawnEnemies)
	{
		if(Time.time > (lastSpawnTime + respawnInterval)) // wave is still going, spawn enemies
		{
			SpawnNewEnemy();
		}
	}

}

}

//function SpawnFlyer()
//{
	//nextFlyerSpawnTime+=flyerInterval;
//	var i : int = Random.Range(0,flyerSpawnPoints.length);
//	var newFlyer : GameObject = Instantiate(flyerPrefab, flyerSpawnPoints[i].position, flyerSpawnPoints[i].rotation);
//}

function SpawnNewEnemy()
{
	//get a random index to choose an enemy prefab with
	var enemyChoice = Random.Range(0,enemyPrefabs.Length);
	
	var i : int = Random.Range(0,enemySpawnPoints.length);
	
	var newEnemy : GameObject = Instantiate(enemyPrefabs[enemyChoice], enemySpawnPoints[i].position, enemySpawnPoints[i].rotation);

	//add one to enemy count
	enemyCount++;
	
	//set current time as last spawn time
	lastSpawnTime = Time.time;
	
	//re randomize spawn interval
	respawnInterval = Random.Range(respawnMin, respawnMax);
}


function SetNextWave()
{
	waveLevel++;
	difficultyMultiplier = ((Mathf.Pow(waveLevel, 2))*.005)+1; //ups difficulty exponentially
	respawnMin = respawnMinBase * (1/difficultyMultiplier);
	respawnMax = respawnMaxBase * (1/difficultyMultiplier);
			
}
	
function StartNewWave()
{
	//updateHUD();
	
	//spawn first enemy
	SpawnNewEnemy();
	
	//set wave end time
	waveEndTime = Time.time + waveLength;
	
	//activate wave
	waveActive = true;
	spawnEnemies = true;
}


function OnGUI () {

    GUI.matrix = Matrix4x4.TRS(Vector3.zero, Quaternion.identity,new Vector3(Screen.width / 720.0f, Screen.height / 480.0f, 1)); 
	// Make a background box
	//GUILayout.Box  (testNormal);
	

	// Make the first button. If it is pressed, Application.Loadlevel (1) will be executed
	//score
	GUI.Box (Rect (10,10,50,50), buttonTex);
	GUI.Label (Rect (17,60,45,20), " " + scoreCount.ToString());

	// Make the second button.
	//gold
	GUI.Box (Rect (75,10,50,50), buttonTex1);
	GUI.Label (Rect (83,60,45,20), " " + goldCount.ToString());

	// Make the third button.
	//gold
	GUI.Box (Rect (10,420,50,50), buttonTex2);
	GUI.Label (Rect (10,400,55,20), "Lives:" + healthCount.ToString());

	// Make the third button.
	//gold
	GUI.Box (Rect (75,420,50,50), buttonTex3);
	GUI.Label (Rect (75,400,55,20), "Wave:" + waveLevel.ToString());
}

function FinishWave()
{
	waveActive = false;
	
	//wait for it..
	yield WaitForSeconds(intermissionTime);
	
	//on to next level!
	SetNextWave();
	StartNewWave();
}


