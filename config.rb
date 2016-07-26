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

helpers do
  def nav_active(path)
    current_page.url == path ? {:class => "active"} : {}
  end
end

activate :directory_indexes

activate :blog do |blog|
  blog.name       = "work"
  blog.prefix     = "work"
  blog.permalink  = "{title}"
  blog.layout     = "work"
end

activate :blog do |blog|
  blog.name       = "journal"
  blog.prefix     = "journal"
  blog.permalink  = "{title}"
  blog.layout     = "journal"
end

configure :build do
  activate :asset_hash
  activate :minify_css
  activate :minify_javascript
  activate :gzip
end
