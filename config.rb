page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

configure :development do
  activate :livereload
end

activate :deploy do |deploy|
  deploy.deploy_method = :rsync
  deploy.host   = '45.55.152.11'
  deploy.path   = '/var/www/gavinanthony.com/build'
  deploy.user  = 'gavin'
  deploy.clean = true # removes orphaned files on remote host, default: false
end

configure :build do
  # activate :minify_css
  # activate :minify_javascript
end
