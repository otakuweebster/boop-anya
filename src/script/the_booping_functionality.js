$(function () {

    const theBoopZone = $("#mainBoop");
    const anyaCrySound = new Audio("src/music/anya_cry.mp3");
    const anyaThudSound = new Audio("src/music/anya_thud.mp3");
    const bgSound = new Audio("src/music/Spy x Family Opening _ Official HIGE DANdism – Mixed Nuts (Instrumental).mp3");
    const pointer = $("#pointer");

    /**
     * Allows image to be already preloaded.
     * @type {HTMLImageElement}
     */
    const boop1 = new Image();
    const boop2 = new Image();
    boop1.src = "src/img/boop1.png";
    boop2.src = "src/img/boop2.png";
    theBoopZone.attr('src', boop1.src);
    
    let thudcounter = 0;

    /**
     * This method basically allows the pointer image to follow the now-hidden cursor
     */
    $(this).on('mousemove', function (x) {
        pointer.css({
            left: x.pageX + 5,
            top: x.pageY + 5
        });
    })

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
                /**
                 * Basically this doesnt allows thudcounter to go up more.
                 */
            }
        }

        $(this).attr('src', boop2.src);
        anyaCrySound.play();
        pointer.attr('src', 'src/img/pointer_clicked.png');

    }).on('mouseup touchend', function () {
        $(this).attr('src', boop1.src);
        anyaThudSound.play();
        pointer.attr('src', 'src/img/pointer_not_clicked.png');
    });
});