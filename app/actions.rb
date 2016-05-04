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

get '/search' do
  @contact = Contact.where('firstname LIKE ?', params[:search])
  @contact.to_json
end