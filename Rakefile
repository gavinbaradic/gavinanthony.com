require 'colorize'

desc 'Lint ruby, haml, and scss'
task lint: ['lint:ruby', 'lint:haml', 'lint:scss']

namespace :lint do
  desc 'Run rubocop'
  task :ruby do
    sh 'rubocop .'
    puts 'rubocop passed'.green
  end

  desc 'Run haml-lint'
  task :haml do
    sh 'haml-lint .'
    puts 'haml-lint passed'.green
  end

  desc 'Run scss-lint'
  task :scss do
    sh 'scss-lint source/stylesheets/*'
    puts 'scss-lint passed'.green
  end
end

namespace :deploy do
  def deploy(env)
    puts "Deploying to #{env}"
    system "TARGET=#{env} bundle exec middleman deploy"
  end

  task :production do
    deploy :production
  end
end
