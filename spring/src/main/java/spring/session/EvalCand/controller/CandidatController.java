package spring.session.EvalCand.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
//import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import spring.session.EvalCand.configuration.JwtTokenUtil;
import spring.session.EvalCand.entities.Candidat;
import spring.session.EvalCand.entities.Coach;
import spring.session.EvalCand.entities.Evaluation;
import spring.session.EvalCand.entities.JwtResponse;
import spring.session.EvalCand.repositories.CoachRepository;
import spring.session.EvalCand.services.CandidatService;
import spring.session.EvalCand.services.CoachService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/candidat")
public class CandidatController {
	
	
	@Autowired
	CandidatService candidatservice;
	
	
	@RequestMapping(path = "/all", method = RequestMethod.GET)
	public List<Candidat> getAll() {
		return candidatservice.getAll();

	}
	
	
//	@RequestMapping(path = "/add", method = RequestMethod.POST)
//	public void save(@RequestBody Evaluation evaluation) {
//		candidatservice.validateEval(evaluation);
//
//	}
}
