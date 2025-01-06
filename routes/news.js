//Code to fetch news from Currents API and render it on the index page
const express = require('express');
const router = express.Router();
const axios = require('axios');

// API Config
const API_KEY = 'UQ-tYAmb2OZdtQE3QdvVuDWopNoVVw5HgId_g_laVVZ_m9jf';
const API_URL = 'https://api.currentsapi.services/v1/latest-news';

// Routes
router.get('/', async (req, res) => {
    let type="Latest";
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    console.log("Current Date:", currentDate);
  try {
    
    const response = await axios.get(`${API_URL}?apiKey=${API_KEY}`);
    console.log(response.data)
    const articles = response.data.news;
    

    res.render('index', { articles, currentDate, type });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.render('index', { articles: [], currentDate, type });
  }
});

router.get('/World', async (req, res) => {
    type="World";
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  try {

    const response = await axios.get(`${API_URL}?category=world&apiKey=${API_KEY}`);
    console.log(response.data)
    const articles = response.data.news;
    

    res.render('index', { articles, currentDate, type });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.render('index', { articles: [], currentDate, type });
  }
});


router.get('/Technology', async (req, res) => {
    type="Technology";
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  try {

    const response = await axios.get(`${API_URL}?category=technology&apiKey=${API_KEY}`);
    console.log(response.data)
    const articles = response.data.news;
    

    res.render('index', { articles, currentDate, type });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.render('index', { articles: [], currentDate, type });
  }
});


router.get('/Business', async (req, res) => {
    type="Business";
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  try {

    const response = await axios.get(`${API_URL}?category=business&apiKey=${API_KEY}`);
    console.log(response.data)
    const articles = response.data.news;
    

    res.render('index', { articles, currentDate, type });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.render('index', { articles: [], currentDate, type });
  }
});



router.get('/Culture', async (req, res) => {
    type="Culture";
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  try {

    const response = await axios.get(`${API_URL}?category=culture&apiKey=${API_KEY}`);
    console.log(response.data)
    const articles = response.data.news;
    

    res.render('index', { articles, currentDate, type });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.render('index', { articles: [], currentDate, type });
  }
});



router.get('/Politics', async (req, res) => {
    type="Politics";
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  try {

    const response = await axios.get(`${API_URL}?category=politics&apiKey=${API_KEY}`);
    console.log(response.data)
    const articles = response.data.news;
    

    res.render('index', { articles, currentDate, type });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.render('index', { articles: [], currentDate, type });
  }
});



router.get('/Science', async (req, res) => {
    type="Science";
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  try {

    const response = await axios.get(`${API_URL}?category=science&apiKey=${API_KEY}`);
    console.log(response.data)
    const articles = response.data.news;
    

    res.render('index', { articles, currentDate, type });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.render('index', { articles: [], currentDate, type });
  }
});
router.get('/Health', async (req, res) => {
    type="Health";
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  try {

    const response = await axios.get(`${API_URL}?category=health&apiKey=${API_KEY}`);
    console.log(response.data)
    const articles = response.data.news;
    

    res.render('index', { articles, currentDate, type });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.render('index', { articles: [], currentDate, type });
  }
});

router.get('/Travel', async (req, res) => {
    type="Travel";
    const currentDate = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  try {

    const response = await axios.get(`${API_URL}?category=travel&apiKey=${API_KEY}`);
    console.log(response.data)
    const articles = response.data.news;
    

    res.render('index', { articles, currentDate, type });
  } catch (error) {
    console.error('Error fetching news:', error);
    res.render('index', { articles: [], currentDate, type });
  }
});


module.exports = router;
