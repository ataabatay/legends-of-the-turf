import Footballer from '../models/footballer.js'
import Team from '../models/team.js'
import mongoose from 'mongoose'

// *Create new team - working
// Method: POST
// Path: '/myteam/newteam'
export const createTeam = async (req, res) => {
  try {
    const teamToCreate = await Team.create(req.body)
    return res.status(201).json(teamToCreate)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// *Fetch all the players - working
// Method: GET
// Path: '/players/'
export const getAllPlayers = async (req, res) => {
  try {
    const allPlayers = await Footballer.find()
    return res.status(200).json(allPlayers)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

// *Add/edit players in a team - working
// Method: PUT
// Path: 'myteam/:teamId/edit/players'
export const addPlayersToTeam = async (req, res) => {
  console.log('Add players')
  return res.status(200).json({message: 'Success'})
}

// *Fetch my team - working
// Method: GET
// Path: '/myteam/:teamId'
export const getMyTeam = async (req, res) => {
  console.log('Get my team')
  return res.status(200).json({message: 'Success'})
}

// *Fetch single player
// Method: GET
// Path: '/players/:playerId'
export const getSinglePlayer = async (req, res) => {
  try {
    // find the footballer by the id provided in the params 
    const footballer = await Footballer.findById(req.params.playerId)
    // if can't find the footballer by id return not found error
    if (!footballer) return res.status(401).json({message: 'Footballer not found!'})
    // else return succes and the footballer with the details
    return res.status(200).json(footballer)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}

//Delete teams
//METHOD: Delete
// Path: '/myteam/:teamId'

export const deleteTeam = async (req, res) => {
  try {
    const { teamId } = req.params
    const team = await Team.findByIdAndDelete(teamId)
    if (!team) {
      return res.status(404).json({ message: 'Team not found' })
    }
    return res.sendStatus(204)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}


// ! Optionals
// *Update team details (change team name/logo etc.) - working
// Method: PUT
// Path: '/myteam/:teamId/edit/details'
export const changeTeamDetails = async (req, res) => {
  console.log('Get single player')
  return res.status(200).json({message: 'Success'})
}

// *Update team (selection of players) - working
// Method: PUT
// Path: '/myteam/:teamId/swapplayers
export const makeTransfers = async (req, res) => {
  console.log('Get single player')
  return res.status(200).json({message: 'Success'})
}

// *Get all teams
// Method: GET
// Path: '/teams'
export const getAllTeams = async (req, res) => {
  try {    
    const allTeams = await Team.find()
    return res.status(200).json(allTeams)
  } catch (error) {
    console.log(error)
    return res.status(400).json(error)
  }
}