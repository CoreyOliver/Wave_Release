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

[] mass edit dates for customer
    []  update WHERE cust and date are xxxxx

[] add confirmation for delete
    [] prompt for are you sure

[x] continue the request - created object for request.
    [x] created object
        [x] object received
        [x] set up for edit wave function in main.controller

clean up later:

[]add some checks to make sure you don't break the fetch missing data