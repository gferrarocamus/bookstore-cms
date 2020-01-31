# Bookstore CMS

This app is a CMS for an electronic bookstore built with Ruby on Rails and React/Redux.

It is meant as a proof of concept single-repo application connecting a [bookstore](https://github.com/gferrarocamus/bookstore) client app with a custom Ruby on Rails API using Webpacker.

## Features

- Add and remove books from your collection.

## Future Features

- Functionality to edit, comment, and update reading progress on books.

## Installation

In order to run the site, you need to have
[Ruby on Rails](https://guides.rubyonrails.org/v5.0/getting_started.html#installing-rails), [Node.js](https://nodejs.org/), and [Yarn](https://yarnpkg.com/)
installed. Then you can clone this repository and install the necessary gems:

```
$ bundle install --without production
```

Next, install the necessary packages with Yarn:

```
$ yarn install
```

Create, migrate, and seed the database:

```
$ rails db:create db:migrate db:seed
```

Build the client app:

```
$ ./bin/webpack
```
You can optionally run `./bin/webpack-dev-server` and keep in a separate terminal to have any changes built automatically.

Finally, fire up a local server:

```
$ rails server
```

## Contributors

* [Giuliana Ferraro](https://github.com/gferrarocamus)
* [Zeha Irawan](https://github.com/JangkarBumi)

---

![Bookstore CMS Demo](/wiki/bookstore-cms-demo.png)
