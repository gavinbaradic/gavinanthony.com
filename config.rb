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
  def is_page_active(page)
    current_page.url == page ? {:class => 'active'} : {}
  end
end

activate :directory_indexes

activate :blog do |journal|
  journal.prefix = "journal"
  journal.permalink = "{title}"
  journal.layout = "blog"
end

configure :build do
  activate :asset_hash
  activate :minify_css
  activate :minify_javascript
  activate :gzip
end

data.work.clients.each do |client|
  slug = client.name.delete(' ').downcase
  proxy "/work/#{slug}/index.html", "/projects.html", :locals => { :client => client }, :ignore => true
end
