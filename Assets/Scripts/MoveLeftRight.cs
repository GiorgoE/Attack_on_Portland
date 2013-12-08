using UnityEngine;
using System.Collections;

public class MoveLeftRight : MonoBehaviour {

	public float speed = 5;
	public string axisName = "Horizontal";
	public Animator anim;

	// initialization
	void Start (){

		anim = gameObject.GetComponent<Animator>();

	}

	//update
	void Update (){
		anim.SetFloat("Speed", Mathf.Abs (Input.GetAxis(axisName)));
		if(Input.GetAxis (axisName) <0){
			Vector3 newScale = transform.localScale;
			newScale.x = -1.0f;
			transform.localScale = newScale;
		}
		else if(Input.GetAxis (axisName) >0){
			Vector3 newScale = transform.localScale;
			newScale.x = 1.0f;
			transform.localScale = newScale;

		}

		transform.position += transform.right*Input.GetAxis(axisName)*speed*Time.deltaTime;

	}


}
