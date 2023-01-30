const router = require('express').Router();
const path = require('path')
const fs = require('fs')
const uuid = require('uniqid');
const db = require('../db/db.json')

module.exports = (app) => {

  app.get('./public/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'))
  })

  app.post('./public/notes', (req, res) => {
    res.json(fs.readFileSync('db/db.json'))

    const note = {
      title: req.body.title, 
      text: req.body.text,
      id: uuid(),
    }
      res.json(fs.readFileSync('db/db.json')).push(note);
      fs.writeFileSync('db/db.json', JSON.stringify(res.json(fs.readFileSync('db/db.json'))));
      res.json(res.json(fs.readFileSync('db/db.json')));
    
  });

  app.delete('./public/notes', (req, res) => {
    const database = JSON.parse(fs.readFileSync('db/db.json'));
    const deleteNote = database.filter(item => item.id !== req.params.id);

    fs.writeFileSync('db/db.json', JSON.stringify(deleteNote))
    res.json(deleteNote)
  })

};