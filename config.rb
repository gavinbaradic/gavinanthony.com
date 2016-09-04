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
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
  activate :gzip
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

  def page_title
    current_article.data.title.downcase
  end

  def work_screens_root(client)
    "images/work/#{client}/screens/"
  end

  def work_get_screen_images(client)
    Dir.entries("source/#{work_screens_root(client)}").reject { |entry| entry == '.' || entry == '..' }.sort_by(&:to_i)
  end

  def work_image_tag(client, filename)
    image_tag "#{work_screens_root(client)}#{filename.sub(' ', '%20')}"
  end

  def work_get_title(filename)
    filename.gsub(/[^a-zA-Z. ]/, '').sub('.png', '').sub('.jpg', '').sub('.jpeg', '')
  end
end
