function Ranges(){
    rangeValue = document.getElementById("AtvSeb")
    box = document.getElementById("TextInput")
    box.value = rangeValue.value
}

function Szamol(){
    capacitySelect = document.getElementById("Capacity").value
    capacity = document.getElementById("Kapacitas").value
    speed = document.getElementById("Speed").value
    rangeValue = document.getElementById("AtvSeb").value
    solution = document.getElementById("sec")

    if(capacitySelect != "MB"){
        if(capacitySelect == "GB"){
            capacity = capacity * 1000
        }
        if(capacitySelect == "TB"){
            capacity = capacity * Math.pow(1000,2)
        }
    }
    if(speed != "MBps"){
        if(speed == "GBps"){
            rangeValue =  rangeValue * 1000
        }
        if(speed == "KBps"){
            rangeValue =  rangeValue / 1000
        }
        if(speed == "Mbps"){
            rangeValue = rangeValue / 8
        }
    }
    solution.value = (capacity / rangeValue)
}
