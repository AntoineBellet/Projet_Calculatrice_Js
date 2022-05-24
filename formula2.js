// Attends le chargement de la page complète pour lancer la fonction init
document.addEventListener("DOMContentLoaded", init);

// Fonction d'initialisation qui associe des événements à des traitements (fonctions)
function init(event){
	// Récupérer les éléments du formulaire dans des variables
	let btn_calcul= document.getElementById("calcul");
	let operation= document.getElementById("op");
	// Déclarer les gestionnaires d'événéments pour chaque élément
	
	btn_calcul.addEventListener('click', calcule);
	operation.addEventListener('change', change_op);
}

function affiche_message(event,texte)
{	
	let message=document.getElementById("message");
	message.innerText=texte
}

function change_op(event){
	let btn_calcul= document.getElementById("calcul");
	let operation= document.getElementById("op");
	
	btn_calcul.value=operation.value
}

function calcule(event){
	// Affecter deux variables correspondant aux deux champs nombre
	let champ_nb1=document.getElementById('nb1');
	let champ_nb2=document.getElementById('nb2');
	let btn_calcul= document.getElementById("calcul");
	
	// Affecter deux variables récupérant la valeur de ces champs
	nb1=champ_nb1.value;
	nb2=champ_nb2.value;
	
	// Tester si les deux valeurs récupérées sont bien des nombres
	if(isNaN(nb1) && isNaN(nb2)){
		alert('Nombre 1 et Nombre 2 doivent être des nombres')
	}
	else{
		affiche_message(event,eval(parseInt(nb1)+btn_calcul.value+parseInt(nb2)))
	}
	
	// Si ok, afficher le résultat de l'opération
	
	
}