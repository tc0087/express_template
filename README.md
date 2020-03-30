# Learnings

* Handlerbars is a common templating engine. It injects data into a static html file

* Run npm install express-handlebars

* Set the templating engine using the following code:

```
app.engine('hbs', hbs({layoutsDir: path.join(__dirname, 'views/layouts'), defaultLayout: 'main.hbs'}))
app.set('view engine', 'hbs')
app.set('views', 'views')
```

The first line registers the engine, names it 'hbs', specifies where to find layouts and states the default layout filename. The second line specifies the engine as the "view engine". The third line sets the directory or location of the views.

* The layout file can be written as:

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>{{ pageTitle }}</title>
</head>
<body>
	{{{ body }}}
</body>
</html>
```

NOTE: views are injected into the {{{ body }}}.

