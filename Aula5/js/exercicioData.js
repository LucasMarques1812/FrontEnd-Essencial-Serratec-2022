     let hora = new Date().getHours();
        hora = 15;

        if (hora < 12) {
            alert("BOM DIA!")
        } else if (hora >= 12 && hora < 18) {
            alert("BOA TARDE")
        } else {
            alert("BOA NOITE")
        }