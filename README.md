# Patricia Narbon - Online Shop

Online shop created with React and Node

[shop.narbonpatricia.com](https://www.shop.narbonpatricia.com)

## Features

- Sign-in with email or Google
- Database accessed through a Google spreadsheet as GUI
- Stripe payments
- Animated transitions between lazy-loaded routes (pre-loaded)
- Customizable products
- Conditional shipping costs
- Infinite scroll
- PWA-optimized; responsive; cross-browser (except IE)

## Tech

- Create-react-app
- Redux, Saga, Persist, Reselect, Router, Transition-group, Styled-components
- Stripe, Firebase (auth & database), Tabletop, Node + Express, Heroku
- Jest + Enzyme

## Launch

### Run locally

```
$ npm run dev
```

### Deploy

```
$ heroku create <project_name>
$ heroku config:set KEY=<your_stripe_secret_key>
$ git push heroku master
```

If reusing for another project:

- Personalize Stripe keys, Firebase config, and Google spreadsheet URL
- Uncomment EnforceHTTPS in `server.js`, unless using a custom domain name with a conflicting SSL cert.

## Acknowledgments

Created after completing [Complete React Developer in 2020](https://www.udemy.com/course/complete-react-developer-zero-to-mastery/) on Udemy
