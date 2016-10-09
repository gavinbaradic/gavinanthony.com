# gavinanthony.com
Middleman site for [gavinanthony.com](http://gavinanthony.com). Feel free to clone this repo and check out the site.

### Built With
- Ruby 2.3.1
- Middleman

### Installing
- `bundle install` to install required gems
- `middleman server` to preview `source` folder at [localhost:4567](http://localhost:4567)
- `rake lint` to run rubocop, haml-lint, and scss-lint

### Deploying
Netlify is used for deployment. Must have the Netlify CLI installed and be authenticated.
To deploy to gavinanthony.com, run `rake deploy:production`. In order to build the site, all linter tasks must succeed.

# Old Versions
I've saved some of my old personal sites and have organized them in branches by the year they were live.
- [2015](https://github.com/gavinanthony/gavinanthony.com/tree/2015)
- [2014](https://github.com/gavinanthony/gavinanthony.com/tree/2014)
- [2013](https://github.com/gavinanthony/gavinanthony.com/tree/2013)
