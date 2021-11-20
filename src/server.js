const express = require("express");
const server = express();
const multer = require("multer");

const db = require("./db/db");

//abilitar o uso do req.body na aplicacao

server.use(express.urlencoded({ extended: true }));

//configuration public folder
server.use(express.static("public"));

//Configurando um storage no multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// utilisando template engine
const nunjucks = require("nunjucks");
nunjucks.configure("src/views", {
  express: server,
  noCache: true,
});

//configurar caminhos na aplicacao

//pagina inicial

server.get("/", (req, res) => {
  db.all(`SELECT * FROM watch `, function (err, rows) {
    if (err) {
      return console.log(err);
    }

    return res.render("home.html");
  });
});

server.get("/watchs", function (req, res) {
  //pegar os dados do banco e dados
  db.all(`SELECT * FROM watch ORDER BY id DESC `, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    console.log("Aqui estao seus registros: ");
    console.log(rows);
    return res.render("watchs.html", { watchs: rows });
  });
});

server.post("/savewatchs", upload.single("watchs"), (req, res) => {
  const query = `
    INSERT INTO watch (
        image,
        name,
        price
        )VALUES(
            ?,?,?
            )
            `;

  const value = [
    (req.body.image = `${"uploads/"}${req.file.filename}`),
    req.body.name,
    req.body.price,
  ];

  function afterInsertDataWatch(err) {
    if (err) {
      console.log(err);
      return res.send("Erro no cadastro !");
    }
    console.log("Cadastrado com sucesso");
    console.log(this);

    console.log(req.body, req.file);

    return res.render("registration.html", { saved: true });
  }

  db.run(query, value, afterInsertDataWatch);
});

server.get("/wallets", function (req, res) {
  db.all(`SELECT * FROM wallet`, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    console.log("Aqui estao seus registros: ");
    console.log(rows);
    return res.render("wallets.html", { wallets: rows });
  });
});

server.post("/savewallets", upload.single("wallets"), (req, res) => {
  const query = `
        INSERT INTO wallet (
            image,
            name,
            price
        )VALUES(
            ?,?,?
        )
    `;

  const value = [
    (req.body.image = `${"uploads/"}${req.file.filename}`),
    req.body.name,
    req.body.price,
  ];

  function afterInsertDataWallet(err) {
    if (err) {
      console.log(err);
      return res.send("Erro no cadastro !");
    }
    console.log("Cadastrado com sucesso");
    console.log(this);

    return res.render("registration.html", { saved: true });
  }

  db.run(query, value, afterInsertDataWallet);
});

server.get("/perfumes", function (req, res) {
  db.all(`SELECT * FROM perfume`, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    console.log("Aqui estao seus registros: ");
    console.log(rows);
    return res.render("perfumes.html", { perfumes: rows });
  });
});

server.post("/saveperfumes", upload.single("perfumes"), (req, res) => {
  const query = `
        INSERT INTO perfume(
            image,
            name,
            price
        )VALUES(
            ?,?,?
        )
    `;

  const value = [
   (req.body.image = `${"uploads/"}${req.file.filename}`),
    req.body.name,
    req.body.price,
  ];

  function afterInsertDataPerfume(err) {
    if (err) {
      console.log(err);
      return res.send("Erro no cadastro !");
    }
    console.log("Cadastrado com sucesso");
    console.log(this);

    return res.render("registration.html", { saved: true });
  }

  db.run(query, value, afterInsertDataPerfume);
});



server.get('/settings', function (req, res){
  db.all(`SELECT * FROM watch ORDER BY id DESC `, function (err, rows) {
    if (err) {
      return console.log(err);
    }
    console.log("Aqui estao seus registros: ");
    console.log(rows);
    return res.render("settings.html", { watchs: rows });
  });
  
})

server.post('/del-cards',(req, res)=>{
    destroy({_id: req.body.id}).then(()=>{
    req.flash('sucess_msg','Card deletado com sucesso!')
    res.redirect('/settings')
  }).catch((err)=>{
    req.flash('error_msg', 'Houve um erro ao deletar o card')
    res.redirect('/settings')
  })
})


server.get('/forms', function (req, res){
    return res.render('forms.html')
})


//ligar servidor

server.listen(3000);
