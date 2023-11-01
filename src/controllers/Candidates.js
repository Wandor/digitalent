/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import db, { sequelize } from '../database/models/index';

const Sequelize = require('sequelize');

class Candidate {
  static createCandidate = async (req, res) => {
    const {
      firstName,
      lastName,
      age,
      gender,
      town,
    } = req.body;

    try {
      const candidate = await db.Candidate.create({
        firstName,
        lastName,
        age,
        gender,
        town,
      });
      if (candidate) {
        res.status(201).send({
          success: true,
          message: 'Successfully created candidate!',
        });
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'An error occured!',
      });
    }
  };

  static updateCandidate = async (req, res) => {
    try {
      const { candidateId } = req.params;

      const candidateExists = await db.Candidate.findOne({ where: { id: candidateId } });
      if (!candidateExists) {
        res.status(404).send({
          status: 'error',
          message: `Candidate with id: '${candidateId}' does not exist`,
        });
        return;
      }

      const updateCandidate = await db.Candidate.update({ ...req.body }, {
        where: { id: candidateId },
      });

      if (updateCandidate) {
        res.status(200).send({
          status: 'success',
          message: 'Candidate has been updated successfully',
        });
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'An error occured!',
      });
    }
  };

  static viewCandidate = async (req, res) => {
    try {
      const { candidateId } = req.params;
      const candidate = await db.Candidate.findOne({
        where: { id: candidateId },
        order: [['createdAt', 'DESC']],
      });
      if (candidate) {
        res.status(200).send({
          candidate,
        });
      } else {
        res.status(404).send({
          status: 'error',
          message: 'Candidate not found',
        });
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'An error occured!',
      });
    }
  };

  static viewAllCandidates = async (req, res) => {
    try {
      const candidates = await db.Candidate.findAll({
        order: [['createdAt', 'DESC']],
      });
      res.status(200).send({
        candidates,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'An error occured!',
      });
    }
  };

  static deleteCandidate = async (req, res) => {
    const {
      params: { candidateId },
    } = req;
    try {
      await db.Candidate.destroy({
        where: { id: candidateId },
      });
      res.status(200).send({
        message: 'Candidate Deleted Successfully',
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'An error occured!',
      });
    }
  };

  static async getEnumerations(req, res) {
    try {
      const enumerations = await db.Enumeration.findAll({
        order: [['createdAt', 'DESC']],
      });
      res.status(200).send({
        success: true,
        message: 'Enumerations retrieved successfully',
        enumerations,
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: 'An error occured!',
      });
    }
  }
}

export default Candidate;
