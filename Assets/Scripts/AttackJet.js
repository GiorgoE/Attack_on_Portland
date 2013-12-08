#pragma strict

var myGoldValue : int = 50;

var heightRange : Vector2 = Vector2(10.0, 18.0);
var height : float = 2;
var speedRange : Vector2 = Vector2(7.0, 10.0);
var forwardSpeed : float = 10.0;
var health : float = 100;
var smokeTrail : ParticleEmitter;
var explosionEffect : GameObject;

private var maxHealth : float = 100;

var levelMaster : LevelMaster;

function Start () 
{

	//connect to level master
	levelMaster = GameObject.FindWithTag("LevelMaster").GetComponent(LevelMaster);
	
	maxHealth = health;
	forwardSpeed = Random.Range(speedRange.x, speedRange.y);
	transform.position.y = height;
	
	//multiply speed and health based on difficulty multiplier
	forwardSpeed*= levelMaster.difficultyMultiplier;
	health*= levelMaster.difficultyMultiplier;
	maxHealth*= levelMaster.difficultyMultiplier;
	

}

function Update () 
{
	//make jet move at forward speed along own z axis (which is forward)
	transform.Translate(Vector3.forward * (forwardSpeed * Time.deltaTime));

}

function TakeDamage(damageAmount : float)
{
	health -= damageAmount;
	//var currentHealth = health / maxHealth;
	if(health <= 0)
	{
		Explode();
		return;
	}
	
	else if (health / maxHealth <= .75)
	{
		smokeTrail.emit = true;
	}
}
	
function Explode()
{
	//tell the level master enemy was destroyed
	levelMaster.enemyCount--;
	levelMaster.goldCount+=myGoldValue;
	levelMaster.scoreCount+=(maxHealth+forwardSpeed*levelMaster.difficultyMultiplier);
	//levelMaster.UpdateHUD();
	

	Instantiate(explosionEffect, transform.position, Quaternion.identity);
	Destroy(gameObject);
}

	
	