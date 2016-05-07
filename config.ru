require 'middleman-core/load_paths'
::Middleman.setup_load_paths

require 'middleman-core'
require 'middleman-core/rack'

require 'fileutils'
FileUtils.mkdir('log') unless File.exist?('log')
::Middleman::Logger.singleton("log/#{ENV['RACK_ENV']}.log")

app = ::Middleman::Application.new

run ::Middleman::Rack.new(app).to_app


activate :deploy do |deploy|
  deploy.method = :rsync
  deploy.host   = '104.131.73.163'
  deploy.path   = '/home/rails/gavinanthony.com/build'
  deploy.user  = 'root'
  # Set deploy.port to define a port for the deploy server. Defaults to 22.
  deploy.clean = true # removes orphaned files on remote host, default: false
end

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end
