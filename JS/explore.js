var liveChannelImg = [
    "../Images/explore/lc1.png",
    "../Images/explore/lc2.png",
    "../Images/explore/lc3.png",
    "../Images/explore/lc4.png",
    "../Images/explore/lc5.png",
    "../Images/explore/lc6.png",
    "../Images/explore/lc7.png",
    "../Images/explore/lc8.png",
    "../Images/explore/lc9.png",
    "../Images/explore/lc10.png",
    "../Images/explore/lc11.png",
]

for (let i = 0; i < 11; i++) {
    var box = document.createElement("div")
    var img = document.createElement("img")
    img.src = liveChannelImg[i]

    box.appendChild(img)

    document.getElementById('channelBox').appendChild(box)
}