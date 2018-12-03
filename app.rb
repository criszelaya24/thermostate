require 'sinatra/base'
require 'time'
require 'json'
class Server < Sinatra::Base
	get '/' do
		headers 'Access-Control-Allow-Origin' => '*'
		{time: Time.now.to_s}.to_json
	end
	run! if app_file == $0
end

