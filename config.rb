activate :directory_indexes

configure :development do
  activate :livereload
end

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false

activate :blog do |blog|
  blog.name       = 'work'
  blog.prefix     = 'work'
  blog.permalink  = '{title}'
  blog.layout     = 'work'
  blog.paginate   = true
end

configure :build do
  activate :asset_hash
  activate :minify_css
  activate :minify_javascript
  activate :gzip
end

case ENV['TARGET'].to_s.downcase
when 'production'
  activate :deploy do |deploy|
    deploy.deploy_method = :rsync
    deploy.host   = '45.55.152.11'
    deploy.path   = '/var/www/gavinanthony.com/build'
    deploy.user  = 'gavin'
    deploy.clean = true # removes orphaned files on remote host, default: false
  end
end

helpers do
  def nav_active(path)
    current_page.url == path ? { class: 'active' } : {}
  end

  def work_slug(client)
    internal_url = '/work/' + client.title.downcase
    client.url = client.external.nil? ? internal_url : client.link
    client.target = client.external.nil? ? {} : { target: '_blank' }
    link_to client.title, client.url, client.target
  end

  def pages_by_category(category)
    sitemap.resources.select do |resource|
      resource.data.selected == category
    end.sort_by(&:date).reverse
  end

  def clean_url(url)
    link_to url.sub(%r{https?://}, '').sub(/^www./, ''), url
  end
end
