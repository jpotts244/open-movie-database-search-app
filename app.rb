require 'sinatra'
require 'json'

get '/' do
  File.read('./views/index.html')
end

get '/favorites' do
  response.header['Content-Type'] = 'application/json'
  File.read('data.json')
end

post '/favorites' do
  file = JSON.parse(File.read('data.json'))

  # additional check to ensure request comes through to the sinatra app correctly
  if request.body.size > 0
    params = JSON.parse(request.body.read, symbolize_names: true)
  end

  unless params[:title] && params[:oid]
    return 'Invalid Request'
  end

  # changed name: to title: to keep it consistent with the client side code
  movie = { title: params[:title], oid: params[:oid] }
  file << movie
  File.write('data.json',JSON.pretty_generate(file))
  movie.to_json
end
