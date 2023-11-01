import express from 'express';
import Candidate from '../controllers/Candidates';

const routes = express.Router();

routes.post(
  '/candidates',
  Candidate.createCandidate,
);

routes.get(
  '/candidates',
  Candidate.viewAllCandidates,
);

routes.get(
  '/view-candidate/:candidateId',
  Candidate.viewCandidate,
);

routes.put(
  '/update-candidate/:candidateId',
  Candidate.updateCandidate,
);

routes.post(
  '/delete-candidate/:candidateId',
  Candidate.deleteCandidate,
);

routes.get(
  '/enumerations',
  Candidate.getEnumerations,
);

export default routes;
