require 'sinatra/base'
require 'time'
require 'json'
require 'pg'
class Server < Sinatra::Base
	get '/' do
		headers 'Access-Control-Allow-Origin' => '*'
		get_tem.to_json
	end

	post '/update' do
		headers 'Access-Control-Allow-Origin' => '*'
		store_tem(temp: params[:temp])
		redirect("/")
	end
	run! if app_file == $0

	def get_tem
		connection = PG.connect(dbname: 'thermostate')
		result = connection.exec("SELECT temp FROM states;")
		result[0]
	end

	def store_tem(temp:)
		connection = PG.connect(dbname: 'thermostate')
		resultt = connection.exec("TRUNCATE table states;")
		result = connection.exec("INSERT INTO states (temp) VALUES (#{temp});")
	end
end

