require 'colorize'

task default: :lint

desc 'Lint ruby, haml, and scss'
task lint: ['lint:ruby', 'lint:haml', 'lint:scss', 'lint:javascript']

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

  desc 'Run eslint'
  task :javascript do
    sh 'eslint --ext .es6, .js source/javascripts/*'
    puts 'eslint passed'.green
  end
end

namespace :deploy do
  desc 'Deploy to netlify'
  task :production do
    Rake::Task['lint'].invoke
    sh 'bundle exec middleman build'
    sh 'netlify deploy'
    puts 'Deployment was successful'.green
  end
end
