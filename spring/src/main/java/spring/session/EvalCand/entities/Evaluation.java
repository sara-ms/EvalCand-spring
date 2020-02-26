
package spring.session.EvalCand.entities;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;



@Entity
public class Evaluation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int Id_evaluation;

	private String Titre;
	private String Etat;
	private int Duree;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "Id_Candidat")
	private Candidat candidat;
	
	@OneToMany(mappedBy = "evaluation", cascade = {CascadeType.REMOVE, CascadeType.PERSIST, CascadeType.REFRESH,CascadeType.MERGE,CascadeType.DETACH})
	private List<QR> qr;

	@OneToMany(mappedBy = "evaluation", cascade = {CascadeType.REMOVE, CascadeType.PERSIST, CascadeType.REFRESH,CascadeType.MERGE,CascadeType.DETACH})
	private List<Projet> projet;

	@OneToMany(mappedBy = "evaluation", cascade = {CascadeType.REMOVE, CascadeType.PERSIST, CascadeType.REFRESH,CascadeType.MERGE,CascadeType.DETACH})
	private List<Codage> codage;

	@OneToMany(mappedBy = "evaluation", cascade = {CascadeType.REMOVE, CascadeType.PERSIST, CascadeType.REFRESH,CascadeType.MERGE,CascadeType.DETACH})
	private List<Language> language;

	// Default constructor
	// --> Always define a default constructor for any entity
	public Evaluation() {
		super();
	}

	public Evaluation(int id_evaluation, String titre, String etat, int duree, List<QR> qr, List<Projet> projet,
			List<Codage> codage, List<Language> language) {
		super();
		Id_evaluation = id_evaluation;
		Titre = titre;
		Etat = etat;
		Duree = duree;
		this.qr = qr;
		this.projet = projet;
		this.codage = codage;
		this.language = language;
	}


	public Evaluation(String titre, String etat, int duree, List<QR> qr) {
		super();
		Titre = titre;
		Etat = etat;
		Duree = duree;
		this.qr = qr;
	}

	public List<Projet> getProjet() {
		return projet;
	}

	public void setProjet(List<Projet> projets) {
		this.projet = projets;
	}

	public List<Codage> getCodage() {
		return codage;
	}

	public void setCodage(List<Codage> codages) {
		this.codage = codages;
	}

	public List<Language> getLanguage(){
		return this.language;
	}

	public void setLanguage (List<Language> languages) {
		this.language = languages;
	}

	public List<QR> getQr() {
		return qr;
	}

	public void setQr(List<QR> listQR) {
		this.qr = listQR;
	}

	public int getId_evaluation() {
		return Id_evaluation;
	}

	public void setId_evaluation(int Id_evaluation) {
		 this.Id_evaluation = Id_evaluation;
	}

	public String getTitre() {
		return Titre;
	}

	public void setTitre(String titre) {
		Titre = titre;
	}

	public String getEtat() {
		return Etat;
	}

	public void setEtat(String etat) {
		Etat = etat;
	}

	public int getDuree() {
		return Duree;
	}

	public Candidat getCandidat() {
		return candidat;
	}

	public void setCandidat(Candidat candidat) {
		this.candidat = candidat;
	}

	public void setDuree(int duree) {
		Duree = duree;
	}

	@Override
	public String toString() {
		return "Evaluation [Id_evaluation=" + Id_evaluation + ", Titre=" + Titre + ", Etat=" + Etat + ", Duree=" + Duree
				+ ", qr=" + qr + ", projet=" + projet + ", codage=" + codage + ", language=" + language + "]";
	}

}

