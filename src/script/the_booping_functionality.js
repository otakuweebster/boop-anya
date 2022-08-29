$(function () {

    const theBoopZone = $("#mainBoop");
    const anyaCrySound = new Audio("src/music/anya_cry.mp3");
    const anyaThudSound = new Audio("src/music/anya_thud.mp3");
    const bgSound = new Audio("src/music/Spy x Family Opening _ Official HIGE DANdism – Mixed Nuts (Instrumental).mp3");

    let thudcounter = 0;

    theBoopZone.on('mousedown touchstart', function ()
    {
        if (thudcounter === 0)
        {
            thudcounter++;
            bgSound.loop = true;
            bgSound.volume = 0.1;
            bgSound.play();
        }

        else
        {
            if (thudcounter >= 1)
            {

            }
        }

        $(this).attr('src', 'src/img/boop2.png');
        anyaCrySound.play();

    }).on('mouseup touchend', function () {
        $(this).attr('src', 'src/img/boop1.png');
        anyaThudSound.play();
    });
});