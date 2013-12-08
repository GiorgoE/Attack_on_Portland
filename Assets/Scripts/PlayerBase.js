#pragma strict

var levelMaster : LevelMaster;

function Start () 
{

	//connect to level master
	levelMaster = GameObject.FindWithTag("LevelMaster").GetComponent(LevelMaster);
	
	
}


function OnTriggerEnter (other:Collider)
{
	if(other.gameObject.tag == "Enemy")
	{
		Destroy(other.gameObject);
		levelMaster.enemyCount--;
		levelMaster.healthCount--;
		//levelMaster.UpdateHUD;
		
	}
}