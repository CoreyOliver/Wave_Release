Task:

[***] grid layout set up for entering in wave data
    [] organize by location
    [] organize by order type

[] send data to db to pull and visualize
    [x]SQL
        [1/2] table for wave data
            [x] ship date
            [x] unit count
            [] window
            [x] customer name
        [] Customer data
            [] tendering requirements
            [] d/c breakdown

[] reference data on calendar
    [] access to edit data on calendar
    [] permissions to adjust dates vs observe data


TO DO:


[] mass edit dates for customer
    []  update WHERE cust and date are xxxxx

[] add confirmation for delete
    [] prompt for are you sure


WIP:

[x] set up calendar
    [] create events using the loader function for each date
    []create more than one calendar for tendering and for shipping
        []allow a toggle to call out when the 'tender' is complete
    []webs?
        []shows number of units waved for historic data
    [] set up the loader data controller. the fetch works just need to pull the data

[x] remove ship and tender date
[]set up for component to add ship and tender dates in batch
    [] table in batch header to update whatever is chosen
        [] update dates to show
    [] set up batch edit function
        []add each date to form? 
            []select one date and apply it to as many as we want?


clean up later:


[] adjust the request to exclude shipping dates for after
    [] wave the goods and add shipping date once the whole order is complete instead of when we are waving it
[]prompt when attempting to update an order 
    [] mass update needs permissions?

completed:

[x] continue the request - created object for request.
    [x] created object
        [x] object received
        [x] set up for edit wave function in main.controller

[x] copy lines
    [x] add button to line with data
        [x] on click move the data to the open form 

[x]add some checks to make sure you don't break the fetch missing data

[x] adjust the date format for the POST request. Date format?
[x] add delete request by wave params
    [x] delete request set up
    [x] troubleshoot why it hasn't deleted
[x] add edit function to wave line
    [?] use state to add form when selected
        [x] add input for lines when clicked
        [] map out state within the wave function (line 26-35)
        [x] double click to change to an input vs the data?
        [x]add ternary for inputs
    [x] edit the whole line?
    [] add input to the line when state is altered
    [x] initialized the update function in wavetable
        [x] prop down to waveLine
[x] update print function

[x] finish update printed put function in controller
    [x] update that one line
        [x] update to !old value

[x] figure out why web wave is rendering extra cells from the wholesale wave component


[x] update wave add function past the console command