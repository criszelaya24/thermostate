feature 'Visiting page' do
	scenario 'Expecting welcome message' do
		visit('/')
		expect(page).to have_content ('Welcome to Thermostate!')
	end
end