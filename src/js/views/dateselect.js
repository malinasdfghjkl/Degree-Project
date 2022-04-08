const DateSelect = (props) => {

    return (
        <html lang="en">

            <head>
                <title>FLYONE | Select flight</title>
                <link rel="stylesheet" href="../css/style.css" />
                <script type="" src="../js/main.js"></script>
            </head>

            <body>
                <div class="header">
                    <div style="flex:1;margin: 2vw;">Menu</div>
                    <div id="header-center"> <img style="height:10vh;" src="../icons-images/images/flyone-logo.png" /></div>
                    <div style="flex:1;margin: 2vw;">Login</div>
                </div>
                <div class="position: fixed; bottom:0px;">
                    Departure <img style="height: 1em;" src="../icons-images/svgs/start/flight-twoway-icon2.svg" /> Destination
                    <div
                        style="display: flex; flex-direction: row; justify-content: center; align-items: center; column-gap: 20px;">
                        <a style="flex:1;"><img /></a>
                        <div class="contbox" style="flex:2; height: 7vh;">earlier <br /> date</div>
                        <div class="contbox" style=" height: 10vh;color: #ffff;background-color: #283F94; flex:4;">DATE</div>
                        <div class="contbox" style="flex:2; height: 7vh;">later <br /> date</div>
                        <a style="flex:1;"><im /></a>
                    </div>

                    <div class="contbox" style="margin: 2%;">
                        <div style="display:flex; flex-direction: row; text-align:center; margin:10px;">
                            <div style="flex:2">
                                start
                                <img style="height: 1em;" src="../icons-images/svgs/start/flight-twoway-icon2.svg" />
                                dest
                            </div>
                            <div style="color: #0493DA; font-weight: bold; flex:1;">selected <br /> € </div>
                        </div>
                        <div style="display: flex; flex-direction: row; justify-content: center; padding: auto;">
                            <div id="innerbox">
                                <img style=" width:50%;" src="../icons-images/svgs/select flight/F1-133-01.svg" />
                                <div id="loyaltylvl"> STANDARD </div>
                                <div style="font-size:60%;"> No baggage</div>
                                <button class="button-light-blue" style="width:fit-content;"> € Price</button>
                            </div>
                            <div id="innerbox">
                                <img style="width:50%;" src="../icons-images/svgs/select flight/F1-133-02.svg" />
                                <div id="loyaltylvl">LOYAL</div>
                                <div style="font-size:60%;"> 20kg included</div>
                                <button class="button-light-blue" style="width:fit-content;"> € Price</button>
                            </div>
                            <div id="innerbox">
                                <img style="width:50%;" src="../icons-images/svgs/select flight/F1-133-03.svg" />
                                <div id="loyaltylvl"> ADVANTAGE </div>
                                <div style="font-size:60%;"> 10kg + 20kg included</div>
                                <button class="button-light-blue" style="width:fit-content;"> € Price</button>
                            </div>
                        </div>
                    </div>
                    <div class="contbox" style="margin: 2%;">
                        <img style="width:25%; align-self: center;padding-top: 5%;" src="../icons-images/svgs/select flight/F1-FareLock48h.svg" />
                        <h1>Lock Fare for 48 hours</h1>
                        <div>
                            Need more time to decide? <br />
                            With the Lock Fare service you can block the fare and we can hold for 48 hours up to 5 days before the flight.
                        </div>
                        <button class="button-light-blue"> Add € 6</button>
                    </div>
                    <div class="contbox" style="margin: 2%;">
                        <img style="width:25%; align-self: center;padding-top: 5%;" src="../icons-images/svgs/select flight/F1-133-Change-Flex.svg" />
                        <h1>Change Flex</h1>
                        <div>
                            Have your travel plans changed? <br />
                            Change the flight date without penalties up to 24 hours before the flight with the CHange Flex service.
                        </div>
                        <button class="button-light-blue"> Add € 30</button>
                    </div>
                    <div>

                    </div>
                </div>

                <div class="bottom-menu">
                    <div id="bottom-boxes" href="./start.html">Home</div>
                    <div id="bottom-boxes" href="./search.html">Book</div>
                    <div id="bottom-boxes">Bookings</div>
                    <div id="bottom-boxes">More</div>
                </div>


            </body>

        </html>);
}

export default DateSelect