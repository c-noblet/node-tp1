const helloWorld = (req, res) => {
  res.json({
    message: 'Hello World!'
  });
}

const message = (req, res) => {
  if (req.query.message && req.query.message.length <= 20) {
    res.json({
      message: req.query.message
    });
  } else {
    res.status(400).json({
      message: 'Bad Request'
    });
  }
}

const infosHeader = (req, res) => {
  res.json(req.headers);
}

const user = (req, res) => {
  console.log(req.body);
  const firstname = req.body.firstname;
  const birthdate = req.body.birthdate;
  const age = new Date().getFullYear() - parseInt(birthdate.split('/')[2]);
  if (age >= 18) {
    res.json({
      message: `Welcome ${firstname}`
    });
  } else if (age < 18) {
    res.status(403).json({
      message: 'Forbidden'
    })
  } else {
    res.status(400).json({
      message: 'Bad Request'
    });
  }
}

const rickRoll = (req, res) => {
  res.redirect('https://youtu.be/dQw4w9WgXcQ')
}

const customHeader = (req, res) => {
  res.set('Message', 'Hello World !')
  res.send();
}

getParams = (req, res) => {
  res.json({
    id: req.params.id,
    key: req.params.key,
    slug: req.params.slug
  });
}

module.exports = {
  helloWorld,
  message,
  infosHeader,
  user,
  rickRoll,
  customHeader,
  getParams
}
