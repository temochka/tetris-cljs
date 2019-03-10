lock '3.7.1'

set :deploy_to, '/srv/www/tetris.temochka.com'
set :keep_releases, 5
set :repo_url, 'target/public'
set :tarball_exclude, %w(index-dev.html cljs-out/)

namespace :deploy do
  task :build_clean do
    run_locally do
      execute :rm, '-rf', 'target'
    end
  end

  task build: :build_clean do
    run_locally do
      execute :clj, '-Abuild'
      execute :cp, '-r', 'resources/public/*', fetch(:repo_url)
    end
  end

  before :starting, :build
end
