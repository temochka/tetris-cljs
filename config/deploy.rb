lock '3.7.1'

set :deploy_to, '/srv/www/tetris.temochka.com'
set :keep_releases, 5
set :repo_url, 'resources/public'
set :tarball_exclude, %w(index-dev.html js-dev/)

namespace :deploy do
  task :build_clean do
    run_locally do
      execute :lein, 'clean'
    end
  end

  task build: :build_clean do
    run_locally do
      execute :lein, 'cljsbuild once prod'
    end
  end

  before :starting, :build
end
