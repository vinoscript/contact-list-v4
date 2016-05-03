# Homepage (Root path)
get '/' do
  erb :index
end

get '/contacts' do
  Contact.all.to_json
end

post '/contacts' do
  Contact.create(firstname: params[:firstname], lastname: params[:lastname], email: params[:email])
end