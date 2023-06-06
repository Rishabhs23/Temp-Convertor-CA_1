const calculateTemp = () => {
    const inTemp = document.getElementById('temp').value;
    const selectType = document.getElementById('temp_From_Type');
    const outTemp = document.getElementById('temp_To_Type');
    var fromValue = temp_From_Type.options[selectType.selectedIndex].value;
    var toValue = temp_To_Type.options[outTemp.selectedIndex].value;

    const celToFah = (cel) => {
        let c = ((cel * 9 / 5) + 32).toFixed(2);
        return c;
    }
    const celToKel = (cel) => {
        let k = (Number(cel) + 273.15).toFixed(2);
        return k;
        
    }
    const fahToCel = (fah) => {
        let c = ((fah - 32) * 5 / 9).toFixed(2);
        return c;
    }
    const fahToKel = (fah) => {
        let k = ((fah - 32) * 5 / 9 + 273.15).toFixed(2);
        return k;
    }
    const kelToCel = (kel) => {
        let c = (kel - 273.15).toFixed(2);
        return c;
    }
    const kelToFah = (kel) => {
        let f = ((kel - 273.15) * 9 / 5 + 32).toFixed(2);
        return f;
    }

    function result1(type) {
        document.getElementById("result").innerHTML =
        `<h4>${inTemp}&#176 ${fromValue} = <br>
        <h1 class="active"> ${type}&#176 ${toValue}`;
    }

    if (fromValue == toValue) {
        alert("Conversion Units must be Different");
    }
    else if (fromValue == 'Celsius' && toValue == 'Fahrenheit') {
        result1(celToFah(inTemp));
    }
    else if (fromValue == 'Celsius' && toValue == 'Kelvin') {
        result1(celToKel(inTemp));
    }
    else if (fromValue == 'Fahrenheit' && toValue == 'Celsius'){
        result1(fahToCel(inTemp));
    }
    else if (fromValue == 'Fahrenheit' && toValue == 'Kelvin'){
        result1(fahToKel(inTemp));
    }
    else if(fromValue == 'Kelvin' && toValue == 'Celsius') {
        result1(kelToCel(inTemp));
    }
    else if(fromValue == 'Kelvin' && toValue == 'Fahrenheit') {
        result1(kelToFah(inTemp));
    }
}

var d1, i, j, l, l2, chooseElement, m1, m2, m3;
d1 = document.getElementsByClassName("dropdown_container");
l = d1.length;
for (i = 0; i < l; i++) {
  chooseElement = d1[i].getElementsByTagName("select")[0];
  l2 = chooseElement.length;
  m1 = document.createElement("DIV");
  m1.setAttribute("class", "select-selected");
  m1.innerHTML = chooseElement.options[chooseElement.selectedIndex].innerHTML;
  d1[i].appendChild(m1);
  m2 = document.createElement("DIV");
  m2.setAttribute("class", "get_Elements hide_Elements");
  for (j = 1; j < l2; j++) {
    m3 = document.createElement("DIV");
    m3.innerHTML = chooseElement.options[j].innerHTML;
    m3.addEventListener("click", function(e) {
        var r, i, k, s, h, s1, s2;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        s1 = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < s1; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            r = this.parentNode.getElementsByClassName("same-as-selected");
            s2 = r.length;
            for (k = 0; k < s2; k++) {
              r[k].removeAttribute("class");
            }
            this.setAttribute("class", "same-as-selected");
            break;
          }
        }
        h.click();
    });
    m2.appendChild(m3);
  }
  d1[i].appendChild(m2);
  m1.addEventListener("click", function(e) {
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("hide_Elements");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  var d1, y, i, s1, s2, Element = [];
  d1 = document.getElementsByClassName("get_Elements");
  y = document.getElementsByClassName("select-selected");
  s1 = d1.length;
  s2 = y.length;
  for (i = 0; i < s2; i++) {
    if (elmnt == y[i]) {
      Element.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < s1; i++) {
    if (Element.indexOf(i)) {
      d1[i].classList.add("hide_Elements");
    }
  }
}
document.addEventListener("click", closeAllSelect);